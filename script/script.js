
$(document).ready(function() {
  $(".header__nav, .menu-ul, .slider-slide__button, .slider__button").on("click", "a", function(event) {
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
    pauseOnFocus: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000000,
    arrows: false
  });
});

let swiper = new Swiper('.swiper-container', {
  slidesPerView: 2.5,
  grabCursor: true,
  spaceBetween: 30,
  freeMode: true,
  breakpoints: {
    320: {
      slidesPerView: 1.5,
    },
    375: {
      slidesPerView: 1.5,
    },
    425: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.5,
    },
    1025: {
      slidesPerView: 3.5,
    },
    1280: {
      slidesPerView: 3.5,
    },
    1441: {
      slidesPerView: 4.5,
      spaceBetween: 50,
    }
  }
});

$(document).ready(function() {
  $(".order__form").submit(function() {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});

// $(document).ready(function() {
//   $(".box__form").submit(function() {
//     var th = $(this);
//     $.ajax({
//       type: "POST",
//       url: "mail1.php",
//       data: th.serialize()
//     }).done(function() {
//       alert("Thank you!");
//       setTimeout(function() {
//         th.trigger("reset");
//       }, 1000);
//     });
//     return false;
//   });
// });

// VANILLA JS
let menuBar = document.getElementsByClassName("header-menu__bars")[0];
let menu = document.getElementsByClassName('menu')[0];
let cross = document.getElementsByClassName("menu__img")[0];
let menuUl = document.getElementById('menu__ul');
let plus = document.getElementById('plus__img');
let first = document.getElementById('order-select__first');
let second = document.getElementById('order-select__second');
let third = document.getElementById('order-select__third');
let form = document.getElementById('order__form');
let orderWrap = document.getElementById('order__wrap');
let count = 1;

menuBar.addEventListener("click", menuToggle);

function menuToggle() {
  menu.style.display = "block";
}
cross.addEventListener("click", closeAction);

function closeAction() {
  menu.style.display = 'none';
}
menuUl.addEventListener("click", close);

function close() {
  menu.style.display = 'none';
}
plus.addEventListener("click", more);

function more() {
  let newNode = first.cloneNode(true);
  newNode.setAttribute("name", "type" + count);
  let newNodes = second.cloneNode(true);
  newNodes.setAttribute("name", "quantity" + count);
  let newNodet = third.cloneNode(true);
  newNodet.setAttribute("name", "weight" + count);
  count++;
  form.appendChild(newNode);
  form.appendChild(newNodes);
  form.appendChild(newNodet);
}
