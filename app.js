const container = document.querySelector('.container');
const backtotop = document.querySelector('.back-to-top');

function backtoTop(){
    screenTop(0,0)
}

backtotop.addEventListener('click', backtoTop());