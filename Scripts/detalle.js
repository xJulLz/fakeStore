function detalle() {
  document.getElementById("root").innerHTML = "Detalle";
}

async function Detalle(idProducto) {
  const res = await fetch(`https://fakestoreapi.com/products/${idProducto}`);
  const data = await res.json();

  document.getElementById("root").innerHTML = `
    <div style="background-color:#1D60BF40; border-radius:12px; padding:16px; color:white;">
      <h2>${data.title}</h2>
      <img src="${data.image}" alt="${data.title}" width="150" height="150">
      <p><b>Precio:</b> $${data.price}</p>
      <p><b>Categoría:</b> ${data.category}</p>
      <p><b>Descripción:</b> ${data.description}</p>
      <p><b>Rating:</b> ⭐ ${data.rating.rate} (${data.rating.count} reviews)</p>
      <button onclick="home()">Volver</button>
    </div>
  `;
}
