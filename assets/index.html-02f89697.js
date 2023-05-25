import{_ as s,r as a,o as e,c as t,a as o,b as p,d as c}from"./app-b7866a0c.js";const i={},l={style:{"text-align":"center"}},u=c(`<div class="features"><div class="feature"><h2>Cross Platform</h2><p>Render barcodes on macOS, Linux, or Windows. Distribute the package on whatever system you need.</p></div><div class="feature"><h2>Eclectic</h2><p>Supports over 50 unique symbologies including linear barcodes, one- and two-dimensional, stacked, composite, two-track, and more.</p></div><div class="feature"><h2>Open Source</h2><p>Symbology.js and the Zint library are both fully open source and supported by the OSS community.</p></div></div><h2 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick start</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> symbology
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="example-usage" tabindex="-1"><a class="header-anchor" href="#example-usage" aria-hidden="true">#</a> Example usage</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  SymbologyType<span class="token punctuation">,</span>
  OutputType<span class="token punctuation">,</span>
  EncodingMode<span class="token punctuation">,</span>
  createStream
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;symbology&#39;</span>

<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createFile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      symbology<span class="token operator">:</span> SymbologyType<span class="token punctuation">.</span><span class="token constant">CODE128</span><span class="token punctuation">,</span>
      encoding<span class="token operator">:</span> EncodingMode<span class="token punctuation">.</span><span class="token constant">GS1_MODE</span><span class="token punctuation">,</span>
      fileName<span class="token operator">:</span> <span class="token string">&#39;out.svg&#39;</span><span class="token punctuation">,</span>
      backgroundColor<span class="token operator">:</span> <span class="token string">&#39;00000000&#39;</span><span class="token punctuation">,</span>
      foregroundColor<span class="token operator">:</span> <span class="token string">&#39;00ff00ff&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;12345&#39;</span><span class="token punctuation">)</span>

    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;File successfully created.&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;Error: &#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">Compatibility Note</p><p>Symbology.js requires Node.js &gt;= 10.0.</p></div>`,6);function r(d,k){const n=a("Bit");return e(),t("div",null,[o("div",l,[p(n)]),u])}const m=s(i,[["render",r],["__file","index.html.vue"]]);export{m as default};
