/* ============================================================
 * Tiempo de Ser — capa visual de marca  ·  tienda: tn:sami (7948753)
 * Theme base: morelia (Tienda Nube, plan free)
 * Inyectado con la app DecorIA vía ScriptTag (bypass de FTP).
 * Estrategia: NO se toca el layout. Se sobrescriben las variables CSS
 * del theme + tipografías + radios, para repintar la tienda entera
 * de forma coherente y reversible.
 * Brand kit: Sami/05-branding/_brief-branding.md
 * ============================================================ */
(function () {
  "use strict";
  if (window.__tdsBrandLoaded) return;
  window.__tdsBrandLoaded = true;

  /* ---------- 1. Tipografías de marca (Google Fonts) ---------- */
  var pre = document.createElement("link");
  pre.rel = "preconnect";
  pre.href = "https://fonts.gstatic.com";
  pre.crossOrigin = "anonymous";
  document.head.appendChild(pre);

  var font = document.createElement("link");
  font.rel = "stylesheet";
  font.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Mulish:wght@400;500;600;700&display=swap";
  document.head.appendChild(font);

  /* ---------- 2. Capa de marca ---------- */
  var css = `
/* ===== Paleta Tiempo de Ser sobre las variables del theme ===== */
:root{
  /* texto y fondo */
  --main-foreground:#2E2A3A;              /* Tinta Violeta */
  --main-background:#FFFFFF;
  /* acento */
  --accent-color:#6A5A99;                 /* Violeta Profundo */
  /* botones */
  --button-background:#6A5A99;
  --button-foreground:#FAF8F6;            /* Blanco Pétalo */
  /* barra de anuncio */
  --adbar-background:#6A5A99;
  --adbar-foreground:#FFFFFF;
  /* footer */
  --footer-background:#2E2A3A;
  --footer-foreground:#FFFFFF;
  /* bloques de fondo alterno */
  --newsletter-background:#EAE6EF;        /* Bruma Lavanda */
  --newsletter-foreground:#2E2A3A;
  --services-background:#EDE9E6;          /* Greige Calma */
  --services-foreground:#2E2A3A;
  /* tipografía */
  --title-font:"Cormorant Garamond", Georgia, serif;
  --body-font:"Mulish", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --title-font-weight:500;
  /* forma: el look premium = esquinas suaves */
  --border-radius:14px;
  --shadow-distance:0 8px 24px;
  /* opacidades derivadas recalculadas sobre Tinta Violeta */
  --main-foreground-opacity-03:#2E2A3A08;
  --main-foreground-opacity-05:#2E2A3A0D;
  --main-foreground-opacity-07:#2E2A3A12;
  --main-foreground-opacity-10:#2E2A3A1A;
  --main-foreground-opacity-20:#2E2A3A33;
  --main-foreground-opacity-30:#2E2A3A4D;
  --main-foreground-opacity-40:#2E2A3A66;
  --main-foreground-opacity-50:#2E2A3A80;
  --main-foreground-opacity-80:#2E2A3ACC;
}

/* ===== Tipografía ===== */
body, button, input, select, textarea, .btn{
  font-family:var(--body-font);
  -webkit-font-smoothing:antialiased;
}
h1,h2,h3,h4,h5,.h1,.h2,.h3,.h4,.h5,
.item-name, .product-name, .section-title, .title{
  font-family:var(--title-font) !important;
  font-weight:500;
  letter-spacing:.01em;
  color:#2E2A3A;
}
h1,.h1{ line-height:1.15; }
h2,.h2{ line-height:1.2; }

/* "eyebrow": los rótulos chicos en mayúsculas espaciadas dan el aire premium */
.font-small, .text-small{ letter-spacing:.02em; }

/* ===== Botones ===== */
.btn, .btn-primary, button[type="submit"]{
  border-radius:999px !important;
  font-family:var(--body-font);
  font-weight:600;
  letter-spacing:.03em;
  transition:background-color .25s ease, transform .2s ease, box-shadow .25s ease;
}
.btn-primary, .btn-default:not(.btn-secondary){
  background-color:#6A5A99 !important;
  border-color:#6A5A99 !important;
  color:#FAF8F6 !important;
}
.btn-primary:hover, .btn-default:not(.btn-secondary):hover{
  background-color:#9B86C4 !important;   /* Lavanda Ser */
  border-color:#9B86C4 !important;
  box-shadow:0 8px 20px rgba(106,90,153,.22);
  transform:translateY(-1px);
}
.btn-secondary, .btn-outline{
  border:1px solid #6A5A99 !important;
  color:#6A5A99 !important;
  background:transparent !important;
  border-radius:999px !important;
}

/* ===== Cards de producto: aire + esquinas suaves + hover sereno ===== */
.item-product, .product-item{
  border-radius:16px;
  overflow:hidden;
  transition:transform .3s ease, box-shadow .3s ease;
}
.item-product:hover, .product-item:hover{
  transform:translateY(-4px);
  box-shadow:0 12px 32px rgba(46,42,58,.10);
}
.product-item-image-container, .item-image, .product-image{
  border-radius:14px;
  overflow:hidden;
  background:#FAF8F6;                     /* mismo fondo que las fotos = catálogo coherente */
}
.item-name, .product-name{
  font-size:1.05rem;
  line-height:1.3;
}
.item-price, .price, .product-price{
  font-family:var(--body-font);
  font-weight:600;
  color:#6A5A99;                          /* precio en violeta, nunca rojo */
}

/* ===== Etiquetas / badges: durazno con texto oscuro (contraste) ===== */
.label-accent, .label-offer, .js-offer-label{
  background-color:#F0B59A !important;    /* Durazno Aura */
  color:#2E2A3A !important;               /* texto OSCURO, si no no se lee */
  border-radius:999px !important;
  font-weight:600;
  letter-spacing:.02em;
}
.label-default{
  background-color:#EAE6EF !important;
  color:#2E2A3A !important;
  border-radius:999px !important;
}
.text-accent{ color:#6A5A99 !important; }

/* ===== Barra de anuncio ===== */
.adbar, .announcement-bar, .header-top{
  background-color:#6A5A99 !important;
  color:#FFFFFF !important;
  letter-spacing:.02em;
}
.adbar a, .announcement-bar a{ color:#FFFFFF !important; text-decoration:underline; }

/* ===== Header ===== */
.header, .navbar, .main-header{ background-color:#FFFFFF; }
.nav-list-link, .nav-item-desktop a{
  font-family:var(--body-font);
  font-weight:500;
  letter-spacing:.02em;
  transition:color .2s ease;
}
.nav-list-link:hover, .nav-item-desktop a:hover{ color:#6A5A99 !important; }

/* ===== Bloques de fondo alterno ===== */
.services, .store-services{ background-color:#EDE9E6 !important; }
.newsletter, .newsletter-section{ background-color:#EAE6EF !important; }

/* ===== Footer ===== */
.footer, footer{ background-color:#2E2A3A !important; color:#FFFFFF !important; }
.footer a, footer a{ color:#FFFFFF !important; opacity:.85; transition:opacity .2s ease; }
.footer a:hover, footer a:hover{ opacity:1; color:#C9A86A !important; }  /* Oro Suave al hover */

/* ===== Inputs ===== */
.form-control, input[type="text"], input[type="email"], select, textarea{
  border-radius:10px !important;
  border:1px solid #2E2A3A26 !important;
  font-family:var(--body-font);
  transition:border-color .2s ease, box-shadow .2s ease;
}
.form-control:focus, input:focus, textarea:focus{
  border-color:#9B86C4 !important;
  box-shadow:0 0 0 3px rgba(155,134,196,.15) !important;
  outline:none !important;
}

/* ===== Detalle premium: línea dorada fina bajo los títulos de sección ===== */
.section-title:after, .home-section-title:after{
  content:"";
  display:block;
  width:44px;
  height:1px;
  margin:14px auto 0;
  background:#C9A86A;                     /* Oro Suave — solo como línea, nunca relleno */
}

/* ===== Imágenes con esquinas suaves ===== */
img{ border-radius:6px; }
.logo img, .header img, .navbar img, .footer img{ border-radius:0; }

/* ===== Mobile: más aire ===== */
@media (max-width:768px){
  .item-product, .product-item{ border-radius:14px; }
  h1,.h1{ font-size:1.9rem; }
}
`;

  var style = document.createElement("style");
  style.id = "tds-brand";
  style.textContent = css;
  document.head.appendChild(style);
})();
