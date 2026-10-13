import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{i as t,r as n}from"./framework-B9TdZ8VI.js";import{t as r}from"./link-VTc3S5RX.js";import{t as i}from"./marked.esm-BFq4lnkb.js";import{C as a,T as o}from"./state-6Os9geY8.js";import{c as s,t as c}from"./compile-pJSfsLzD.js";import{t as l}from"./react-BksxxTMI.js";import{i as u,n as d,t as f}from"./ui-studio-keys-B_cW8aEJ.js";var p=e(t(),1),m=10;function h(e,{standaloneReference:t=null}={}){let n=[`请修复下面 Garden 博文里有错误的 ui 块。`,``,`要求：`,`- 先运行 npx garden ui prompt，读组件目录和规则；仓库里有 garden-ui skill 时按它的流程做。`,`- 只改列出的块，用 npx garden ui apply <稿件> --id <id> 写回（没有 id 的 intent 用 --intent-hash），不要直接编辑稿件。`,`- 不改 intent 的原意。修好后运行 npx garden ui check <稿件>，直到通过。`,`- 如果你不能访问这个仓库，就只回复每块修好后的完整围栏。`,``];return e.forEach((e,t)=>{let{file:r,block:i,diagnostics:a}=e,o=i.id?`id: ${i.id}`:`intent-hash: ${i.intentHash}`;n.push(`${t+1}. ${r}，第 ${i.startLine}–${i.endLine} 行，${o}`),i.lang===`intent`&&n.push(`   - intent-uncompiled：这段想法还没编译，请按原话编译成 ui 块（或判断后写回正文）。`);for(let e of a)n.push(`   - 第 ${e.line} 行 ${e.code}：${e.message}`);t<m?n.push(``,`当前围栏：`,``,i.raw,``):n.push(``)}),e.length>m&&n.push(`（只附了前 ${m} 块的原文，其余按上面的位置去稿件里找。）`,``),t&&n.push(`---`,``,`以下是 Garden ui 块的完整写作规则、组件参考和配方：`,``,t),`${n.join(`
`).trimEnd()}\n`}var g={State:{caption:`State 声明可调的量，Slider 绑上去就能拧。`,body:`<State batch={1} />
<Slider bind="batch" label="batch" min={1} max={32} />
现在 batch 是 **{batch}**。`},Let:{caption:`Let 从状态算出派生值，状态一变就跟着重算。`,body:`<State seq={4096} />
<Let mem={2 * 32 * 8 * 128 * seq * 2} />
<Slider bind="seq" label="序列长度" min={1024} max={32768} scale="log" format="thousands" />
序列 {thousands(seq)} 时，KV cache 要 **{bytes(mem)}**。`},If:{caption:`If 只在条件为真时显示里面的内容。`,body:`<State batch={4} />
<Slider bind="batch" label="batch" min={1} max={32} />
<If test={batch > 16}>
batch 超过 16，单卡显存会很紧张。
</If>`},Each:{caption:`Each 对数组的每一项重复渲染。`,body:`<State n={3} />
<Slider bind="n" label="项数" min={1} max={6} />
<Table columns={["序号", "平方"]}>
  <Each of={range(1, n + 1)} as="i">
    <Row cells={[i, i * i]} />
  </Each>
</Table>`},Stack:{caption:`Stack 用来调整一组内容的间距。`,body:`<Stack gap={1}>
<Badge tone="new">新算</Badge> 这一步只算新 token。

<Badge tone="cached">读缓存</Badge> 过去的 K/V 直接读。
</Stack>`},Columns:{caption:`Columns 并排放内容，窄屏自动叠放。`,body:`<Columns>
  <Card title="Mutex">同一时刻只有一个持有者。</Card>
  <Card title="RwLock" tone="accent">多个读者可以同时持有。</Card>
</Columns>`},Card:{caption:`Card 是带边框的分组。`,body:`<Card title="RwLock" tone="accent">读多写少时，读者可以并行。</Card>`},Tabs:{caption:`Tabs 让几个视角轮流看。`,body:`<Tabs>
  <Tab title="MHA">每个查询头都有自己的一组 K/V。</Tab>
  <Tab title="GQA">几个查询头共用一组 K/V，缓存小好几倍。</Tab>
</Tabs>`},Steps:{caption:`Steps 一步一步看，带上一步、下一步和进度。`,body:`<Steps>
  <Step title="Prefill">一次算完全部 prompt 的 K/V。</Step>
  <Step title="Decode 1">新 token 只算自己的 K/V，追加一行。</Step>
  <Step title="Decode 2">再追加一行，其余读缓存。</Step>
</Steps>`},Slider:{caption:`Slider 拖动改一个数，对数刻度端点是 2 的幂时只停在 2 的幂上。`,body:`<State seq={4096} />
<Slider bind="seq" label="序列长度" min={1024} max={32768} scale="log" format="thousands" />
当前：{thousands(seq)}。`},Choice:{caption:`Choice 从几个选项里选一个。`,body:`<State heads={8} />
<Choice bind="heads" label="KV 头数" options={[1, 2, 4, 8, 32]} />
KV cache 是 MHA 的 **1/{32 / heads}**。`},Toggle:{caption:`Toggle 打开或关掉一个条件。`,body:`<State fault={false} />
<Toggle bind="fault" label="注入故障" />
{fault ? "第 2 块坏了，之后的块全部解不出来。" : "所有块都能正常解密。"}`},Button:{caption:`Button 点一下改状态或回到默认值。`,body:`<State count={0} />
<Button set={{ count: count + 1 }}>加一</Button> <Button reset>重置</Button>

已经点了 **{count}** 次。`},Checklist:{caption:`Checklist 是可以一项项勾掉的清单。`,body:`<Checklist title="上线前" items={[
  { title: "跑完回归测试" },
  { title: "备份数据库", note: "确认能恢复" },
  { time: "22:00", title: "切流量" },
]} />`},Stat:{caption:`Stat 显示一个醒目的数字。`,body:`<State batch={8} />
<Let mem={2 * 32 * 8 * 128 * 4096 * batch * 2} />
<Slider bind="batch" label="batch" min={1} max={32} />
<Stat label="KV 显存" value={mem} format="bytes" hint={"batch = " + batch} />`},Meter:{caption:`Meter 显示占比，超出上限时整条变红。`,body:`<State batch={8} />
<Let mem={2 * 32 * 8 * 128 * 32768 * batch * 2} />
<Slider bind="batch" label="batch" min={1} max={32} />
<Meter label="80 GB 显卡" max={80 * 1073741824} format="bytes" parts={[
  { label: "权重", value: 16 * 1073741824, tone: "muted" },
  { label: "KV cache", value: mem, tone: "accent" },
]} />`},Badge:{caption:`Badge 是可以写在句子中间的小标签。`,body:`这一格是 <Badge tone="new">新算</Badge>，那一格是 <Badge tone="cached">读缓存</Badge>。`},Table:{caption:`Table 列出精确数值，行可以来自 Row 或 data。`,body:`<Let bench={[{ t: 1, q: 98000 }, { t: 4, q: 312000 }, { t: 8, q: 356000 }]} />
<Table data={bench} rowTone={t == 4 ? "accent" : null} columns={[{ label: "线程", key: "t" }, { label: "QPS", key: "q", format: "thousands" }]} />`},Grid:{caption:`Grid 是检视格，点一格看这一格的说明。`,body:`<Grid cols={["块1", "块2", "块3"]} legend={{ same: "密文相同" }}>
  <Row label="明文" cells={["A", "B", "A"]} />
  <Row label="ECB" cells={["X", "Y", "X"]} tones={["same", "plain", "same"]} notes={["和块3相同", "", "和块1相同"]} />
</Grid>`},Chart:{caption:`Chart 画函数曲线或数据图，sweep 模式标出当前值。`,body:`<State batch={4} seq={4096} />
<Let mem={2 * 32 * 8 * 128 * seq * batch * 2} />
<Slider bind="batch" label="batch" min={1} max={32} />
<Slider bind="seq" label="序列长度" min={1024} max={32768} scale="log" format="thousands" />
<Chart sweep="seq" yLabel="KV 显存">
  <Line y={mem} label="当前 batch" format="bytes" />
  <Line y={mem / batch} label="batch = 1" format="bytes" tone="muted" />
</Chart>`},Data:{caption:`Data 引用同名目录里已有的 CSV / JSON；这里用 Let 代替演示。`,body:`<Let bench={[{ threads: 1, qps: 98000 }, { threads: 2, qps: 181000 }, { threads: 4, qps: 312000 }]} />
<Chart data={bench} x={threads} xLabel="I/O 线程" yFormat="si">
  <Bar y={qps} label="QPS" />
</Chart>`},Image:{caption:`Image 在插图上放热点，点序号看说明。`,body:`<Image src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'><rect width='400' height='200' fill='%23eeeeeb'/><circle cx='110' cy='130' r='50' fill='none' stroke='%2365707d' stroke-width='6'/><circle cx='290' cy='130' r='50' fill='none' stroke='%2365707d' stroke-width='6'/><path d='M110 130 L180 70 L290 130 M180 70 L240 70' stroke='%23202124' stroke-width='6' fill='none'/></svg>" alt="一辆示意的自行车" ratio="2:1">
  <Hotspot x={0.45} y={0.35} title="车架">两个三角形把座椅、车把和脚踏连在一起。</Hotspot>
  <Hotspot x={0.27} y={0.65} title="车轮">辐条把轮毂和轮圈连起来。</Hotspot>
</Image>`},Code:{caption:`Code 高亮当前执行到的行，可以随步骤变化。`,body:`<State step={0} />
<Steps bind="step">
  <Step title="取中点">先算 mid。</Step>
  <Step title="比较">a[mid] 和目标比大小。</Step>
</Steps>
<Code lang="go" highlight={["2", "3"][step]} code={\`for lo <= hi {
	mid := (lo + hi) / 2
	if a[mid] < x {
		lo = mid + 1
	}
}\`} />`},Stepper:{caption:`Stepper 用加减号改一个数量，旁边的句子跟着变。`,body:`<State guests={5} />
<Let lamb={guests * 0.4} />
<Stepper bind="guests" label="人数" min={1} max={12} unit="人" />
<Caption>{guests} 人时，带骨羊腿大约 {lamb} kg。</Caption>`},Caption:{caption:`Caption 是比正文小一号的灰色说明。`,body:`<Caption>统计期为 2024 年 8 月至 2025 年 8 月。</Caption>`},Divider:{caption:`Divider 把上下两段隔开。`,body:`上面是结论。
<Divider />
下面是口径。`},Cite:{caption:`Cite 是来源胶囊，写了网址就带站点图标。`,body:`数字来自年报 <Cite label="Alibaba Group" href="https://www.alibabagroup.com" />`},Pie:{caption:`Pie 用圆环看各项占比。`,body:`<Pie title="收入结构">
  <Slice label="商品销售" value={78} />
  <Slice label="平台服务" value={13} />
  <Slice label="物流及其他" value={9} />
</Pie>`},Diagram:{caption:`Diagram 用 Mermaid 画图，高亮当前所在的节点。`,body:`<State step={0} />
<Steps bind="step">
  <Step title="CLOSED">还没有连接。</Step>
  <Step title="SYN-SENT">发出 SYN，等对方回应。</Step>
  <Step title="ESTABLISHED">握手完成。</Step>
</Steps>
<Diagram highlight={[["closed"], ["synsent"], ["established"]][step]} mermaid={\`graph LR
  closed[CLOSED] --> synsent[SYN-SENT] --> established[ESTABLISHED]\`} />`}};function _(e){let t=g[e];return t?`\`\`\`ui\n---\nid: ${`demo-${e.toLowerCase()}`}\ncaption: ${t.caption}\n---\n${t.body}\n\`\`\``:null}var v=n();function y(e){if(!e)return null;let t=s(e)[0]?.body;return t?c(t).payload??null:null}function b({fence:e,onStart:t}){let[n,r]=(0,p.useState)(!1);return t?(0,v.jsx)(`button`,{type:`button`,className:`garden-ui-button garden-ui-tone-accent`,onClick:()=>t(e),children:`用它开始`}):(0,v.jsx)(`button`,{type:`button`,className:`garden-ui-button`,onClick:()=>{navigator.clipboard?.writeText(e).then(()=>r(!0))},children:n?`已复制围栏`:`复制围栏`})}function x({spec:e}){let t=Object.entries(e.props);return t.length?(0,v.jsxs)(`table`,{className:`garden-catalog-props`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:`属性`}),(0,v.jsx)(`th`,{children:`说明`})]})}),(0,v.jsx)(`tbody`,{children:t.map(([e,t])=>{let n=t;return(0,v.jsxs)(`tr`,{children:[(0,v.jsxs)(`td`,{children:[(0,v.jsx)(`code`,{children:e}),n.required?` · 必填`:``,n.literal?` · 字面量`:``]}),(0,v.jsxs)(`td`,{children:[n.desc,n.values?`（${n.values.join(` / `)}）`:``,n.default===void 0?``:`，默认 ${JSON.stringify(n.default)}`]})]},e)})})]}):null}var S=[`配方`,...o],C=new Set;function w(e){return C.add(e),window.addEventListener(`hashchange`,e),()=>{C.delete(e),window.removeEventListener(`hashchange`,e)}}function T(e){let t=e.replace(/^#/,``);if(t.startsWith(`component-`)){let e=a[t.slice(10)];if(e?.group)return e.group}else if(t===`配方`||t.startsWith(`recipe-`))return`配方`;else try{let e=decodeURIComponent(t);if(S.includes(e))return e}catch{}return`展示`}function E(e){window.history.replaceState(null,``,`#${encodeURIComponent(e)}`);for(let e of C)e()}function D({recipes:e=[],onStart:t}){let n=(0,p.useMemo)(()=>e.map(u).filter(e=>e.fence),[e]),[r,o]=(0,p.useState)(``),s=T((0,p.useSyncExternalStore)(w,()=>window.location.hash,()=>``)),[c,d]=(0,p.useState)(null),f=r.trim().toLowerCase(),m=e=>{if(!f)return!0;let t=a[e];return[e,t.summary,...t.phrases].some(e=>e.toLowerCase().includes(f))},h=(e,t)=>!f||e.toLowerCase().includes(f)||t.toLowerCase().includes(f),C=e=>e===`配方`?n.filter(e=>h(e.title,e.intro)).map(e=>({id:`recipe-${e.file}`,title:e.title.replace(/^配方：/,``),fence:e.fence,spec:null,intro:e.intro})):Object.keys(a).filter(t=>a[t].group===e&&t in g&&m(t)).map(e=>({id:`component-${e}`,title:e,fence:_(e),spec:a[e],intro:``})),D=S.filter(e=>f?C(e).length>0:e===`配方`?n.length>0:!0),O=D.includes(s)?s:D[0],k=O?C(O):[],A=e=>{d(null),E(e)};return(0,v.jsxs)(`div`,{className:`garden-catalog`,children:[(0,v.jsxs)(`nav`,{className:`garden-catalog-nav`,"aria-label":`大类`,children:[(0,v.jsx)(`input`,{type:`search`,placeholder:`搜索`,value:r,onChange:e=>o(e.target.value),"aria-label":`搜索组件`}),D.map(e=>(0,v.jsx)(`button`,{type:`button`,"aria-current":e===O?`page`:void 0,onClick:()=>A(e),children:e},e))]}),k.length?(0,v.jsx)(`div`,{className:`garden-catalog-grid`,children:k.map(e=>{let n=y(e.fence),r=c===e.id;return(0,v.jsxs)(`article`,{className:`garden-catalog-card`,id:e.id,children:[(0,v.jsx)(`button`,{type:`button`,className:`garden-catalog-card-name`,"aria-expanded":r,onClick:()=>d(r?null:e.id),children:e.title}),(0,v.jsx)(`div`,{className:`garden-catalog-well`,children:n?(0,v.jsx)(l,{payload:n}):(0,v.jsx)(`p`,{className:`garden-catalog-empty`,children:`没有预览`})}),r?(0,v.jsxs)(`div`,{className:`garden-catalog-more`,children:[e.spec?(0,v.jsx)(`p`,{children:e.spec.summary}):null,e.spec?.phrases.length?(0,v.jsxs)(`p`,{className:`garden-catalog-phrases`,children:[`可以这样说：`,e.spec.phrases.map(e=>`“${e}”`).join(`、`)]}):null,e.intro?(0,v.jsx)(`div`,{className:`garden-catalog-intro`,dangerouslySetInnerHTML:{__html:i.parse(e.intro,{async:!1})}}):null,e.spec?(0,v.jsx)(x,{spec:e.spec}):null,e.fence?(0,v.jsx)(`pre`,{children:(0,v.jsx)(`code`,{children:e.fence})}):null,e.fence&&n?(0,v.jsx)(b,{fence:e.fence,onStart:t}):null]}):null]},e.id)})}):(0,v.jsx)(`p`,{className:`garden-catalog-empty`,children:`没有符合的组件。`})]})}function O({recipes:e}){return(0,v.jsx)(`section`,{className:`admin-panel ui-admin-catalog`,children:(0,v.jsx)(D,{recipes:e,onStart:e=>{window.localStorage.setItem(d,e),window.location.assign(`/admin/ui`)}})})}var k={uncompiled:`未编译`,stale:`过期`,error:`有错`,ok:`正常`},A=e=>{let t=/^content\/posts\/(.+)\.md$/u.exec(e);if(t)return`/blog/${t[1]}`;let n=/^content\/thoughts\/(.+)\.md$/u.exec(e);return n?`/thoughts/${n[1]}`:null};function j({siteUrl:e}){let[t,n]=(0,p.useState)(null),[i,a]=(0,p.useState)(null),[o,s]=(0,p.useState)(`todo`),[c,l]=(0,p.useState)(null);(0,p.useEffect)(()=>{let e=!0;return fetch(`/api/admin/ui/blocks`).then(e=>e.json().then(t=>({ok:e.ok,body:t}))).then(({ok:t,body:r})=>{e&&(t?n(r.files):a(r.error??`读取失败。`))}).catch(()=>{e&&a(`读取失败。`)}),()=>{e=!1}},[]);let u=e=>e.lang!==`widget`&&(o===`all`||(o===`todo`?e.status!==`ok`:e.status===o)),d=async(e,t)=>{let n=h([{file:e.path,block:t,diagnostics:t.diagnostics.filter(e=>e.severity===`error`)}]);await navigator.clipboard.writeText(n),l(`${e.path}:${t.startLine}`)},f={uncompiled:0,stale:0,error:0,ok:0};for(let e of t??[])for(let t of e.blocks)t.lang!==`widget`&&(f[t.status]+=1);return(0,v.jsxs)(`section`,{className:`admin-panel ui-admin-blocks`,children:[(0,v.jsx)(`div`,{className:`admin-panel-heading`,children:(0,v.jsx)(`h2`,{children:`文章里的块`})}),(0,v.jsx)(`p`,{className:`ui-studio-meta`,children:`这里是仓库里已经推送的内容，包括草稿。还没推的本地改动看不到。`}),(0,v.jsx)(`div`,{className:`ui-studio-switch`,role:`group`,"aria-label":`按状态筛选`,children:[`todo`,`uncompiled`,`stale`,`error`,`ok`,`all`].map(e=>(0,v.jsx)(`button`,{type:`button`,"aria-pressed":o===e,onClick:()=>s(e),children:e===`todo`?`需要处理 ${f.uncompiled+f.stale+f.error}`:e===`all`?`全部`:`${k[e]} ${f[e]}`},e))}),i?(0,v.jsx)(`p`,{className:`ui-studio-message ui-studio-message-error`,children:i}):null,!t&&!i?(0,v.jsx)(`p`,{className:`ui-studio-meta`,children:`正在扫描仓库…`}):null,t?.map(t=>{let n=t.blocks.filter(u);if(!n.length)return null;let i=`/admin/preview/${t.path.replace(/^content\//u,``).replace(/\.md$/u,``)}`,a=t.draft?null:A(t.path);return(0,v.jsxs)(`article`,{className:`ui-admin-file`,children:[(0,v.jsxs)(`h3`,{children:[t.title??t.path,t.draft?(0,v.jsx)(`span`,{className:`admin-status draft`,children:`草稿`}):null]}),(0,v.jsx)(`p`,{className:`ui-studio-meta`,children:t.path}),(0,v.jsxs)(`table`,{className:`ui-admin-table`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:`块`}),(0,v.jsx)(`th`,{children:`状态`}),(0,v.jsx)(`th`,{children:`说明`}),(0,v.jsx)(`th`,{children:`操作`})]})}),(0,v.jsx)(`tbody`,{children:n.map(n=>(0,v.jsxs)(`tr`,{children:[(0,v.jsxs)(`td`,{children:[n.lang===`intent`?`想法`:`ui`,` · `,n.id??`第 ${n.startLine} 行`]}),(0,v.jsx)(`td`,{children:(0,v.jsx)(`span`,{className:`ui-admin-status ui-admin-status-${n.status}`,children:k[n.status]})}),(0,v.jsxs)(`td`,{children:[n.caption??n.intent?.split(`
`)[0]??``,n.diagnostics.length?`（${n.diagnostics.length} 条诊断）`:``]}),(0,v.jsxs)(`td`,{className:`ui-admin-actions`,children:[(0,v.jsx)(r,{href:`/admin/ui?post=${encodeURIComponent(t.path)}&line=${n.startLine}`,children:`在写作台打开`}),n.status===`ok`?null:(0,v.jsx)(`button`,{type:`button`,onClick:()=>d(t,n),children:c===`${t.path}:${n.startLine}`?`已复制`:`复制修复提示词`}),(0,v.jsx)(r,{href:`${i}${n.id?`#ui-${n.id}`:``}`,children:`草稿预览`}),a?(0,v.jsx)(`a`,{href:`${e}${a}${n.id?`#ui-${n.id}`:``}`,target:`_blank`,rel:`noreferrer`,children:`公开页面`}):null]})]},n.startLine))})]})]},t.path)})]})}function M(e){let t=e.length||1;return{pass:e.filter(e=>e.ok).length,total:e.length,rate:Math.round(e.filter(e=>e.ok).length/t*100),rounds:(e.reduce((e,t)=>e+t.rounds,0)/t).toFixed(2),tokens:e.reduce((e,t)=>e+t.tokens,0)}}function N({cases:e,configured:t}){let[n,r]=(0,p.useState)([]),[i,a]=(0,p.useState)(!1),o=(0,p.useSyncExternalStore)(()=>()=>{},()=>!0,()=>!1),[s]=(0,p.useState)(()=>typeof window>`u`?null:window.localStorage.getItem(f)),c=(0,p.useMemo)(()=>{if(!o)return null;try{return s?JSON.parse(s):null}catch{return null}},[s,o]);async function l(){a(!0);let t=[];r([]);for(let n of e){let e=performance.now();try{let r=await fetch(`/api/admin/ui/draft`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({mode:`create`,instruction:n.intent})}),i=await r.json(),a=i.fence??``,o=new Set([...a.matchAll(/<([A-Z][A-Za-z]*)\b/gu)].map(e=>e[1])),s=r.ok&&!!i.fence&&!(i.diagnostics??[]).some(e=>e.severity===`error`),c=(n.expect.components??[]).every(e=>o.has(e)),l=!n.expect.assert||/\nexpect:/u.test(a),u=!n.expect.note||!!i.note;t.push({id:n.id,ok:s&&c&&l&&u,rounds:i.rounds??0,components:c,assert:l,note:u,tokens:i.usage?.total_tokens??0,ms:Math.round(performance.now()-e),error:r.ok?void 0:i.error})}catch(r){t.push({id:n.id,ok:!1,rounds:0,components:!1,assert:!1,note:!1,tokens:0,ms:Math.round(performance.now()-e),error:r instanceof Error?r.message:`失败`})}r([...t])}window.localStorage.setItem(f,JSON.stringify(t)),a(!1)}let u=M(n),d=c?M(c):null;return(0,v.jsxs)(`section`,{className:`admin-panel ui-admin-evals`,children:[(0,v.jsx)(`div`,{className:`admin-panel-heading`,children:(0,v.jsx)(`h2`,{children:`模型自检`})}),(0,v.jsxs)(`p`,{className:`ui-studio-meta`,children:[`会逐条调用写作台，一共 `,e.length,` 次，计入每小时次数。换了模型或提示词之后跑一次。`]}),(0,v.jsx)(`div`,{className:`admin-actions`,children:(0,v.jsx)(`button`,{type:`button`,className:`admin-primary-button`,disabled:!t||i,onClick:l,children:i?`正在跑 ${n.length}/${e.length}…`:`开始自检`})}),t?null:(0,v.jsx)(`p`,{className:`ui-studio-message ui-studio-message-error`,children:`后台还没接上模型。`}),n.length?(0,v.jsxs)(`p`,{className:`ui-studio-meta`,children:[`本次：通过 `,u.pass,`/`,u.total,`（`,u.rate,`%），平均修复 `,u.rounds,` 轮，共 `,u.tokens,` token。`,d?` 上次：通过 ${d.pass}/${d.total}（${d.rate}%），平均修复 ${d.rounds} 轮，共 ${d.tokens} token。`:``]}):d?(0,v.jsxs)(`p`,{className:`ui-studio-meta`,children:[`上次：通过 `,d.pass,`/`,d.total,`（`,d.rate,`%），平均修复 `,d.rounds,` 轮，共 `,d.tokens,` token。`]}):null,(0,v.jsxs)(`table`,{className:`ui-admin-table`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:`样例`}),(0,v.jsx)(`th`,{children:`结果`}),(0,v.jsx)(`th`,{children:`修复轮数`}),(0,v.jsx)(`th`,{children:`组件`}),(0,v.jsx)(`th`,{children:`expect`}),(0,v.jsx)(`th`,{children:`提醒`}),(0,v.jsx)(`th`,{children:`token`}),(0,v.jsx)(`th`,{children:`耗时`})]})}),(0,v.jsx)(`tbody`,{children:e.map(e=>{let t=n.find(t=>t.id===e.id);return(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{title:e.intent,children:e.id}),(0,v.jsx)(`td`,{children:t?t.ok?`通过`:t.error??`未通过`:`—`}),(0,v.jsx)(`td`,{children:t?t.rounds:`—`}),(0,v.jsx)(`td`,{children:t?t.components?`✓`:`缺 ${(e.expect.components??[]).join(`、`)}`:(e.expect.components??[]).join(`、`)}),(0,v.jsx)(`td`,{children:e.expect.assert?t?t.assert?`✓`:`缺`:`要`:`—`}),(0,v.jsx)(`td`,{children:e.expect.note?t?t.note?`✓`:`缺`:`要`:`—`}),(0,v.jsx)(`td`,{children:t?t.tokens:`—`}),(0,v.jsx)(`td`,{children:t?`${(t.ms/1e3).toFixed(1)}s`:`—`})]},e.id)})})]})]})}export{j as AdminBlocks,O as AdminCatalog,N as AdminEvals};