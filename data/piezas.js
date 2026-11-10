/*
  Cada pieza es un objeto de esta lista; la página se arma sola a partir de aquí.

  Campos:
    id        identificador corto, sin espacios
    seccion   "peru" | "mundo"
    puesto    "principal" | "lateral" | "fila"   (dónde aparece en la portada)
    tema      rótulo pequeño sobre el titular
    titular   el titular satírico
    bajada    resumen con los hechos, en tono de diario
    fuentes   [{ medio, titulo, url, fecha }]
    ficha     { mantiene, cambia, tecnica, limite, verificar }

  Regla del proyecto: el humor cambia el encuadre, nunca inventa datos.
  Todo dato de la bajada debe poder comprobarse en las fuentes enlazadas.
*/
window.PUBLICADO = "9 de noviembre de 2026";

window.PIEZAS = [
  {
    id: "upc-ucal",
    seccion: "peru",
    puesto: "principal",
    tema: "Educación",
    titular: "La UPC aprovecha el CyberWow y compra la UCAL por 35 millones de dólares con alumnos incluidos",
    bajada: "La operación se concretó el 5 de noviembre. El monto incluye los inmuebles del campus, valorizados en cerca de US$ 25 millones. La UCAL atiende a unos 2,500 estudiantes y la integración será efectiva desde el 16 de febrero de 2027. La UPC afirma que garantizará la continuidad académica.",
    fuentes: [
      {
        medio: "RPP",
        titulo: "UPC compra la universidad UCAL por US$ 35 millones y absorberá 2,500 estudiantes",
        url: "https://rpp.pe/economia/economia/upc-compra-la-universidad-ucal-por-us-35-millones-y-absorbera-5000-estudiantes-noticia-1716195",
        fecha: "5 de noviembre de 2026"
      }
    ],
    ficha: {
      mantiene: "Quién compra, a quién y por cuánto: la UPC, la UCAL y los 35 millones.",
      cambia: "«Absorberá 2,500 estudiantes» pasa a «con alumnos incluidos», y la compra se cuenta como una oferta de tienda en línea.",
      tecnica: "Ironía y exageración comercial.",
      limite: "La compra no tuvo relación con el CyberWow. Es una metáfora. Tampoco se «compra» a los estudiantes: según la UPC, podrán continuar sus estudios.",
      verificar: "La dirección de la nota dice 5000, pero el texto habla de unos 2,500 estudiantes y de una capacidad de 5,000. Esta pieza evita dar cifra de alumnos."
    }
  },
  {
    id: "lima-alcaldesa",
    seccion: "peru",
    puesto: "lateral",
    tema: "Elecciones municipales",
    titular: "Lima tendrá una alcaldesa que no conoce",
    bajada: "El JNE resolvió, por mayoría, que quien fue alcalde no puede volver como primer regidor. Según los medios, la segunda regidora de la lista podría asumir; la proclamación depende del Jurado Electoral Especial de Lima Centro.",
    fuentes: [
      {
        medio: "Infobae",
        titulo: "Rafael López Aliaga no será proclamado como alcalde de Lima: JNE se pronuncia sobre reelección encubierta",
        url: "https://www.infobae.com/peru/2026/11/07/rafael-lopez-aliaga-no-sera-proclamado-como-alcalde-de-lima-jne-se-pronuncia-sobre-reeleccion-encubierta/",
        fecha: "7 de noviembre de 2026"
      },
      {
        medio: "La República",
        titulo: "Rafael López Aliaga no será alcalde de Lima: JNE aclara que otorgará credenciales de primer regidor a reelectos",
        url: "https://larepublica.pe/politica/2026/11/06/rafael-lopez-aliaga-no-sera-alcalde-de-lima-jne-aclara-que-otorgara-credenciales-de-primer-regidor-a-reelectos-hnews-220146",
        fecha: "6 de noviembre de 2026"
      },
      {
        medio: "Infobae",
        titulo: "División en el JNE: fallo que deja sin alcaldía a Rafael López Aliaga no fue unánime",
        url: "https://www.infobae.com/peru/2026/11/07/division-en-el-jne-fallo-que-deja-sin-alcaldia-a-rafael-lopez-aliaga-no-fue-unanime/",
        fecha: "7 de noviembre de 2026"
      }
    ],
    ficha: {
      mantiene: "La resolución del JNE y la posibilidad de que asuma la segunda regidora de la lista.",
      cambia: "La idea de votar por una persona y terminar con otra, expresada como una paradoja.",
      tecnica: "Paradoja: el titular suena a contradicción y la explicación está en la nota.",
      limite: "La proclamación aún depende del Jurado Electoral Especial. «Podría» es parte del hecho. No se nombra a la regidora ni se opina de ella.",
      verificar: "Estado de la proclamación en el JEE Lima Centro antes de publicar."
    }
  },
  {
    id: "conima-moneda",
    seccion: "peru",
    puesto: "lateral",
    tema: "Elecciones municipales",
    titular: "Cara o sello: la alcaldía de Conima se define por una moneda",
    bajada: "Tras un empate de 671 votos en el distrito de Conima (Moho, Puno), el Jurado Electoral Especial de Huancané resolvió con una moneda de un sol, según el método acordado por el JNE. Ganó «sello» y, con él, el candidato Rubén Quispe Capajaña.",
    fuentes: [
      {
        medio: "América TV",
        titulo: "JEE resolvió con moneda virtual al alcalde de Conima tras empate",
        url: "https://www.americatv.com.pe/noticias/actualidad/jee-resolvio-moneda-virtual-alcalde-conima-empate-n524143",
        fecha: "4 de noviembre de 2026"
      },
      {
        medio: "Caretas",
        titulo: "Nota sobre el desempate en Conima",
        url: "https://caretas.pe/?p=842726",
        fecha: "noviembre de 2026"
      }
    ],
    ficha: {
      mantiene: "El empate, el lugar y el método: una moneda de un sol, tal como lo acordó el JNE.",
      cambia: "Un procedimiento legal se cuenta con el lenguaje de un juego de azar.",
      tecnica: "Literalidad: el chiste es que la nota ya dice lo que el titular dice.",
      limite: "No se sugiere que el método sea irregular. Es el procedimiento previsto.",
      verificar: "Título exacto de la nota de Caretas y confirmar que el método sea el de la moneda física o virtual, según cada fuente."
    }
  },
  {
    id: "lari-blancos",
    seccion: "peru",
    puesto: "fila",
    tema: "Elecciones municipales",
    titular: "Participó solo y perdió: el único candidato de Lari vuelve a perder contra nadie",
    bajada: "En Lari (Caylloma, Arequipa), el único candidato a la alcaldía obtuvo 188 votos, cerca de 27%, frente a 407 votos en blanco, cerca de 60%, y 81 nulos. Según la nota, algo parecido ocurrió en 2022. El JNE definirá los siguientes pasos.",
    fuentes: [
      {
        medio: "Infobae",
        titulo: "Hombre fue el único candidato a alcalde de un distrito en Perú, pero perdió ante los votos blancos y nulos",
        url: "https://www.infobae.com/peru/2026/10/05/elecciones-2026-hombre-fue-el-unico-candidato-a-alcalde-de-un-distrito-en-peru-pero-perdio-ante-los-votos-blancos-y-nulos/",
        fecha: "5 de octubre de 2026"
      },
      {
        medio: "La República",
        titulo: "Arequipa: votos blancos y nulos ganan a único candidato que postulaba para ser alcalde de Lari",
        url: "https://larepublica.pe/politica/2026/10/05/arequipa-votos-blancos-y-nulos-ganan-a-unico-candidato-que-postulaba-para-ser-alcalde-de-lari-hnews-456560",
        fecha: "5 de octubre de 2026"
      }
    ],
    ficha: {
      mantiene: "Un solo candidato, más votos en blanco que votos para él, y que ya había ocurrido antes.",
      cambia: "La derrota frente a los votos en blanco se cuenta como perder contra «nadie».",
      tecnica: "Hipérbole lógica: se lleva la situación a su forma más simple.",
      limite: "No se nombra al candidato: es una persona privada que no eligió ser noticia por esto. El chiste va al sistema, no a él.",
      verificar: "Los porcentajes se redondean; revisar contra el acta oficial si la pieza se usa fuera de este ejercicio."
    }
  },
  {
    id: "keiko-colegios",
    seccion: "peru",
    puesto: "fila",
    tema: "Gobierno",
    titular: "Cuántos colegios lleva Keiko: balance de sus 100 días al mando",
    bajada: "La presidenta juró el 28 de julio y cumplió 100 días el 5 de noviembre. En campaña prometió 3,000 colegios nuevos; el 27 de octubre anunció 2,000 nuevos y la renovación de otros 3,000. La prensa reportó hasta ahora la colocación de una primera piedra en Santa Anita.",
    fuentes: [
      {
        medio: "La República",
        titulo: "Keiko Fujimori reduce de 3 mil a 2 mil los colegios prometidos durante la campaña",
        url: "https://larepublica.pe/politica/2026/10/28/keiko-fujimori-reduce-de-3-mil-a-2-mil-los-colegios-prometidos-durante-la-campana-hnews-1691676",
        fecha: "28 de octubre de 2026"
      },
      {
        medio: "Gestión",
        titulo: "Gobierno de Keiko Fujimori promete 500 colegios al año: las barreras que deberá vencer para lograrlo",
        url: "https://gestion.pe/economia/gobierno-de-keiko-fujimori-promete-500-colegios-al-ano-las-barreras-que-debera-vencer-para-lograrlo-noticia/",
        fecha: "18 de septiembre de 2026"
      }
    ],
    ficha: {
      mantiene: "La promesa de campaña, el anuncio de octubre y los 100 días de gobierno.",
      cambia: "Un balance oficial de 100 días se plantea como pregunta de contabilidad simple.",
      tecnica: "Pregunta retórica: el titular hace una cuenta que la nota deja abierta.",
      limite: "No se afirma que no se haya construido ningún colegio, solo lo que la prensa reportó. Falta el conteo oficial.",
      verificar: "Conteo de colegios en Minedu o Pronied. Gestión indica que el Estado completa entre 30 y 80 colegios nuevos al año; confirmar la cifra."
    }
  },
  {
    id: "papa-leon",
    seccion: "peru",
    puesto: "fila",
    tema: "Visita papal",
    titular: "Un peruano que regresa del extranjero brillando: el comercio ya cuenta con vender hasta 20% más",
    bajada: "León XIV llega el miércoles 11 de noviembre a las 5:30 p. m. a la Base Aérea del Callao, procedente de Buenos Aires, y visitará el país hasta el 16. Tiene nacionalidad peruana desde 2015 y fue obispo de Chiclayo. La Cámara de Comercio de Lima proyecta que las ventas minoristas suban entre 10% y 20%.",
    fuentes: [
      {
        medio: "Infobae",
        titulo: "¿Cuándo llega el papa León XIV al Perú? Fecha y hora confirmadas",
        url: "https://www.infobae.com/peru/2026/11/06/cuando-llega-el-papa-leon-xiv-al-peru-fecha-y-hora-confirmadas/",
        fecha: "6 de noviembre de 2026"
      },
      {
        medio: "Infobae",
        titulo: "De la misa al mercado: visita de León XIV elevará hasta 20% las ventas retail durante la semana de actividades",
        url: "https://www.infobae.com/peru/2026/11/08/de-la-misa-al-mercado-visita-de-leon-xiv-elevara-hasta-20-las-ventas-retail-durante-la-semana-de-actividades/",
        fecha: "8 de noviembre de 2026"
      }
    ],
    ficha: {
      mantiene: "La llegada, la nacionalidad peruana y la proyección de ventas, que es un pronóstico.",
      cambia: "«Un peruano que regresa del extranjero» describe al papa con las palabras de cualquier viaje de regreso.",
      tecnica: "Reencuadre: se describe lo extraordinario con lenguaje cotidiano.",
      limite: "El humor está en la logística y el comercio; no se hace burla de la fe ni de los fieles. «Brillando» es una metáfora.",
      verificar: "Programa oficial de la visita; la nota se publicó antes de la llegada."
    }
  },
  {
    id: "paraguay",
    seccion: "mundo",
    puesto: "fila",
    tema: "Paraguay",
    titular: "Paraguay sin plata y sin presidente",
    bajada: "El martes 3 de noviembre fue intervenido Ueno Bank, con unos tres millones de clientes sin acceso a sus cuentas, según AFP. El viernes 6 el Senado votó la destitución de Santiago Peña, con 44 votos; Pedro Alliana asumió. Peña quedó detenido en su casa por supuestos delitos.",
    fuentes: [
      {
        medio: "Emol",
        titulo: "Policía detiene a Santiago Peña",
        url: "https://www.emol.com/noticias/Internacional/2026/11/06/1216392/policia-detiene-santiago-pena.html",
        fecha: "6 de noviembre de 2026"
      },
      {
        medio: "Al Jazeera",
        titulo: "Paraguay resumes Peña impeachment proceedings as financial crisis deepens",
        url: "https://www.aljazeera.com/amp/news/2026/11/6/paraguay-resumes-pena-impeachment-proceedings-as-financial-crisis-deepens",
        fecha: "6 de noviembre de 2026"
      }
    ],
    ficha: {
      mantiene: "La crisis del banco y la salida del presidente, en el mismo orden de la nota.",
      cambia: "Dos hechos graves se resumen en una frase simétrica.",
      tecnica: "Paralelismo: «sin… y sin…».",
      limite: "No hay burla de las personas afectadas. Los delitos son «supuestos». Las fuentes difieren en detalles de la destitución.",
      verificar: "Las fuentes no coinciden en cómo se resolvió el trámite (Al Jazeera dice que el Congreso no había resuelto la renuncia). Contrastar con una tercera fuente."
    }
  },
  {
    id: "whatsapp-numero",
    seccion: "mundo",
    puesto: "fila",
    tema: "Tecnología",
    titular: "WhatsApp ocultará tu número en una fecha que prefiere mantener oculta",
    bajada: "WhatsApp trabaja en una función que ocultaría por defecto el número de teléfono, y cada usuario elegiría quién puede verlo, según WABetaInfo. La función está en desarrollo, no tiene fecha de lanzamiento y no sería retroactiva.",
    fuentes: [
      {
        medio: "Infobae",
        titulo: "WhatsApp ocultará por defecto el número de teléfono y cada usuario escogerá quién lo puede ver",
        url: "https://www.infobae.com/tecno/2026/11/08/whatsapp-ocultara-por-defecto-el-numero-de-telefono-y-cada-usuario-escogera-quien-lo-puede-ver/",
        fecha: "8 de noviembre de 2026"
      }
    ],
    ficha: {
      mantiene: "Que la función existe en desarrollo y que no hay fecha.",
      cambia: "La ausencia de fecha se lee como un secreto deliberado.",
      tecnica: "Espejo: la función oculta un dato y el titular oculta otro.",
      limite: "No se afirma que WhatsApp esconda la fecha a propósito: no hay fecha porque no se anunció.",
      verificar: "Segunda fuente. La información proviene de WABetaInfo, un sitio que sigue versiones de prueba."
    }
  },
  {
    id: "apple-watch",
    seccion: "mundo",
    puesto: "fila",
    tema: "Tecnología",
    titular: "El Apple Watch tomará apuntes de tus conversaciones; a quienes hablen contigo no les llegará copia",
    bajada: "La beta para desarrolladores de watchOS 27.3, disponible desde el 3 de noviembre, incluye resúmenes de conversaciones con Siri. Apple dice que no almacena el audio. Las organizaciones EFF y EPIC critican la función por motivos de privacidad.",
    fuentes: [
      {
        medio: "Infobae",
        titulo: "El Apple Watch resumirá las conversaciones del día sin avisar a quienes hablan con su dueño",
        url: "https://www.infobae.com/tecno/2026/11/07/el-apple-watch-resumira-las-conversaciones-del-dia-sin-avisar-a-quienes-hablan-con-su-dueno/",
        fecha: "7 de noviembre de 2026"
      }
    ],
    ficha: {
      mantiene: "El resumen automático de conversaciones y que quien conversa con el dueño no recibe el resumen.",
      cambia: "La falta de aviso se cuenta como el chiste de una reunión en la que solo uno recibe el acta.",
      tecnica: "Metáfora de oficina: el apunte del que no estaba invitado.",
      limite: "Es una función en beta. El titular evita decir «sin avisar», porque una de las funciones, Live Rewind, sí avisa.",
      verificar: "Alcance real de cada función (Siri Recap y Live Rewind) en la documentación de Apple."
    }
  },
  {
    id: "nasa-convocatoria",
    seccion: "mundo",
    puesto: "fila",
    tema: "Ciencia",
    titular: "La NASA abre convocatoria para ir a la Luna y a Marte: por fin un trabajo con viaje incluido",
    bajada: "La convocatoria cierra a las 11:59 p. m. del jueves 3 de diciembre. Exige ciudadanía estadounidense, un posgrado STEM o equivalente y tres años de experiencia. Artemis III es en 2027 y Artemis IV en 2028. La nota no indica el número de plazas.",
    fuentes: [
      {
        medio: "Infobae",
        titulo: "La NASA busca astronautas para viajar a la Luna y a Marte: cómo postularse",
        url: "https://www.infobae.com/america/ciencia-america/2026/11/09/la-nasa-busca-astronautas-para-viajar-a-la-luna-y-a-marte-los-requisitos-para-postularse/",
        fecha: "9 de noviembre de 2026"
      }
    ],
    ficha: {
      mantiene: "La convocatoria, los requisitos y las misiones nombradas.",
      cambia: "Un cargo de astronauta se cuenta como un aviso de empleo común.",
      tecnica: "Registro laboral: el titular habla como una bolsa de trabajo.",
      limite: "El «viaje incluido» es una metáfora. El astronauta Frank Rubio advierte, en la nota, que la mayor parte del trabajo es de apoyo en tierra.",
      verificar: "La convocatoria exige ciudadanía estadounidense: el titular no sugiere que esté abierta a cualquiera."
    }
  }
];
