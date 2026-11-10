(function () {
  "use strict";

  var piezas = window.PIEZAS || [];
  var id = new URLSearchParams(location.search).get("id");
  var p = piezas.filter(function (x) { return x.id === id; })[0];
  var raiz = document.getElementById("articulo");

  function el(tag, clase, texto) {
    var nodo = document.createElement(tag);
    if (clase) nodo.className = clase;
    if (texto) nodo.textContent = texto;
    return nodo;
  }

  if (!p) {
    raiz.appendChild(el("h1", "titular", "Nota no encontrada"));
    var v = el("p");
    var a0 = el("a", null, "Volver a la portada");
    a0.href = "./";
    v.appendChild(a0);
    raiz.appendChild(v);
    document.title = "Nota no encontrada · Tinta Fresca";
    return;
  }

  document.title = p.titular + " · Tinta Fresca";

  var migas = el("p", "migas");
  var am = el("a", null, p.seccion === "mundo" ? "Mundo" : "Perú");
  am.href = "./#" + p.seccion;
  migas.appendChild(am);
  migas.appendChild(document.createTextNode(" · " + p.tema + " · "));
  migas.appendChild(el("strong", "etiqueta", "Sátira"));
  raiz.appendChild(migas);

  raiz.appendChild(el("h1", "titular", p.titular));
  raiz.appendChild(el("p", "subtitulo", p.bajada));

  var firma = el("p", "firma");
  firma.appendChild(el("strong", null, "Redacción Tinta Fresca"));
  firma.appendChild(document.createTextNode(" · " + (window.PUBLICADO || "")));
  raiz.appendChild(firma);

  if (p.imagen) {
    var fig = el("figure", "ilustracion");
    var img = el("img");
    img.src = p.imagen.src;
    img.alt = p.imagen.alt || "";
    fig.appendChild(img);
    if (p.imagen.credito) fig.appendChild(el("figcaption", null, p.imagen.credito));
    raiz.appendChild(fig);
  }

  var cuerpo = el("div", "cuerpo");
  (p.cuerpo || []).forEach(function (t) { cuerpo.appendChild(el("p", null, t)); });
  raiz.appendChild(cuerpo);

  var rec = el("aside", "recuadro");
  rec.setAttribute("aria-labelledby", "h-ficha");
  var h2 = el("h2", null, "Cómo se hizo esta pieza");
  h2.id = "h-ficha";
  rec.appendChild(h2);
  var dl = el("dl");
  [["Qué se mantiene", p.ficha.mantiene], ["Qué cambia", p.ficha.cambia], ["Técnica", p.ficha.tecnica],
   ["Límite del chiste", p.ficha.limite], ["Por verificar", p.ficha.verificar]].forEach(function (c) {
    if (!c[1]) return;
    dl.appendChild(el("dt", null, c[0]));
    dl.appendChild(el("dd", null, c[1]));
  });
  dl.appendChild(el("dt", null, "Notas originales"));
  var dd = el("dd");
  var ul = el("ul");
  p.fuentes.forEach(function (f) {
    var li = el("li");
    var a = el("a", null, f.titulo);
    a.href = f.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    li.appendChild(a);
    li.appendChild(document.createTextNode(" (" + f.medio + ", " + f.fecha + ")"));
    ul.appendChild(li);
  });
  dd.appendChild(ul);
  dl.appendChild(dd);
  rec.appendChild(dl);
  raiz.appendChild(rec);

  var otras = piezas.filter(function (x) { return x.id !== p.id; });
  var i = piezas.indexOf(p);
  var sel = [];
  for (var k = 1; k <= 3; k++) sel.push(piezas[(i + k) % piezas.length]);
  var rel = el("section", "relacionadas");
  rel.setAttribute("aria-labelledby", "h-rel");
  var h = el("h2", "bloque-titulo", "Más en Tinta Fresca");
  h.id = "h-rel";
  rel.appendChild(h);
  var lu = el("ul");
  sel.forEach(function (x) {
    var li = el("li");
    var a = el("a", null, x.titular);
    a.href = "nota.html?id=" + x.id;
    li.appendChild(a);
    lu.appendChild(li);
  });
  rel.appendChild(lu);
  raiz.appendChild(rel);
})();
