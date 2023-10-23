let body = document.getElementById('body');
let heading = document.getElementById('heading');

let box1 = document.querySelector('.box1');
let box1inner = document.getElementById('box1-inner');
let plusd = document.querySelector('.plus');
let minusd = document.querySelector('.minus');
console.log(minusd);
let box1para = document.querySelector('.box1-para');
minusd.style.display = 'none';
box1para.style.display = 'none';

function plus1() {
    minusd.style.display = 'inline';
    box1para.style.display = 'inline';
    plusd.style.display = 'none';
}


function minus1() {
    minusd.style.display = 'none';
    box1para.style.display = 'none';
    plusd.style.display = 'inline';
}