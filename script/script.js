$(document).ready(function() {
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  });
})

$(document).ready(function() {

//E-mail Ajax Send
$(".order__form , .order__form1").submit(function() { //Change
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





let plus = document.getElementById('plus__img1');
let zero =  document.getElementById('order__selectff');
let first = document.getElementById('order__selectf');
let second = document.getElementById('order__selects');
let third = document.getElementById('order__selectt');
let count = 1;


let form = document.getElementById('order__form');
let orderWrap = document.getElementById('order__wrap');
plus.addEventListener("click", more);
function more(){
let newNodez = zero.cloneNode(true);
newNodez.setAttribute("name","vid" + count);
let newNode = first.cloneNode(true);
newNode.setAttribute("name","type" + count);
let newNodes = second.cloneNode(true);
newNodes.setAttribute("name","quantity" + count);
let newNodet = third.cloneNode(true);
newNodet.setAttribute("name","weight" + count);
count++;
form.appendChild(newNodez);
form.appendChild(newNode);
form.appendChild(newNodes);
form.appendChild(newNodet);
}
