const bg1 = document.querySelector('.radius_background');
const gradient = document.querySelector('.shadow_gradient');
const star = document.querySelector('#star6');

this.addEventListener('mousemove', (evt) => {
  let x = evt.clientX;
  let y = evt.clientY;

  bg1.style.transform = `translate(${-x / 50}px,${-y / 600}px)`;
  gradient.style.transform = `translate(${-x / 15}px,${0}px)`;
  star.style.transform = `translate(${-x / 60}px,${-y / 60}px)`;
});

// project1 헬리녹스 이미지
$('.pj1').on('mouseenter', () => {
  $('.project1').addClass('active');
});
$('.pj1').on('mouseleave', () => {
  $('.project1').removeClass('active');
});

// project2 한림공원 이미지
$('.pj2').on('mouseenter', () => {
  $('.project2').addClass('active');
});
$('.pj2').on('mouseleave', () => {
  $('.project2').removeClass('active');
});
