import{r as e}from"./rolldown-runtime-C60lm6uB.js";import{i as t,r as n}from"./framework-Bm9u3ZJ0.js";import{n as r,t as i}from"./feature-title-fit-CNFjcRPy.js";var a=e(t(),1),o=/丨|｜| \| /gu;function s(e){let t=String(e??``),n=[...t.matchAll(o)][0];if(!n)return{split:!1,title:t,lines:[t],separator:null,issue:null};let r=t.slice(0,n.index).trim(),i=t.slice(n.index+n[0].length).trim(),a=n[0]===` | `?` | `:n[0];return!r||!i?{split:!1,title:t,lines:[t],separator:a,issue:`empty`}:{split:!0,title:t,lines:[r,i],separator:a,issue:null}}function c(e){return[...String(e??``)].reduce((e,t)=>/[\u2E80-\uFFFF]/u.test(t)?e+1:/[A-Z]/u.test(t)?e+.68:t===` `?e+.3:e+.58,0)}function l(e){let t=Math.max(...e.map(e=>c(e)),.01);return Number(t.toFixed(2))}function u(e,t=r){if(!e)return;let n=Symbol.for(`garden.article-title-fit`);if(e[n])return e[n].refresh(),e[n].dispose;let i=e.querySelector(`h1.h1-br`),a=i?[...i.querySelectorAll(`.h1-line`)]:[],o=e.querySelector(`style[data-article-title-rules]`)?.sheet;if(!i?.id||a.length<2||!o||!window.ResizeObserver||!window.CSS?.escape)return;let s=o.insertRule(`#${CSS.escape(i.id)}.h1-br{}`,o.cssRules.length),c=o.cssRules[s].style,l=0,u=!1,d=``,f,p=0,m=e=>Math.max(...a.map(t=>(e.textContent=t.textContent,e.getBoundingClientRect().width))),h=()=>{if(u||!i.isConnected)return;let n=c.fontSize,r=c.whiteSpace;c.removeProperty(`font-size`),c.removeProperty(`white-space`);let o=getComputedStyle(i),s=i.parentElement||e,l=parseFloat(getComputedStyle(s).fontSize),h=parseFloat(getComputedStyle(document.documentElement).fontSize),g=i.closest(`article`),_=g?.querySelector(`.markdown-body`)||g||document.documentElement,v=parseFloat(getComputedStyle(_).fontSize),y=window.devicePixelRatio,b=window.visualViewport?.scale||1,x=i.getBoundingClientRect().width,S=a.map(e=>e.textContent).join(`
`),C={text:S,parentSize:l,rootSize:h,body:v,dpr:y,scale:b};if(f?.text!==S&&(p=0),f?.text===S&&((y<f.dpr-.001||b<f.scale-.001||v<f.body-.01||h<f.rootSize-.01)&&(p=0),y>f.dpr+.001||b>f.scale+.001||v>f.body+.01||h>f.rootSize+.01)){let e=Math.max(1,h/f.rootSize);p=Math.max(p,f.size*e/l,f.size/f.parentSize)}let w=Math.max(v*1.125,p*l),T=Math.max(parseFloat(o.fontSize),w),E=JSON.stringify([S,x,v,l,h,w,T,o.fontFamily,o.fontWeight,o.fontStyle,o.fontStretch,o.letterSpacing,o.fontFeatureSettings,o.fontVariationSettings,o.fontSizeAdjust,o.fontKerning,o.wordSpacing,o.fontOpticalSizing,o.textTransform,y,b]);if(!(x>0&&l>0&&v>0)||E===d){n&&(c.fontSize=n),r&&(c.whiteSpace=r);return}let D=document.createElement(`span`);D.style.cssText=`position:fixed;visibility:hidden;pointer-events:none;white-space:nowrap;width:max-content;max-width:none;inset:0 auto auto 0;`;for(let e of[`font`,`fontKerning`,`fontFeatureSettings`,`fontVariationSettings`,`fontStretch`,`fontSizeAdjust`,`fontOpticalSizing`,`letterSpacing`,`wordSpacing`,`textTransform`,`direction`])D.style[e]=o[e];i.append(D);let O;try{O=t({width:Math.max(0,x-.5),minimum:w,maximum:T,measure(e){return D.style.fontSize=`${e}px`,m(D)}})}finally{D.remove()}c.fontSize=`${O/l}em`;let k=parseFloat(getComputedStyle(i).fontSize);i.append(D);try{D.style.fontSize=`${k}px`,m(D)<=Math.max(0,i.getBoundingClientRect().width-.5)&&(c.whiteSpace=`nowrap`)}finally{D.remove()}d=E,f={...C,size:O}},g=()=>{!u&&!l&&(l=requestAnimationFrame(()=>{l=0,h()}))};h();let _=new ResizeObserver(g);_.observe(i),i.parentElement&&_.observe(i.parentElement);let v=new MutationObserver(g);v.observe(i,{childList:!0,subtree:!0,characterData:!0});for(let e of[document.documentElement,document.body])v.observe(e,{attributes:!0,attributeFilter:[`class`,`style`,`lang`,`data-theme`]});window.addEventListener(`resize`,g),window.visualViewport?.addEventListener(`resize`,g);let y=()=>{d=``,g()};document.fonts?.addEventListener(`loadingdone`,y),document.fonts?.ready.then(y);let b=()=>{u=!0,cancelAnimationFrame(l),_.disconnect(),v.disconnect(),window.removeEventListener(`resize`,g),window.visualViewport?.removeEventListener(`resize`,g),document.fonts?.removeEventListener(`loadingdone`,y),o.cssRules[s]?.style===c&&o.deleteRule(s),delete e[n]};return e[n]={refresh:g,dispose:b},b}var d=`import { fitTitleSize } from "./feature-title-fit.mjs";

/** Fit a split article H1 so the remaining title prefers one second line. */
export function mountArticleTitle(root, chooseSize = fitTitleSize) {
  if (!root) return;
  const key = Symbol.for("garden.article-title-fit");
  if (root[key]) { root[key].refresh(); return root[key].dispose; }
  const heading = root.querySelector("h1.h1-br");
  const lines = heading ? [...heading.querySelectorAll(".h1-line")] : [];
  const sheet = root.querySelector("style[data-article-title-rules]")?.sheet;
  if (!heading?.id || lines.length < 2 || !sheet || !window.ResizeObserver || !window.CSS?.escape) return;
  const index = sheet.insertRule(\`#\${CSS.escape(heading.id)}.h1-br{}\`, sheet.cssRules.length);
  const rule = sheet.cssRules[index].style;
  let frame = 0, disposed = false, signature = "", previous, readingFloor = 0;
  const widest = (probe) => Math.max(...lines.map((line) => {
    probe.textContent = line.textContent;
    return probe.getBoundingClientRect().width;
  }));
  const fit = () => {
    if (disposed || !heading.isConnected) return;
    const priorSize = rule.fontSize, priorWrap = rule.whiteSpace;
    rule.removeProperty("font-size");
    rule.removeProperty("white-space");
    const style = getComputedStyle(heading);
    const parent = heading.parentElement || root;
    const parentSize = parseFloat(getComputedStyle(parent).fontSize);
    const rootSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const article = heading.closest("article");
    const bodyNode = article?.querySelector(".markdown-body") || article || document.documentElement;
    const body = parseFloat(getComputedStyle(bodyNode).fontSize);
    const dpr = window.devicePixelRatio, scale = window.visualViewport?.scale || 1;
    const width = heading.getBoundingClientRect().width;
    const text = lines.map((line) => line.textContent).join("\\n");
    const state = { text, parentSize, rootSize, body, dpr, scale };
    if (previous?.text !== text) readingFloor = 0;
    if (previous?.text === text) {
      if (dpr < previous.dpr - .001 || scale < previous.scale - .001 || body < previous.body - .01 || rootSize < previous.rootSize - .01) readingFloor = 0;
      if (dpr > previous.dpr + .001 || scale > previous.scale + .001 || body > previous.body + .01 || rootSize > previous.rootSize + .01) {
        const rootGrowth = Math.max(1, rootSize / previous.rootSize);
        readingFloor = Math.max(readingFloor, previous.size * rootGrowth / parentSize, previous.size / previous.parentSize);
      }
    }
    const minimum = Math.max(body * 1.125, readingFloor * parentSize);
    const maximum = Math.max(parseFloat(style.fontSize), minimum);
    const nextSignature = JSON.stringify([text, width, body, parentSize, rootSize, minimum, maximum,
      style.fontFamily, style.fontWeight, style.fontStyle, style.fontStretch, style.letterSpacing, style.fontFeatureSettings,
      style.fontVariationSettings, style.fontSizeAdjust, style.fontKerning, style.wordSpacing, style.fontOpticalSizing, style.textTransform, dpr, scale]);
    if (!(width > 0 && parentSize > 0 && body > 0) || nextSignature === signature) {
      if (priorSize) rule.fontSize = priorSize;
      if (priorWrap) rule.whiteSpace = priorWrap;
      return;
    }
    const probe = document.createElement("span");
    probe.style.cssText = "position:fixed;visibility:hidden;pointer-events:none;white-space:nowrap;width:max-content;max-width:none;inset:0 auto auto 0;";
    for (const property of ["font", "fontKerning", "fontFeatureSettings", "fontVariationSettings", "fontStretch", "fontSizeAdjust", "fontOpticalSizing", "letterSpacing", "wordSpacing", "textTransform", "direction"]) probe.style[property] = style[property];
    heading.append(probe);
    let size;
    try {
      size = chooseSize({ width: Math.max(0, width - .5), minimum, maximum,
        measure(value) { probe.style.fontSize = \`\${value}px\`; return widest(probe); } });
    } finally { probe.remove(); }
    rule.fontSize = \`\${size / parentSize}em\`;
    const actual = parseFloat(getComputedStyle(heading).fontSize);
    heading.append(probe);
    try {
      probe.style.fontSize = \`\${actual}px\`;
      if (widest(probe) <= Math.max(0, heading.getBoundingClientRect().width - .5)) rule.whiteSpace = "nowrap";
    } finally { probe.remove(); }
    signature = nextSignature;
    previous = { ...state, size };
  };
  const refresh = () => { if (!disposed && !frame) frame = requestAnimationFrame(() => { frame = 0; fit(); }); };
  fit();
  const resize = new ResizeObserver(refresh);
  resize.observe(heading);
  if (heading.parentElement) resize.observe(heading.parentElement);
  const mutations = new MutationObserver(refresh);
  mutations.observe(heading, { childList: true, subtree: true, characterData: true });
  for (const element of [document.documentElement, document.body]) mutations.observe(element, { attributes: true, attributeFilter: ["class", "style", "lang", "data-theme"] });
  window.addEventListener("resize", refresh);
  window.visualViewport?.addEventListener("resize", refresh);
  const fontsChanged = () => { signature = ""; refresh(); };
  document.fonts?.addEventListener("loadingdone", fontsChanged);
  document.fonts?.ready.then(fontsChanged);
  const dispose = () => {
    disposed = true;
    cancelAnimationFrame(frame);
    resize.disconnect(); mutations.disconnect();
    window.removeEventListener("resize", refresh);
    window.visualViewport?.removeEventListener("resize", refresh);
    document.fonts?.removeEventListener("loadingdone", fontsChanged);
    if (sheet.cssRules[index]?.style === rule) sheet.deleteRule(index);
    delete root[key];
  };
  root[key] = { refresh, dispose };
  return dispose;
}
`,f=n(),p=`(()=>{${i.replace(/^export /gm,``)}
${d.replace(/^import\s+[^;]+;\s*/u,``).replace(/^export /gm,``)}
mountArticleTitle(document.currentScript.parentElement);})();`;function m({title:e,className:t=``}){let n=(0,a.useRef)(null),r=s(e);if((0,a.useLayoutEffect)(()=>u(n.current?.parentElement),[e]),!r.split)return(0,f.jsx)(`h1`,{className:`p-name${t?` ${t}`:``}`,children:e});let i=l(r.lines);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(`h1`,{id:`at`,ref:n,"data-article-title":``,className:`p-name h1-br${t?` ${t}`:``}`,style:{"--l":i},children:[(0,f.jsx)(`span`,{className:`h1-line`,children:r.lines[0]}),(0,f.jsx)(`span`,{className:`vh`,children:r.separator}),(0,f.jsx)(`span`,{className:`h1-line`,children:r.lines[1]})]}),(0,f.jsx)(`style`,{"data-article-title-rules":``,children:``}),(0,f.jsx)(`script`,{"data-article-title-boot":``,dangerouslySetInnerHTML:{__html:p}})]})}export{m as ArticleTitle};