const jumbotronP = document.querySelectorAll(".jumbotron-p");
const textElementHeader = document.querySelectorAll(".text-element-header");
const textElementHeader2 = document.querySelectorAll(
  "#visi-misi .text-element-header"
);
const tentangKamiImg = document.querySelectorAll(".tentang-kami-grid-item-img");
const textElementSubheader = document.querySelectorAll(
  ".text-element-subheader"
);
const visiMisiBody = document.querySelectorAll(
  "#visi-misi .text-element-body"
);
const textElementBody = document.querySelectorAll(".text-element-body");
const tentangKamiBodyLong = document.querySelectorAll(
  "#tentang-kami .text-element-body-long"
);
const tentangKamiBody = document.querySelectorAll(
  "#tentang-kami .text-element-body"
);

const dampakBodyLong = document.querySelectorAll(
  "#dampak .text-element-body-long"
);
const dampakHeader = document.querySelectorAll("#dampak .text-element-header");
const visiMisiBodyLong = document.querySelectorAll(
  "#visi-misi .text-element-body-long"
);
const textElementBodyLong = document.querySelectorAll(
  ".text-element-body-long"
);
const textElementBodyLong2 = document.querySelectorAll(
  "#visi-misi .text-element-body-long"
);

const navUl = document.querySelectorAll("header nav ul");
const hamburgerMenuButton = document.querySelectorAll(".hamburger-menu-button");
const closeMenuOverlay = document.querySelectorAll(".close-menu-overlay");
const menuA = document.querySelectorAll("header nav ul li a");

function toggleMenu() {
  hamburgerMenuButton.forEach((element) => {
    element.addEventListener("click", () => {
      navUl.forEach((element) => {
        element.classList.toggle("show");
      });

      document.body.style.overflow = "hidden";

      menuA.forEach((element) => {
        element.addEventListener("click", () => {
          navUl.forEach((element) => {
            element.classList.remove("show");
            document.body.style.overflow = "auto";
          });

          closeMenuOverlay.forEach((element) => {
            element.classList.remove("show");
            document.body.style.overflow = "auto";
          });
        });
      });

      closeMenuOverlay.forEach((element) => {
        element.classList.toggle("show");

        element.addEventListener("click", () => {
          navUl.forEach((element) => {
            element.classList.remove("show");
            document.body.style.overflow = "auto";
          });

          closeMenuOverlay.forEach((element) => {
            element.classList.remove("show");
            document.body.style.overflow = "auto";
          });
        });
      });
    });
  });
}

toggleMenu();

function toggleNav() {
  navOl.forEach((element) => {
    element.classList.toggle("show");
  });
}

// Source - https://stackoverflow.com/questions/63382647/howto-add-class-when-section-is-in-viewport
// Posted by ikiK
// Retrieved 2025-11-06, License - CC BY-SA 4.0
function isInViewport(elem) {
  const distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}

function showWhenScoll(el) {
  window.addEventListener(
    "scroll",
    function (event) {
      el.forEach((element) => {
        if (isInViewport(element)) {
          element.classList.add("show");
        }
      });
    },
    false
  );
}
function showWhenScollAccording(el, elAccording) {
  window.addEventListener(
    "scroll",
    function (event) {
      el.forEach((element) => {
        if (isInViewport(elAccording[0])) {
          element.classList.add("show");
        }
      });
    },
    false
  );
}

function showWhenLoad() {
  window.addEventListener(
    "load",
    function (event) {
      jumbotronP.forEach((element) => {
        element.classList.add("show");
      });
    },
    false
  );
}

showWhenScoll(textElementHeader);
showWhenScoll(textElementSubheader);
showWhenScoll(textElementHeader2);
showWhenScoll(tentangKamiImg);
showWhenScoll(textElementBody);
showWhenScoll(textElementBodyLong);
showWhenScollAccording(tentangKamiImg, textElementHeader);
// showWhenScollAccording(textElementBody, textElementSubheader);
showWhenScollAccording(tentangKamiBodyLong, tentangKamiBody);
showWhenScollAccording(visiMisiBodyLong, visiMisiBody);
showWhenScollAccording(dampakBodyLong, dampakHeader);
// showWhenScollAccording(textElementBodyLong2, textElementHeader2);
showWhenLoad();

// Source - https://stackoverflow.com/questions/75349881/how-can-i-have-the-page-reload-to-the-top-of-the-screen-right-now-it-reloads-to
// Posted by zackaria_asks
// Retrieved 2025-11-06, License - CC BY-SA 4.0
// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// };

// Source - https://stackoverflow.com/questions/57235230/want-to-hide-show-navbar-when-scroll-down-up-using-js-or-jquery
// Posted by Amaresh S M
// Retrieved 2025-11-06, License - CC BY-SA 4.0
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("nav-scroll").style.top = "0";
//   } else {
//     document.getElementById("nav-scroll").style.top = "-100px";
//   }
//   prevScrollpos = currentScrollPos;
// };
