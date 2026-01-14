

/* =============== CART INTERACTION =============== */
const cartBtns = document.querySelectorAll('.product-card__button');
const cartCountElement = document.querySelector('.cart-count');
let count = 0;

cartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        cartCountElement.textContent = count;

        // Simple shake animation feedback for the button
        btn.innerHTML = 'Added!';
        btn.style.backgroundColor = '#333';

        setTimeout(() => {
            btn.innerHTML = 'Add to Cart';
            btn.style.backgroundColor = ''; // Reset to CSS default
        }, 1000);
    });
});
