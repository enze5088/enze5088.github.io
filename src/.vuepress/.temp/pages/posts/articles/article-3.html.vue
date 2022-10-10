<template><div><h1 id="github进行fork后如何与原仓库同步" tabindex="-1"><a class="header-anchor" href="#github进行fork后如何与原仓库同步" aria-hidden="true">#</a> Github进行fork后如何与原仓库同步</h1>
<p>实在是……有太多人同时在帮忙修订错别字或优化 xiaolai 的 <code v-pre>the-craft-of-selfteaching</code> 了。如果你提交的 pull request 未被接受且得到回复说：“重新fork”，其实是你遇到一个问题：</p>
<blockquote>
<ul>
<li>在你 fork 之后， xiaolai 的仓库又更新了；</li>
<li>但 github 不会自动帮你把 xiaolai 的仓库 同步给你 fork 后的仓库；</li>
<li>导致你提交 pull request 时的版本和 xiaolai 的版本不一致。</li>
</ul>
</blockquote>
<p>这个问题，用显得更“专业点”的说法，叫做：<code v-pre>Github进行fork后如何与原仓库同步</code>。那到底怎么做呢？</p>
<p>最省事的办法可能是：</p>
<blockquote>
<ul>
<li>在你fork的仓库setting页翻到最下方，然后delete这个仓库；</li>
<li>然后重新fork xiaolai 的仓库，并 git clone 到你的本地。</li>
</ul>
</blockquote>
<p>有时候，你需要用到这个省事的办法，比如 xiaolai 的仓库再次整理了 commit 。但在更多情况下，删掉自己fork的库，应该是你的最后选择，而不应该是首选。</p>
<p>和很多人一起向 xiaolai 提交 pull request，这实在是一个反复练习 <code v-pre>merge</code> （中文说法：合并，或版本合并）的机会。毫不夸张地讲，版本管理是软件工程极其重要的规范，也是极其基础的必备技能。而 <code v-pre>merge</code> 则是版本管理中最必须也最常用的场景。</p>
<p>那要不然，就多练练？以下是傻瓜版操作步骤，还细心配了截图，保管你从 0 也能上手。至于原理嘛，慢慢再搞懂吧。</p>
<h3 id="merge前的设定" tabindex="-1"><a class="header-anchor" href="#merge前的设定" aria-hidden="true">#</a> merge前的设定</h3>
<p>step 1、进入到本地仓库的目录。</p>
<p>下面所有操作，如无特别说明，都是在你的本地仓库的目录下操作。比如我的本地仓库为<code v-pre>/from-liujuanjuan-the-craft-of-selfteaching</code></p>
<p><a href="https://user-images.githubusercontent.com/31027645/54422899-6938e880-474a-11e9-8768-27ac24673e28.png" target="_blank" rel="noopener noreferrer"><img src="article-3.assets/54422899-6938e880-474a-11e9-8768-27ac24673e28.png" alt="image" loading="lazy"><ExternalLinkIcon/></a></p>
<p>step 2、执行命令 <code v-pre>git remote -v</code> 查看你的远程仓库的路径：</p>
<p><a href="https://user-images.githubusercontent.com/31027645/54422975-95ed0000-474a-11e9-96bf-1018d6bc06f2.png" target="_blank" rel="noopener noreferrer"><img src="article-3.assets/54422975-95ed0000-474a-11e9-96bf-1018d6bc06f2.png" alt="image" loading="lazy"><ExternalLinkIcon/></a></p>
<p>如果只有上面2行，说明你未设置 <code v-pre>upstream</code> （中文叫：上游代码库）。一般情况下，设置好一次 <code v-pre>upstream</code> 后就无需重复设置。</p>
<p>step 3、执行命令 <code v-pre>git remote add upstream https://github.com/selfteaching/the-craft-of-selfteaching.git</code> 把 xiaolai 的仓库设置为你的 <code v-pre>upstream</code> 。这个命令执行后，没有任何返回信息；所以再次执行命令 <code v-pre>git remote -v</code> 检查是否成功。</p>
<p><a href="https://user-images.githubusercontent.com/31027645/54423107-d8aed800-474a-11e9-9ab8-7bb901181283.png" target="_blank" rel="noopener noreferrer"><img src="article-3.assets/54423107-d8aed800-474a-11e9-9ab8-7bb901181283.png" alt="image" loading="lazy"><ExternalLinkIcon/></a></p>
<p>step 4、执行命令 <code v-pre>git status</code> 检查本地是否有未提交的修改。如果有，则把你本地的有效修改，先从本地仓库推送到你的github仓库。最后再执行一次 <code v-pre>git status</code> 检查本地已无未提交的修改。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git add -A` 或者 `git add filename`
`git commit -m "your note"`
`git push origin master`
`git status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注1：这一步作为新手，建议严格执行，是为了避免大量无效修改或文本冲突带来的更复杂局面。</p>
<p>注2：如果你已经在fork后的仓库提交了大量对 xiaolai 的仓库并没有价值的修改，那么想要pull request，还是重新回到本文最初的“最省事办法”吧。</p>
<h3 id="merge-的关键命令" tabindex="-1"><a class="header-anchor" href="#merge-的关键命令" aria-hidden="true">#</a> merge 的关键命令</h3>
<p>以下操作紧接着上面的步骤。</p>
<p>step 5、执行命令 <code v-pre>git fetch upstream</code> 抓取 xiaolai 原仓库的更新：</p>
<p><a href="https://user-images.githubusercontent.com/31027645/54448734-60b2d300-4787-11e9-9fdf-90fcc2e66052.png" target="_blank" rel="noopener noreferrer"><img src="article-3.assets/54448734-60b2d300-4787-11e9-9fdf-90fcc2e66052.png" alt="image" loading="lazy"><ExternalLinkIcon/></a></p>
<p>step 6、执行命令 <code v-pre>git checkout master</code> 切换到 master 分支：</p>
<p><a href="https://user-images.githubusercontent.com/31027645/54448759-6dcfc200-4787-11e9-8bbc-a5beef23ea88.png" target="_blank" rel="noopener noreferrer"><img src="article-3.assets/54448759-6dcfc200-4787-11e9-8bbc-a5beef23ea88.png" alt="image" loading="lazy"><ExternalLinkIcon/></a></p>
<p>step 7、执行命令 <code v-pre>git merge upstream/master</code> 合并远程的master分支：</p>
<p><a href="https://user-images.githubusercontent.com/31027645/54449526-47128b00-4789-11e9-9add-09217eb91a68.png" target="_blank" rel="noopener noreferrer"><img src="article-3.assets/54449526-47128b00-4789-11e9-9add-09217eb91a68.png" alt="image" loading="lazy"><ExternalLinkIcon/></a></p>
<p>step 8、执行命令 <code v-pre>git push </code>把本地仓库向github仓库（你fork到自己名下的仓库）推送修改</p>
<p>如果担心自己不小心改了哪里，可以再次执行命令 <code v-pre>git status</code> 检查哪些文件有变化。这个操作仅是检查，不会改变任何状态，放心用。</p>
<p><a href="https://user-images.githubusercontent.com/31027645/54449665-a07aba00-4789-11e9-9181-bdcc814fffe6.png" target="_blank" rel="noopener noreferrer"><img src="article-3.assets/54449665-a07aba00-4789-11e9-9181-bdcc814fffe6.png" alt="image" loading="lazy"><ExternalLinkIcon/></a></p>
<p>现在你已经解决了fork的仓库和原仓库版本不一致的问题。可以放心向 xiaolai 发起 pull request 了。如果以上操作你花了不少时间，而 xiaolai 的仓库 又恰好更新了。很好，一次新的练习机会来了……</p>
<h2 id="ps-如何优雅的获得上游最新内容" tabindex="-1"><a class="header-anchor" href="#ps-如何优雅的获得上游最新内容" aria-hidden="true">#</a> PS: 如何优雅的获得上游最新内容?</h2>
<blockquote>
<p>... 必须重新弄一个当前最新版本到本地</p>
</blockquote>
<p>这是一个常见 github 操作, 但是, 其操作涉及复杂的 git 概念,
所以, 在此简要描述一下最小过程(MVP):</p>
<p>1: 首先, 新增 remote (远程上游仓库), 即, 将本书仓库, 追加为 fork 仓库的上游仓库</p>
<blockquote>
<p>git remote add upstream <a href="https://github.com/selfteaching/the-craft-of-selfteaching.git" target="_blank" rel="noopener noreferrer">https://github.com/selfteaching/the-craft-of-selfteaching.git<ExternalLinkIcon/></a></p>
</blockquote>
<p>此时检验本地工作复本仓库的配置就可以看到变化:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$  cat .git/config

