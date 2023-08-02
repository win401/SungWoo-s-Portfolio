AOS.init();

// 위캔드
function img1(Weeknd) {
  Weeknd.setAttribute('src', './images/image1-2.png');
}

function img2(Weeknd) {
  Weeknd.setAttribute('src', './images/image1.png');
}

// 세이
function img3(saay) {
  saay.setAttribute('src', './images/image2-2.png');
}

function img4(saay) {
  saay.setAttribute('src', './images/image2.png');
}

// 켄드릭
function img5(kendrick) {
  kendrick.setAttribute('src', './images/image3-2.png');
}

function img6(kendrick) {
  kendrick.setAttribute('src', './images/image3.png');
}

// 비버
function img7(bieber) {
  bieber.setAttribute('src', './images/image4-2.png');
}

function img8(bieber) {
  bieber.setAttribute('src', './images/image4.png');
}

// 포스트
function img9(post) {
  post.setAttribute('src', './images/image5-2.png');
}

function img10(post) {
  post.setAttribute('src', './images/image5.png');
}

// drake
function img11(drake) {
  drake.setAttribute('src', './images/image6-2.png');
}

function img12(drake) {
  drake.setAttribute('src', './images/image6.png');
}

// grande
function img13(grande) {
  grande.setAttribute('src', './images/image7-2.png');
}

function img14(grande) {
  grande.setAttribute('src', './images/image7.png');
}

// dean
function img15(dean) {
  dean.setAttribute('src', './images/image8-2.png');
}

function img16(dean) {
  dean.setAttribute('src', './images/image8.png');
}

// sam
function img17(sam) {
  sam.setAttribute('src', './images/image9-2.png');
}

function img18(sam) {
  sam.setAttribute('src', './images/image9.png');
}

// 햄버거메뉴바
$('.ham').click(function () {
  $(this).toggleClass('active');
});

// 햄버거 메뉴 클릭시 메뉴 slide down
$('.ham').click(function () {
  $('.menu_box').addClass('opacity', 1000);
  $('.menu_box').toggle('blind', 500);
});

// swiper
var swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// header 메뉴바 스크롤시 height 작아짐
$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $('header').addClass('scroll');
  } else {
    $('header').removeClass('scroll');
  }
});

const emoji = document.querySelector('.emoji');

// 마우스 좌표
let mouseX = 0;
let mouseY = 0;

// 커서를 따라다니는 이모지 좌표
let emojiX = 0;
let emojiY = 0;

// 마우스 이동시 이모지 이동
const mouseMove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
};
document.addEventListener('mousemove', mouseMove);

// 따라다니는 이모지
const aniEmoji = () => {
  emojiX += (mouseX - emojiX) * 0.1;
  emojiY += (mouseY - emojiY) * 0.1;
  // console.log(emojiX, emojiY);

  emoji.style.transform = `translate(${emojiX}px, ${emojiY}px)`;

  requestAnimationFrame(aniEmoji); // 연속 호출이 필요
};

aniEmoji();

// hover .active

document.addEventListener('mousemove', (e) => {
  $('a').hover(
    function () {
      $(emoji).addClass('active');
    },
    function () {
      $(emoji).removeClass('active');
    }
  );

  // hover
  $('.ham').hover(
    function () {
      $(emoji).addClass('active');
    },
    function () {
      $(emoji).removeClass('active');
    }
  );

  $('.btn').hover(
    function () {
      $(emoji).addClass('active');
    },
    function () {
      $(emoji).removeClass('active');
    }
  );

  $('figure').hover(
    function () {
      $(emoji).addClass('active');
    },
    function () {
      $(emoji).removeClass('active');
    }
  );
});
