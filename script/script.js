$(document).ready(function() {
     $(".header__nav").on("click", "a", function(event) {
       event.preventDefault();
       let id = $(this).attr('href'),
         top = $(id).offset().top;
       $('body,html').animate({
         scrollTop: top
       }, 1500);
     });
   });

$(document).ready(function() {
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  });
});

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  grabCursor: true,
  spaceBetween: 70,
  freeMode: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4.5,
      spaceBetween: 50,
    }
  }
});

$(document).ready(function() {

//E-mail Ajax Send
$(".order__form").submit(function() { //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php", //Change
    data: th.serialize()
  }).done(function() {
    alert("Thank you!");
    setTimeout(function() {
      // Done Functions
      th.trigger("reset");
    }, 1000);
  });
  return false;
});

});




// var swiper1 = new Swiper('.s1', {
//   slidesPerView: 4.5,
//   spaceBetween: 70,
//   freeMode: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });
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
// // let p = document.createElement("p");
// let newNode = first.cloneNode(true);
// let newNodes = second.cloneNode(true);
// let newNodet = third.cloneNode(true);
// // let p1 = p.appendChild(newNode);
// // let p2 = p.appendChild(newNodes);
// // let p3 = p.appendChild(newNodet);
// form.appendChild(newNode);
// form.appendChild(newNodes);
// form.appendChild(newNodet);
// }









// let orderForm = document.getElementById('order__form');
// let plus = document.getElementById('plus__img1');
// let zero =  document.getElementsByClassName('order__selectff');
// let zeroEl = orderForm.querySelectorAll("select.order__selectff");
// let zeroId =  document.getElementById('order__selectff');
// let first = document.getElementById('order__selectf');
// let second = document.getElementById('order__selects');
// let third = document.getElementById('order__selectt');
// let pastila = document.getElementsByClassName('select__pastila');
// let frips = document.getElementsByClassName('select__frips');
//
// let fripsArr = [].slice.call(frips);
// let pastilaArr = [].slice.call(pastila);
// // let zeroArr = [].slice.call(zero);
// let count = 1;
// // console.log(zero[0]);
// // zeroArr.forEach(one);
// // zero[0].onchange = function() {
// //   let indexSelected = zero[0].selectedIndex, option = zero[0].querySelectorAll('option')[indexSelected];
// // let selectedId = option.getAttribute('id');
// // console.log(indexSelected);
//
// console.log(orderForm);
// orderForm.addEventListener('change', function(event){
//     let elem = event.target;
// // console.log(elem);
// console.log(elem.className);
//     if(elem.id === 'order__selectff'){
//
//          console.log(elem.value);
//       function one() {
//       let indexSelected = elem.selectedIndex, option = elem.querySelectorAll('option')[indexSelected];
//       let selectedId = option.getAttribute('id');
// console.log(indexSelected);
//
//          if(selectedId == '1'){
//          // alert(1);
//          for(i = 0; i<pastilaArr.length; i++){
//          pastilaArr[i].hidden = false;
//          }
//          for(i = 0; i<fripsArr.length; i++){
//          fripsArr[i].hidden = true;
//          }
//          console.log(fripsArr)
//          }
//
//          else if(selectedId == '2'){
//          for(i = 0; i<pastilaArr.length; i++){
//             // console.log(pastilaArr[i]);
//          pastilaArr[i].hidden = true;
//          console.log(pastilaArr[i]);
//          }
//          for(i = 0; i<fripsArr.length; i++){
//             // console.log(fripsArr[i]);
//          fripsArr[i].hidden = false;
//          // console.log(fripsArr[i])
//          }
//          };
//     };
//     one();
// }
//
// }
//
// );
//
//
//
//
//
//
//
//
//
//
//
//
//
// let form = document.getElementById('order__form');
// let orderWrap = document.getElementById('order__wrap');
// plus.addEventListener("click", more);
// function more(){
// let newNodez = zeroId.cloneNode(true);
// newNodez.setAttribute("name","vid" + count);
// let newNode = first.cloneNode(true);
// newNode.setAttribute("name","type" + count);
// let newNodes = second.cloneNode(true);
// newNodes.setAttribute("name","quantity" + count);
// let newNodet = third.cloneNode(true);
// newNodet.setAttribute("name","weight" + count);
// count++;
// form.appendChild(newNodez);
// form.appendChild(newNode);
// form.appendChild(newNodes);
// form.appendChild(newNodet);
// }
//












let plus = document.getElementById('plus__img');
let first = document.getElementById('order-select__first');
let second = document.getElementById('order-select__second');
let third = document.getElementById('order-select__third');

let count = 1;

let form = document.getElementById('order__form');
let orderWrap = document.getElementById('order__wrap');
plus.addEventListener("click", more);
function more(){
let newNode = first.cloneNode(true);
newNode.setAttribute("name","type" + count);
let newNodes = second.cloneNode(true);
newNodes.setAttribute("name","quantity" + count);
let newNodet = third.cloneNode(true);
newNodet.setAttribute("name","weight" + count);
count++;
form.appendChild(newNode);
form.appendChild(newNodes);
form.appendChild(newNodet);
}
