---
title:transformer面经总结
---

# Transformer面经总结

## 高频提问

1. 介绍一下Transformer的原理。

   **延伸提问**

   1. Encoder中的Feed Forward的结构是如何的?使用了什么激活函数？相关优缺点？
   2. 讲一下Transformer中的残差结构以及意义？
   3. Encoder端和Decoder端是如何进行交互的？
   4. Transformer为什么用+不用concat？
   5. wordpiece的作用是什么，简单描述一下wordpiece model 和 byte pair encoding？

2. Transformer为什么可以并行？

   **延伸提问**

   1. Decoder端可以做并行化吗？
   2. LSTM时间复杂度如何计算，Transformer 时间复杂度如何计算？

3. Transformer的position embedding和BERT的position embedding的区别？

   **延伸提问**

   1. 你还了解哪些关于位置编码的技术，各自的优缺点是什么？

4. Transformer里面LayerNorm的作用？

   **延伸提问**

   1. 为什么transformer块使用LayerNorm而不是BatchNorm？
   2. LayerNorm 在Transformer的位置是哪里？
   3. 简答讲一下BatchNorm技术，以及它的优缺点。

5. Transformer里多头注意力机制/自注意力机制的计算过程是怎样的？

   **延伸提问**

   1. 自注意力的计算公式是怎样的？
   2. Multi-Head Attention是什么，有什么作用？
   3. 为什么在进行softmax之前需要对attention进行scaled/Attention计算时为什么要除根dk，q\k\v分别是如何算的？
   4. Transformer计算attention的时候为何选择点乘而不是加法？两者计算复杂度和效果上有什么区别？加性、乘性attention的公式？
   5. Transformer的中的attention机制，其中self-attention和encoder-decoder attention之间的关系？
   6. bert的mask为何不学习transformer在attention处进行屏蔽score的技巧？
   7. self-attention代码实现？

6. Transformer的结构，作为特征处理器它跟LSTM、CNN的主要区别在哪里？各有哪些优缺点？

   **延伸提问**

   1. Transformer相对于传统的RNN网络有什么好处？
   2. Transformer相对RNN为什么能避免梯度消失？
   3. Transformer与Bert，GPT的联系与区别？
   4. Transformer XL和Transformer的主要区别是什么？XLNet有哪些突出的有点，有哪些创新的地方？
   5. Transformer的计算代价瓶颈在哪里？







## 原始参考

