document.addEventListener("DOMContentLoaded", function () {
  const bg1 = document.querySelector(".radius_background");
  const gradient = document.querySelector(".shadow_gradient");
  const star = document.querySelector("#star6");

  this.addEventListener("mousemove", (evt) => {
    let x = evt.clientX;
    let y = evt.clientY;

    bg1.style.transform = `translate(${-x / 15}px,${0}px)`;
    gradient.style.transform = `translate(${-x / 15}px,${0}px)`;
    star.style.transform = `translate(${-x / 60}px,${-y / 60}px)`;
  });
});
