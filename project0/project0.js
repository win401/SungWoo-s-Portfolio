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
});
