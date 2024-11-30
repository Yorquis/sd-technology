function registrarUsuario() {
    alert("Usuario registrado con éxito.");
}

function iniciarSesion() {
    alert("Inicio de sesión exitoso.");
}

function recuperarContrasena() {
    alert("Se ha enviado un enlace de recuperación.");
}

function mostrarInventario() {
    const inventario = [
        { producto: "Impresora", precio: "$69", stock: 6 },
        { producto: "Mouse", precio: "$23", stock: 20 },
        { producto: "Teclado", precio: "$51", stock: 17 },
    ];
    const div = document.getElementById("inventario");
    div.innerHTML = inventario.map(item => `<p>${item.producto} - ${item.precio} - Stock: ${item.stock}</p>`).join("");
}

function modificarProducto() {
    alert("Valor del producto modificado con éxito.");
}
