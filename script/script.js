// let plus = document.getElementById('plus__img');
// let form = document.getElementById('order__form');
// let orderWrap = document.getElementById('order__wrap');
// form.addEventListener("click", function(e){
//     if(e.target && e.target.id== 'plus__img'){
//       let newNode = form.cloneNode(true);
//       orderWrap.appendChild(newNode);
//      }
//  });





// document.addEventListener('click',function(e){
//     if(e.target && e.target.id== 'brnPrepend'){
//           //do something
//      }
//  });
// plus.addEventListener('click',function(event){
//     if(event.srcElement.id == 'plus__img'){
//       let newNode = form.cloneNode(true);
//       orderWrap.appendChild(newNode);
//      }
//  });


 // document.body.addEventListener( 'click', function ( event ) {
 //   if( event.srcElement.id == 'btnSubmit' ) {
 //     someFunc();
 //   };
 // } );
// let plus = document.getElementsByClassName('plus__img');
// let form = document.getElementById('order__form');
// let orderWrap = document.getElementById('order__wrap');
// [].forEach.call(plus,function(add){
// add.addEventListener("click", more);
// function more(){
// let newNode = form.cloneNode(true);
// orderWrap.appendChild(newNode);
// }
// });


// let plus = document.getElementById('plus__img');
// let form = document.getElementById('order__form');
// let orderWrap = document.getElementById('order__wrap');
// plus.onclick = function(){
//   let newNode = form.cloneNode(true);
//   orderWrap.appendChild(newNode);
// };








// [].forEach.call(like,function(el){
//     el.addEventListener('click', function (e) {...})
// });






// РАБОЧИЙ КУСОК
let plus = document.getElementById('plus__img');
let first = document.getElementById('order__selectf');
let second = document.getElementById('order__selects');
let third = document.getElementById('order__selectt');
let count = 1;

let form = document.getElementById('order__form');
let orderWrap = document.getElementById('order__wrap');
plus.addEventListener("click", more);
function more(){
// let p = document.createElement("p");
let newNode = first.cloneNode(true);
let newNodes = second.cloneNode(true);
let newNodet = third.cloneNode(true);
// let p1 = p.appendChild(newNode);
// let p2 = p.appendChild(newNodes);
// let p3 = p.appendChild(newNodet);
form.appendChild(newNode);
form.appendChild(newNodes);
form.appendChild(newNodet);
}





// let plus = document.getElementById('plus__img');
// let first = document.getElementById('order__selectf');
// let second = document.getElementById('order__selects');
// let third = document.getElementById('order__selectt');
// let count = 1;
//
// let form = document.getElementById('order__form');
// let orderWrap = document.getElementById('order__wrap');
// plus.addEventListener("click", more);
// function more(){
// let newNode = first.cloneNode(true);
// let newNodes = second.cloneNode(true);
// let newNodet = third.cloneNode(true);
// form.appendChild(newNode);
// form.appendChild(newNodes);
// form.appendChild(newNodet);
// }
