async function mostrarPopulares() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  // Sort by highest rating
  const populares = products
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 3); // Top 3 products

  // Generate HTML
  let html = `<h2 style="color:white;">Productos Populares</h2>`;

  populares.forEach(producto => {
    html += `
      <div style="background-color:#1D60BF40; border-radius:12px; padding:16px; color:white; margin-bottom:16px;">
        <h3>${producto.title}</h3>
        <img src="${producto.image}" alt="${producto.title}" width="100" height="100" />
        <p><b>Precio:</b> $${producto.price}</p>
        <p><b>Rating:</b> ${producto.rating.rate} (${producto.rating.count} reviews)</p>
        <p><b>Categoría:</b> ${producto.category}</p>
        <button onclick="Detalle(${producto.id})">Ver Detalle</button>
      </div>
    `;
  });

  html += `<button onclick="home()">Volver</button>`;

  document.getElementById("root").innerHTML = html;
}
