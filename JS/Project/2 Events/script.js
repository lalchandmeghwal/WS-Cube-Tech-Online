const imgContainer = document.querySelector('.imgContainer');
const showImag = document.querySelector('.showImag');
const imgShow = document.querySelector('.showImag img');
const span = document.querySelector('.showImag span');


imgContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        const img = e.target.src;
        showImag.style.display = 'flex';
        imgShow.src = img;

    }

});

const hideBox = () => {
    showImag.style.display = 'none';
    imgShow.src = '';
}
span.addEventListener('click', hideBox);


showImag.addEventListener('click', hideBox);

imgShow.addEventListener('click', e => {
    e.stopImmediatePropagation();
})

