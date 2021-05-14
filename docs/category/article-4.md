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
