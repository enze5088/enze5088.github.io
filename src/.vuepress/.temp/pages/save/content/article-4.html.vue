<template><div><h1 id="transformer面经总结" tabindex="-1"><a class="header-anchor" href="#transformer面经总结" aria-hidden="true">#</a> Transformer面经总结</h1>
<h2 id="高频提问" tabindex="-1"><a class="header-anchor" href="#高频提问" aria-hidden="true">#</a> 高频提问</h2>
<ol>
<li>
<p>介绍一下Transformer的原理。</p>
<p><strong>延伸提问</strong></p>
<ol>
<li>Encoder中的Feed Forward的结构是如何的?使用了什么激活函数？相关优缺点？</li>
<li>讲一下Transformer中的残差结构以及意义？</li>
<li>Encoder端和Decoder端是如何进行交互的？</li>
<li>Transformer为什么用+不用concat？</li>
<li>wordpiece的作用是什么，简单描述一下wordpiece model 和 byte pair encoding？</li>
</ol>
</li>
<li>
<p>Transformer为什么可以并行？</p>
<p><strong>延伸提问</strong></p>
<ol>
<li>Decoder端可以做并行化吗？</li>
<li>LSTM时间复杂度如何计算，Transformer 时间复杂度如何计算？</li>
</ol>
</li>
<li>
<p>Transformer的position embedding和BERT的position embedding的区别？</p>
<p><strong>延伸提问</strong></p>
<ol>
<li>你还了解哪些关于位置编码的技术，各自的优缺点是什么？</li>
</ol>
</li>
<li>
<p>Transformer里面LayerNorm的作用？</p>
<p><strong>延伸提问</strong></p>
<ol>
<li>为什么transformer块使用LayerNorm而不是BatchNorm？</li>
<li>LayerNorm 在Transformer的位置是哪里？</li>
<li>简答讲一下BatchNorm技术，以及它的优缺点。</li>
</ol>
</li>
<li>
<p>Transformer里多头注意力机制/自注意力机制的计算过程是怎样的？</p>
<p><strong>延伸提问</strong></p>
<ol>
<li>自注意力的计算公式是怎样的？</li>
<li>Multi-Head Attention是什么，有什么作用？</li>
<li>为什么在进行softmax之前需要对attention进行scaled/Attention计算时为什么要除根dk，q\k\v分别是如何算的？</li>
<li>Transformer计算attention的时候为何选择点乘而不是加法？两者计算复杂度和效果上有什么区别？加性、乘性attention的公式？</li>
<li>Transformer的中的attention机制，其中self-attention和encoder-decoder attention之间的关系？</li>
<li>bert的mask为何不学习transformer在attention处进行屏蔽score的技巧？</li>
<li>self-attention代码实现？</li>
</ol>
</li>
<li>
<p>Transformer的结构，作为特征处理器它跟LSTM、CNN的主要区别在哪里？各有哪些优缺点？</p>
<p><strong>延伸提问</strong></p>
<ol>
<li>Transformer相对于传统的RNN网络有什么好处？</li>
<li>Transformer相对RNN为什么能避免梯度消失？</li>
<li>Transformer与Bert，GPT的联系与区别？</li>
<li>Transformer XL和Transformer的主要区别是什么？XLNet有哪些突出的有点，有哪些创新的地方？</li>
<li>Transformer的计算代价瓶颈在哪里？</li>
</ol>
</li>
</ol>
<h2 id="原始参考" tabindex="-1"><a class="header-anchor" href="#原始参考" aria-hidden="true">#</a> 原始参考</h2>
<p>1.<a href="https://www.nowcoder.com/discuss/648356" target="_blank" rel="noopener noreferrer">https://www.nowcoder.com/discuss/648356<ExternalLinkIcon/></a></p>
<p>transformer介绍一下原理，transformer为什么可以并行，它的计算代价瓶颈在哪？多头注意力机制计算过程？</p>
<p>BERT介绍一下原理，怎么用BERT计算文本相似度，有哪两种计算方法？（我回答的是，第一种方法是两个文本拼接作为BERT的输入，顶层加一个sigmod函数，第二种是，两个文本分别输入到BERT，得到特征向量，然后计算余弦相似度。）这两种方法的复杂度哪个高？</p>
<p>transformer（果然是nlp面试必考），介绍transformer里自注意力机制的计算过程，为什么要进行缩放，介绍下bert位置编码和transformer的区别，哪个好，为什么（为什么。。这个是真不会，我也如实说了不会，面试官说，开放题，说说你的理解，我就说通过学习出来的，可能会过拟合，也可能会学到更细微的特征）</p>
<p>2.<a href="https://www.nowcoder.com/discuss/648119" target="_blank" rel="noopener noreferrer">https://www.nowcoder.com/discuss/648119<ExternalLinkIcon/></a></p>
<p>你认为Transformer同LSTM这些有什么区别和关系?</p>
<p>transformer的position embedding和BERT的position embedding的区别.</p>
<p>了解seq2seq吗?有没有用过对应的transformer进行对应的使用项目?</p>
<p>3.<a href="https://www.nowcoder.com/discuss/641848" target="_blank" rel="noopener noreferrer">https://www.nowcoder.com/discuss/641848<ExternalLinkIcon/></a></p>
<p>介绍transformer（从encode端到decode端完整的说了一遍</p>
<p>bert介绍（跟transformer差不多把，就是多了两个预训练任务</p>
<p>4.<a href="https://www.nowcoder.com/discuss/639224" target="_blank" rel="noopener noreferrer">https://www.nowcoder.com/discuss/639224<ExternalLinkIcon/></a></p>
<p>说一下BERT和transformer的positional embedding有啥区别（多了一个矩阵，多了一个dropout几里哇啦）</p>
<p>5.<a href="https://zhuanlan.zhihu.com/p/266540739" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/266540739<ExternalLinkIcon/></a></p>
<p>你讲下Transformer里面LayerNorm的作用？</p>
<p>Encoder中的Feed Forward?</p>
<p>由两层全连接层构成，第一层全连接层的W的维度为[3072，768]，bias的维度为[3072]；第二层的全连接层的W的维度为[768,3072]，bias的维度为[768]。输出再经过Gelu激活函数，就得到了FeedForward的输出。</p>
<p>6.<a href="https://blog.csdn.net/qq_40092110/article/details/109247383" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_40092110/article/details/109247383<ExternalLinkIcon/></a></p>
<p>Transformer模型原理和它的结构；</p>
<p>Multi-Head Attention是什么，有什么作用？multi head什么意思，attention计算时为什么要除根dk，q\k\v分别是如何算的</p>
<p>attention和self-attention</p>
<p>self-attention如何实现的，介绍了一下原理，面试官又问代码具体如何实现</p>
<p>7.<a href="https://www.nowcoder.com/discuss/486194" target="_blank" rel="noopener noreferrer">https://www.nowcoder.com/discuss/486194<ExternalLinkIcon/></a></p>
<p>bert 为什么scale product，transformer里encoder的什么部分输入给decoder， MLM 为什么mask一部分保留一部分， albert，roberta， electra做了什么改进</p>
<p>8.<a href="https://blog.csdn.net/weixin_40920183/article/details/107777228" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_40920183/article/details/107777228<ExternalLinkIcon/></a></p>
<p>Transformer与GPT的联系与区别</p>
<p>9.<a href="https://zhuanlan.zhihu.com/p/153333432" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/153333432<ExternalLinkIcon/></a></p>
<p>Transformer的结构，作为特征处理器它跟LSTM的主要区别在哪里？各有哪些优缺点？</p>
<p>Transformer XL和Transformer的主要区别是什么？XLNet有哪些突出的有点，有哪些创新的地方？</p>
<p>10.<a href="https://mp.weixin.qq.com/s?src=11&amp;timestamp=1620807181&amp;ver=3063&amp;signature=SYGLpJUrt0gwGWRtN48oTtCOWxfBOtSRvZuwTBflU8rXZW4ToIKjj-HWiyMATUrVyDS6EW4ezMsM2-RqiOX6CvGSJhzW4-f2oEh1i9RRO8zpXlQkAp5iz9XtVjviY92V&amp;new=1" target="_blank" rel="noopener noreferrer">链接<ExternalLinkIcon/></a></p>
<p>bert如何使用transformer的encoding模块-bert的输入和transformer有什么不同</p>
<p>transformer的中的attention机制，其中self-attention和encoder-decoder attention之间的关系</p>
<p>transformer为什么用+不用concat</p>
<p>已有总结文章</p>
<ol>
<li><a href="https://zhuanlan.zhihu.com/p/149799951" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/149799951<ExternalLinkIcon/></a>
<ol>
<li>Transformer为何使用多头注意力机制？（为什么不使用一个头）</li>
<li>Transformer为什么Q和K使用不同的权重矩阵生成，为何不能使用同一个值进行自身的点乘？</li>
<li>为什么在进行softmax之前需要对attention进行scaled（为什么除以dk的平方根），并使用公式推导进行讲解</li>
<li>Transformer计算attention的时候为何选择点乘而不是加法？两者计算复杂度和效果上有什么区别？</li>
<li>在计算attention score的时候如何对padding做mask操作？</li>
</ol>
</li>
<li><a href="https://zhuanlan.zhihu.com/p/363466672" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/363466672<ExternalLinkIcon/></a>
<ol>
<li>为什么在进行多头注意力的时候需要对每个head进行降维？</li>
<li>大概讲一下Transformer的Encoder模块？</li>
<li>为何在获取输入词向量之后需要对矩阵乘以embedding size的开方？</li>
<li>简单介绍一下Transformer的位置编码？有什么意义和优缺点？</li>
<li>你还了解哪些关于位置编码的技术，各自的优缺点是什么？</li>
<li>简单讲一下Transformer中的残差结构以及意义。</li>
<li>为什么transformer块使用LayerNorm而不是BatchNorm？LayerNorm 在Transformer的位置是哪里？</li>
<li>简答讲一下BatchNorm技术，以及它的优缺点。</li>
<li>简单描述一下Transformer中的前馈神经网络？使用了什么激活函数？相关优缺点？</li>
<li>Encoder端和Decoder端是如何进行交互的？</li>
<li>Decoder阶段的多头自注意力和encoder的多头自注意力有什么区别？</li>
<li>Transformer的并行化提现在哪个地方？</li>
<li>Decoder端可以做并行化吗？</li>
<li>简单描述一下wordpiece model 和 byte pair encoding，有实际应用过吗？</li>
<li>Transformer训练的时候学习率是如何设定的？Dropout是如何设定的，位置在哪里？Dropout 在测试的需要有什么需要注意的吗？</li>
</ol>
</li>
<li><a href="https://zhuanlan.zhihu.com/p/151412524" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/151412524<ExternalLinkIcon/></a>
<ol>
<li>wordpiece的作用</li>
<li>self-attention相比lstm优点是什么？</li>
</ol>
</li>
<li><a href="https://zhuanlan.zhihu.com/p/129409553" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/129409553<ExternalLinkIcon/></a>
<ol>
<li>Transformer相对于传统的RNN网络有什么好处；</li>
<li>Transformer里的Self-Attention作用是什么，有什么优势；</li>
<li>你提到了梯度消失的问题，那么Transformer相对RNN为什么能避免梯度消失；</li>
</ol>
</li>
<li><a href="https://zhuanlan.zhihu.com/p/359555994" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/359555994<ExternalLinkIcon/></a>
<ol>
<li>LSTM时间复杂度，Transformer 时间复杂度
<ul>
<li>LSTM时间复杂度：序列长度*向量长度²</li>
<li>transformer时间复杂度：序列长度²*向量长度</li>
</ul>
</li>
</ol>
</li>
<li><a href="https://www.zhihu.com/question/318355038" target="_blank" rel="noopener noreferrer">bert的mask为何不学习transformer在attention处进行屏蔽score的技巧？<ExternalLinkIcon/></a></li>
</ol>
<p>Transformer的position embedding和BERT的position embedding的区别？</p>
<p>答：Transformer在编码词向量时引入了位置编码（Position Embedding）的特征。其编码公式如下：</p>
<p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>P</mi><mi>E</mi><mo stretchy="false">(</mo><mi>p</mi><mi>o</mi><mi>s</mi><mo separator="true">,</mo><mn>2</mn><mi>i</mi><mo stretchy="false">)</mo><mo>=</mo><mi>sin</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mfrac><mrow><mi>p</mi><mi>o</mi><mi>s</mi></mrow><mrow><mn>1000</mn><msup><mn>0</mn><mfrac><mrow><mn>2</mn><mi>i</mi></mrow><msub><mi>d</mi><mtext>model </mtext></msub></mfrac></msup></mrow></mfrac><mo fence="true">)</mo></mrow></mrow><annotation encoding="application/x-tex">P E( pos, 2 i)=\sin \left(\frac{p o s}{10000^{\frac{2 i}{d_{\text {model }}}}}\right)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">PE</span><span class="mopen">(</span><span class="mord mathnormal">p</span><span class="mord mathnormal">os</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">2</span><span class="mord mathnormal">i</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.4em;vertical-align:-0.95em;"></span><span class="mop">sin</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.7475em;"><span style="top:-2.19em;"><span class="pstrut" style="height:3.0395em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1000</span><span class="mord mtight"><span class="mord mtight">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:1.485em;"><span style="top:-3.7375em;margin-right:0.0714em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mopen nulldelimiter sizing reset-size1 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.0465em;"><span style="top:-2.468em;"><span class="pstrut" style="height:3em;"></span><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">d</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.3448em;margin-left:0em;margin-right:0.1em;"><span class="pstrut" style="height:2.6944em;"></span><span class="mord mtight"><span class="mord text mtight"><span class="mord mtight">model </span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3496em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.2255em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line mtight" style="border-bottom-width:0.049em;"></span></span><span style="top:-3.387em;"><span class="pstrut" style="height:3em;"></span><span class="mord mtight"><span class="mord mtight">2</span><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.8816em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size1 size6"></span></span></span></span></span></span></span></span></span></span></span></span></span><span style="top:-3.2695em;"><span class="pstrut" style="height:3.0395em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.4856em;"><span class="pstrut" style="height:3.0395em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">p</span><span class="mord mathnormal mtight">os</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.8495em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size3">)</span></span></span></span></span></span>
<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>P</mi><mi>E</mi><mo stretchy="false">(</mo><mi>p</mi><mi>o</mi><mi>s</mi><mo separator="true">,</mo><mn>2</mn><mi>i</mi><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mo>=</mo><mi>cos</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mfrac><mtext> pos </mtext><mrow><mn>1000</mn><msup><mn>0</mn><mfrac><mrow><mn>2</mn><mi>i</mi></mrow><msub><mi>d</mi><mtext>model </mtext></msub></mfrac></msup></mrow></mfrac><mo fence="true">)</mo></mrow></mrow><annotation encoding="application/x-tex">P E( pos, 2 i+1)=\cos \left(\frac{\text { pos }}{10000^{\frac{2 i}{d_{\text {model }}}}}\right)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">PE</span><span class="mopen">(</span><span class="mord mathnormal">p</span><span class="mord mathnormal">os</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">2</span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.4em;vertical-align:-0.95em;"></span><span class="mop">cos</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.7475em;"><span style="top:-2.19em;"><span class="pstrut" style="height:3.0395em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1000</span><span class="mord mtight"><span class="mord mtight">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:1.485em;"><span style="top:-3.7375em;margin-right:0.0714em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mopen nulldelimiter sizing reset-size1 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.0465em;"><span style="top:-2.468em;"><span class="pstrut" style="height:3em;"></span><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">d</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.3448em;margin-left:0em;margin-right:0.1em;"><span class="pstrut" style="height:2.6944em;"></span><span class="mord mtight"><span class="mord text mtight"><span class="mord mtight">model </span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3496em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.2255em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line mtight" style="border-bottom-width:0.049em;"></span></span><span style="top:-3.387em;"><span class="pstrut" style="height:3em;"></span><span class="mord mtight"><span class="mord mtight">2</span><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.8816em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size1 size6"></span></span></span></span></span></span></span></span></span></span></span></span></span><span style="top:-3.2695em;"><span class="pstrut" style="height:3.0395em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.4856em;"><span class="pstrut" style="height:3.0395em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord text mtight"><span class="mord mtight"> pos </span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.8495em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size3">)</span></span></span></span></span></span></p>
<p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi><mi>o</mi><mi>s</mi></mrow><annotation encoding="application/x-tex">pos</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span><span class="mord mathnormal">os</span></span></span></span>示单词的位置， <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>i</mi></mrow><annotation encoding="application/x-tex">i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6595em;"></span><span class="mord mathnormal">i</span></span></span></span>表示单词的维度。关于位置编码的实现可在Google开源的算法中<code v-pre>get_timing_signal_1d()</code>函数找到对应的代码。</p>
<p>作者这么设计的原因是考虑到在NLP任务中，除了单词的绝对位置，单词的相对位置也非常重要。根据公式 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>sin</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>α</mi><mo>+</mo><mi>β</mi><mo stretchy="false">)</mo><mo>=</mo><mi>sin</mi><mo>⁡</mo><mi>α</mi><mi>cos</mi><mo>⁡</mo><mi>β</mi><mo>+</mo><mi>cos</mi><mo>⁡</mo><mi>α</mi><mi>sin</mi><mo>⁡</mo><mi>β</mi></mrow><annotation encoding="application/x-tex">\sin (\alpha+\beta)=\sin \alpha \cos \beta+\cos \alpha \sin \beta</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">sin</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mop">sin</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop">cos</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mop">cos</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop">sin</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.05278em;">β</span></span></span></span>以及<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>cos</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>α</mi><mo>+</mo><mi>β</mi><mo stretchy="false">)</mo><mo>=</mo><mi>cos</mi><mo>⁡</mo><mi>α</mi><mi>cos</mi><mo>⁡</mo><mi>β</mi><mo>−</mo><mi>sin</mi><mo>⁡</mo><mi>α</mi><mi>sin</mi><mo>⁡</mo><mi>β</mi></mrow><annotation encoding="application/x-tex">\cos (\alpha+\beta)=\cos \alpha \cos \beta-\sin \alpha \sin \beta</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">cos</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mop">cos</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop">cos</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mop">sin</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop">sin</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.05278em;">β</span></span></span></span> ，这表明位置 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi><mo>+</mo><mi>p</mi></mrow><annotation encoding="application/x-tex">k+p</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span></span></span></span> 的位置向量可以表示为位置  <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi></mrow><annotation encoding="application/x-tex">k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span></span></span></span>的特征向量的线性变化，这为模型捕捉单词之间的相对位置关系提供了非常大的便利。</p>
<h2 id="all-attentions-in-transformer" tabindex="-1"><a class="header-anchor" href="#all-attentions-in-transformer" aria-hidden="true">#</a> All attentions in Transformer</h2>
<p>为了深入理解transformer中attention的应用。我们不妨先来回归一下 transformer的模型结构。套用这张经典的图片，可以看到，transformer采用的是典型的encoder-decoder架构。</p>
<p>而encoder和decoder又是由什么组成的呢？</p>
<p>对于公式(1)其实很好理解，注意力公式主要就是算 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi></mrow><annotation encoding="application/x-tex">V</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span></span></span></span> 的加权后的表示，说到加权，必要得有权重啊。权重就是前面的<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">softmax</mi><mo>⁡</mo><mo stretchy="false">(</mo><mo>∗</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\operatorname{softmax}(*)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop"><span class="mord mathrm">softmax</span></span><span class="mopen">(</span><span class="mord">∗</span><span class="mclose">)</span></span></span></span>部分，为什么要加<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">softmax</mi><mo>⁡</mo></mrow><annotation encoding="application/x-tex">\operatorname{softmax}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mop"><span class="mord mathrm">softmax</span></span></span></span></span> ，因为权重必须为概率分布即和为1。  里面部分<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mrow><mi>Q</mi><msup><mi>K</mi><mi>T</mi></msup></mrow><msqrt><msub><mi>d</mi><mi>k</mi></msub></msqrt></mfrac></mrow><annotation encoding="application/x-tex">\frac{Q K^{T}}{\sqrt{d_{k}}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.6275em;vertical-align:-0.538em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.0895em;"><span style="top:-2.5864em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord sqrt mtight"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8622em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mtight" style="padding-left:0.833em;"><span class="mord mtight"><span class="mord mathnormal mtight">d</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.3488em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1512em;"><span></span></span></span></span></span></span></span></span><span style="top:-2.8222em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail mtight" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.08em' viewBox='0 0 400000 1080' preserveAspectRatio='xMinYMin slice'><path d='M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1778em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.4461em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">Q</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.07153em;">K</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.9191em;"><span style="top:-2.931em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.538em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span>算的就是注意力的原始分数，通过计算Q(query)与K(key)的点积得到相似度分数，其中<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><msub><mi>d</mi><mi>k</mi></msub></msqrt></mrow><annotation encoding="application/x-tex">\sqrt{d_{k}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1828em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8572em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord"><span class="mord mathnormal">d</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-2.8172em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.08em' viewBox='0 0 400000 1080' preserveAspectRatio='xMinYMin slice'><path d='M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1828em;"><span></span></span></span></span></span></span></span></span>起到一个调节作用，不至于过大或过小，导致 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">softmax</mi><mo>⁡</mo></mrow><annotation encoding="application/x-tex">\operatorname{softmax}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mop"><span class="mord mathrm">softmax</span></span></span></span></span> 之后就非0即1。因此这种注意力的形式也叫缩放点积注意力机制。</p>
<h3 id="谈一谈decoder模块" tabindex="-1"><a class="header-anchor" href="#谈一谈decoder模块" aria-hidden="true">#</a> 谈一谈Decoder模块</h3>
<p>本文主要是谈一些比较容易误解的细节点，说实话，把自己的理解用文字表达出来真是个细致活。</p>
<p>如果觉得对您有点帮助，帮忙点个在看或者赞。</p>
<h4 id="一个小小的问题" tabindex="-1"><a class="header-anchor" href="#一个小小的问题" aria-hidden="true">#</a> 一个小小的问题</h4>
<p>我先说一个自己花了点时间才琢磨出来的东西，其实不难，就是当时没转过弯来。</p>
<p>我们都知道，decoder的交互层，Q矩阵来自本身，K/V矩阵来自整个Encoder层输出。</p>
<p>但是对于每个单词都会有一个encoder的输出，那么K/V矩阵是用的其中哪个输出计算过来的？</p>
<p>我这个问题的问法其实是错误的。</p>
<p>我当时的理解背景是认为这个交互的过程很类似seq2seq的attention，它一般是使用最后一个时刻的隐层输出作为context vector。</p>
<p>我基于此产生了上面这个问题，这个K/V矩阵应该由哪个位置单词（对比RNN就是哪个时刻的单词）的输出生成。</p>
<p>后来看了一下代码，才明白自己错在哪里？</p>
<p>K/V矩阵的计算不是来自于某一个单词的输出，而是所有单词的输出汇总计算K/V矩阵。这个过程和在Encoder中计算K/V矩阵是一样的，只不过放在了交互层，一时没想明白。</p>
<h4 id="正文" tabindex="-1"><a class="header-anchor" href="#正文" aria-hidden="true">#</a> 正文</h4>
<p>与Encoder很类似，Decoder同样由完全相同的N个大模块堆叠而成，原论文中N为6。</p>
<p>每个大的模块分为三部分：多头注意力层，交互层，前馈神经层；每个层内部尾端都含有 Add&amp;Norm。</p>
<p>和Encoder重复的内容我就跳过了，之前讲过，没看过的同学可以去看那个文章。</p>
<h5 id="多头自注意力层" tabindex="-1"><a class="header-anchor" href="#多头自注意力层" aria-hidden="true">#</a> 多头自注意力层</h5>
<p>首先谈一下多头自注意力层，这里需要注意的细节点是，需要对当前单词和之后的单词做mask。</p>
<p>为什么需要mask？</p>
<p>最常规的解释就是在预测阶段，你的模型看不见当前时刻的输出以及未来时刻单词。</p>
<p>这句话其实有点绕，如果读的不仔细会让人误解为mask的时候需要把当前时刻的单词也mask掉...(拖出去斩了吧)。</p>
<p>从代码角度讲，你只需要把当前时刻之后所有单词mask掉就好了。</p>
<p>我自己对这句话的理解是我们需要确保模型在训练和测试的时候没有GAP。</p>
<p>举个简单的例子来理解，如果做机器翻译，你需要翻译出来的句子是 &quot;我/爱/吃/苹果&quot;。</p>
<p>当前时刻是”爱“这个单词作为输入的一部分，另一部分是上一个时刻”我“作为输入的时候的输出值。</p>
<p>当然在机器翻译中，我们一般使用 teacher forcing加速收敛，所以这里就使用”我“作为当前时刻输入的另一个部分。</p>
<p>所以这个时候，输入就是”我“的编码信息和”爱“的编码信息（当然还有位置编码）。</p>
<p>我要预测的是”吃“这个单词。</p>
<p>如果我们没有mask，模型也是可以运行的，也就说此时”吃“和”苹果“两个词对”爱“这个时刻的输出是有贡献的。</p>
<p>那么问题来了，测试数据中你根本没有ground truth，你怎么办？</p>
<p>也就说，训练的时候，你的模型是基于知道这个时刻后面的单词进行的训练，但是测试的时候，做机器翻译，你不知道自己应该翻译出来什么东西。</p>
<p>这就是问题的核心。</p>
<p>你训练模型的时候，一部分精力花在了”吃“和”苹果“两个词上，这不就是无用功吗？</p>
<p>所以，确保模型在训练和测试的时候没有GAP，我们需要mask掉”吃“和”苹果“两个词。</p>
<h5 id="交互模块" tabindex="-1"><a class="header-anchor" href="#交互模块" aria-hidden="true">#</a> 交互模块</h5>
<p>这一块需要注意的就是之前文章提到的，Q矩阵来自本身，K/V矩阵来自encoder的输出。</p>
<p>还有一个细节点是，K/V矩阵对应的是来自整个encoder的输出。</p>
<p>如果看transformer那个经典图的话，初期很容易理解为encoder和decode对应的每一层互相交互，这是不对的。</p>
<p>是整个输出与decoder做交互。</p>
<p>对于任意的<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>h</mi><mi>i</mi></msub><mo separator="true">,</mo><msub><mi>s</mi><mi>j</mi></msub></mrow><annotation encoding="application/x-tex">h_i,s_j</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9805em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal">h</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">s</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span>,以某种attention计算两者之间的分数，再将所有的结果形成的魏进行归一化。</p>
<p>Attention 机制计算过程大致可以分成三步：</p>
<blockquote>
<p>① 信息输入：将 Q，K，V 输入模型
用 <img src="https://www.zhihu.com/equation?tex=X%3D[x_1%2Cx_2%2C...x_n]" alt="[公式]" loading="lazy"> 表示输入权重向量</p>
<p>② 计算注意力分布 α：通过计算 Q 和 K 进行点积计算相关度，并通过 softmax 计算分数
另 <img src="https://www.zhihu.com/equation?tex=Q%3DK%3DV%3DX" alt="[公式]" loading="lazy">，通过 softmax 计算注意力权重，<img src="https://www.zhihu.com/equation?tex=α_i%3Dsoftmax(s(k_i%2Cq))%3Dsoftmax(s(x_i%2C+q))" alt="[公式]" loading="lazy"></p>
<p>我们将 <img src="https://www.zhihu.com/equation?tex=α_i" alt="[公式]" loading="lazy"> 称之为注意力概率分布，<img src="https://www.zhihu.com/equation?tex=s(x_i%2C+q)" alt="[公式]" loading="lazy"> 为注意力打分机制，常见的有如下几种：
加性模型：<img src="https://www.zhihu.com/equation?tex=s(x_i%2Cq)%3Dv^Ttanh(Wx_i%2BUq)" alt="[公式]" loading="lazy">
点积模型：<img src="https://www.zhihu.com/equation?tex=s(x_i%2Cq)%3Dx_i^Tq" alt="[公式]" loading="lazy">
缩放点积模型：<img src="https://www.zhihu.com/equation?tex=s(x_i%2Cq)%3D{x_i^Tq}%2F\sqrt{d_k}" alt="[公式]" loading="lazy">
双线性模型：<img src="https://www.zhihu.com/equation?tex=s(x_i%2Cq)%3Dx_i^TWq" alt="[公式]" loading="lazy"></p>
<p>③ 信息加权平均：注意力分布 <img src="https://www.zhihu.com/equation?tex=α_i" alt="[公式]" loading="lazy"> 来解释在上下文查询 <img src="https://www.zhihu.com/equation?tex=q_i" alt="[公式]" loading="lazy"> 时，第 <img src="https://www.zhihu.com/equation?tex=i" alt="[公式]" loading="lazy"> 个信息受关注程度。
<img src="https://www.zhihu.com/equation?tex=att(q%2CX)%3D\sum_{i%3D1}^N{α_iX_i}" alt="[公式]" loading="lazy"></p>
</blockquote>
<h2 id="attention的通用定义如下" tabindex="-1"><a class="header-anchor" href="#attention的通用定义如下" aria-hidden="true">#</a> Attention的通用定义如下：</h2>
<p>给定一组向量集合values，以及查询向量query，我们根据query向量去计算values加权和，即成为attention机制。</p>
<p>attention的重点即为求这个集合values中每个value的权值。我们也称attention的机制叫做query的输出关注了（考虑到了）原文的不同部分。</p>
<p>如seq2seq模型中，St是后面的query向量，而编码过程的隐藏状态hi是values。其就是根据某些规则（或额外信息query）从向量表达集合values中抽取特定的向量进行加权组合的方法，只要从部分向量里用了加权和，计算使用了attention机制。</p>
</div></template>