1.[https://www.nowcoder.com/discuss/648356](https://www.nowcoder.com/discuss/648356)

transformer介绍一下原理，transformer为什么可以并行，它的计算代价瓶颈在哪？多头注意力机制计算过程？

BERT介绍一下原理，怎么用BERT计算文本相似度，有哪两种计算方法？（我回答的是，第一种方法是两个文本拼接作为BERT的输入，顶层加一个sigmod函数，第二种是，两个文本分别输入到BERT，得到特征向量，然后计算余弦相似度。）这两种方法的复杂度哪个高？

transformer（果然是nlp面试必考），介绍transformer里自注意力机制的计算过程，为什么要进行缩放，介绍下bert位置编码和transformer的区别，哪个好，为什么（为什么。。这个是真不会，我也如实说了不会，面试官说，开放题，说说你的理解，我就说通过学习出来的，可能会过拟合，也可能会学到更细微的特征）

2.[https://www.nowcoder.com/discuss/648119](https://www.nowcoder.com/discuss/648119)

你认为Transformer同LSTM这些有什么区别和关系?

transformer的position embedding和BERT的position embedding的区别.

了解seq2seq吗?有没有用过对应的transformer进行对应的使用项目?

3.[https://www.nowcoder.com/discuss/641848](https://www.nowcoder.com/discuss/641848)

介绍transformer（从encode端到decode端完整的说了一遍

bert介绍（跟transformer差不多把，就是多了两个预训练任务

4.[https://www.nowcoder.com/discuss/639224](https://www.nowcoder.com/discuss/639224)

说一下BERT和transformer的positional embedding有啥区别（多了一个矩阵，多了一个dropout几里哇啦）

5.[https://zhuanlan.zhihu.com/p/266540739](https://zhuanlan.zhihu.com/p/266540739)

你讲下Transformer里面LayerNorm的作用？

Encoder中的Feed Forward?

由两层全连接层构成，第一层全连接层的W的维度为[3072，768]，bias的维度为[3072]；第二层的全连接层的W的维度为[768,3072]，bias的维度为[768]。输出再经过Gelu激活函数，就得到了FeedForward的输出。

6.[https://blog.csdn.net/qq_40092110/article/details/109247383](https://blog.csdn.net/qq_40092110/article/details/109247383)

Transformer模型原理和它的结构；

Multi-Head Attention是什么，有什么作用？multi head什么意思，attention计算时为什么要除根dk，q\k\v分别是如何算的

attention和self-attention

self-attention如何实现的，介绍了一下原理，面试官又问代码具体如何实现

7.[https://www.nowcoder.com/discuss/486194](https://www.nowcoder.com/discuss/486194)

bert 为什么scale product，transformer里encoder的什么部分输入给decoder， MLM 为什么mask一部分保留一部分， albert，roberta， electra做了什么改进

8.[https://blog.csdn.net/weixin_40920183/article/details/107777228](https://blog.csdn.net/weixin_40920183/article/details/107777228)

Transformer与GPT的联系与区别

9.[https://zhuanlan.zhihu.com/p/153333432](https://zhuanlan.zhihu.com/p/153333432)

Transformer的结构，作为特征处理器它跟LSTM的主要区别在哪里？各有哪些优缺点？

Transformer XL和Transformer的主要区别是什么？XLNet有哪些突出的有点，有哪些创新的地方？

10.[链接](https://mp.weixin.qq.com/s?src=11&timestamp=1620807181&ver=3063&signature=SYGLpJUrt0gwGWRtN48oTtCOWxfBOtSRvZuwTBflU8rXZW4ToIKjj-HWiyMATUrVyDS6EW4ezMsM2-RqiOX6CvGSJhzW4-f2oEh1i9RRO8zpXlQkAp5iz9XtVjviY92V&new=1)

bert如何使用transformer的encoding模块-bert的输入和transformer有什么不同

transformer的中的attention机制，其中self-attention和encoder-decoder attention之间的关系

transformer为什么用+不用concat

已有总结文章

1. [https://zhuanlan.zhihu.com/p/149799951](https://zhuanlan.zhihu.com/p/149799951)
    1. Transformer为何使用多头注意力机制？（为什么不使用一个头）
    2. Transformer为什么Q和K使用不同的权重矩阵生成，为何不能使用同一个值进行自身的点乘？
    3. 为什么在进行softmax之前需要对attention进行scaled（为什么除以dk的平方根），并使用公式推导进行讲解
    4. Transformer计算attention的时候为何选择点乘而不是加法？两者计算复杂度和效果上有什么区别？
    5. 在计算attention score的时候如何对padding做mask操作？
2. https://zhuanlan.zhihu.com/p/363466672
    1. 为什么在进行多头注意力的时候需要对每个head进行降维？
    2. 大概讲一下Transformer的Encoder模块？
    3. 为何在获取输入词向量之后需要对矩阵乘以embedding size的开方？
    4. 简单介绍一下Transformer的位置编码？有什么意义和优缺点？
    5. 你还了解哪些关于位置编码的技术，各自的优缺点是什么？
    6. 简单讲一下Transformer中的残差结构以及意义。
    7. 为什么transformer块使用LayerNorm而不是BatchNorm？LayerNorm 在Transformer的位置是哪里？
    8. 简答讲一下BatchNorm技术，以及它的优缺点。
    9. 简单描述一下Transformer中的前馈神经网络？使用了什么激活函数？相关优缺点？
    10. Encoder端和Decoder端是如何进行交互的？
    11. Decoder阶段的多头自注意力和encoder的多头自注意力有什么区别？
    12. Transformer的并行化提现在哪个地方？
    13. Decoder端可以做并行化吗？
    14. 简单描述一下wordpiece model 和 byte pair encoding，有实际应用过吗？
    15. Transformer训练的时候学习率是如何设定的？Dropout是如何设定的，位置在哪里？Dropout 在测试的需要有什么需要注意的吗？
3. [https://zhuanlan.zhihu.com/p/151412524](https://zhuanlan.zhihu.com/p/151412524)
    1. wordpiece的作用
    2. self-attention相比lstm优点是什么？
4. [https://zhuanlan.zhihu.com/p/129409553](https://zhuanlan.zhihu.com/p/129409553)
    1. Transformer相对于传统的RNN网络有什么好处；
    2. Transformer里的Self-Attention作用是什么，有什么优势；
    3. 你提到了梯度消失的问题，那么Transformer相对RNN为什么能避免梯度消失；
5. https://zhuanlan.zhihu.com/p/359555994
    1. LSTM时间复杂度，Transformer 时间复杂度
        - LSTM时间复杂度：序列长度*向量长度²
        - transformer时间复杂度：序列长度²*向量长度
6. [bert的mask为何不学习transformer在attention处进行屏蔽score的技巧？](https://www.zhihu.com/question/318355038)

Transformer的position embedding和BERT的position embedding的区别？

答：Transformer在编码词向量时引入了位置编码（Position Embedding）的特征。其编码公式如下：

$P E( pos, 2 i)=\sin \left(\frac{p o s}{10000^{\frac{2 i}{d_{\text {model }}}}}\right)$
$P E( pos, 2 i+1)=\cos \left(\frac{\text { pos }}{10000^{\frac{2 i}{d_{\text {model }}}}}\right)$

$pos$示单词的位置， $i$表示单词的维度。关于位置编码的实现可在Google开源的算法中`get_timing_signal_1d()`函数找到对应的代码。

作者这么设计的原因是考虑到在NLP任务中，除了单词的绝对位置，单词的相对位置也非常重要。根据公式 $\sin (\alpha+\beta)=\sin \alpha \cos \beta+\cos \alpha \sin \beta$以及$\cos (\alpha+\beta)=\cos \alpha \cos \beta-\sin \alpha \sin \beta$ ，这表明位置 $k+p$ 的位置向量可以表示为位置  $k$的特征向量的线性变化，这为模型捕捉单词之间的相对位置关系提供了非常大的便利。

## All attentions in Transformer

为了深入理解transformer中attention的应用。我们不妨先来回归一下 transformer的模型结构。套用这张经典的图片，可以看到，transformer采用的是典型的encoder-decoder架构。

而encoder和decoder又是由什么组成的呢？





对于公式(1)其实很好理解，注意力公式主要就是算 $V$ 的加权后的表示，说到加权，必要得有权重啊。权重就是前面的$\operatorname{softmax}(*)$部分，为什么要加$\operatorname{softmax}$ ，因为权重必须为概率分布即和为1。  里面部分$\frac{Q K^{T}}{\sqrt{d_{k}}}$算的就是注意力的原始分数，通过计算Q(query)与K(key)的点积得到相似度分数，其中$\sqrt{d_{k}}$起到一个调节作用，不至于过大或过小，导致 $\operatorname{softmax}$ 之后就非0即1。因此这种注意力的形式也叫缩放点积注意力机制。



### 谈一谈Decoder模块

本文主要是谈一些比较容易误解的细节点，说实话，把自己的理解用文字表达出来真是个细致活。

如果觉得对您有点帮助，帮忙点个在看或者赞。

#### 一个小小的问题

我先说一个自己花了点时间才琢磨出来的东西，其实不难，就是当时没转过弯来。

我们都知道，decoder的交互层，Q矩阵来自本身，K/V矩阵来自整个Encoder层输出。

但是对于每个单词都会有一个encoder的输出，那么K/V矩阵是用的其中哪个输出计算过来的？

我这个问题的问法其实是错误的。

我当时的理解背景是认为这个交互的过程很类似seq2seq的attention，它一般是使用最后一个时刻的隐层输出作为context vector。

我基于此产生了上面这个问题，这个K/V矩阵应该由哪个位置单词（对比RNN就是哪个时刻的单词）的输出生成。

后来看了一下代码，才明白自己错在哪里？

K/V矩阵的计算不是来自于某一个单词的输出，而是所有单词的输出汇总计算K/V矩阵。这个过程和在Encoder中计算K/V矩阵是一样的，只不过放在了交互层，一时没想明白。

#### 正文

与Encoder很类似，Decoder同样由完全相同的N个大模块堆叠而成，原论文中N为6。

每个大的模块分为三部分：多头注意力层，交互层，前馈神经层；每个层内部尾端都含有 Add&Norm。

和Encoder重复的内容我就跳过了，之前讲过，没看过的同学可以去看那个文章。

##### 多头自注意力层

首先谈一下多头自注意力层，这里需要注意的细节点是，需要对当前单词和之后的单词做mask。

为什么需要mask？

最常规的解释就是在预测阶段，你的模型看不见当前时刻的输出以及未来时刻单词。

这句话其实有点绕，如果读的不仔细会让人误解为mask的时候需要把当前时刻的单词也mask掉...(拖出去斩了吧)。

从代码角度讲，你只需要把当前时刻之后所有单词mask掉就好了。

我自己对这句话的理解是我们需要确保模型在训练和测试的时候没有GAP。

举个简单的例子来理解，如果做机器翻译，你需要翻译出来的句子是 "我/爱/吃/苹果"。

当前时刻是”爱“这个单词作为输入的一部分，另一部分是上一个时刻”我“作为输入的时候的输出值。

当然在机器翻译中，我们一般使用 teacher forcing加速收敛，所以这里就使用”我“作为当前时刻输入的另一个部分。

所以这个时候，输入就是”我“的编码信息和”爱“的编码信息（当然还有位置编码）。

我要预测的是”吃“这个单词。

如果我们没有mask，模型也是可以运行的，也就说此时”吃“和”苹果“两个词对”爱“这个时刻的输出是有贡献的。

那么问题来了，测试数据中你根本没有ground truth，你怎么办？

也就说，训练的时候，你的模型是基于知道这个时刻后面的单词进行的训练，但是测试的时候，做机器翻译，你不知道自己应该翻译出来什么东西。

这就是问题的核心。

你训练模型的时候，一部分精力花在了”吃“和”苹果“两个词上，这不就是无用功吗？

所以，确保模型在训练和测试的时候没有GAP，我们需要mask掉”吃“和”苹果“两个词。

##### 交互模块

这一块需要注意的就是之前文章提到的，Q矩阵来自本身，K/V矩阵来自encoder的输出。

还有一个细节点是，K/V矩阵对应的是来自整个encoder的输出。

如果看transformer那个经典图的话，初期很容易理解为encoder和decode对应的每一层互相交互，这是不对的。

是整个输出与decoder做交互。

对于任意的$h_i,s_j$,以某种attention计算两者之间的分数，再将所有的结果形成的魏进行归一化。

Attention 机制计算过程大致可以分成三步：

> ① 信息输入：将 Q，K，V 输入模型
> 用 ![[公式]](https://www.zhihu.com/equation?tex=X%3D%5Bx_1%2Cx_2%2C...x_n%5D) 表示输入权重向量
>
> ② 计算注意力分布 α：通过计算 Q 和 K 进行点积计算相关度，并通过 softmax 计算分数
> 另 ![[公式]](https://www.zhihu.com/equation?tex=Q%3DK%3DV%3DX)，通过 softmax 计算注意力权重，![[公式]](https://www.zhihu.com/equation?tex=%CE%B1_i%3Dsoftmax%28s%28k_i%2Cq%29%29%3Dsoftmax%28s%28x_i%2C+q%29%29)
>
> 我们将 ![[公式]](https://www.zhihu.com/equation?tex=%CE%B1_i) 称之为注意力概率分布，![[公式]](https://www.zhihu.com/equation?tex=s%28x_i%2C+q%29) 为注意力打分机制，常见的有如下几种： 
> 加性模型：![[公式]](https://www.zhihu.com/equation?tex=s%28x_i%2Cq%29%3Dv%5ETtanh%28Wx_i%2BUq%29)
> 点积模型：![[公式]](https://www.zhihu.com/equation?tex=s%28x_i%2Cq%29%3Dx_i%5ETq)
> 缩放点积模型：![[公式]](https://www.zhihu.com/equation?tex=s%28x_i%2Cq%29%3D%7Bx_i%5ETq%7D%2F%5Csqrt%7Bd_k%7D)
> 双线性模型：![[公式]](https://www.zhihu.com/equation?tex=s%28x_i%2Cq%29%3Dx_i%5ETWq)
>
> ③ 信息加权平均：注意力分布 ![[公式]](https://www.zhihu.com/equation?tex=%CE%B1_i) 来解释在上下文查询 ![[公式]](https://www.zhihu.com/equation?tex=q_i) 时，第 ![[公式]](https://www.zhihu.com/equation?tex=i) 个信息受关注程度。
> ![[公式]](https://www.zhihu.com/equation?tex=att%28q%2CX%29%3D%5Csum_%7Bi%3D1%7D%5EN%7B%CE%B1_iX_i%7D)



## Attention的通用定义如下：

给定一组向量集合values，以及查询向量query，我们根据query向量去计算values加权和，即成为attention机制。

attention的重点即为求这个集合values中每个value的权值。我们也称attention的机制叫做query的输出关注了（考虑到了）原文的不同部分。

如seq2seq模型中，St是后面的query向量，而编码过程的隐藏状态hi是values。其就是根据某些规则（或额外信息query）从向量表达集合values中抽取特定的向量进行加权组合的方法，只要从部分向量里用了加权和，计算使用了attention机制。

