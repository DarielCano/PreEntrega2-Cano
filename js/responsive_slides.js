/* const d = document;

export default function slider() {
  const $slides = d.querySelectorAll(".slider-slide");
  let i = 0;

  const tiempoSlide = () => {
    $slides[i].classList.remove("active");
    i--;
    if (i < 0) {
      i = $slides.length - 1;
    }
    $slides[i].classList.add("active");
  };

  d.addEventListener("DOMContentLoaded", (e) => {
    setInterval(tiempoSlide, 5000);
  });
}
 */