...

[branch "master"]
	remote = origin
	merge = refs/heads/master
[remote "upstream"]
	url = https://github.com/selfteaching/the-craft-of-selfteaching.git
	fetch = +refs/heads/*:refs/remotes/upstream/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在底部追加了 upstream (上游)仓库信息, 可以用 branch 命令来检验</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$  git branch -a
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/master
  remotes/upstream/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2: 同步上游修订, 使用 fetch 命令</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$  git fetch upstream
remote: Enumerating objects: 2, done.
remote: Counting objects: 100% (2/2), done.
remote: Total 12 (delta 2), reused 2 (delta 2), pack-reused 10
Unpacking objects: 100% (12/12), done.
From https://github.com/selfteaching/the-craft-of-selfteaching
   7b3aeea..4646cc8  master     -> upstream/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后, 在此基础上进行修订, 以及 Pull-Request 才是正义的.</p>
<p>简单的说:</p>
<ul>
<li>声明上游仓库</li>
<li>每次进行修订前先 fetch 上游修订</li>
<li>如果和本地有冲突, 先在本地解决冲突</li>
</ul>
<h2 id="pps" tabindex="-1"><a class="header-anchor" href="#pps" aria-hidden="true">#</a> PPS:</h2>
<blockquote>
<p>软件工程中协同方式原则</p>
</blockquote>
<p>在哪些情况下可以直接使用master branch来提交Pull Request：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>你只想为主项目贡献某一处代码，贡献完自己的repo就可以扔的那种。
你打算为主项目长期贡献代码，而且希望追随原项目的主线开发，不保留自己的特性。
你打算为主项目长期贡献代码，默认master branch追随原项目主线，把自己的特性放到别的branch中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在哪种情况下应该使用主题branch来提交Pull Request：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>想用master branch完全来做自己的开发。在这种情形下：会从上游库合并更新，但是这些merge本身的commits显然不可能作为返还到上游库的Pull Request的一部分。
存在自己的（未被merge或者不想被merge到上游库的）commits。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>鉴于Git的分布式开发哲学，每一个库均可以看作是一个独立的项目，显然是后一种（为每一个新特性建立一个专门的主题branch来向主项目推送Pull Request）的贡献方式更可取。
解释完毕(｀・ω・´)</p>
<p>如果远程主仓库的历史 commits 被修改整理过，而自己在未同步远程主仓库的情况下有新的 PR 需要提交，可以有两个方案处理：</p>
<ol>
<li>fork 最新的远程主仓库，重新提交
1.1 备份自己的改动
1.2 删除自己的 fork 的仓库，重新 fork 远程主仓库
1.3 将最新改动的应用到新 fork 的仓库，然后提交 PR</li>
<li>强制同步远程主仓库的所有历史 commits，处理冲突，再次提交
1.1 备份自己的改动（可以选择用一个新的分支或者直接将问题复制到本地存储的其他文件目录）
1.2 添加远程主仓库为自己本地仓库的一个 upstream（如命名为 origin），使用以下命令强制同步
<code v-pre>git fetch origin &amp;&amp; git reset --hard origin/master &amp;&amp; git clean -f -d</code>
1.3 将自己的改动应用到强制同步过的分支，如果使用的其他分支备份，可以使用 rebase 命令合并过来，如果有冲突，处理冲突
1.4 检查自己的 commits 是否正确合理，无问题则可重新提交 PR</li>
</ol>
<p>从 <a href="https://www.jianshu.com/p/cf64c800da16" target="_blank" rel="noopener noreferrer">origin vs upstream 的说明<ExternalLinkIcon/></a> 这篇文章的解释，总结出合并的简要过程：</p>
<h3 id="版本一-fork-后未做任何改动" tabindex="-1"><a class="header-anchor" href="#版本一-fork-后未做任何改动" aria-hidden="true">#</a> 版本一：fork 后未做任何改动</h3>
<p>fork xiaolai 老师的 repository 后，直接 clone 到自己的电脑上，没有做任何改动，那么，
做完 liujuanjuan 的步骤后，提交 pull requests 的方法：</p>
<ol>
<li>创建一个自己玩耍、测试、修改用的分支，随便怎么折腾；</li>
<li>发现有什么想要修改 xiaolai 老师的原始内容后：
<ol>
<li>切换回到 master 分支；</li>
<li>使用命令 <code v-pre>git fetch upstream</code>，把 xiaolai 最新的内容进行更新。</li>
<li>如果自己想要修改的内容已经被别人修改了，恭喜，你迟了。【下面的步骤就不用做了】。</li>
</ol>
</li>
<li>在自己电脑上进行修改，提交到自己的 master 中。</li>
<li>在网页上，按照 xiaolai 老师介绍的方法提交 pull requests 就好了。</li>
</ol>
<h3 id="版本二-fork-后做了改动" tabindex="-1"><a class="header-anchor" href="#版本二-fork-后做了改动" aria-hidden="true">#</a> 版本二：fork 后做了改动</h3>
<ol>
<li>先把自己的改动 push 到自己的 repository 中。</li>
<li>从 版本一 中的 2.1 开始操作。（解释：这样应该会把自己做的修改覆盖掉，所以，两个选择：1）备份自己的修改内容先；2）建立一个 branch 进行保留。【注意】：如果使用 delete repository 原始方法，branch 的方法保留的备份也没有啦，虽然现在自己的修改内容可以一点价值都没有，消失掉就消失掉吧/微笑）</li>
</ol>
<h3 id="可能的意外情况" tabindex="-1"><a class="header-anchor" href="#可能的意外情况" aria-hidden="true">#</a> 可能的意外情况：</h3>
<ol>
<li>发生了 conflict（冲突）。应该是操作慢了，xiaolai 的版本又更新了，那么重新操作版本一，也就是一个不断重复的<strong>循环操作</strong>。</li>
<li>无关紧要的变动，比如 Python 版本不一致，导致很多没用的变动。我是把自己电脑的原来的程序全部重新安装了一遍，遇到了超级多的问题，一度很爆炸，但是过来了。你也可以的。</li>
</ol>
<p>要用 branch 提交 pull requests，而不能用 master 分支进行，要不然一些不顺利的情况发生（比如没有采纳merge、误删文件等等）都无法进行 upstream 的同步。</p>
<p>为什么按照 liujuanjuan 和 xiaolai 的步骤全部做完之后，只有第一次是成功的、后面的提交就会出现问题，就是这个原因。</p>
<p>连接里面有个很关键的信息：</p>
<ol>
<li>无论被 merge 了还是 拒绝了，都可以单独对 branch进行操作，无论成功与否，delete 掉提交 PR 的 branch 是完全无害的；</li>
<li>且这样，master 的同步才不会出现问题。</li>
</ol>
<p>PS：为什么会知道这些？因为创建了两个帐号，互相进行各种可能的操作（upstream 删除了但是 origin 没有操作等等各种组合），捯饬了一个下午，一直在纠结所有分类情况里面的剩下的两种无法解决的：</p>
<p>upstream 删除内容，我的 master 怎么就 fetch 不过来？</p>
<p>我删除了的内容，如何用 upstream 的进行还原？</p>
<p>总结：全都是用分支 branch 进行隔离，这样，永远不会发生 delete 原始 fork。（除非不玩这个项目了）</p>
</div></template>


