const header = document.querySelector('header');
const buttomTop = document.querySelector('.buttomTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.top = 0;
        buttomTop.style.display = 'flex'
    } else {
        header.style.top = "50px";
        buttomTop.style.display = 'none'
    };
})