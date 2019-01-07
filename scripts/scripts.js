const headerPage = document.querySelector('header');
const headerContent = document.querySelector('.headerContent');
const name = document.querySelector('.headerContent h1');
const enter = document.querySelector('.enter');


// const first = name.getBoundingClientRect();
// console.log(first);

function headerClick() {
    enter.classList.remove('hidden');
    headerContent.classList.add('headerAnimation');
}


headerContent.addEventListener('transitionend', headerClick);

