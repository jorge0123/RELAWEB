function goBack() {
    window.history.back();
}

function generateInvoice() {
    // Aquí puedes implementar la lógica para generar la factura
    alert("Factura generada correctamente");
}

document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Aquí puedes agregar la lógica de validación de los datos del formulario antes de enviarlos
    // Por ejemplo, puedes verificar si la tarjeta de crédito es válida, etc.
    alert("Pago procesado correctamente");
    // Aquí normalmente enviarías los datos a tu servidor para procesar el pago
});

document.getElementById("generateInvoice").addEventListener("click", generateInvoice);
