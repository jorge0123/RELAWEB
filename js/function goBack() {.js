document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obteniendo los valores del formulario
    const name = document.getElementById("name").value;
    const cardNumber = document.getElementById("cardNumber").value;
    const expiration = document.getElementById("expiration").value;
    const cvv = document.getElementById("cvv").value;

    // Validación básica de los datos del formulario
    if (name.trim() === "" || cardNumber.trim() === "" || expiration.trim() === "" || cvv.trim() === "") {
        alert("Por favor complete todos los campos del formulario.");
        return;
    }

    // Generando la factura
    const invoice = `Nombre: ${name}\nNúmero de Tarjeta: ${cardNumber}\nFecha de Expiración: ${expiration}\nCVV: ${cvv}`;

    // Descargando la factura como un archivo de texto
    download("factura.txt", invoice);

    // Mostrando el botón de descarga
    document.getElementById("downloadInvoice").style.display = "block";

    // Mensaje de pago exitoso
    alert("Pago procesado correctamente");

    // Limpieza del formulario después del pago
    document.getElementById("paymentForm").reset();
});

// Función para descargar el archivo de texto
function download(filename, text) {
    var element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

