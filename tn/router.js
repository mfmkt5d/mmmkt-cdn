/* ============================================================
 * MMMKT · Router de capa visual para tiendas Tienda Nube
 * ------------------------------------------------------------
 * ESTE es el script que se registra UNA sola vez en el panel de
 * Partners (app DecorIA). Detecta en qué tienda corre y carga el
 * archivo de esa tienda. Así un único script_id sirve para todos
 * los clientes, y cada tienda recibe solo su propia capa visual.
 *
 * Para sumar un cliente: agregar su dominio al mapa STORES y
 * subir tn/<cliente>.js. No hace falta tocar el panel de Partners.
 * ============================================================ */
(function () {
  "use strict";
  if (window.__mmmktRouterLoaded) return;
  window.__mmmktRouterLoaded = true;

  var BASE = "https://mfmkt5d.github.io/mmmkt-cdn/tn/";

  /* dominio (o fragmento de dominio) -> archivo del cliente */
  var STORES = {
    "tiendadehola19.mitiendanube.com": "sami",
    "tiempodeser.com": "sami",
    "tiempodeser.site": "sami"
    /* proximos: "aceiteclo.com": "aceite-clo", ... */
  };

  var host = (window.location.hostname || "").toLowerCase();
  var cliente = STORES[host];

  /* fallback: coincidencia parcial (subdominios, www, previews) */
  if (!cliente) {
    for (var dom in STORES) {
      if (Object.prototype.hasOwnProperty.call(STORES, dom) && host.indexOf(dom) !== -1) {
        cliente = STORES[dom];
        break;
      }
    }
  }

  /* tienda no registrada -> no hacer nada (nunca tocar una tienda ajena) */
  if (!cliente) return;

  var s = document.createElement("script");
  s.src = BASE + cliente + ".js";
  s.async = true;
  s.setAttribute("data-mmmkt", cliente);
  document.head.appendChild(s);
})();
