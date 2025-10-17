async function conexionLista() {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return data;
}

let productos = [];

async function General() {
  if (productos.length === 0) {
    productos = await conexionLista();
  }
  home();
}

General();

async function FiltroConexion(categoria) {
  document.getElementById("la-lista").innerHTML = "";

  if (categoria === "All") {
    productos = await conexionLista();
  } else {
    const res = await fetch(`https://fakestoreapi.com/products/category/${categoria}`);
    productos = await res.json();
  }

  const listaHTML = generarLista(productos);
  document.getElementById("la-lista").innerHTML = listaHTML;
}
