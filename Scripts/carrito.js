// --- Carrito simple usando localStorage ---
const CART_KEY = "carrito";

// Asegura que exista la estructura en localStorage
function inicializarCarrito() {
  if (!localStorage.getItem(CART_KEY)) {
    localStorage.setItem(CART_KEY, JSON.stringify({ items: {} })); // items: { [id]: { id, title, price, image, qty } }
  }
}
inicializarCarrito();

function leerCarrito() {
  return JSON.parse(localStorage.getItem(CART_KEY));
}
function guardarCarrito(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Añade un producto al carrito. Si no está en local, lo busca en la API.
async function agregarAlCarrito(id) {
  const cart = leerCarrito();

  // Si ya existe, solo incrementa qty
  if (cart.items[id]) {
    cart.items[id].qty += 1;
    guardarCarrito(cart);
    mostrarCarrito(); // actualizar vista si está abierta
    return;
  }

  // Si no existe, fetch al API por id
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) throw new Error("Producto no encontrado");
    const p = await res.json();
    cart.items[id] = {
      id: p.id,
      title: p.title,
      price: p.price,
      image: p.image,
      qty: 1
    };
    guardarCarrito(cart);
    mostrarCarrito();
  } catch (err) {
    console.error("Error agregando al carrito:", err);
    alert("No se pudo agregar el producto al carrito.");
  }
}

// Quita 1 unidad o elimina si qty = 1
function quitarDelCarrito(id) {
  const cart = leerCarrito();
  if (!cart.items[id]) return;
  if (cart.items[id].qty > 1) {
    cart.items[id].qty -= 1;
  } else {
    delete cart.items[id];
  }
  guardarCarrito(cart);
  mostrarCarrito();
}

// Elimina por completo un producto
function eliminarProducto(id) {
  const cart = leerCarrito();
  if (cart.items[id]) {
    delete cart.items[id];
    guardarCarrito(cart);
    mostrarCarrito();
  }
}

// Vaciar carrito
function vaciarCarrito() {
  localStorage.setItem(CART_KEY, JSON.stringify({ items: {} }));
  mostrarCarrito();
}

// Obtener total
function obtenerTotal() {
  const cart = leerCarrito();
  let total = 0;
  Object.values(cart.items).forEach(i => {
    total += i.price * i.qty;
  });
  return total;
}

// Mostrar carrito en #root (se puede adaptar el estilo)
function mostrarCarrito() {
  const cart = leerCarrito();
  const items = Object.values(cart.items);
  let html = `
    <div style="background:#1D60BF40; border-radius:12px; padding:16px; color:white; max-width:800px; margin:20px auto;">
      <h2>Carrito de Compras</h2>
  `;

  if (items.length === 0) {
    html += `<p>Tu carrito está vacío.</p>
             <button onclick="home()">Volver</button>
             </div>`;
    document.getElementById("root").innerHTML = html;
    return;
  }

  html += `<div style="display:flex; flex-direction:column; gap:12px;">`;
  items.forEach(i => {
    html += `
      <div style="display:flex; gap:12px; align-items:center; background:rgba(255,255,255,0.06); padding:12px; border-radius:8px;">
        <img src="${i.image}" alt="${i.title}" width="80" height="80" style="object-fit:contain; background:white; padding:6px; border-radius:6px;">
        <div style="flex:1;">
          <div style="font-weight:700;">${i.title}</div>
          <div style="font-size:0.9em; opacity:0.9;">Precio: $${i.price.toFixed(2)}</div>
          <div style="font-size:0.9em; opacity:0.9;">Subtotal: $${(i.price * i.qty).toFixed(2)}</div>
        </div>
        <div style="display:flex; gap:6px; align-items:center;">
          <button onclick="quitarDelCarrito(${i.id})" style="padding:6px 8px;">−</button>
          <div style="min-width:24px; text-align:center;">${i.qty}</div>
          <button onclick="agregarAlCarrito(${i.id})" style="padding:6px 8px;">+</button>
          <button onclick="eliminarProducto(${i.id})" style="margin-left:8px; padding:6px 8px; background:#ff6b6b; border:none; color:white; border-radius:6px;">Eliminar</button>
        </div>
      </div>
    `;
  });
  html += `</div>`;

  html += `
      <hr style="border:none; height:1px; background:rgba(255,255,255,0.15); margin:16px 0;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div style="font-weight:700;">Total: $${obtenerTotal().toFixed(2)}</div>
        <div>
          <button onclick="vaciarCarrito()" style="margin-right:8px; padding:8px 12px;">Vaciar</button>
          <button onclick="simularCheckout()" style="padding:8px 12px; background:#2ecc71; border:none; color:white; border-radius:6px;">Pagar</button>
          <button onclick="home()" style="margin-left:8px; padding:8px 12px;">Volver</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("root").innerHTML = html;
}

// Función de ejemplo para simular checkout
function simularCheckout() {
  const total = obtenerTotal();
  if (total === 0) {
    alert("Tu carrito está vacío.");
    return;
  }
  // Aquí podría abrir un modal, redirigir a pago, etc.
  alert(`Checkout simulado. Total a pagar: $${total.toFixed(2)}\nGracias por tu compra (fake)!`);
  vaciarCarrito();
}