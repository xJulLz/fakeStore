function informativa() {
  document.getElementById("root").innerHTML = `
    <div style="background-color:#1D60BF40; border-radius:12px; padding:16px; color:white;">
      <h2>Mi Tienda Increíble</h2>
      <img src="https://via.placeholder.com/150" alt="Logo tienda" width="150" height="150">
      <p><b>Dirección:</b> Calle Principal 123, Ciudad</p>
      <p><b>Horario:</b> Lunes a Viernes, 9:00 AM – 6:00 PM</p>
      <p><b>Teléfono:</b> +123 456 7890</p>
      <p><b>Descripción:</b> Somos una tienda dedicada a ofrecer productos de calidad con atención personalizada.</p>
      <button onclick="home()">Volver</button>
    </div>
  `;
}
