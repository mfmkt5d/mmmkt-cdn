# mmmkt-cdn

Assets de front (CSS/JS) que **Mystic Mind Mkt** inyecta en las tiendas de Tienda Nube de sus clientes
mediante la app partner **DecorIA** (ScriptTag API). Permite rediseñar tiendas del **plan gratuito**,
donde el acceso por FTP a las plantillas está bloqueado.

## Estructura

```
tn/<cliente>.js   → capa visual + widgets CRO de esa tienda
```

| Archivo | Tienda | Theme |
|---|---|---|
| `tn/sami.js` | Tiempo de Ser (`tn:sami`) | morelia |

## Cómo funciona

Cada archivo sobrescribe las **variables CSS del theme** (colores, tipografías, radios) sin tocar el
layout, por lo que el cambio es coherente y reversible: si se elimina el ScriptTag, la tienda vuelve
a su estado original.

## Reglas

- **Nunca** incluir tokens, claves ni datos de clientes en este repo (es público).
- Un archivo por tienda. No compartir estado entre clientes.
- Probar el cambio en la tienda después de cada push (el CDN cachea ~10 min).
