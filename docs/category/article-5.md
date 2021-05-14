---
title: The attention in Transformer

---

#  The attention in transformer （面经总结）

在NLP算法相关的面试里，Transformer显然是重中之重。而attention机制显然又是其中的高频问题。下面这一文章将带诸位来更详细的了解。

## 面经问题

笔者总结，在Transformer中，attention相关的高频提问主要有如下几个问题。

1. 问：Transformer里多头注意力机制/自注意力机制的计算过程是怎样的？

2. 问：自注意力(self-attention)的计算公式是怎样的？

   答：
   $$
   \text { Attention }(Q, K, V)=\operatorname{softmax}\left(\frac{Q K^{T}}{\sqrt{d_{k}}}\right) V \tag{1}
   $$
   其中Q,K,V为query,key,value.

3. 问：Multi-Head Attention是什么，有什么作用？

4. 问：为什么在进行softmax之前需要对attention进行scaled/Attention计算时为什么要除根dk，q\k\v分别是如何算的？

5. 问：Transformer计算attention的时候为何选择点乘而不是加法？两者计算复杂度和效果上有什么区别？加性、乘性attention的公式？

6. 问：Transformer的中的attention机制，其中self-attention和encoder-decoder attention之间的关系？

7. 问：bert的mask为何不学习transformer在attention处进行屏蔽score的技巧？

8. 问：self-attention代码实现？

## All attentions in Transformer

为了深入理解transformer中attention的应用。我们不妨先来回归一下 transformer的模型结构。套用这张经典的图片，可以看到，transformer采用的是典型的encoder-decoder架构。

> ![img](D:\demo\mp5088643.github.io\docs\category\The_transformer_encoders_decoders.png)

而encoder和decoder又是由什么组成的呢？

![image-20210514191635335](D:\demo\mp5088643.github.io\docs\category\image-20210514191635335.png)



对于公式(1)其实很好理解，注意力公式主要就是算 $ V $ 的加权后的表示，说到加权，必要得有权重啊。权重就是前面的$\operatorname{softmax}(*)$部分，为什么要加$\operatorname{softmax}$ ，因为权重必须为概率分布即和为1。  里面部分$\frac{Q K^{T}}{\sqrt{d_{k}}}$算的就是注意力的原始分数，通过计算Q(query)与K(key)的点积得到相似度分数，其中$\sqrt{d_{k}}$起到一个调节作用，不至于过大或过小，导致 $\operatorname{softmax}$ 之后就非0即1。因此这种注意力的形式也叫缩放点积注意力机制。



