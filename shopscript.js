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

    console.log(parseInt(document.getElementsByClassName("cart-menu-total-numb")[0].innerHTML));

    let prodPrice;
    cart.map(prod => listHTML+= `<li class="cart-menu-item flexbox">
                    <p class="cart-menu-text"><span>${prod.productTitle}</span><span>$${prod.productPrice}</span><span>1x</span><span class="cart-remove flexbox"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 323.37 323.37"><defs><style>.cls-1{fill:#fff;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2.5em;}</style></defs><line class="cls-1" x1="15" y1="15" x2="308.37" y2="308.37"/><line class="cls-1" x1="15" y1="308.37" x2="308.37" y2="15"/></svg></span></p>
                </li>`);
    cart.map(prod => prodPrice = prod.productPrice);
    document.getElementsByClassName("cart-menu-total-numb")[0].innerHTML = parseInt(document.getElementsByClassName("cart-menu-total-numb")[0].innerHTML) + prodPrice

    document.getElementsByClassName("cart-menu-items")[0].innerHTML = listHTML;
    document.getElementsByClassName("cart-length")[0].innerHTML = cart.length;
    document.getElementsByClassName("navbar-button-note")[0].innerHTML = cart.length;
}

let cartMenu = document.getElementsByClassName("cart-menu")[0];

document.getElementsByClassName("navbar-item-last")[0].addEventListener("click", function() {

    if (cartMenu.classList.contains("open")) {
        cartMenu.style.opacity = "0";
        cartMenu.style.pointerEvents = "none";
        cartMenu.classList.remove("open");
    } else {
        cartMenu.style.opacity = "1";
        cartMenu.style.pointerEvents = "auto";
        cartMenu.classList.add("open");
    }

});