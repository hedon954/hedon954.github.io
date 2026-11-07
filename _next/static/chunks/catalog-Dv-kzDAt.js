import{t as e}from"./examples-BvshhoCr.js";var t=[`card`,`stat`,`compare`,`timeline`,`chart`,`compose`,`html`,`interactive`,`file`,`relations`,`list`,`choice`];function n(){return t.filter(e=>!i[e]?.deprecated)}var r={embed:{name:`card`,suggestion:"`embed` 已改为 `garden card`"},widget:{name:`html`,suggestion:"`widget` 已改为 `garden html`"},intent:{name:``,suggestion:"`intent` 已改为 `garden`（想法，发布前编译）"},ui:{name:`compose`,suggestion:"`ui` 已改为 `garden compose`（可调参数写在 compose 里）"},"ui-error":{name:`compose`,suggestion:"`ui` 已改为 `garden compose`"}},i={card:{label:`资源卡`,when:`一篇论文、一个仓库或一本书，读者需要标题、链接和一句说明。`,whenNot:`正文里已经有这句话时，不要再包一张卡。`,keys:[`url`,`title`,`description`,`image`,`alt`,`points`,`meta`,`text`,`source`,`site`,`items`,`takeaway`,`cards`],itemKeys:[`url`,`title`,`description`,`image`,`alt`,`meta`,`text`,`source`,`takeaway`],example:"```garden card\nurl: https://arxiv.org/abs/2309.06180\ntitle: PagedAttention\ndescription: vLLM 的分页 KV 管理。\n```",triggers:[`gcard`]},stat:{label:`指标`,when:`一个短指标：标签、数字、可选的一句说明和来源。`,whenNot:`数字需要读者自己代入参数时，写成想法，编译成 compose。`,keys:[`items`,`label`,`value`,`unit`,`caption`,`source`,`text`],example:`\`\`\`garden stat
items:
  - label: Llama-2-13B · 4K 上下文
    value: 3.2
    unit: GiB
    source: https://arxiv.org/abs/2309.06180
\`\`\``,triggers:[`gstat`]},compare:{label:`对比`,when:`两三件东西并排，每格约 60 字以内。原文是「X：Y」列表时，每格写成一行带引号的「X：Y」。`,whenNot:`任何一格超过约 60 字时，用原文的列表，不要并排。`,keys:[`items`],itemKeys:[`title`,`text`,`verdict`],example:`\`\`\`garden compare
items:
  - title: 自旋锁
    text: 临界区极短时忙等，不进入休眠。
  - title: 互斥锁
    text: 争用久就休眠，避免空转占满 CPU。
\`\`\``,triggers:[`gcompare`]},timeline:{label:`时间线`,when:`版本演进或一段历史，每条有日期和一句说明。`,whenNot:`没有时间顺序时，用普通列表。`,keys:[`title`,`items`],itemKeys:[`date`,`title`,`text`,`source`],example:`\`\`\`garden timeline
items:
  - date: 2015
    title: 并发标记
    text: 暂停时间降下来。
  - date: 2017
    title: 栈重扫移出 STW
    text: 停顿通常低于 100 微秒。
  - date: 2022
    title: 软内存上限
    text: 运行时可以设 GOMEMLIMIT。
\`\`\``,triggers:[`gtimeline`]},chart:{label:`图表`,when:`一组已经算好的数字，读者不需要拧参数。`,whenNot:`数字会随读者的选择变化时，写成想法，编译成 compose（带 Slider）。`,keys:[`type`,`title`,`x`,`series`,`data`,`unit`,`caption`,`xLabel`,`yLabel`],example:`\`\`\`garden chart
type: bar
title: 示例延迟
x: 方案
series:
  - name: 延迟
    data: [120, 85]
unit: ms
\`\`\``,triggers:[`gchart`]},compose:{label:`说明图与可调参数`,when:`静态说明图或可调 play；写 DIL（Markdown+标签），不是 YAML。`,whenNot:`放一张真图或自定义 HTML 时，用图片或 garden html。`,keys:[`caption`,`intent`,`expect`,`id`],example:`\`\`\`garden compose\n${e}\n\`\`\``,triggers:[`gcompose`]},html:{label:`自定义 HTML`,when:`目录里的组件画不出来的示意图或小工具，写在同名目录的 HTML 里。`,whenNot:`能用 card、chart、compose 或正文说清时，不要写 HTML。`,keys:[`src`,`code`,`title`,`height`],example:"```garden html\nsrc: ./demo.html\ntitle: 示意图\n```",triggers:[`ghtml`]},interactive:{label:`交互（已并入 compose）`,deprecated:!0,when:`旧稿兼容。新文章请写 garden compose（{@body}/{expr}/{#if}/{#each}）。`,whenNot:`新文章不要再写 interactive。`,keys:[`id`,`caption`,`intent`,`expect`],example:`\`\`\`garden compose #kv-memory
caption: 显存与 batch、序列长度都成正比。
intent: |
  让读者拧 batch，看 KV 显存。
---
{@body const [batch, setBatch] = DIL.useState(1)}
{@body const mem = 2 * 32 * 8 * 128 * 4096 * batch * 2}
<slider min={1} max={32} value={batch} onChange={setBatch} label="batch" />
<stat label="KV 显存" value={mem} format="bytes" />
\`\`\``,triggers:[`ginteractive`]},file:{label:`文件`,when:`给读者一份可以下载的文件：规格包、PDF、示例代码。Markdown、HTML、PDF 还能在页面里预览。`,whenNot:`只是引用一个网页时用 card；要在正文里直接展示的图表或页面用 html。`,keys:[`src`,`title`,`note`,`files`],itemKeys:[`src`,`title`,`note`],builtKeys:[`resolved`],example:"```garden file\nsrc: ./post-name/spec.zip\nnote: 一句话说明里面有什么\n```",triggers:[`gfile`]},relations:{label:`关系图`,when:`三到六个关键要素，读者需要看清谁影响谁、哪些是双向的；首尾相接的循环也用它，把每一步写成一条 link。`,whenNot:"要素更多、有分支或先后顺序时，用 ```mermaid 流程图；只走一遍的步骤用 garden list。",keys:[`title`,`items`,`center`,`links`,`caption`],itemKeys:[`title`,`text`],linkKeys:[`from`,`to`,`style`,`direction`,`label`],example:`\`\`\`garden relations
items:
  - title: 观察
    text: 记下发生了什么
  - title: 假设
    text: 猜一个原因
  - title: 实验
    text: 只改一个变量
  - title: 复盘
    text: 留下能复用的结论
links:
  - from: 1
    to: 2
  - from: 2
    to: 3
  - from: 3
    to: 4
  - from: 4
    to: 1
  - from: 4
    to: 2
    style: dashed
    label: 改写
caption: 复盘的结论会改写下一轮的假设。
\`\`\``,triggers:[`grel`]},list:{label:`图标列表`,when:`几条并列的行为、信号或做法，每条配一个线条图标；带标题时每条可以写几段说明。`,whenNot:`条目之间有先后顺序或要编号时，用普通有序列表。`,keys:[`title`,`items`,`caption`],itemKeys:[`icon`,`title`,`text`],example:`\`\`\`garden list
items:
  - icon: search
    text: 搜索「降噪耳机」
  - icon: eye
    text: 看了 5 个商品详情
\`\`\``,triggers:[`glist`]},choice:{label:`选择卡`,when:`给读者两三个具体选项让他选一个，每个选项有图标、一个醒目的数字和一句说明。`,whenNot:`选项会改变后面的计算结果时，写成想法，编译成 compose。`,keys:[`title`,`items`,`none`,`caption`],itemKeys:[`icon`,`value`,`text`,`label`,`reply`],example:`\`\`\`garden choice
title: 你更倾向哪一种？
items:
  - icon: shield
    value: ¥2,950
    text: 原装，价格略高
    label: 更看重可靠
  - icon: wallet
    value: ¥2,450
    text: 换过电池，价格更低
    label: 更看重价格
none:
  label: 都不合适
\`\`\``,triggers:[`gchoice`]}},a={label:`想法`,when:`还不确定用哪个组件时，写一句想让读者看出什么。`,whenNot:`发布前必须编译掉。草稿里可以留着。`,example:"```garden\n让读者……；想让读者看出……\n```",triggers:[`garden想法`,`gidea`]};function o(e){let t=String(e||``).toLowerCase();if(r[t])return{lang:t,...r[t]};if(t.startsWith(`garden:`)){let e=t.slice(7);return{lang:t,name:e,suggestion:`\`${t}\` 已改为 \`garden ${e}\``}}return null}function s(e){return t.includes(e)}export{n as a,o as i,a as n,s as r,i as t};