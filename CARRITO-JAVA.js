const botonesAgregar = document.querySelectorAll('.agregar-carrito');
const listaCarrito = document.getElementById('lista-carrito');
const total = document.getElementById('total');
const contador = document.getElementById('contador-carrito');
const modal = document.getElementById('modal-carrito');
const btnCerrar = document.getElementById('cerrar-carrito');
const btnVerCarrito = document.getElementById('ver-carrito');
const btnVaciar = document.getElementById('vaciar-carrito');

let carrito = [];
let totalPrecio = 0;

botonesAgregar.forEach(boton => {
  boton.addEventListener('click', () => {
    const nombre = boton.dataset.nombre;
    const precio = parseInt(boton.dataset.precio);

    carrito.push({ nombre, precio });
    actualizarCarrito();
  });
});

btnVerCarrito.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'flex';
});

btnCerrar.addEventListener('click', () => {
  modal.style.display = 'none';
});

btnVaciar.addEventListener('click', () => {
  carrito = [];
  actualizarCarrito();
});

function actualizarCarrito() {
  listaCarrito.innerHTML = '';
  totalPrecio = 0;

  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio}`;
    listaCarrito.appendChild(li);
    totalPrecio += item.precio;
  });

  contador.textContent = carrito.length;
  total.textContent = `Total: $${totalPrecio}`;
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("busqueda").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      filtrarProductos();
    }
  });

  // O
  document.getElementById("busqueda").addEventListener("input", function() {
    filtrarProductos();
  });
});