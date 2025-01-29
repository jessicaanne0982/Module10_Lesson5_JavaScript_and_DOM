// Task 1 - Create an array of products
let products = [
    {name: "Laptop", price: 999.99, description: "Powerful computing on the go"},
    {name: "Smartphone", price: 699.99, description: "Stay connected wherever you are"},
    {name: "Headphones", price: 149.99, description: "Immersive audio experience"}
];

// Task 2 - Write a function to display the product information dynamically
function displayProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    products.forEach(product => {
        let newProductDiv = document.createElement("div");
        newProductDiv.classList.add('product')
        
        newProductDiv.innerHTML = `<strong>${product.name}:</strong> ${product.description} Price: $${product.price}<br><br>`;

        productList.appendChild(newProductDiv);
    })
}

// Task 3 - add an Event Listener to display the products once the page loads
document.addEventListener("DOMContentLoaded", function() {
    alert("Check out the products we have to offer!");
    displayProducts();
});
