const openNavBar = document.querySelector('#openNavBar');
const openSideBar = document.querySelector('.headerButtom ul');

openNavBar.addEventListener('click', () => {
    openSideBar.classList.toggle('openSideBar');
    openNavBar.classList.toggle('fa-bars');
    openNavBar.classList.toggle('fa-xmark');
});