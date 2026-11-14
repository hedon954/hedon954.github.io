import{r as e,t}from"./rolldown-runtime-C60lm6uB.js";import{i as n,r}from"./framework-Bm9u3ZJ0.js";import{t as i}from"./link-BGm47St5.js";import{c as a}from"./patterns-BHzhc7Ix.js";import{t as o}from"./UiLang-CO1RFLt3.js";import{a as s,c,i as l,m as u,n as d,o as f,r as p,s as m,u as h}from"./compose-951FSQsB.js";import{C as g,S as _,i as v,o as y,v as b}from"./react-DOsY3eov.js";import{t as x}from"./GardenBlock-Dbjzym-K.js";import{t as S}from"./marked.esm-BBpM7LIl.js";import{a as C,i as w,n as T,t as E}from"./ui-studio-keys-C-TFHi7-.js";var D=r();function ee(e,t){return(0,D.jsx)(o,{lang:t,children:(0,D.jsx)(x,{dataPayload:encodeURIComponent(JSON.stringify(e))})})}var O=e(n(),1);function k(e,t={}){if(f(e.body)){let n=m({id:g(e.info)},e.body);if(n.error)return{ok:!1,uncompiled:!1,doc:null,diagnostics:[{...n.error,line:e.startLine,severity:`error`}]};let r=y(n.uiSource,{...t,lineOffset:0}),i=Object.fromEntries(Object.entries(s).map(([e,t])=>[t,e])),a=e=>e.replace(/<(\/?)([A-Z][A-Za-z0-9]*)/gu,(e,t,n)=>i[n]?`<${t}${i[n]}`:e),o=e.body.split(/\r?\n/u),c=n.uiSource.split(`
`),l=r.diagnostics.map(t=>{let n=a(c[t.line-1]??``).trim(),r=n?o.flatMap((e,t)=>e.trim()===n?[t]:[]):[];return{...t,line:r.length===1?e.startLine+1+r[0]:e.startLine,message:a(t.message)}});return{...r,uncompiled:!1,doc:n.props,diagnostics:l}}let n=u(e.body);return n.uncompiled?{ok:!1,uncompiled:!0,diagnostics:[],doc:null}:n.ok?{ok:!0,uncompiled:!1,diagnostics:[],doc:n.doc}:{ok:!1,uncompiled:!1,doc:null,diagnostics:[{code:n.error.code,line:e.startLine,message:n.error.message,severity:`error`}]}}function A({fence:e=``,note:t=null},n={}){let r=b(e).filter(e=>e.lang===`garden-compose`&&e.closed),i=r.length===1?k(r[0],{skipData:!0}):null,a=new Set,o=e=>{if(Array.isArray(e)){e.forEach(o);return}if(!(!e||typeof e!=`object`)){e.t===`el`&&a.add(e.n),e.type&&s[e.type]&&a.add(s[e.type]);for(let t of Object.values(e))t&&typeof t==`object`&&o(t)}};o(i?.root??i?.doc);let c=!!(i?.ok&&!i.uncompiled),l=(n.components??[]).every(e=>a.has(e)),u=!n.assert||!!(Array.isArray(i?.header?.expect)&&i.header.expect.length),d=!n.note||!!t?.trim();return{valid:c,components:l,assert:u,note:d,ok:c&&l&&u&&d}}t(((e,t)=>{t.exports={}}))();var j={zh:{checkPass:e=>`检查通过（${e} 个文件）\n`,composeUncompiled:(e,t)=>`${e}:${t}  -  compose-uncompiled  还有没编译的 compose 想法\n`,promptWritten:(e,t)=>`已写入 ${e}${t?`，并已复制到剪贴板`:``}。\n`,reminder:e=>`提醒  ${e}\n`,promptIntro:`请处理下面 Garden 博文里列出的块：没编译的想法要编译，有错误的交互块要修好。`,promptRulesHeader:`要求：`,promptRulePrompt:`- 先运行 npx garden ui prompt，读组件目录和规则；仓库里有 garden-compose skill 时按它的流程做。`,promptRuleApply:`- 只改列出的块，用 npx garden ui apply <稿件> --id <id> 写回（无 id 用扫描得到的 --at 行号；总是加 --base 原围栏哈希），不要直接编辑稿件。`,promptRuleCheck:`- 不改作者原话的意思。改完运行 npx garden ui check <稿件>，直到通过。`,promptRuleOffline:`- 如果你不能访问这个仓库，就只回复每块修好后的完整围栏。`,promptItem:(e,t,n,r,i)=>`${e}. ${t}，第 ${n}–${r} 行，${i}`,promptCompose:`   - compose-uncompiled：围栏类型保持 garden compose。把原话原样放进 <intent>，正文写成 DIL（Markdown + 小写目录标签；play 可用 {@body}/{expr}/{#if}/{#each}）。用内容岛组合 Markdown 与受校验的安全 HTML；执行代码只用隔离 sandbox。`,promptDiag:(e,t,n)=>`   - 第 ${e} 行 ${t}：${n}`,promptFence:`当前围栏：`,promptTruncated:e=>`（只附了前 ${e} 块的原文，其余按上面的位置去稿件里找。）`,promptStandalone:`以下是 Garden Compose的完整写作规则、组件参考和配方：`},en:{checkPass:e=>`Check passed (${e} ${e===1?`file`:`files`})\n`,composeUncompiled:(e,t)=>`${e}:${t}  -  compose-uncompiled  uncompiled compose idea remaining\n`,promptWritten:(e,t)=>`Wrote ${e}${t?` and copied it to the clipboard`:``}.\n`,reminder:e=>`note  ${e}\n`,promptIntro:`Handle the Garden post blocks listed below: compile uncompiled ideas, and fix interactive blocks that have errors.`,promptRulesHeader:`Rules:`,promptRulePrompt:`- First run npx garden ui prompt and read the component catalog and rules; if the repo has the garden-compose skill, follow its flow.`,promptRuleApply:`- Change only the listed blocks. Write them back with npx garden ui apply <post> --id <id> (without an id use the scanned --at line; always include the original --base hash). Do not edit the post by hand.`,promptRuleCheck:`- Keep the author's meaning. When done, run npx garden ui check <post> until it passes.`,promptRuleOffline:`- If you cannot access this repository, reply with only the finished fence for each block.`,promptItem:(e,t,n,r,i)=>`${e}. ${t}, lines ${n}–${r}, ${i}`,promptCompose:`   - compose-uncompiled: keep the fence type garden compose. Put the author's sentence in <intent> unchanged and write DIL (Markdown + lowercase catalog tags; play may use {@body}/{expr}/{#if}/{#each}). Do not write YAML slots, switch components, or write arbitrary HTML or scripts.`,promptDiag:(e,t,n)=>`   - line ${e} ${t}: ${n}`,promptFence:`Current fence:`,promptTruncated:e=>`(Only the first ${e} fences are attached; open the post for the rest.)`,promptStandalone:`Full Garden ui writing rules, component reference, and recipes:`}},M=(e=`zh`)=>j[e===`en`?`en`:`zh`],N=10;function P(e,{standaloneReference:t=null,lang:n=`zh`}={}){let r=M(n),i=[r.promptIntro,``,r.promptRulesHeader,r.promptRulePrompt,r.promptRuleApply,r.promptRuleCheck,r.promptRuleOffline,``];return e.forEach((e,t)=>{let{file:n,block:a,diagnostics:o}=e,s=a.id?`id: ${a.id}`:a.intentHash?`intent-hash: ${a.intentHash}`:`--at ${a.startLine}${a.hash?` --base ${a.hash}`:``}`;i.push(r.promptItem(t+1,n,a.startLine,a.endLine,s)),a.lang===`garden-compose`&&a.status===`uncompiled`&&i.push(r.promptCompose);for(let e of o)i.push(r.promptDiag(e.line,e.code,e.message));t<N?i.push(``,r.promptFence,``,a.raw,``):i.push(``)}),e.length>N&&i.push(r.promptTruncated(N),``),t&&i.push(`---`,``,r.promptStandalone,``,t),`${i.join(`
`).trimEnd()}\n`}var F=[`compose`],I={compose:{label:`组合文章内容与交互`,when:`在一个场景里组合正文、说明图、资源、文件、关系和可调参数。叶子保留 Markdown 与安全 HTML。`,whenNot:`普通段落、标准列表或一张图片已经足够时，不必再包场景。`,keys:[`caption`,`intent`,`expect`,`id`,`frame`],example:"```garden compose\n"+p+"\n```",triggers:[`garden`,`gcompose`]}};``+l;var L=()=>[...F];function R(e,{info:t=`garden compose`,...n}={}){let r=a(t,e);if(!r||r.error)return{block:null,payload:null,diagnostics:[{code:r?.error?.code??`compose-invalid`,message:r?.error?.message??`Invalid Compose`,line:1,severity:`error`}],html:``};if(r.mode===`play`){let{payload:e,check:t}=v(r.uiSource??``,n);return{block:e?{...r,payload:e}:null,payload:e,diagnostics:t.diagnostics,html:e?C(e,`html`):``}}return{block:null,payload:null,diagnostics:[],html:d(r.props)}}var z={State:{caption:`State 声明可调的量，Slider 绑上去就能拧。`,body:`{@body const [batch, setBatch] = DIL.useState(1)}

<slider bind="batch" label="batch" min={1} max={32} />
现在 batch 是 **{batch}**。`},Let:{caption:`Let 从状态算出派生值，状态一变就跟着重算。`,body:`{@body const [seq, setSeq] = DIL.useState(4096)}
{@body const mem = 2 * 32 * 8 * 128 * seq * 2}


<slider bind="seq" label="序列长度" min={1024} max={32768} scale="log" format="thousands" />
序列 {thousands(seq)} 时，KV cache 要 **{bytes(mem)}**。`},If:{caption:`If 只在条件为真时显示里面的内容。`,body:`{@body const [batch, setBatch] = DIL.useState(4)}

<slider bind="batch" label="batch" min={1} max={32} />
{#if batch > 16}
batch 超过 16，单卡显存会很紧张。
{/if}`},Each:{caption:`Each 对数组的每一项重复渲染。`,body:`{@body const [n, setN] = DIL.useState(3)}

<slider bind="n" label="项数" min={1} max={6} />
<table columns={["序号", "平方"]}>
  {#each range(1, n + 1) as i}
    <row cells={[i, i * i]} />
  {/each}
</table>`},Stack:{caption:`Stack 用来调整一组内容的间距。`,body:`
<stack gap={1}>
<badge tone="new">新算</badge> 这一步只算新 token。

<badge tone="cached">读缓存</badge> 过去的 K/V 直接读。
</stack>`},Columns:{caption:`Columns 并排放内容，窄屏自动叠放。`,body:`
<columns>
  <card title="Mutex">同一时刻只有一个持有者。</card>
  <card title="RwLock" tone="accent">多个读者可以同时持有。</card>
</columns>`},Card:{caption:`Card 是带边框的分组。`,body:`
<card title="RwLock" tone="accent">读多写少时，读者可以并行。</card>`},Tabs:{caption:`Tabs 让几个视角轮流看。`,body:`
<tabs>
  <tab title="MHA">每个查询头都有自己的一组 K/V。</tab>
  <tab title="GQA">几个查询头共用一组 K/V，缓存小好几倍。</tab>
</tabs>`},Steps:{caption:`Steps 一步一步看，带上一步、下一步和进度。`,body:`
<steps>
  <step title="Prefill">一次算完全部 prompt 的 K/V。</step>
  <step title="Decode 1">新 token 只算自己的 K/V，追加一行。</step>
  <step title="Decode 2">再追加一行，其余读缓存。</step>
</steps>`},Slider:{caption:`Slider 拖动改一个数，对数刻度端点是 2 的幂时只停在 2 的幂上。`,body:`{@body const [seq, setSeq] = DIL.useState(4096)}

<slider bind="seq" label="序列长度" min={1024} max={32768} scale="log" format="thousands" />
当前：{thousands(seq)}。`},Choice:{caption:`Choice 从几个选项里选一个。`,body:`{@body const [heads, setHeads] = DIL.useState(8)}

<choice bind="heads" label="KV 头数" options={[1, 2, 4, 8, 32]} />
KV cache 是 MHA 的 **1/{32 / heads}**。`},Toggle:{caption:`Toggle 打开或关掉一个条件。`,body:`{@body const [fault, setFault] = DIL.useState(false)}

<toggle bind="fault" label="注入故障" />
{fault ? "第 2 块坏了，之后的块全部解不出来。" : "所有块都能正常解密。"}`},Button:{caption:`Button 点一下改状态或回到默认值。`,body:`{@body const [count, setCount] = DIL.useState(0)}

<button set={{ count: count + 1 }}>加一</button> <button reset>重置</button>

已经点了 **{count}** 次。`},Checklist:{caption:`Checklist 是可以一项项勾掉的清单。`,body:`
<checklist title="上线前" items={[
  { title: "跑完回归测试" },
  { title: "备份数据库", note: "确认能恢复" },
  { time: "22:00", title: "切流量" },
]} />`},Stat:{caption:`Stat 显示一个醒目的数字。`,body:`{@body const [batch, setBatch] = DIL.useState(8)}
{@body const mem = 2 * 32 * 8 * 128 * 4096 * batch * 2}


<slider bind="batch" label="batch" min={1} max={32} />
<stat label="KV 显存" value={mem} format="bytes" hint={"batch = " + batch} />`},Meter:{caption:`Meter 显示占比，超出上限时整条变红。`,body:`{@body const [batch, setBatch] = DIL.useState(8)}
{@body const mem = 2 * 32 * 8 * 128 * 32768 * batch * 2}


<slider bind="batch" label="batch" min={1} max={32} />
<meter label="80 GB 显卡" max={80 * 1073741824} format="bytes" parts={[
  { label: "权重", value: 16 * 1073741824, tone: "muted" },
  { label: "KV cache", value: mem, tone: "accent" },
]} />`},Badge:{caption:`Badge 是可以写在句子中间的小标签。`,body:`
这一格是 <badge tone="new">新算</badge>，那一格是 <badge tone="cached">读缓存</badge>。`},Table:{caption:`Table 列出精确数值，行可以来自 Row 或 data。`,body:`{@body const bench = [{ t: 1, q: 98000 }, { t: 4, q: 312000 }, { t: 8, q: 356000 }]}

<table data={bench} rowTone={t == 4 ? "accent" : null} columns={[{ label: "线程", key: "t" }, { label: "QPS", key: "q", format: "thousands" }]} />`},Grid:{caption:`Grid 是检视格，点一格看这一格的说明。`,body:`
<grid cols={["块1", "块2", "块3"]} legend={{ same: "密文相同" }}>
  <row label="明文" cells={["A", "B", "A"]} />
  <row label="ECB" cells={["X", "Y", "X"]} tones={["same", "plain", "same"]} notes={["和块3相同", "", "和块1相同"]} />
</grid>`},Chart:{caption:`Chart 画函数曲线或数据图，sweep 模式标出当前值。`,body:`{@body const [batch, setBatch] = DIL.useState(4)}
{@body const [seq, setSeq] = DIL.useState(4096)}
{@body const mem = 2 * 32 * 8 * 128 * seq * batch * 2}


<slider bind="batch" label="batch" min={1} max={32} />
<slider bind="seq" label="序列长度" min={1024} max={32768} scale="log" format="thousands" />
<chart sweep="seq" yLabel="KV 显存">
  <line y={mem} label="当前 batch" format="bytes" />
  <line y={mem / batch} label="batch = 1" format="bytes" tone="muted" />
</chart>`},Data:{caption:`Data 引用同名目录里已有的 CSV / JSON；这里用 Let 代替演示。`,body:`{@body const bench = [{ threads: 1, qps: 98000 }, { threads: 2, qps: 181000 }, { threads: 4, qps: 312000 }]}

<chart data={bench} x={threads} xLabel="I/O 线程" yFormat="si">
  <bar y={qps} label="QPS" />
</chart>`},Image:{caption:`Image 在插图上放热点，点序号看说明。`,body:`
<image src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><rect width='400' height='200' fill='%23eeeeeb'/><circle cx='110' cy='130' r='50' fill='none' stroke='%2365707d' stroke-width='6'/><circle cx='290' cy='130' r='50' fill='none' stroke='%2365707d' stroke-width='6'/><path d='M110 130 L180 70 L290 130 M180 70 L240 70' stroke='%23202124' stroke-width='6' fill='none'/></svg>" alt="一辆示意的自行车" ratio="2:1">
  <hotspot x={0.45} y={0.35} title="车架">两个三角形把座椅、车把和脚踏连在一起。</hotspot>
  <hotspot x={0.27} y={0.65} title="车轮">辐条把轮毂和轮圈连起来。</hotspot>
</image>`},Code:{caption:`Code 高亮当前执行到的行，可以随步骤变化。`,body:`{@body const [step, setStep] = DIL.useState(0)}

<steps bind="step">
  <step title="取中点">先算 mid。</step>
  <step title="比较">a[mid] 和目标比大小。</step>
</steps>
<code lang="go" highlight={["2", "3"][step]} code={\`for lo <= hi {
	mid := (lo + hi) / 2
	if a[mid] < x {
		lo = mid + 1
	}
}\`} />`},Stepper:{caption:`Stepper 用加减号改一个数量，旁边的句子跟着变。`,body:`{@body const [guests, setGuests] = DIL.useState(5)}
{@body const lamb = guests * 0.4}


<stepper bind="guests" label="人数" min={1} max={12} unit="人" />
<caption>{guests} 人时，带骨羊腿大约 {lamb} kg。</caption>`},Caption:{caption:`Caption 是比正文小一号的灰色说明。`,body:`
<caption>统计期为 2024 年 8 月至 2025 年 8 月。</caption>`},Divider:{caption:`Divider 把上下两段隔开。`,body:`
上面是结论。
<divider />
下面是口径。`},Cite:{caption:`Cite 是来源胶囊，写了网址就带站点图标。`,body:`
数字来自年报 <cite label="Alibaba Group" href="https://www.alibabagroup.com" />`},Pie:{caption:`Pie 用圆环看各项占比。`,body:`
<pie title="收入结构">
  <slice label="商品销售" value={78} />
  <slice label="平台服务" value={13} />
  <slice label="物流及其他" value={9} />
</pie>`},Diagram:{caption:`Diagram 用 Mermaid 画图，高亮当前所在的节点。`,body:`{@body const [step, setStep] = DIL.useState(0)}

<steps bind="step">
  <step title="CLOSED">还没有连接。</step>
  <step title="SYN-SENT">发出 SYN，等对方回应。</step>
  <step title="ESTABLISHED">握手完成。</step>
</steps>
<diagram highlight={[["closed"], ["synsent"], ["established"]][step]} mermaid={\`graph LR
  closed[CLOSED] --> synsent[SYN-SENT] --> established[ESTABLISHED]\`} />`}};function B(e){let t=z[e];return t?"```garden compose #demo-"+e.toLowerCase()+`
caption: `+JSON.stringify(t.caption)+`
---
`+t.body+"\n```":null}var V=Object.fromEntries(Object.entries(s).map(([e,t])=>[t,e]));function H(e){let t=e?_(e)[0]:null;return t?R(t.body,{info:`${t.lang} ${t.info}`}):null}function U({fence:e,onStart:t}){let[n,r]=(0,O.useState)(!1);return t?(0,D.jsx)(`button`,{type:`button`,className:`garden-ui-button garden-ui-tone-accent`,onClick:()=>t(e),children:`用它开始`}):(0,D.jsx)(`button`,{type:`button`,className:`garden-ui-button`,onClick:()=>{navigator.clipboard?.writeText(e).then(()=>r(!0))},children:n?`已复制围栏`:`复制围栏`})}function W({spec:e}){let t=Object.entries(e.props);return t.length?(0,D.jsxs)(`table`,{className:`garden-catalog-props`,children:[(0,D.jsx)(`thead`,{children:(0,D.jsxs)(`tr`,{children:[(0,D.jsx)(`th`,{children:`属性`}),(0,D.jsx)(`th`,{children:`说明`})]})}),(0,D.jsx)(`tbody`,{children:t.map(([e,t])=>{let n=t;return(0,D.jsxs)(`tr`,{children:[(0,D.jsxs)(`td`,{children:[(0,D.jsx)(`code`,{children:e}),n.required?` · 必填`:``,n.literal?` · 字面量`:``]}),(0,D.jsxs)(`td`,{children:[n.desc,n.values?`（${n.values.join(` / `)}）`:``,n.default===void 0?``:`，默认 ${JSON.stringify(n.default)}`]})]},e)})})]}):null}var G=[`配方`,...h],K=new Set;function q(e){return K.add(e),window.addEventListener(`hashchange`,e),()=>{K.delete(e),window.removeEventListener(`hashchange`,e)}}function J(e){let t=e.replace(/^#/,``);if(t.startsWith(`component-`)){let e=c[s[t.slice(10)]];if(e?.group)return e.group}else if(t===`配方`||t.startsWith(`recipe-`))return`配方`;else try{let e=decodeURIComponent(t);if(G.includes(e))return e}catch{}return`展示`}function Y(e){window.history.replaceState(null,``,`#${encodeURIComponent(e)}`);for(let e of K)e()}function X({recipes:e=[],onStart:t,renderBlock:n}){let r=(0,O.useMemo)(()=>e.map(w).filter(e=>e.fence),[e]),[i,a]=(0,O.useState)(``),o=J((0,O.useSyncExternalStore)(q,()=>window.location.hash,()=>``)),[s,l]=(0,O.useState)(null),u=i.trim().toLowerCase(),d=e=>{if(!u)return!0;let t=c[e];return[V[e]??e,t.summary,...t.phrases].some(e=>e.toLowerCase().includes(u))},f=(e,t)=>!u||e.toLowerCase().includes(u)||t.toLowerCase().includes(u),p=e=>e===`配方`?r.filter(e=>f(e.title,e.intro)).map(e=>({id:`recipe-${e.file}`,title:e.title.replace(/^配方：/,``),fence:e.fence,spec:null,intro:e.intro})):Object.keys(c).filter(t=>c[t].group===e&&t in z&&t in V&&d(t)).map(e=>({id:`component-${V[e]}`,title:V[e],fence:B(e),spec:c[e],intro:``})),m=G.filter(e=>u?p(e).length>0:e===`配方`?r.length>0:!0),h=m.includes(o)?o:m[0],g=h?p(h):[],_=e=>{l(null),Y(e)};return(0,D.jsxs)(`div`,{className:`garden-catalog`,children:[(0,D.jsxs)(`section`,{className:`garden-author-catalog`,children:[(0,D.jsx)(`h2`,{children:`写作块`}),(0,D.jsxs)(`p`,{children:[`文章组件只使用 `,(0,D.jsx)(`code`,{children:`garden compose`}),`。在同一个入口内组合正文、图形、资源和交互；下方的组件示例也使用同一个 Compose 入口。`]}),(0,D.jsx)(`ul`,{children:L().map(e=>{let t=I[e];return(0,D.jsxs)(`li`,{children:[(0,D.jsxs)(`code`,{children:[`garden `,e]}),` · `,t.label,`。`,t.when]},e)})})]}),(0,D.jsxs)(`nav`,{className:`garden-catalog-nav`,"aria-label":`大类`,children:[(0,D.jsx)(`input`,{type:`search`,placeholder:`搜索`,value:i,onChange:e=>a(e.target.value),"aria-label":`搜索组件`}),m.map(e=>(0,D.jsx)(`button`,{type:`button`,"aria-current":e===h?`page`:void 0,onClick:()=>_(e),children:e},e))]}),g.length?(0,D.jsx)(`div`,{className:`garden-catalog-grid`,children:g.map(e=>{let r=H(e.fence),i=s===e.id;return(0,D.jsxs)(`article`,{className:`garden-catalog-card`,id:e.id,children:[(0,D.jsx)(`button`,{type:`button`,className:`garden-catalog-card-name`,"aria-expanded":i,onClick:()=>l(i?null:e.id),children:e.title}),(0,D.jsx)(`div`,{className:`garden-catalog-well`,children:r?.block?n?n(r.block):(0,D.jsx)(`div`,{dangerouslySetInnerHTML:{__html:r.html}}):(0,D.jsx)(`p`,{className:`garden-catalog-empty`,children:r?.diagnostics.map(e=>e.message).join(`；`)||`没有预览`})}),i?(0,D.jsxs)(`div`,{className:`garden-catalog-more`,children:[e.spec?(0,D.jsx)(`p`,{children:e.spec.summary}):null,e.spec?.phrases.length?(0,D.jsxs)(`p`,{className:`garden-catalog-phrases`,children:[`可以这样说：`,e.spec.phrases.map(e=>`“${e}”`).join(`、`)]}):null,e.intro?(0,D.jsx)(`div`,{className:`garden-catalog-intro`,dangerouslySetInnerHTML:{__html:S.parse(e.intro,{async:!1})}}):null,e.spec?(0,D.jsx)(W,{spec:e.spec}):null,e.fence?(0,D.jsx)(`pre`,{children:(0,D.jsx)(`code`,{children:e.fence})}):null,e.fence&&r?.block?(0,D.jsx)(U,{fence:e.fence,onStart:t}):null]}):null]},e.id)})}):(0,D.jsx)(`p`,{className:`garden-catalog-empty`,children:`没有符合的组件。`})]})}function Z({recipes:e}){return(0,D.jsx)(`section`,{className:`admin-panel ui-admin-catalog`,children:(0,D.jsx)(X,{renderBlock:ee,recipes:e,onStart:e=>{window.localStorage.setItem(T,e),window.location.assign(`/admin/ui`)}})})}var Q={uncompiled:`未编译`,stale:`过期`,error:`有错`,ok:`正常`},te=e=>{let t=/^content\/posts\/(.+)\.md$/u.exec(e);return t?`/blog/${t[1]}`:null};function ne({siteUrl:e}){let[t,n]=(0,O.useState)(null),[r,a]=(0,O.useState)(null),[o,s]=(0,O.useState)(`todo`),[c,l]=(0,O.useState)(null);(0,O.useEffect)(()=>{let e=!0;return fetch(`/api/admin/ui/blocks`).then(e=>e.json().then(t=>({ok:e.ok,body:t}))).then(({ok:t,body:r})=>{e&&(t?n(r.files):a(r.error??`读取失败。`))}).catch(()=>{e&&a(`读取失败。`)}),()=>{e=!1}},[]);let u=e=>o===`all`||(o===`todo`?e.status!==`ok`:e.status===o),d=async(e,t)=>{let n=P([{file:e.path,block:t,diagnostics:t.diagnostics.filter(e=>e.severity===`error`)}]);await navigator.clipboard.writeText(n),l(`${e.path}:${t.startLine}`)},f={uncompiled:0,stale:0,error:0,ok:0};for(let e of t??[])for(let t of e.blocks)f[t.status]+=1;return(0,D.jsxs)(`section`,{className:`admin-panel ui-admin-blocks`,children:[(0,D.jsx)(`div`,{className:`admin-panel-heading`,children:(0,D.jsx)(`h2`,{children:`文章里的块`})}),(0,D.jsx)(`p`,{className:`ui-studio-meta`,children:`这里是仓库里已经推送的内容，包括草稿。还没推的本地改动看不到。`}),(0,D.jsx)(`div`,{className:`ui-studio-switch`,role:`group`,"aria-label":`按状态筛选`,children:[`todo`,`uncompiled`,`stale`,`error`,`ok`,`all`].map(e=>(0,D.jsx)(`button`,{type:`button`,"aria-pressed":o===e,onClick:()=>s(e),children:e===`todo`?`需要处理 ${f.uncompiled+f.stale+f.error}`:e===`all`?`全部`:`${Q[e]} ${f[e]}`},e))}),r?(0,D.jsx)(`p`,{className:`ui-studio-message ui-studio-message-error`,children:r}):null,!t&&!r?(0,D.jsx)(`p`,{className:`ui-studio-meta`,children:`正在扫描仓库…`}):null,t?.map(t=>{let n=t.blocks.filter(u);if(!n.length)return null;let r=`/admin/preview/${t.path.replace(/^content\//u,``).replace(/\.md$/u,``)}`,a=t.draft?null:te(t.path);return(0,D.jsxs)(`article`,{className:`ui-admin-file`,children:[(0,D.jsxs)(`h3`,{children:[t.title??t.path,t.draft?(0,D.jsx)(`span`,{className:`admin-status draft`,children:`草稿`}):null]}),(0,D.jsx)(`p`,{className:`ui-studio-meta`,children:t.path}),(0,D.jsxs)(`table`,{className:`ui-admin-table`,children:[(0,D.jsx)(`thead`,{children:(0,D.jsxs)(`tr`,{children:[(0,D.jsx)(`th`,{children:`块`}),(0,D.jsx)(`th`,{children:`状态`}),(0,D.jsx)(`th`,{children:`说明`}),(0,D.jsx)(`th`,{children:`操作`})]})}),(0,D.jsx)(`tbody`,{children:n.map(n=>(0,D.jsxs)(`tr`,{children:[(0,D.jsxs)(`td`,{children:[`Compose`,` · `,n.id??`第 ${n.startLine} 行`]}),(0,D.jsx)(`td`,{children:(0,D.jsx)(`span`,{className:`ui-admin-status ui-admin-status-${n.status}`,children:Q[n.status]})}),(0,D.jsxs)(`td`,{children:[n.caption??n.intent?.split(`
`)[0]??``,n.diagnostics.length?`（${n.diagnostics.length} 条诊断）`:``]}),(0,D.jsxs)(`td`,{className:`ui-admin-actions`,children:[(0,D.jsx)(i,{href:`/admin/ui?post=${encodeURIComponent(t.path)}&line=${n.startLine}`,children:`在写作台打开`}),n.status===`ok`?null:(0,D.jsx)(`button`,{type:`button`,onClick:()=>d(t,n),children:c===`${t.path}:${n.startLine}`?`已复制`:`复制修复提示词`}),(0,D.jsx)(i,{href:`${r}${n.id?`#ui-${n.id}`:``}`,children:`草稿预览`}),a?(0,D.jsx)(`a`,{href:`${e}${a}${n.id?`#ui-${n.id}`:``}`,target:`_blank`,rel:`noreferrer`,children:`公开页面`}):null]})]},n.startLine))})]})]},t.path)})]})}function $(e){let t=e.length||1;return{pass:e.filter(e=>e.ok).length,total:e.length,rate:Math.round(e.filter(e=>e.ok).length/t*100),rounds:(e.reduce((e,t)=>e+t.rounds,0)/t).toFixed(2),tokens:e.reduce((e,t)=>e+t.tokens,0)}}function re({cases:e,configured:t}){let[n,r]=(0,O.useState)([]),[i,a]=(0,O.useState)(!1),o=(0,O.useSyncExternalStore)(()=>()=>{},()=>!0,()=>!1),[s]=(0,O.useState)(()=>window.localStorage.getItem(E)),c=(0,O.useMemo)(()=>{if(!o)return null;try{return s?JSON.parse(s):null}catch{return null}},[s,o]);async function l(){a(!0);let t=[];r([]);for(let n of e){let e=performance.now();try{let r=await fetch(`/api/admin/ui/draft`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({mode:`create`,instruction:n.intent})}),i=await r.json(),a=A({fence:i.fence??``,note:i.note},n.expect),o=r.ok&&a.valid&&!(i.diagnostics??[]).some(e=>e.severity===`error`),{components:s,assert:c,note:l}=a;t.push({id:n.id,ok:o&&s&&c&&l,rounds:i.rounds??0,components:s,assert:c,note:l,tokens:i.usage?.total_tokens??0,ms:Math.round(performance.now()-e),error:r.ok?void 0:i.error})}catch(r){t.push({id:n.id,ok:!1,rounds:0,components:!1,assert:!1,note:!1,tokens:0,ms:Math.round(performance.now()-e),error:r instanceof Error?r.message:`失败`})}r([...t])}window.localStorage.setItem(E,JSON.stringify(t)),a(!1)}let u=$(n),d=c?$(c):null;return(0,D.jsxs)(`section`,{className:`admin-panel ui-admin-evals`,children:[(0,D.jsx)(`div`,{className:`admin-panel-heading`,children:(0,D.jsx)(`h2`,{children:`模型自检`})}),(0,D.jsxs)(`p`,{className:`ui-studio-meta`,children:[`会逐条调用写作台，一共 `,e.length,` 次，计入每小时次数。换了模型或提示词之后跑一次。`]}),(0,D.jsx)(`div`,{className:`admin-actions`,children:(0,D.jsx)(`button`,{type:`button`,className:`admin-primary-button`,disabled:!t||i,onClick:l,children:i?`正在跑 ${n.length}/${e.length}…`:`开始自检`})}),t?null:(0,D.jsx)(`p`,{className:`ui-studio-message ui-studio-message-error`,children:`后台还没接上模型。`}),n.length?(0,D.jsxs)(`p`,{className:`ui-studio-meta`,children:[`本次：通过 `,u.pass,`/`,u.total,`（`,u.rate,`%），平均修复 `,u.rounds,` 轮，共 `,u.tokens,` token。`,d?` 上次：通过 ${d.pass}/${d.total}（${d.rate}%），平均修复 ${d.rounds} 轮，共 ${d.tokens} token。`:``]}):d?(0,D.jsxs)(`p`,{className:`ui-studio-meta`,children:[`上次：通过 `,d.pass,`/`,d.total,`（`,d.rate,`%），平均修复 `,d.rounds,` 轮，共 `,d.tokens,` token。`]}):null,(0,D.jsxs)(`table`,{className:`ui-admin-table`,children:[(0,D.jsx)(`thead`,{children:(0,D.jsxs)(`tr`,{children:[(0,D.jsx)(`th`,{children:`样例`}),(0,D.jsx)(`th`,{children:`结果`}),(0,D.jsx)(`th`,{children:`修复轮数`}),(0,D.jsx)(`th`,{children:`组件`}),(0,D.jsx)(`th`,{children:`expect`}),(0,D.jsx)(`th`,{children:`提醒`}),(0,D.jsx)(`th`,{children:`token`}),(0,D.jsx)(`th`,{children:`耗时`})]})}),(0,D.jsx)(`tbody`,{children:e.map(e=>{let t=n.find(t=>t.id===e.id);return(0,D.jsxs)(`tr`,{children:[(0,D.jsx)(`td`,{title:e.intent,children:e.id}),(0,D.jsx)(`td`,{children:t?t.ok?`通过`:t.error??`未通过`:`—`}),(0,D.jsx)(`td`,{children:t?t.rounds:`—`}),(0,D.jsx)(`td`,{children:t?t.components?`✓`:`缺 ${(e.expect.components??[]).join(`、`)}`:(e.expect.components??[]).join(`、`)}),(0,D.jsx)(`td`,{children:e.expect.assert?t?t.assert?`✓`:`缺`:`要`:`—`}),(0,D.jsx)(`td`,{children:e.expect.note?t?t.note?`✓`:`缺`:`要`:`—`}),(0,D.jsx)(`td`,{children:t?t.tokens:`—`}),(0,D.jsx)(`td`,{children:t?`${(t.ms/1e3).toFixed(1)}s`:`—`})]},e.id)})})]})]})}export{ne as AdminBlocks,Z as AdminCatalog,re as AdminEvals};