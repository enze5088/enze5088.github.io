<template><div><h1 id="understanding-bigbird-s-block-sparse-attention" tabindex="-1"><a class="header-anchor" href="#understanding-bigbird-s-block-sparse-attention" aria-hidden="true">#</a> Understanding BigBird's Block Sparse Attention</h1>
<h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1>
<p>于Transformer的模型已被证明对许多NLP任务非常有用。然而，基于transformers的模型的一个主要限制是其O（n^2）O（n 2）时间和内存复杂性（其中nn是序列长度）。因此，在长序列n&gt;512n&gt;512上应用基于变压器的模型在计算上非常昂贵。最近的几篇论文，例如Longformer、Performer、Reformer、Clustered attention，试图通过近似全注意矩阵来解决这个问题。你可以结账🤗'如果你对这些模型不熟悉，我们将在最近发布一篇博文。</p>
<p>BigBird（本文中介绍）就是解决这个问题的最新模型之一。BigBird依赖于块稀疏注意而不是正常注意（即BERT的注意），可以以比BERT低得多的计算成本处理长度达4096的序列。它已经在涉及很长序列的各种任务上实现了SOTA，例如长文档摘要、长上下文问答。</p>
<p>BigBird-RoBERTa-like型号现在有售🤗变形金刚。这篇文章的目的是让读者对BigBird的实现有一个深入的了解，并在使用BigBird和🤗变形金刚。但是，在深入研究之前，重要的是要记住，大鸟的注意力是伯特全神贯注的近似值，因此不会努力比伯特的全神贯注更好，而是更有效。它只允许将基于变压器的模型应用于更长的序列，因为伯特的二次内存需求很快变得难以忍受。简单地说，如果我们∞ 计算&amp;\infty∞ 时间，伯特的注意力会比块稀疏注意力（我们将在这篇文章中讨论）更受欢迎。
如果你想知道为什么我们在处理更长的序列时需要更多的计算，这篇博文正适合你！</p>
<p>在这篇博文中，我们将尝试回答这些问题。</p>
<h3 id="应该注意哪些令牌" tabindex="-1"><a class="header-anchor" href="#应该注意哪些令牌" aria-hidden="true">#</a> 应该注意哪些令牌？</h3>
<p>我们将通过考虑“BigBird is now available in HuggingFace for extractive question answering”这个句子来给出一个注意力如何工作的实际例子。在<code v-pre>BERT</code>-like attention 中，每个单词都会简单地关注所有其他标记。从数学上讲，这意味着每个查询的令牌queried token \text{query-token} \in {\text{BigBird},\text{is},\text{now},\text{available},\text{in},\text{HuggingFace},\text{for},\text{extractive},\text{question},\text{answering}}query-token∈{BigBird,is,now,available,in,HuggingFace,for,extractive,question,answering}查询令牌∈{大鸟，是，现在，可用，在,拥抱脸，对于,提取物,问题，回答}, 将参加完整的列表\text{key-tokens} = \left[\text{BigBird},\text{is},\text{now},\text{available},\text{in},\text{HuggingFace},\text{ for},\text{extractive},\text{question},\text{answering} \right]密钥令牌=[大鸟，是，现在，可用，在,拥抱脸，对于,提取物,问题，回答].</p>
<p>让我们考虑一个明智的关键令牌选择，查询令牌实际上只应该通过编写一些伪代码来处理。Will 将假设令牌<code v-pre>available</code>已被查询，并构建一个合理的关键令牌列表以进行处理。</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">>></span><span class="token operator">></span> <span class="token comment"># let's consider following sentence as an example</span>
<span class="token operator">>></span><span class="token operator">></span> example <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'BigBird'</span><span class="token punctuation">,</span> <span class="token string">'is'</span><span class="token punctuation">,</span> <span class="token string">'now'</span><span class="token punctuation">,</span> <span class="token string">'available'</span><span class="token punctuation">,</span> <span class="token string">'in'</span><span class="token punctuation">,</span> <span class="token string">'HuggingFace'</span><span class="token punctuation">,</span> <span class="token string">'for'</span><span class="token punctuation">,</span> <span class="token string">'extractive'</span><span class="token punctuation">,</span> <span class="token string">'question'</span><span class="token punctuation">,</span> <span class="token string">'answering'</span><span class="token punctuation">]</span>

<span class="token operator">>></span><span class="token operator">></span> <span class="token comment"># further let's assume, we're trying to understand the representation of 'available' i.e. </span>
<span class="token operator">>></span><span class="token operator">></span> query_token <span class="token operator">=</span> <span class="token string">'available'</span>

<span class="token operator">>></span><span class="token operator">></span> <span class="token comment"># We will initialize an empty `set` and fill up the tokens of our interest as we proceed in this section.</span>
<span class="token operator">>></span><span class="token operator">></span> key_tokens <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment"># => currently 'available' token doesn't have anything to attend</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>附近的标记应该很重要，因为在一个句子（单词序列）中，当前单词高度依赖于相邻的过去和未来的标记。这种直觉是概念背后的想法<code v-pre>sliding attention</code>。</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">>></span><span class="token operator">></span> <span class="token comment"># considering `window_size = 3`, we will consider 1 token to left &amp; 1 to right of 'available'</span>
<span class="token operator">>></span><span class="token operator">></span> <span class="token comment"># left token: 'now' ; right token: 'in'</span>
<span class="token operator">>></span><span class="token operator">></span> sliding_tokens <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"now"</span><span class="token punctuation">,</span> <span class="token string">"available"</span><span class="token punctuation">,</span> <span class="token string">"in"</span><span class="token punctuation">]</span>

