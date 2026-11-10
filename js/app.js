(function () {
  "use strict";

  var piezas = window.PIEZAS || [];

  function el(tag, clase, texto) {
    var nodo = document.createElement(tag);
    if (clase) nodo.className = clase;
    if (texto) nodo.textContent = texto;
    return nodo;
  }

  function ficha(p) {
    var d = el("details", "ficha");
    d.appendChild(el("summary", null, "Cómo se hizo esta pieza"));
    var dl = el("dl");
    var campos = [
      ["Qué se mantiene", p.ficha.mantiene],
      ["Qué cambia", p.ficha.cambia],
      ["Técnica", p.ficha.tecnica],
      ["Límite del chiste", p.ficha.limite],
      ["Por verificar", p.ficha.verificar]
    ];
    campos.forEach(function (c) {
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
    d.appendChild(dl);
    return d;
  }

  function nota(p, clase) {
    var art = el("article", "nota " + (clase || ""));
    art.id = p.id;
    art.setAttribute("aria-labelledby", "t-" + p.id);

    if (p.imagen) {
      var fig = el("figure", "ilustracion");
      var link = el("a");
      link.href = "nota.html?id=" + p.id;
      link.tabIndex = -1;
      var img = el("img");
      img.src = p.imagen.src;
      img.alt = p.imagen.alt || "";
      img.loading = "lazy";
      link.appendChild(img);
      fig.appendChild(link);
      if (p.imagen.credito) fig.appendChild(el("figcaption", null, p.imagen.credito));
      art.appendChild(fig);
    }

    var tema = el("p", "tema", p.tema);
    tema.appendChild(el("span", "etiqueta", "Sátira"));
    art.appendChild(tema);

    var h = el("h3", "titular");
    h.id = "t-" + p.id;
    var ht = el("a", null, p.titular);
    ht.href = "nota.html?id=" + p.id;
    h.appendChild(ht);
    art.appendChild(h);

    art.appendChild(el("p", "bajada", p.bajada));

    var pie = el("p", "pie-nota");
    pie.appendChild(document.createTextNode(window.PUBLICADO || ""));
    pie.appendChild(el("span", "sep", "·"));
    var a = el("a", null, "Leer la nota");
    a.href = "nota.html?id=" + p.id;
    pie.appendChild(a);
    art.appendChild(pie);

    art.appendChild(ficha(p));
    return art;
  }

  function llenar(id, lista, clase) {
    var raiz = document.getElementById(id);
    if (!raiz) return;
    lista.forEach(function (p) {
      raiz.appendChild(nota(p, clase));
    });
  }

  var principal = piezas.filter(function (p) { return p.puesto === "principal"; });
  var laterales = piezas.filter(function (p) { return p.puesto === "lateral"; });
  var filas = piezas.filter(function (p) { return p.puesto === "fila"; });

  var portada = document.getElementById("portada-grid");
  if (portada) {
    principal.forEach(function (p) {
      portada.appendChild(nota(p, "principal"));
    });
    var lat = el("div", "laterales");
    laterales.forEach(function (p) {
      lat.appendChild(nota(p));
    });
    portada.appendChild(lat);
  }

  llenar("fila-peru", filas.filter(function (p) { return p.seccion === "peru"; }));
  llenar("fila-mundo", filas.filter(function (p) { return p.seccion === "mundo"; }));

  // ---------- Cintillo "Últimas" ----------
  var lista = document.getElementById("cintillo-lista");
  if (lista) {
    function agregar(oculto) {
      piezas.forEach(function (p) {
        var li = el("li");
        var a = el("a", null, p.titular);
        a.href = "nota.html?id=" + p.id;
        if (oculto) {
          li.setAttribute("aria-hidden", "true");
          a.tabIndex = -1;
        }
        li.appendChild(a);
        lista.appendChild(li);
      });
    }
    agregar(false);
    agregar(true); // copia para que el desplazamiento no tenga salto

    var cintillo = document.querySelector(".cintillo");
    var boton = document.getElementById("cintillo-pausa");
    boton.addEventListener("click", function () {
      var pausado = cintillo.classList.toggle("pausado");
      boton.setAttribute("aria-pressed", String(pausado));
      boton.textContent = pausado ? "Reanudar" : "Pausar";
    });
  }
})();
