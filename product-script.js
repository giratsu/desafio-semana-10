document.addEventListener("DOMContentLoaded", function () {
    const productName = document.getElementById("productName");
    const productDescription = document.getElementById("productDescription");
    
    // Recupera el valor almacenado en el localStorage con la clave "ProdID"
    const selectedProductId = localStorage.getItem("ProdID");

    // Busca ese producto en la matriz de productos y muestra su nombre y descripción en la página de detalles del producto.
    const selectedProduct = PRODUCTS.find(product => product.id.toString() === selectedProductId);

    if (selectedProduct) {
        productName.textContent = selectedProduct.name;
        productDescription.textContent = selectedProduct.description;
    }
});