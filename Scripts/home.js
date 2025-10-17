function buscadorfuncion(texto) {
  if (texto.length >= 3) {
    const filtrados = productos.filter(p =>
      p.title.toLowerCase().includes(texto.toLowerCase())
    );
    let listaHTML = generarLista(filtrados);
    document.getElementById("la-lista").innerHTML = listaHTML;
  } else {
    let listaHTML = generarLista(productos);
    document.getElementById("la-lista").innerHTML = listaHTML;
  }
}

function generarLista(listaProductos) {
  let listaHTML = "";
  for (let i = 0; i < listaProductos.length; i++) {
    listaHTML += `
      <div class="c-lista-producto" onclick="Detalle(${listaProductos[i].id})">
        <img src="${listaProductos[i].image}" width="80" height="80" alt="${listaProductos[i].title}">
        <p>${listaProductos[i].title}</p>
        <p><b>$${listaProductos[i].price}</b></p>
      </div>`;
  }
  return listaHTML;
}

function home() {
  document.getElementById("root").innerHTML = "";

  // Buscador
  const buscador = document.createElement("input");
  buscador.classList.add("c-buscador");
  buscador.type = "text";
  buscador.placeholder = "Buscar producto...";
  buscador.addEventListener("input", () => {
    buscadorfuncion(buscador.value);
  });

  // Filtros de categoría
  const categorias = ["All", "electronics", "jewelery", "men's clothing", "women's clothing"];
  const contenedorFiltro = document.createElement("div");
  contenedorFiltro.classList.add("categorias-container");

  for (let i = 0; i < categorias.length; i++) {
    const btn = document.createElement("button");
    btn.textContent = categorias[i];
    btn.addEventListener("click", () => {
      FiltroConexion(categorias[i]);
    });
    contenedorFiltro.appendChild(btn);
  }

  // Contenedor productos
  const contenedorProductos = document.createElement("div");
  contenedorProductos.id = "la-lista";
  contenedorProductos.innerHTML = generarLista(productos);

  document.getElementById("root").appendChild(buscador);
  document.getElementById("root").appendChild(contenedorFiltro);
  document.getElementById("root").appendChild(contenedorProductos);
}
