<template><div><h1 id="图文预训练模型总结" tabindex="-1"><a class="header-anchor" href="#图文预训练模型总结" aria-hidden="true">#</a> 图文预训练模型总结</h1>
<h3 id="inductive-bias" tabindex="-1"><a class="header-anchor" href="#inductive-bias" aria-hidden="true">#</a> Inductive bias</h3>
<h4 id="_2-1-1-什么是-inductive-bias" tabindex="-1"><a class="header-anchor" href="#_2-1-1-什么是-inductive-bias" aria-hidden="true">#</a> 2.1.1 什么是 Inductive bias</h4>
<p>Inductive bias 是指在通过人为偏好，认为某一种解决方案优先于其他解决方案。这里的解决方案既可以指数据假设上，也可以指模型设计等。在深度学习时代，卷积神经网络认为信息具有空间局部性，可以用滑动卷积共享权重方式降低参数空间和提高性能；循环神经网络强调时序信息时间顺序的重要性；图神经网络则是认为中心节点与邻居节点的相似性会更好引导信息流动。可以说深度学习时代，不同网络结构的创新就体现了不同的归纳性偏。</p>
<h4 id="_2-1-2-图像数据的-inductive-bias" tabindex="-1"><a class="header-anchor" href="#_2-1-2-图像数据的-inductive-bias" aria-hidden="true">#</a> 2.1.2 图像数据的 Inductive bias</h4>
<ul>
<li>
<p>Local prior</p>
<p>图像具有 locality（局域性），例如一个像素与它邻近的像素更相关，与它远离的像素更不相关。</p>
</li>
<li>
<p>Global capacity</p>
<p>图像还具有 long-rangeS dependencies，例如一个像素与距离更远的像素同属于一个物体的相关性。</p>
</li>
<li>
<p>Positional prior</p>
<p>有些图像有 positional prior，例如人脸图片中，脸一般在图像中间位置，眼睛总是在脸部上方，嘴巴总是在脸部下方。</p>
</li>
</ul>
<h3 id="_2-2-cv任务的网络结构" tabindex="-1"><a class="header-anchor" href="#_2-2-cv任务的网络结构" aria-hidden="true">#</a> 2.2 CV任务的网络结构</h3>
<h4 id="_2-2-1-mlp" tabindex="-1"><a class="header-anchor" href="#_2-2-1-mlp" aria-hidden="true">#</a> 2.2.1 MLP</h4>
<p>MLP 的工作模式可以是这样的：将 feature map 展开成一维向量，通过 FC层，最终再 reshape 成原来 feature map 的形状。因为 FC 的参数的作用是与位置相关的，因此 FC 就有建模 positional prior 的能力。又因为输出 feature map 的每一个点都与输入 feature map 的每一个点有关，所以 FC 也有捕捉 long-range dependencies 的能力。</p>
<h4 id="_2-2-2-cnn" tabindex="-1"><a class="header-anchor" href="#_2-2-2-cnn" aria-hidden="true">#</a> 2.2.2 CNN</h4>
<p>CNN 通过手工设计卷积核尺寸、个数、stride 等超参数，进而在数据上自动学习卷积核参数。CNN 具有捕捉 local prior 的能力，在图像识别任务中取得成功。但是传统的 CNN 只能通过加深卷积层数、增大感受野来建模 long-range dependencies。这种建模 long-range dependencies 的模式效率较低，并且可能导致优化困难。</p>
<h4 id="_2-2-3-transformer" tabindex="-1"><a class="header-anchor" href="#_2-2-3-transformer" aria-hidden="true">#</a> 2.2.3 Transformer</h4>
<p>Transformer 最早被用于 NLP 任务。最近 ViT[3] 等论文将 Transformer 用于 CV，取得了成功。Transformer 中的 self-attention，具有 global capacity 和 positional prior，MLP-Blocks 具有 global capacity。但是由于 Vision Transformer 不具有建模 local prior 的能力，因此需要大量的训练数据。最近这些基于 Transformer 的研究表明，更长的训练时间、更多的参数、更多的数据和或更多的正则化，就足以恢复像 ImageNet 分类这样复杂任务的重要先验。</p>
<h3 id="_3-图像-文本多模态预训练模型" tabindex="-1"><a class="header-anchor" href="#_3-图像-文本多模态预训练模型" aria-hidden="true">#</a> <strong>3. 图像-文本多模态预训练模型</strong></h3>
<h4 id="_3-1-cross-stream" tabindex="-1"><a class="header-anchor" href="#_3-1-cross-stream" aria-hidden="true">#</a> <strong>3.1 Cross-Stream</strong></h4>
<h5 id="_3-1-1-vilbert-1" tabindex="-1"><a class="header-anchor" href="#_3-1-1-vilbert-1" aria-hidden="true">#</a> <strong>3.1.1 ViLBERT[1]</strong></h5>
<p><strong>模型细节</strong></p>
<p>输入的文本经过文本Embedding层后被输入到文本的单模态Transformer编码器中提取上下文信息。使用预训练Faster R-CNN对于图片生成候选区域提取特征并送入图像Embedding层生成Embedding。然后将获取好的文本和图像的Embedding通过Co-attention-transformer模块进行相互交互融合，得到最后的表征。</p>
<p>ViLBERT模型图如图1所示，Co-attention-transformer模块如图2所示。</p>
<p>图1 ViLBERT模型图</p>
<p>图2 Co-attention transformer模块</p>
<p><strong>预训练任务</strong></p>
<p><strong>掩蔽文本预测（masked multi-modal modelling）</strong> 与BERT的设计思路一样，根据概率随机替换掉文本中部分词，使用[MASK]占位符替代，需要模型通过文本中上下文，以及对应图片中给出的信息，预测出被替换的词。</p>
<p><strong>掩蔽图像预测（masked multi-modal modelling）</strong> 通过掩蔽经过Faster R-CNN提取到的预候选区域，使模型通过对应文本以及其他区域的图像预测出被遮掩区域的类别。</p>
<p><strong>图片-文本对齐（multi-modal alignment）</strong> 给定构造好的图文关系对，让模型来判断文本是否是对应图片的描述，具体是使用<code v-pre>&lt;IMG&gt;</code>以及<code v-pre>&lt;CLS&gt;</code>表示来判断文本是否是对于图像的描述。</p>
<p><strong>下游任务</strong></p>
<p>作者将该模型应用到视觉问答（Visual Question Answering）、视觉常识推理（Visual Commonsense Reasoning）、指示表达定位（Grounding Referring Expressions）、图像检索（Caption-Based Image Retrieval）等下游任务上，并且取得了较好的结果。</p>
<h5 id="_3-1-2-lxmert-2" tabindex="-1"><a class="header-anchor" href="#_3-1-2-lxmert-2" aria-hidden="true">#</a> <strong>3.1.2 LXMERT[2]</strong></h5>
<p><strong>模型细节</strong></p>
<p>类似于ViLBERT，对于文本和图像经过Embedding层之后被送入各自的单模态编码器，然后通过跨模态编码器进行融合。</p>
<p>图3 LXMERT模型图</p>
<p><strong>预训练任务</strong></p>
<p><strong>掩蔽文本预测（Masked Cross-Modality LM）</strong> 该任务的设置与BERT的MLM任务设置一致。作者认为除了从语言模态中的非模态词中预测被掩蔽词外，LXMERT还可利用其跨模态模型架构，从视觉模态中预测被掩蔽词，从而解决歧义问题，所以将任务命名为Masked Cross-Modality LM以强调这种差异。</p>
<p>**掩蔽图像类别预测（Detected-Label Classification）**该任务要求模型根据图像线索以及对应文本线索预测出直接预测被遮蔽ROI的目标类别。</p>
<p>**掩码图像特征回归（RoI-Feature Regression）**不同于类别预测，该任务以L2损失回归预测目标ROI特征向量。</p>
<p><strong>图片-文本对齐（Cross-Modality  Matching）</strong> 通过50%的概率替换图片对应的文本描述，使模型判断图片和文本描述是否是一致的。</p>
<p><strong>图像问答（Image Question Answering）</strong> 作者使用了有关图像问答的任务，训练数据是关于图像的文本问题。当图像和文本问题匹配时，要求模型预测这些图像有关的文本问题的答案。</p>
<p>图4 LXMERT预训练任务</p>
<p>作者将该模型在多个下游任务上进行了测试，分别在视觉问答任务（Visual Question Answering）、面向现实世界视觉推理（Visual Reasoning in the Real World）等取得了很好的效果。</p>
<h5 id="_3-1-3-ernie-vil-3" tabindex="-1"><a class="header-anchor" href="#_3-1-3-ernie-vil-3" aria-hidden="true">#</a> <strong>3.1.3 ERNIE-ViL[3]</strong></h5>
<p><strong>模型细节</strong></p>
<p>模型结构采用双流架构，对于图像和文本分别使用单模编码器进行编码然后使用跨模态Transformer实现两个模态的信息交融。值得一提的是该模型引入了场景图信息，通过将场景图知识融入多模态预训练中，使得模型更能精准把握图像和文本之间细粒度的对齐信息。模型图如图5所示。</p>
<p>图5 RNIE-ViL模型图</p>
<p>图6 场景图实例</p>
<p>模型在预训练任务中融入了场景图（如图6所示）的信息。场景图中有目标（objects）、属性（attributes）、关系（relationships）三种类别。</p>
<p><strong>预训练任务</strong></p>
<p>**场景图预测（Scene Graph Prediction）**根据给定的一段文本解析出场景图结构，然后根据解析出的场景图设计了三个子任务，分别是目标预测（object prediction）、属性预测（attribute prediction）、关系预测（relationship prediction），通过掩蔽图像和文本中场景图解析出来的目标、属性以及关系，使用模型进行预测，以让模型学习到跨模态之间的细粒度语义对齐信息。</p>
<p>同时模型还使用了传统的预训练任务，分别是<strong>掩蔽文本预测（Masked Cross-Modality LM）</strong>、<strong>掩蔽图像类别预测（Detected-Label Classification）</strong>，以及<strong>图片-文本对齐（Cross-Modality  Matching）</strong>。</p>
<p><strong>下游任务</strong></p>
<p>作者在下游多个任务上进行检测都取得了比较大的提升，具体有视觉常识推理（Visual Commonsense Reasoning）、视觉问答（Visual Question Answering）、图像检索（Image Retrieval）、文本检索（Text Retrieval）、指示表达定位（Grounding Referring Expressions）。</p>
<h4 id="_3-2-single-stream" tabindex="-1"><a class="header-anchor" href="#_3-2-single-stream" aria-hidden="true">#</a> 3.2 Single-Stream</h4>
<h5 id="_3-2-1-vl-bert-4" tabindex="-1"><a class="header-anchor" href="#_3-2-1-vl-bert-4" aria-hidden="true">#</a> <strong>3.2.1 VL-BERT[4]</strong></h5>
<p><strong>模型细节</strong></p>
<p>图7 VL-BERT模型图</p>
<p>模型架构与BERT相似，如图7所示。整个模型的输入有四部分embedding。</p>
<p>**Token embedding层：**对于文本内容使用原始BERT的设定，但是添加了一个特殊符[IMG]作为图像的token。</p>
<p>**Visual feature embedding层：**这层是为了嵌入视觉信息新添加的层。该层由视觉外部特征以及视觉几何特征拼接而成，具体而言，对于非视觉部分的输入是整个图像的提取到的特征，对应于视觉部分的输入即为图像经过预训练之后的Faster R-CNN提取到的ROI区域图像的相应视觉特征。</p>
<p>**Segment embedding层：**模型定义了A、B、C三种类型的标记，为了指示输入来自于不同的来源，A、B指示来自于文本，分别指示输入的第一个句子和第二个句子，更进一步的，可以用于指示QA任务中的问题和答案；C指示来自于图像。</p>
<p>**Position embedding层：**与BERT类似，对于文本添加一个可学习的序列位置特征来表示输入文本的顺序和相对位置。对于图像，由于图像没有相对的位置概念，所以图像的ROI特征的位置特征都是相同的。</p>
<p>作者在视觉-语言数据集以及纯语言数据集上都进行了大规模的预训练，使用概念标题数据库（Conceptual Captions）数据集作为视觉-语言语料库，该数据集包含了大约330万张带有标题注释的图片，图片来自于互联网。但是这个数据集存在一个问题就是图像对应的标题是简短的句子，这些句子很短并且很简单，为了避免模型只关注于简单子句，作者还使用了BooksCorpus和英语维基百科数据集进行纯文本的训练。</p>
<p><strong>预训练任务</strong></p>
<p><strong>掩蔽文本预测（Masked Language Model with visual Clues）</strong> 此任务与BERT中使用的Masked Language Modeling（MLM）任务非常相似。关键区别在于，在VL-BERT中包含了视觉线索，以捕获视觉和语言内容之间的依存关系。</p>
<p><strong>掩蔽图像类别预测（Masked RoI Classification with Linguistic Clues）</strong> 类似于掩蔽文本预测，每个RoI图像以15%的概率被随机掩蔽，训练的任务是根据其他线索预测被掩藏的RoI的类别标签。值得一提的是为了避免由于其他元素的视觉特征的嵌入导致视觉线索的泄漏，在使用Faster R-CNN之前，需要先将被Mask的目标区域的像素置零。</p>
<p><strong>下游任务</strong></p>
<p>作者将模型应用于视觉常识推理（Visual Commonsense Reasoning）、视觉问答（Visual Question Answering）、引用表达式理解（Referring Expression Comprehension）任务，并且都取得了显著的效果。</p>
<h5 id="_3-2-2-image-bert-5" tabindex="-1"><a class="header-anchor" href="#_3-2-2-image-bert-5" aria-hidden="true">#</a> <strong>3.2.2 Image-BERT[5]</strong></h5>
<p><strong>模型细节</strong></p>
<p>图8 Image-BERT模型图</p>
<p>ImageBERT在图像Embedding层添加了图像位置编码，即将通过Faster R-CNN得到的物体对应的ROI区域相对于全局图的位置信息，编码为五维向量，作为位置编码添加进图像的特征表示中。</p>
<p><strong>预训练任务</strong></p>
<p><strong>掩蔽文本预测（Masked Language Modeling）</strong> 此任务与BERT中使用的Masked Language Modeling（MLM）任务设定基本一致。</p>
<p><strong>掩蔽图像类别预测（Masked Object Classification）</strong> 此任务是MLM任务的扩展。与语言建模类似，通过对视觉对象进行掩蔽建模，期望模型预测出被掩蔽的图像token的类别。</p>
<p><strong>掩蔽图像特征回归（Masked Region Feature Regression）</strong> 该任务旨在预测被掩蔽的视觉对象的嵌入特征。通过在相应位置的输出特征向量后添加一个全连接层，以将其投影到与原始RoI对象特征相同的维度上，然后应用L2损失来进行回归。</p>
<p><strong>图片-文本对齐（Image-Text Matching）</strong> 除了语言建模任务和视觉内容建模任务之外，作者还添加了图片-文本对齐任务以学习图像-文本对齐。对于每个训练样本，对每个图像随机抽取负例句子，对每个句子随机抽取负例图像以生成负例训练数据，让模型判断给定的图像文本对是否对应。</p>
<p><strong>下游任务</strong></p>
<p>作者在MSCOCO以及Filcker30k数据上分别测试模型在图像检索（Image Retrieval）以及文本检索（Sentence Retrieval）任务上的性能，取得了一定的提升。</p>
<p>表1 图像-文本预训练模型概览表</p>
</div></template>


