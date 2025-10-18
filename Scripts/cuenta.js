function mostrarCuentaFake() {
  document.getElementById("root").innerHTML = `
    <div style="background:#1D60BF40; border-radius:12px; padding:24px; color:white; max-width:800px; margin:24px auto; font-family:sans-serif;">
      <h2 style="margin-top:0;">Mi Cuenta</h2>

      <div style="display:flex; gap:20px; align-items:center; margin-bottom:20px;">
        <img src="https://via.placeholder.com/100?text=👤" alt="Avatar" style="width:100px; height:100px; border-radius:50%; border:2px solid white;">
        <div>
          <div style="font-size:20px; font-weight:bold;">Juan Pérez</div>
          <div style="color:rgba(255,255,255,0.8); font-size:14px;">juanperez@example.com</div>
          <div style="margin-top:8px; font-size:14px;">Usuario desde: <b>Febrero 2023</b></div>
        </div>
      </div>

      <hr style="border:none; height:1px; background:rgba(255,255,255,0.1); margin:20px 0;">

      <h3>Últimos pedidos</h3>
      <ul style="list-style:none; padding:0; margin:0;">
        <li style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.1);">
          <div style="font-weight:bold;">Pedido #10021</div>
          <div style="font-size:14px; color:rgba(255,255,255,0.8);">3 artículos - $84.97 - 14 Sept 2025</div>
        </li>
        <li style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.1);">
          <div style="font-weight:bold;">Pedido #9984</div>
          <div style="font-size:14px; color:rgba(255,255,255,0.8);">1 artículo - $29.99 - 2 Ago 2025</div>
        </li>
      </ul>

      <div style="margin-top:24px;">
        <button style="padding:10px 16px; background:#ffffff22; border:none; border-radius:8px; color:white; margin-right:8px; cursor:default;">Editar perfil</button>
        <button style="padding:10px 16px; background:#e74c3c; border:none; border-radius:8px; color:white; cursor:default;">Cerrar sesión</button>
        <button style="padding:10px 16px; margin-left:8px; cursor:default;">Volver</button>
      </div>
    </div>
  `;
}
