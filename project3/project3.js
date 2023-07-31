AOS.init();

// 원형 따라다니는 cursor

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';

  console.log(mouseX);
  console.log(mouseY);

  // mouse event

  $('a').hover(
    function () {
      $(cursor).addClass('active');
    },
    function () {
      $(cursor).removeClass('active');
    }
  );

  $('img').hover(
    function () {
      $(cursor).addClass('active');
    },
    function () {
      $(cursor).removeClass('active');
    }
  );

  $('.ham').hover(
    function () {
      $(cursor).addClass('active');
    },
    function () {
      $(cursor).removeClass('active');
    }
  );
});

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
