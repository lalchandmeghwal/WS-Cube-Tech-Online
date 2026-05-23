const youtubeCart = document.querySelectorAll('.youtubeContainer .cart');



youtubeCart.forEach((cart, index) => {
    cart.addEventListener("click", (e) => {
        // alert("Cart " + (index + 1) + " clicked");
        console.log(e.target)
    });
});