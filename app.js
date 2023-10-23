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



let box2 = document.querySelector('.box2');
let box2inner = document.getElementById('box2-inner');
let plusd2 = document.querySelector('.plus2');
let minusd2 = document.querySelector('.minus2');
console.log(minusd2);
let box2para = document.querySelector('.box2-para');
minusd2.style.display = 'none';
box2para.style.display = 'none';


function plus2() {

    minusd.style.display = 'none';
    box1para.style.display = 'none';
    plusd.style.display = 'inline';

    minusd2.style.display = 'inline';
    box2para.style.display = 'inline';
    plusd2.style.display = 'none';
}


function minus2() {
    minusd2.style.display = 'none';
    box2para.style.display = 'none';
    plusd2.style.display = 'inline';
}





let box3 = document.querySelector('.box3');
let box3inner = document.getElementById('box3-inner');
let plusd3 = document.querySelector('.plus3');
let minusd3 = document.querySelector('.minus3');
console.log(minusd3);
let box3para = document.querySelector('.box3-para');
minusd3.style.display = 'none';
box3para.style.display = 'none';


function plus3() {

    minusd2.style.display = 'none';
    box2para.style.display = 'none';
    plusd2.style.display = 'inline';
    


    minusd3.style.display = 'inline';
    box3para.style.display = 'inline';
    plusd3.style.display = 'none';
}


function minus3() {
    minusd3.style.display = 'none';
    box3para.style.display = 'none';
    plusd3.style.display = 'inline';
}