function e({width:e,minimum:t,maximum:n,measure:r}){if(!(e>0&&t>0&&n>=t)||r(n)<=e)return n;if(r(t)>e)return t;let i=t,a=n;for(let t=0;t<12;t++){let t=(i+a)/2;r(t)<=e?i=t:a=t}return Math.max(t,Math.floor(i*64)/64)}function t(t,n=e){if(!t)return;let r=Symbol.for(`garden.feature-title-fit`);if(t[r])return t[r].refresh(),t[r].dispose;let i=t.querySelector(`[data-feature-title]`),a=t.querySelector(`style[data-feature-title-rules]`)?.sheet;if(!i?.id||!a||!window.ResizeObserver||!window.CSS?.escape)return;let o=a.insertRule(`#${CSS.escape(i.id)}[data-feature-title]{}`,a.cssRules.length),s=a.cssRules[o].style,c=0,l=!1,u=``,d,f=0,p=()=>{if(l||!i.isConnected)return;let e=s.fontSize;s.removeProperty(`font-size`);let r=getComputedStyle(i),a=getComputedStyle(t),o=t.querySelector(`[data-feature-summary]`),c=parseFloat(getComputedStyle(o||t).fontSize),p=parseFloat(a.fontSize),m=parseFloat(getComputedStyle(document.documentElement).fontSize),h=window.devicePixelRatio,g=window.visualViewport?.scale||1,_=i.getBoundingClientRect().width,v=i.textContent,y={text:v,parentSize:p,rootSize:m,body:c,dpr:h,scale:g};if(d?.text!==v&&(f=0),d?.text===v&&((h<d.dpr-.001||g<d.scale-.001||c<d.body-.01||m<d.rootSize-.01)&&(f=0),h>d.dpr+.001||g>d.scale+.001||c>d.body+.01||m>d.rootSize+.01)){let e=Math.max(1,m/d.rootSize);f=Math.max(f,d.size*e/p,d.size/d.parentSize)}let b=Math.max(c*1.125,f*p),x=Math.max(parseFloat(r.fontSize),b),S=JSON.stringify([i.textContent,_,c,p,m,b,x,r.fontFamily,r.fontWeight,r.fontStyle,r.fontStretch,r.letterSpacing,r.fontFeatureSettings,r.fontVariationSettings,r.fontSizeAdjust,r.fontKerning,r.wordSpacing,r.fontOpticalSizing,r.textTransform,h,g]);if(!(_>0&&p>0&&c>0)||S===u){e&&(s.fontSize=e);return}let C=document.createElement(`span`);C.style.cssText=`position:fixed;visibility:hidden;pointer-events:none;white-space:nowrap;width:max-content;max-width:none;inset:0 auto auto 0;`;for(let e of[`font`,`fontKerning`,`fontFeatureSettings`,`fontVariationSettings`,`fontStretch`,`fontSizeAdjust`,`fontOpticalSizing`,`letterSpacing`,`wordSpacing`,`textTransform`,`direction`])C.style[e]=r[e];C.textContent=i.textContent,t.append(C);let w;try{w=n({width:Math.max(0,_-.5),minimum:b,maximum:x,measure(e){return C.style.fontSize=`${e}px`,C.getBoundingClientRect().width}})}finally{C.remove()}s.fontSize=`${w/p}em`,u=S,d={...y,size:w}},m=()=>{!l&&!c&&(c=requestAnimationFrame(()=>{c=0,p()}))};p();let h=new ResizeObserver(m);h.observe(t);let g=new MutationObserver(m);g.observe(i,{childList:!0,subtree:!0,characterData:!0});for(let e of[document.documentElement,document.body])g.observe(e,{attributes:!0,attributeFilter:[`class`,`style`,`lang`,`data-theme`]});window.addEventListener(`resize`,m),window.visualViewport?.addEventListener(`resize`,m);let _=()=>{u=``,m()};document.fonts?.addEventListener(`loadingdone`,_),document.fonts?.ready.then(_);let v=()=>{l=!0,cancelAnimationFrame(c),h.disconnect(),g.disconnect(),window.removeEventListener(`resize`,m),window.visualViewport?.removeEventListener(`resize`,m),document.fonts?.removeEventListener(`loadingdone`,_),a.cssRules[o]?.style===s&&a.deleteRule(o),delete t[r]};return t[r]={refresh:m,dispose:v},v}var n=`/** Largest real-font size that fits, or a readable minimum followed by wrapping. */
export function fitTitleSize({ width, minimum, maximum, measure }) {
  if (!(width > 0 && minimum > 0 && maximum >= minimum)) return maximum;
  if (measure(maximum) <= width) return maximum;
  if (measure(minimum) > width) return minimum;
  let low = minimum, high = maximum;
  for (let i = 0; i < 12; i++) {
    const middle = (low + high) / 2;
    if (measure(middle) <= width) low = middle;
    else high = middle;
  }
  return Math.max(minimum, Math.floor(low * 64) / 64);
}

/** Browser-only: inline boot and layout effect. CSSOM leaves SSR markup intact. */
export function mountFeatureTitle(root, chooseSize = fitTitleSize) {
  if (!root) return;
  const key = Symbol.for('garden.feature-title-fit');
  if (root[key]) { root[key].refresh(); return root[key].dispose; }
  const heading = root.querySelector('[data-feature-title]');
  const sheet = root.querySelector('style[data-feature-title-rules]')?.sheet;
  if (!heading?.id || !sheet || !window.ResizeObserver || !window.CSS?.escape) return;
  const index = sheet.insertRule(\`#\${CSS.escape(heading.id)}[data-feature-title]{}\`, sheet.cssRules.length);
  const rule = sheet.cssRules[index].style;
  let frame = 0, disposed = false, signature = '', previous, readingFloor = 0;
  const fit = () => {
    if (disposed || !heading.isConnected) return;
    const prior = rule.fontSize;
    rule.removeProperty('font-size');
    const style = getComputedStyle(heading), parent = getComputedStyle(root);
    const summary = root.querySelector('[data-feature-summary]');
    const body = parseFloat(getComputedStyle(summary || root).fontSize);
    const parentSize = parseFloat(parent.fontSize), rootSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const dpr = window.devicePixelRatio, scale = window.visualViewport?.scale || 1;
    const width = heading.getBoundingClientRect().width;
    const text = heading.textContent;
    const state = { text, parentSize, rootSize, body, dpr, scale };
    if (previous?.text !== text) readingFloor = 0;
    if (previous?.text === text) {
      // VisualViewport floats can jitter during initial mobile layout. Only an
      // actual scale/font increase should preserve the reader's chosen size.
      if (dpr < previous.dpr-.001 || scale < previous.scale-.001 || body < previous.body-.01 || rootSize < previous.rootSize-.01) readingFloor = 0;
      if (dpr > previous.dpr+.001 || scale > previous.scale+.001 || body > previous.body+.01 || rootSize > previous.rootSize+.01) {
        const rootGrowth = Math.max(1, rootSize / previous.rootSize);
        readingFloor = Math.max(readingFloor, previous.size * rootGrowth / parentSize, previous.size / previous.parentSize);
      }
    }
    const minimum = Math.max(body * 1.125, readingFloor * parentSize);
    const maximum = Math.max(parseFloat(style.fontSize), minimum);
    const nextSignature = JSON.stringify([heading.textContent,width,body,parentSize,rootSize,minimum,maximum,
      style.fontFamily,style.fontWeight,style.fontStyle,style.fontStretch,style.letterSpacing,style.fontFeatureSettings,
      style.fontVariationSettings,style.fontSizeAdjust,style.fontKerning,style.wordSpacing,style.fontOpticalSizing,style.textTransform,dpr,scale]);
    if (!(width > 0 && parentSize > 0 && body > 0) || nextSignature === signature) {
      if (prior) rule.fontSize = prior;
      return;
    }
    const probe = document.createElement('span');
    probe.style.cssText = 'position:fixed;visibility:hidden;pointer-events:none;white-space:nowrap;width:max-content;max-width:none;inset:0 auto auto 0;';
    for (const property of ['font','fontKerning','fontFeatureSettings','fontVariationSettings','fontStretch','fontSizeAdjust','fontOpticalSizing','letterSpacing','wordSpacing','textTransform','direction']) probe.style[property] = style[property];
    probe.textContent = heading.textContent;
    root.append(probe);
    let size;
    try {
      size = chooseSize({ width: Math.max(0,width-.5), minimum, maximum,
        measure(value) { probe.style.fontSize = \`\${value}px\`; return probe.getBoundingClientRect().width; } });
    } finally { probe.remove(); }
    rule.fontSize = \`\${size / parentSize}em\`;
    signature = nextSignature;
    previous = { ...state, size };
  };
  const refresh = () => { if (!disposed && !frame) frame = requestAnimationFrame(() => { frame = 0; fit(); }); };
  fit();
  const resize = new ResizeObserver(refresh);
  resize.observe(root);
  const mutations = new MutationObserver(refresh);
  mutations.observe(heading, { childList: true, subtree: true, characterData: true });
  for (const element of [document.documentElement, document.body]) mutations.observe(element, { attributes:true, attributeFilter:['class','style','lang','data-theme'] });
  window.addEventListener('resize',refresh);
  window.visualViewport?.addEventListener('resize',refresh);
  const fontsChanged = () => { signature = ''; refresh(); };
  document.fonts?.addEventListener('loadingdone',fontsChanged);
  document.fonts?.ready.then(fontsChanged);
  const dispose = () => {
    disposed = true;
    cancelAnimationFrame(frame);
    resize.disconnect(); mutations.disconnect();
    window.removeEventListener('resize',refresh);
    window.visualViewport?.removeEventListener('resize',refresh);
    document.fonts?.removeEventListener('loadingdone',fontsChanged);
    if (sheet.cssRules[index]?.style === rule) sheet.deleteRule(index);
    delete root[key];
  };
  root[key] = { refresh, dispose };
  return dispose;
}
`;export{e as n,t as r,n as t};