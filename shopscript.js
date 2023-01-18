const loader = document.getElementById("loader");

window.addEventListener("load", function() {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(var(--background))";
});


let cart = [];

function addToCart(title, price) {
    cart.push({productTitle: title, productPrice: price, productQuantity: 1});
    console.log(cart);

    renderCart();
}

function renderCart() {
    let listHTML = "";

    document.getElementsByClassName("cart-menu-note")[0].style.display = "none";

    cart.map(prod => listHTML+= `<li class="cart-menu-item flexbox">
                    <p class="cart-menu-text flexbox-space-bet"><span>${prod.productTitle}</span><span>$${prod.productPrice}</span><span class="cart-remove flexbox">remove</span></p>
                </li>`);

    document.getElementsByClassName("cart-menu-items")[0].innerHTML = listHTML;
    document.getElementsByClassName("cart-length")[0].innerHTML = document.getElementsByClassName("cart-length")[0].innerHTML + cart.length;
    document.getElementsByClassName("navbar-button-note")[0].innerHTML = document.getElementsByClassName("navbar-button-note")[0].innerHTML + cart.length;

}

let cartMenu = document.getElementsByClassName("cart-menu")[0];

document.getElementsByClassName("navbar-item-last")[0].addEventListener("click", function() {

    if (cartMenu.classList.contains("open")) {
        cartMenu.style.opacity = "0";
        cartMenu.classList.remove("open");
    } else {
        cartMenu.style.opacity = "1";
        cartMenu.classList.add("open");
    }

});

/*
const cardButton = document.querySelectorAll(".product-card-button");

cardButton.forEach(function(item) {
    item.addEventListener("click", function() {
        let types = JSON.stringify({
            ProductTitle: this.dataset.typename,
            productPrice: this.dataset.typeprice
        });

        cart = types.concat(cart);

        console.log(cart);

        renderCart()
    });
});
 */