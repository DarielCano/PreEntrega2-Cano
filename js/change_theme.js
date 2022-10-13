const d = document;
const ls = localStorage;
const sol = "🌞";
const luna = "🌙";

export function themePpal(btnTema, clase) {
  const darkMode = () => {
    $selectors.forEach(function (i) {
      i.classList.add(clase);
    });
    $btnTema.textContent = sol;

    ls.setItem("tema", sol);
  };

  const lightMode = () => {
    $btnTema.textContent = luna;
    $selectors.forEach(function (i) {
      i.classList.remove(clase);
    });
    ls.setItem("tema", luna);
  };

  const $btnTema = d.querySelector(btnTema);
  const $selectors = d.querySelectorAll("[data-dark]");

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnTema)) {
      if ($btnTema.textContent !== sol) {
        darkMode();
        return false;
      }

      lightMode();
    }
  });

  /* para guardar tema en local storage */
  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("tema") === null) ls.setItem("tema", luna);

    if (ls.getItem("tema") === luna) lightMode();

    if (ls.getItem("tema") === sol) darkMode();
  });
}
