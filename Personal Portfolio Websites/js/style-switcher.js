// toggle style switcher

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// hide style - switcher on scroll

window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// theme colors

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// theme light and dark mode

const btn = document.querySelector(".day-night");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.body.classList.add("dark-theme");
    document.getElementById("dd").src = "img/sun.png";
} else {
    document.getElementById("dd").src = "img/moon.png";
}

btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    document.getElementById("dd").src = "img/moon.png";
    let theme = "light";

    if (document.body.classList.contains("dark-theme")) {
        theme = "dark";
        document.getElementById("dd").src = "img/sun.png";
    }
    localStorage.setItem("theme", theme);
});