<span class="token operator">>></span><span class="token operator">></span> <span class="token comment"># let's update our collection with the above tokens</span>
<span class="token operator">>></span><span class="token operator">></span> key_tokens<span class="token punctuation">.</span>append<span class="token punctuation">(</span>sliding_tokens<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**长期依赖关系：**对于某些任务，捕获令牌之间的长期关系至关重要。<em>例如</em>，在“问答”中，模型需要将上下文的每个标记与整个问题进行比较，以便能够确定上下文的哪个部分对正确答案有用。如果大多数上下文标记只关注其他上下文标记，而不关注问题，那么模型从不太重要的上下文标记中过滤出重要的上下文标记变得更加困难。</p>
<p>现在，<code v-pre>BigBird</code>提出了两种在保持计算效率的同时允许长期注意力依赖的方法。</p>
<ul>
<li>**全局代币：*<em>引入一些代币，这些代币将参与每个代币，并由每个代币参与。例如：<em>“HuggingFace 正在为简单的 NLP 构建不错的库”</em>。现在，假设</em>“building”<em>被定义为全局标记，并且模型需要知道某些任务的</em>“NLP”<em>和</em>“HuggingFace”<em>之间的关系（注意：这两个标记处于两个极端）；现在让所有其他令牌在全球范围内参与</em>“建筑”<em>可能会帮助模型将</em>“NLP”<em>与</em>“HuggingFace”*相关联。</li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">>></span><span class="token operator">></span> <span class="token comment"># let's assume 1st &amp; last token to be `global`, then</span>
<span class="token operator">>></span><span class="token operator">></span> global_tokens <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"BigBird"</span><span class="token punctuation">,</span> <span class="token string">"answering"</span><span class="token punctuation">]</span>

<span class="token operator">>></span><span class="token operator">></span> <span class="token comment"># fill up global tokens in our key tokens collection</span>
<span class="token operator">>></span><span class="token operator">></span> key_tokens<span class="token punctuation">.</span>append<span class="token punctuation">(</span>global_tokens<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>随机代币：随机</strong>选择一些代币，通过转移到其他代币来传递信息，而其他代币又可以转移到其他代币。这可以降低从一个令牌到另一个令牌的信息传输成本。</li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">>></span><span class="token operator">></span> <span class="token comment"># now we can choose `r` token randomly from our example sentence</span>
<span class="token operator">>></span><span class="token operator">></span> <span class="token comment"># let's choose 'is' assuming `r=1`</span>
<span class="token operator">>></span><span class="token operator">></span> random_tokens <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"is"</span><span class="token punctuation">]</span> <span class="token comment"># Note: it is chosen compleletly randomly; so it can be anything else also.</span>

<span class="token operator">>></span><span class="token operator">></span> <span class="token comment"># fill random tokens to our collection</span>
<span class="token operator">>></span><span class="token operator">></span> key_tokens<span class="token punctuation">.</span>append<span class="token punctuation">(</span>random_tokens<span class="token punctuation">)</span>

<span class="token operator">>></span><span class="token operator">></span> <span class="token comment"># it's time to see what tokens are in our `key_tokens` list</span>
<span class="token operator">>></span><span class="token operator">></span> key_tokens
<span class="token punctuation">{</span><span class="token string">'now'</span><span class="token punctuation">,</span> <span class="token string">'is'</span><span class="token punctuation">,</span> <span class="token string">'in'</span><span class="token punctuation">,</span> <span class="token string">'answering'</span><span class="token punctuation">,</span> <span class="token string">'available'</span><span class="token punctuation">,</span> <span class="token string">'BigBird'</span><span class="token punctuation">}</span>

<span class="token comment"># Now, 'available' (query we choose in our 1st step) will attend only these tokens instead of attending the complete sequence</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，查询标记只关注所有可能标记的子集，同时产生一个很好的全注意力近似值。 相同的方法将用于所有其他查询的令牌。 但请记住，这里的重点是尽可能有效地逼近 BERT 的全部注意力。 像对 BERT 所做的那样，简单地让每个查询的令牌出现在所有关键令牌上，就可以非常有效地计算为现代硬件（如 GPU）上的矩阵乘法序列。 然而，滑动、全局和随机注意力的组合似乎意味着稀疏矩阵乘法，这在现代硬件上更难有效实现。  BigBird 的主要贡献之一是提出了一种块稀疏注意机制，该机制允许有效地计算滑动、全局和随机注意。 让我们来看看吧！</p>
<h3 id="使用-graphs-了解对全局、滑动、随机键的需求" tabindex="-1"><a class="header-anchor" href="#使用-graphs-了解对全局、滑动、随机键的需求" aria-hidden="true">#</a> 使用 Graphs 了解对全局、滑动、随机键的需求</h3>
<p>首先，让我们使用图更好地理解<code v-pre>global</code>, <code v-pre>sliding</code>&amp; <code v-pre>random</code>attention 并尝试理解这三种注意力机制的组合如何产生非常好的标准<code v-pre>Bert-like</code>注意力近似。</p>
<p><img src="article-7.assets/global.png" alt="img" loading="lazy"></p>
<p><img src="article-7.assets/sliding.png" alt="img" loading="lazy"></p>
</div></template>


