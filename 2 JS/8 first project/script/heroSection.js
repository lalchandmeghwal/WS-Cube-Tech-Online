const showImages = document.querySelector('.heroSection img');
const leftSideSilde = document.querySelector('#leftSideSilde');
const rightSideSilde = document.querySelector('#rightSideSilde');


const imgs = ['https://lawpreptutorialkolkata.com/wp-content/uploads/2025/12/5.webp', 'https://lawpreptutorialkolkata.com/wp-content/uploads/2026/01/2.webp', 'https://lawpreptutorialkolkata.com/wp-content/uploads/2026/01/3.webp', 'https://lawpreptutorialkolkata.com/wp-content/uploads/2026/01/6.webp'];


let imgsIndex = 0;


setInterval(() => {
    if (imgsIndex === 3) {
        imgsIndex = 0;
    }
    imgsIndex++;

    showImages.src = imgs[imgsIndex];

}, 4000);


leftSideSilde.addEventListener('click', () => {
     if (imgsIndex === 0) {
         imgsIndex = 4;
    };
    imgsIndex = imgsIndex - 1;
    showImages.src = imgs[imgsIndex];
})

rightSideSilde.addEventListener('click', () => {
    
    imgsIndex = imgsIndex + 1;
    if (imgsIndex === 3 || imgsIndex === 4) {
        imgsIndex = 0;
    };

    showImages.src = imgs[imgsIndex];
});





const downloadBrochure = document.querySelector('.downloadBrochure');
const showBox = document.querySelector('.showBox');
const closeBtn = document.querySelector('.showBox .formContainer span');


downloadBrochure.addEventListener('click', () => {
    showBox.style.top = 0;
});

const hideForm = () => {
    showBox.style.top = '-1000px';
};

closeBtn.addEventListener('click', hideForm);

showBox.addEventListener('click', hideForm);

const formContainer = document.querySelector('.showBox .formContainer');

formContainer.addEventListener('click', e => {
    e.stopPropagation();
});
