window.__ModuleLoader__.load({
	id: "dsh-theme-endfield",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

		// ---- inject CSS (fonts + terminal styling) ----
		// Update-in-place: the style tag is created once and its text is replaced
		// on every run, so CSS edits take effect on a plain refresh.
		var css = ":root{--dsw-font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei',Helvetica,Arial,sans-serif}body[data-ds-dark-theme]{background-image:linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px),radial-gradient(circle,rgba(255,239,0,0.06) 1px,transparent 1.3px);background-size:44px 44px,44px 44px,44px 44px;background-position:0 0,0 0,22px 22px}body[data-ds-dark-theme].ds-no-texture{background-image:none}body[data-ds-dark-theme] .EvIC1a_scroll{background-image:linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px),radial-gradient(circle,rgba(255,239,0,0.07) 1px,transparent 1.4px);background-size:44px 44px,44px 44px,44px 44px;background-position:0 0,0 0,22px 22px}body[data-ds-dark-theme].ds-no-texture .EvIC1a_scroll{background-image:none}body[data-ds-dark-theme]::before{content:\"\";position:fixed;top:0;left:0;right:0;height:3px;z-index:2147483646;background:linear-gradient(90deg,#e202e2 0 33.33%,#f3f100 33.33% 66.66%,#01f1f1 66.66% 100%);pointer-events:none}body[data-ds-dark-theme] ::selection{background:#ffef00;color:#0d0d0c}body[data-ds-dark-theme] :focus-visible{outline:1.5px solid #ffef00;outline-offset:1px}/* brand area: yellow-tinted shelf so the currentColor logo reads on near-black */body[data-ds-dark-theme] .hHd-Xa_logoRow{background:rgba(255,239,0,0.07);border-bottom:1px solid rgba(255,239,0,0.25)}body[data-ds-dark-theme] .hHd-Xa_brand svg,body[data-ds-dark-theme] .hHd-Xa_railFish{filter:drop-shadow(0 0 1px rgba(0,0,0,.9)) brightness(1.15)}/* display font as accent only: New Session button */body[data-ds-dark-theme] .hHd-Xa_newSession{font-family:'AgibotDisplay','Segoe UI',sans-serif;letter-spacing:.02em}/* session rows (ui-workspace, YDXeBa_ prefix): industrial tabs with tricolor cursor bar */body[data-ds-dark-theme] .YDXeBa_sessionRow{position:relative;border-radius:3px}body[data-ds-dark-theme] .YDXeBa_sessionRow:hover{background:rgba(255,239,0,0.05);outline:1px solid rgba(255,239,0,0.3);outline-offset:-1px}body[data-ds-dark-theme] .YDXeBa_sessionRow.YDXeBa_selected{background:rgba(255,239,0,0.09);outline:1px solid rgba(255,239,0,0.45);outline-offset:-1px}body[data-ds-dark-theme] .YDXeBa_sessionRow.YDXeBa_selected::before{content:\"\";position:absolute;left:0;top:22%;bottom:22%;width:3px;border-radius:1px;background:linear-gradient(180deg,#e202e2 0 33%,#f3f100 33% 66%,#01f1f1 66% 100%)}body[data-ds-dark-theme] .YDXeBa_time{font-size:11px;letter-spacing:.04em;opacity:.75}/* conversation header (ui-conversation, wSkVaW_ prefix): terminal divider + glowing tabs */body[data-ds-dark-theme] .wSkVaW_header{background:linear-gradient(180deg,rgba(255,239,0,0.05),rgba(255,239,0,0.01) 60%,transparent);border-bottom:1px solid rgba(255,239,0,0.2)}body[data-ds-dark-theme] .wSkVaW_titleCluster{letter-spacing:.02em}body[data-ds-dark-theme] .wSkVaW_tab{position:relative;font-weight:600;letter-spacing:.06em}body[data-ds-dark-theme] .wSkVaW_tab:hover{color:#ffef00}body[data-ds-dark-theme] .wSkVaW_tabActive{color:#ffef00}body[data-ds-dark-theme] .wSkVaW_tabActive::after{content:\"\";position:absolute;left:15%;right:15%;bottom:-1px;height:2px;background:#ffef00;box-shadow:0 0 8px rgba(255,239,0,.55)}";
		var tagId = "dsh-theme-endfield/main";
		var tag = typeof document !== "undefined" ? document.querySelector("style[data-plugin-css=\"" + tagId + "\"]") : null;
		if (typeof document !== "undefined" && tag === null) {
			tag = document.createElement("style");
			tag.dataset.plugin = "dsh-theme-endfield";
			tag.dataset.pluginCss = tagId;
			document.head.appendChild(tag);
		}
		if (tag !== null) { tag.textContent = css; }

		// ---- theme application ----
		// Stack the whole token matrix as an override layer on top of the
		// built-in `dark` theme (never register a third-party theme id: the
		// settings schema only persists light/dark/system, so a custom id would
		// vanish on refresh). `dark` persists; the override re-stacks on every
		// apply, so the look survives reloads and restarts.
		var TOKENS = {
		"--dsw-alias-bg-base": { light: "#0d0d0c", dark: "#0d0d0c" },
		"--dsw-alias-bg-layer-1": { light: "#141413", dark: "#141413" },
		"--dsw-alias-bg-layer-2": { light: "#1a1a18", dark: "#1a1a18" },
		"--dsw-alias-bg-layer-3": { light: "#20201e", dark: "#20201e" },
		"--dsw-alias-bg-mask-1": { light: "rgba(0,0,0,0.5)", dark: "rgba(0,0,0,0.5)" },
		"--dsw-alias-bg-mask-2": { light: "rgba(0,0,0,0.2)", dark: "rgba(0,0,0,0.2)" },
		"--dsw-alias-bg-mask-3": { light: "rgba(0,0,0,0.48)", dark: "rgba(0,0,0,0.48)" },
		"--dsw-alias-bg-mask-drop": { light: "rgba(13,13,12,0.7)", dark: "rgba(13,13,12,0.7)" },
		"--dsw-alias-bg-mask-photo": { light: "rgba(0,0,0,0.88)", dark: "rgba(0,0,0,0.88)" },
		"--dsw-alias-bg-module-platform": { light: "#1a1a18", dark: "#1a1a18" },
		"--dsw-alias-bg-multi-select": { light: "#141413", dark: "#141413" },
		"--dsw-alias-bg-overlay": { light: "#2b2927", dark: "#2b2927" },
		"--dsw-alias-bg-skeleton": { light: "rgba(255,255,255,0.08)", dark: "rgba(255,255,255,0.08)" },
		"--dsw-alias-border-inverted": { light: "rgba(0,0,0,0.35)", dark: "rgba(0,0,0,0.35)" },
		"--dsw-alias-border-inverted2": { light: "rgba(255,255,255,0.08)", dark: "rgba(255,255,255,0.08)" },
		"--dsw-alias-border-l1": { light: "rgba(255,255,255,0.08)", dark: "rgba(255,255,255,0.08)" },
		"--dsw-alias-border-l2": { light: "rgba(255,255,255,0.12)", dark: "rgba(255,255,255,0.12)" },
		"--dsw-alias-border-l2-darkmode-thin": { light: "rgba(255,255,255,0.08)", dark: "rgba(255,255,255,0.08)" },
		"--dsw-alias-border-l3": { light: "rgba(255,255,255,0.16)", dark: "rgba(255,255,255,0.16)" },
		"--dsw-alias-border-l4": { light: "rgba(255,239,0,0.35)", dark: "rgba(255,239,0,0.35)" },
		"--dsw-alias-brand-primary": { light: "#ffef00", dark: "#ffef00" },
		"--dsw-alias-brand-primary-invert": { light: "#0d0d0c", dark: "#0d0d0c" },
		"--dsw-alias-brand-primary-new-colorprimary-new-color": { light: "#ffe600", dark: "#ffe600" },
		"--dsw-alias-brand-text": { light: "#ffef00", dark: "#ffef00" },
		"--dsw-alias-button-contrast-fill": { light: "#f2f0ea", dark: "#f2f0ea" },
		"--dsw-alias-button-elevated-fill": { light: "#20201e", dark: "#20201e" },
		"--dsw-alias-button-floating-fill": { light: "#232321", dark: "#232321" },
		"--dsw-alias-button-floating-hover": { light: "#2b2927", dark: "#2b2927" },
		"--dsw-alias-button-ghost-active-border": { light: "#6a675f", dark: "#6a675f" },
		"--dsw-alias-button-ghost-active-fill": { light: "#20201e", dark: "#20201e" },
		"--dsw-alias-button-ghost-active-hover": { light: "#2b2927", dark: "#2b2927" },
		"--dsw-alias-button-info-fill": { light: "#ffef00", dark: "#ffef00" },
		"--dsw-alias-button-info-hover": { light: "#f5e100", dark: "#f5e100" },
		"--dsw-alias-button-primary-dimmed": { light: "#4a4400", dark: "#4a4400" },
		"--dsw-alias-button-primary-fill": { light: "#ffef00", dark: "#ffef00" },
		"--dsw-alias-button-primary-hover": { light: "#f5e100", dark: "#f5e100" },
		"--dsw-alias-button-tool-bar-fill": { light: "rgba(84,84,80,0.5)", dark: "rgba(84,84,80,0.5)" },
		"--dsw-alias-button-tool-bar-fill-invisible": { light: "rgba(31,31,31,0.36)", dark: "rgba(31,31,31,0.36)" },
		"--dsw-alias-button-tool-bar-hover": { light: "rgba(84,84,80,0.6)", dark: "rgba(84,84,80,0.6)" },
		"--dsw-alias-interactive-bg-active": { light: "rgba(255,255,255,0.1)", dark: "rgba(255,255,255,0.1)" },
		"--dsw-alias-interactive-bg-hover": { light: "rgba(255,255,255,0.06)", dark: "rgba(255,255,255,0.06)" },
		"--dsw-alias-interactive-bg-hover-accent": { light: "rgba(255,239,0,0.12)", dark: "rgba(255,239,0,0.12)" },
		"--dsw-alias-interactive-bg-hover-danger": { light: "rgba(242,90,90,0.15)", dark: "rgba(242,90,90,0.15)" },
		"--dsw-alias-interactive-bg-hover-solid": { light: "#20201e", dark: "#20201e" },
		"--dsw-alias-label-caption": { light: "#8a8885", dark: "#8a8885" },
		"--dsw-alias-label-dimmed": { light: "#5a5855", dark: "#5a5855" },
		"--dsw-alias-label-primary": { light: "#f2f0ea", dark: "#f2f0ea" },
		"--dsw-alias-label-primary-bluish": { light: "#f2f0ea", dark: "#f2f0ea" },
		"--dsw-alias-label-primary-dimmed": { light: "#3a3835", dark: "#3a3835" },
		"--dsw-alias-label-primary-foreground": { light: "#0d0d0c", dark: "#0d0d0c" },
		"--dsw-alias-label-primary-inverted": { light: "#0d0d0c", dark: "#0d0d0c" },
		"--dsw-alias-label-secondary": { light: "#b8b6b4", dark: "#b8b6b4" },
		"--dsw-alias-label-tertiary": { light: "#8a8885", dark: "#8a8885" },
		"--dsw-alias-markdown-citation": { light: "#1c1c1a", dark: "#1c1c1a" },
		"--dsw-alias-markdown-code-block": { light: "#0a0a09", dark: "#0a0a09" },
		"--dsw-alias-markdown-code-block-banner": { light: "#141413", dark: "#141413" },
		"--dsw-alias-markdown-code-segment-selected": { light: "#232321", dark: "#232321" },
		"--dsw-alias-markdown-code-segment-unselected": { light: "#161615", dark: "#161615" },
		"--dsw-alias-markdown-inline-code": { light: "#1c1c1a", dark: "#1c1c1a" },
		"--dsw-alias-markdown-placeholder": { light: "#20201e", dark: "#20201e" },
		"--dsw-alias-markdown-tag": { light: "#1c1c1a", dark: "#1c1c1a" },
		"--dsw-alias-scrollbar-bg-l1": { light: "#2b2927", dark: "#2b2927" },
		"--dsw-alias-scrollbar-bg-l2": { light: "#33312f", dark: "#33312f" },
		"--dsw-alias-scrollbar-hover-l1": { light: "#4a4845", dark: "#4a4845" },
		"--dsw-alias-scrollbar-hover-l2": { light: "#55524f", dark: "#55524f" },
		"--dsw-alias-state-business-primary": { light: "#ffef00", dark: "#ffef00" },
		"--dsw-alias-state-business-tertiary": { light: "#4a4400", dark: "#4a4400" },
		"--dsw-alias-state-error-primary": { light: "#e202e2", dark: "#e202e2" },
		"--dsw-alias-state-error-secondary": { light: "#ff4dff", dark: "#ff4dff" },
		"--dsw-alias-state-success-primary": { light: "#01f1f1", dark: "#01f1f1" },
		"--dsw-alias-state-success-secondary": { light: "#66ffff", dark: "#66ffff" },
		"--dsw-alias-state-success-tertiary": { light: "#003b3b", dark: "#003b3b" },
		"--dsw-alias-state-warn-label": { light: "#ffef00", dark: "#ffef00" },
		"--dsw-alias-state-warn-primary": { light: "#ffef00", dark: "#ffef00" },
		"--dsw-alias-state-warn-secondary": { light: "#ffe600", dark: "#ffe600" },
		"--dsw-alias-state-warn-tertiary": { light: "#4a4400", dark: "#4a4400" },
		"--dsw-alias-toast-bg": { light: "#2b2927", dark: "#2b2927" },
		"--dsw-alias-tooltip-bg": { light: "#2b2927", dark: "#2b2927" },
		"--dsw-specific-bubble": { light: "#141413", dark: "#141413" },
		"--dsw-specific-bubble-highlight": { light: "#1c1c1a", dark: "#1c1c1a" },
		"--dsw-specific-input-major": { light: "#141413", dark: "#141413" },
		"--dsw-specific-login-input": { light: "#1a1a18", dark: "#1a1a18" },
		"--dsw-specific-menu": { light: "#1c1c1a", dark: "#1c1c1a" },
		"--dsw-specific-selector": { light: "#141413", dark: "#141413" },
		"--dsw-specific-sidebar-fill": { light: "#121210", dark: "#121210" },
		"--dsw-specific-sidebar-nav-item-active": { light: "#1a1a18", dark: "#1a1a18" },
		"--dsw-specific-sidebar-nav-item-active-accent": { light: "rgba(255,239,0,0.15)", dark: "rgba(255,239,0,0.15)" },
		"--dsw-specific-sidebar-nav-item-hover": { light: "#161615", dark: "#161615" },
		"--dsw-specific-tip": { light: "#1a1a18", dark: "#1a1a18" }
		};

		// ===== [HAOHAJING] 抵数海启动页 + 地形等高线层 =====
var SPLASH_LOGO = "data:image/png;base64,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";
var CONTOUR_KEY = "dsh-theme-endfield-contour";
function contourEnabled() {
  try { return localStorage.getItem(CONTOUR_KEY) === "1"; } catch (e) { return false; }
}
var SPLASH_CSS = [
  "#dsh-splash{position:fixed;inset:0;z-index:9999;background:#0d0d0c;overflow:hidden;",
  "font-family:'Microsoft YaHei','SimHei','Courier New',sans-serif;color:#f5f5f0;",
  "opacity:1;transition:opacity .7s ease}",
  "#dsh-splash.ds-out{opacity:0;pointer-events:none}",
  "#dsh-splash .ds-terrain{position:absolute;inset:0;z-index:0;opacity:0;transition:opacity 1.6s ease}",
  "#dsh-splash .ds-terrain.on{opacity:1}",
  "#dsh-splash .ds-wipe{position:absolute;left:0;top:0;bottom:0;width:0;background:#ffef00;z-index:8;",
  "transition:width .62s cubic-bezier(.72,0,.24,1)}",
  "#dsh-splash.ds-wiping .ds-wipe{width:100%}",
  "#dsh-splash .ds-leftbar{position:absolute;left:0;top:0;height:100%;width:5px;background:#1a1a18;z-index:5}",
  "#dsh-splash .ds-leftfill{width:100%;height:0;background:#ffef00;transition:height .22s linear}",
  "#dsh-splash .ds-stack{position:absolute;left:62%;top:50%;transform:translate(-50%,-50%);",
  "display:flex;flex-direction:column;align-items:center;gap:13px;text-align:center;z-index:3}",
  "#dsh-splash .ds-logo{width:190px;display:block;opacity:0;transform:translateY(12px);",
  "transition:opacity 1.1s ease,transform 1.1s ease}",
  "#dsh-splash .ds-logo.on{opacity:1;transform:translateY(0)}",
  "#dsh-splash .ds-loading{opacity:0;transition:opacity .8s ease}",
  "#dsh-splash .ds-loading.on{opacity:1}",
  "#dsh-splash .ds-tri{width:0;height:0;display:inline-block;vertical-align:middle;",
  "border-left:5px solid transparent;border-right:5px solid transparent;border-top:8px solid #ffef00;",
  "animation:dshTri 1.1s ease-in-out infinite}",
  "@keyframes dshTri{0%,100%{opacity:.35}50%{opacity:1}}",
  "#dsh-splash .ds-loadtext{font-size:11px;color:#7d817d;letter-spacing:1px;margin-top:6px;",
  "font-family:'Courier New',monospace}",
  "#dsh-splash .ds-slogan{display:flex;justify-content:space-between;align-items:baseline;",
  "width:190px;opacity:0;transition:opacity 1.2s ease}",
  "#dsh-splash .ds-slogan.on{opacity:1}",
  "#dsh-splash .ds-cn{font-size:11px;letter-spacing:1px;color:#e8e8e2;white-space:nowrap}",
  "#dsh-splash .ds-en{font-family:'Courier New',monospace;font-size:10px;letter-spacing:.5px;",
  "color:#b9bdb9;white-space:nowrap}",
  "#dsh-splash .ds-progress{position:absolute;left:40px;bottom:34px;z-index:4;opacity:0;",
  "transition:opacity .8s ease}",
  "#dsh-splash .ds-progress.on{opacity:1}",
  "#dsh-splash .ds-pct{font-size:44px;font-weight:900;color:#ffef00;line-height:1;",
  "font-family:'Courier New',monospace;letter-spacing:-1px}",
  "#dsh-splash .ds-pct small{font-size:20px;font-weight:700}",
  "#dsh-splash .ds-pstate{margin-top:8px;font-size:11px;color:#6f736f;letter-spacing:1px;",
  "font-family:'Courier New',monospace}",
  "#dsh-splash .ds-pstate::before{content:'';display:inline-block;width:8px;height:8px;",
  "background:#ffef00;margin-right:6px;vertical-align:-1px}",
  "#dsh-splash .ds-corner{position:absolute;right:34px;bottom:30px;z-index:4;display:flex;gap:14px;",
  "align-items:center;font-family:'Courier New',monospace;font-size:12px;color:#55595a;",
  "opacity:0;transition:opacity 1s ease}",
  "#dsh-splash .ds-corner.on{opacity:1}",
  "#dsh-splash .ds-corner span{color:#7d817d}",
  "#dsh-splash .ds-corner .ds-hi{color:#ffef00}",
  "#dsh-terrain{position:fixed;inset:0;z-index:0;pointer-events:none}"
].join("");
var SPLASH_STAGES = [[0,"INITIALIZING"],[18,"LOADING PLUGINS"],[42,"MOUNTING MEMORY"],
  [63,"LINKING FLEET"],[82,"CALIBRATING VISION"],[96,"READY"]];

function mountContour() {
  if (typeof document === "undefined" || !contourEnabled()) return null;
  if (document.getElementById("dsh-terrain")) return null;
  var cv = document.createElement("canvas");
  cv.id = "dsh-terrain";
  document.body.insertBefore(cv, document.body.firstChild);
  var c2 = cv.getContext("2d");
  var W, H, field, cols, rows, STEP = 5, LEVELS = 26, SCALE = 0.0021, PHASE = 0, raf = null, last = 0, alive = true;
  function hash2(x, y) { var n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123; return n - Math.floor(n); }
  function smooth(t) { return t * t * (3 - 2 * t); }
  function vnoise(x, y) {
    var xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    var a = hash2(xi, yi), b = hash2(xi + 1, yi), d = hash2(xi, yi + 1), e = hash2(xi + 1, yi + 1);
    var u = smooth(xf), v = smooth(yf);
    return (a * (1 - u) + b * u) * (1 - v) + (d * (1 - u) + e * u) * v;
  }
  function fbm(x, y) { var v = 0, amp = 0.5, f = 1; for (var i = 0; i < 4; i++) { v += amp * vnoise(x * f, y * f); f *= 2.03; amp *= 0.5; } return v; }
  function build(ph) {
    cols = Math.ceil(W / STEP) + 1; rows = Math.ceil(H / STEP) + 1;
    field = new Float32Array(cols * rows);
    var z = ph * 0.5;
    for (var r = 0; r < rows; r++) for (var c = 0; c < cols; c++) {
      var x = c * STEP * SCALE, y = r * STEP * SCALE;
      field[r * cols + c] = fbm(x + z, y + z * 0.6) * 0.75 + fbm(x * 1.7 - z * 0.4, y * 1.7 + z * 0.3) * 0.25;
    }
  }
  function ms(t) {
    function seg(a, b) { c2.moveTo(a[0], a[1]); c2.lineTo(b[0], b[1]); }
    for (var r = 0; r < rows - 1; r++) for (var c = 0; c < cols - 1; c++) {
      var tl = field[r * cols + c], tr = field[r * cols + c + 1], bl = field[(r + 1) * cols + c], br = field[(r + 1) * cols + c + 1];
      var idx = 0;
      if (tl > t) idx |= 8; if (tr > t) idx |= 4; if (br > t) idx |= 2; if (bl > t) idx |= 1;
      if (idx === 0 || idx === 15) continue;
      var x0 = c * STEP, y0 = r * STEP, x1 = x0 + STEP, y1 = y0 + STEP;
      function L(a, b) { return (t - a) / (b - a); }
      var top = [x0 + STEP * L(tl, tr), y0], right = [x1, y0 + STEP * L(tr, br)];
      var bottom = [x0 + STEP * L(bl, br), y1], left = [x0, y0 + STEP * L(tl, bl)];
      switch (idx) {
        case 1: case 14: seg(left, bottom); break;
        case 2: case 13: seg(bottom, right); break;
        case 3: case 12: seg(left, right); break;
        case 4: case 11: seg(top, right); break;
        case 5: seg(left, top); seg(bottom, right); break;
        case 6: case 9: seg(top, bottom); break;
        case 7: case 8: seg(left, top); break;
        case 10: seg(top, right); seg(left, bottom); break;
      }
    }
  }
  function draw() {
    c2.clearRect(0, 0, W, H);
    c2.strokeStyle = "rgba(255,239,0,0.075)"; c2.lineWidth = 1; c2.beginPath();
    for (var li = 0; li < LEVELS; li++) ms((li + 1) / (LEVELS + 1));
    c2.stroke();
  }
  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    W = window.innerWidth; H = window.innerHeight;
    cv.width = W * dpr; cv.height = H * dpr; cv.style.width = W + "px"; cv.style.height = H + "px";
    c2.setTransform(dpr, 0, 0, dpr, 0, 0);
    build(PHASE); draw();
  }
  function loop(now) {
    if (!alive) return;
    raf = requestAnimationFrame(loop);
    if (now - last < 1000 / 20) return;
    last = now; PHASE += 0.005; build(PHASE); draw();
  }
  window.addEventListener("resize", resize);
  resize(); raf = requestAnimationFrame(loop);
  return {
    destroy: function () { alive = false; if (raf !== null) cancelAnimationFrame(raf); window.removeEventListener("resize", resize); if (cv.parentNode) cv.parentNode.removeChild(cv); }
  };
}

function mountSplash() {
  if (typeof document === "undefined") return null;
  var q = "";
  try { q = String(location.search || ""); } catch (e) { q = ""; }
  if (q.indexOf("splash=off") >= 0) return null;
  var hold = q.indexOf("splash=hold") >= 0;
  if (document.getElementById("dsh-splash")) return null;
  var st = document.createElement("style");
  st.id = "dsh-splash-style"; st.textContent = SPLASH_CSS;
  document.head.appendChild(st);
  var el = document.createElement("div");
  el.id = "dsh-splash";
  el.innerHTML = '<canvas class="ds-terrain"></canvas>' +
    '<div class="ds-wipe"></div>' +
    '<div class="ds-leftbar"><div class="ds-leftfill"></div></div>' +
    '<div class="ds-stack">' +
      '<img class="ds-logo" alt="抵数海" src="' + SPLASH_LOGO + '">' +
      '<div class="ds-loading"><span class="ds-tri"></span><div class="ds-loadtext">正在唤醒舰载智能体…</div></div>' +
      '<div class="ds-slogan"><span class="ds-cn">直抵数海之底</span><span class="ds-en">Into the data deep</span></div>' +
    '</div>' +
    '<div class="ds-progress"><div class="ds-pct">0<small>%</small></div><div class="ds-pstate">INITIALIZING</div></div>' +
    '<div class="ds-corner"><span>DSH</span><span>0.1.5</span><span class="ds-hi">⚓</span></div>';
  document.body.appendChild(el);

  // 内部等高线（启动页自己的 canvas）
  var cv = el.querySelector(".ds-terrain");
  (function () {
    var c2 = cv.getContext("2d");
    var W, H, field, cols, rows, STEP = 5, LEVELS = 26, SCALE = 0.0021, PHASE = 0;
    function hash2(x, y) { var n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123; return n - Math.floor(n); }
    function smooth(t) { return t * t * (3 - 2 * t); }
    function vnoise(x, y) {
      var xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
      var a = hash2(xi, yi), b = hash2(xi + 1, yi), d = hash2(xi, yi + 1), e = hash2(xi + 1, yi + 1);
      var u = smooth(xf), v = smooth(yf);
      return (a * (1 - u) + b * u) * (1 - v) + (d * (1 - u) + e * u) * v;
    }
    function fbm(x, y) { var v = 0, amp = 0.5, f = 1; for (var i = 0; i < 4; i++) { v += amp * vnoise(x * f, y * f); f *= 2.03; amp *= 0.5; } return v; }
    function build(ph) {
      cols = Math.ceil(W / STEP) + 1; rows = Math.ceil(H / STEP) + 1;
      field = new Float32Array(cols * rows);
      var z = ph * 0.5;
      for (var r = 0; r < rows; r++) for (var c = 0; c < cols; c++) {
        var x = c * STEP * SCALE, y = r * STEP * SCALE;
        field[r * cols + c] = fbm(x + z, y + z * 0.6) * 0.75 + fbm(x * 1.7 - z * 0.4, y * 1.7 + z * 0.3) * 0.25;
      }
    }
    function ms(t) {
      function seg(a, b) { c2.moveTo(a[0], a[1]); c2.lineTo(b[0], b[1]); }
      for (var r = 0; r < rows - 1; r++) for (var c = 0; c < cols - 1; c++) {
        var tl = field[r * cols + c], tr = field[r * cols + c + 1], bl = field[(r + 1) * cols + c], br = field[(r + 1) * cols + c + 1];
        var idx = 0;
        if (tl > t) idx |= 8; if (tr > t) idx |= 4; if (br > t) idx |= 2; if (bl > t) idx |= 1;
        if (idx === 0 || idx === 15) continue;
        var x0 = c * STEP, y0 = r * STEP, x1 = x0 + STEP, y1 = y0 + STEP;
        function L(a, b) { return (t - a) / (b - a); }
        var top = [x0 + STEP * L(tl, tr), y0], right = [x1, y0 + STEP * L(tr, br)];
        var bottom = [x0 + STEP * L(bl, br), y1], left = [x0, y0 + STEP * L(tl, bl)];
        switch (idx) {
          case 1: case 14: seg(left, bottom); break;
          case 2: case 13: seg(bottom, right); break;
          case 3: case 12: seg(left, right); break;
          case 4: case 11: seg(top, right); break;
          case 5: seg(left, top); seg(bottom, right); break;
          case 6: case 9: seg(top, bottom); break;
          case 7: case 8: seg(left, top); break;
          case 10: seg(top, right); seg(left, bottom); break;
        }
      }
    }
    function draw() {
      c2.clearRect(0, 0, W, H);
      c2.strokeStyle = "rgba(255,239,0,0.075)"; c2.lineWidth = 1; c2.beginPath();
      for (var li = 0; li < LEVELS; li++) ms((li + 1) / (LEVELS + 1));
      c2.stroke();
    }
    function resize2() {
      var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      W = window.innerWidth; H = window.innerHeight;
      cv.width = W * dpr; cv.height = H * dpr; cv.style.width = W + "px"; cv.style.height = H + "px";
      c2.setTransform(dpr, 0, 0, dpr, 0, 0);
      build(PHASE); draw();
    }
    var lastT = 0;
    function loop2(now) {
      if (!el.parentNode) return;
      requestAnimationFrame(loop2);
      if (now - lastT < 1000 / 20) return;
      lastT = now; PHASE += 0.005; build(PHASE); draw();
    }
    window.addEventListener("resize", resize2);
    resize2(); requestAnimationFrame(loop2);
  })();

  // 进度推进 + 元素入场
  var fill = el.querySelector(".ds-leftfill"), pctEl = el.querySelector(".ds-pct"),
      pstateEl = el.querySelector(".ds-pstate");
  var p = 0;
  function setP(v) {
    p = Math.min(100, v);
    fill.style.height = (p / 100 * window.innerHeight) + "px";
    pctEl.innerHTML = Math.floor(p) + "<small>%</small>";
    for (var i = SPLASH_STAGES.length - 1; i >= 0; i--) { if (p >= SPLASH_STAGES[i][0]) { pstateEl.textContent = SPLASH_STAGES[i][1]; break; } }
  }
  var ready = false;
  var minShow = 1800;
  function isReady() {
    var root = document.getElementById("root");
    return root !== null && root.childElementCount > 0 && (Date.now() - started) >= minShow;
  }
  var timer = setInterval(function () {
    if (!ready) ready = isReady();
    if (!ready) {
      p += (88 - p) * 0.05;
      if (p > 87) p = 87 + Math.random() * 1.5;
    } else {
      p += Math.max(1.6, (100 - p) * 0.13);
      if (p >= 100) { p = 100; setP(p); clearInterval(timer); setTimeout(finish, 1050); return; }
    }
    setP(p);
  }, 60);
  setTimeout(function () { var t = el.querySelector(".ds-terrain"); if (t) t.classList.add("on"); }, 120);
  setTimeout(function () { el.querySelector(".ds-logo").classList.add("on"); }, 350);
  setTimeout(function () { el.querySelector(".ds-progress").classList.add("on"); }, 600);
  setTimeout(function () { el.querySelector(".ds-loading").classList.add("on"); }, 900);
  setTimeout(function () { el.querySelector(".ds-slogan").classList.add("on"); }, 1400);
  setTimeout(function () { el.querySelector(".ds-corner").classList.add("on"); }, 1800);

  // 就绪检测：DSH 根节点有内容 + 最短展示 1.4s → 淡出
  var started = Date.now(), finished = false;
  function finish() {
    if (finished) return;
    if (hold && !window.__dshSplashForceClose) return;
    finished = true;
    el.classList.add("ds-wiping");
    setTimeout(function () {
      el.classList.add("ds-out");
      setTimeout(function () {
        if (el.parentNode) el.parentNode.removeChild(el);
        if (st.parentNode) st.parentNode.removeChild(st);
      }, 520);
    }, 640);
  }
  setTimeout(function () { ready = true; }, 7000); // 保险：最多 7 秒后强制补满
  return { destroy: finish };
}
function apply(ctx) {
			ctx.effect(() => {
				var dispose = ctx.theme.overrideTokens("dsh-theme-endfield", TOKENS);
				try { ctx.theme.setTheme("dark"); } catch (e) { /* non-fatal */ }
				try { if (localStorage.getItem('dsh-theme-endfield-texture') === '0') document.body.classList.add('ds-no-texture'); else document.body.classList.remove('ds-no-texture'); } catch (e) { }
var splash = mountSplash();
				var terrain = mountContour();
				return function () {
					if (splash && splash.destroy) splash.destroy();
					if (terrain && terrain.destroy) terrain.destroy();
					dispose();
				};
			});
		}

		exports.inject = ["theme"];
		exports.apply = apply;
		return module.exports;
	}
});