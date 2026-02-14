console.log("app.js is running");
let storedButtons = (document.querySelectorAll('.mainNavButton'));
console.log(storedButtons);


let storedMain = (document.querySelector('.mobileMainNav'));
let storedPanels = (document.querySelectorAll('.mobileSubNav'));
console.log(storedMain);
console.log(storedPanels);


storedButtons.forEach((button) => button.addEventListener("click", ()=> {
  const key = (button.dataset.open);
  console.log(key);

  storedMain.classList.remove("is-active");
  storedPanels.forEach(panel => panel.classList.remove("is-active"));

  const chosen = document.querySelector(`[data-panel="${key}"]`);

  chosen.classList.add("is-active");

  console.log(chosen)
} ));

let backButtons=(document.querySelectorAll(".backButton"));
console.log(backButtons)

backButtons.forEach((backbutton) => backbutton.addEventListener("click", ()=> {
  storedPanels.forEach(panel => panel.classList.remove("is-active"));
  storedMain.classList.add("is-active");
}))

const mobileNav = (document.querySelector(".mobileNav"))

const openBurger = (document.querySelector(".openburger"))

openBurger.addEventListener("click", ()=> {
  mobileNav.classList.add("is-open")
})

const closeBurger = (document.querySelector(".closeburger"));

function closeDaBurger() {
  mobileNav.classList.remove("is-open");
  storedPanels.forEach(panel => panel.classList.remove("is-active"));
  storedMain.classList.add("is-active");
}

closeBurger.addEventListener("click", closeDaBurger);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileNav.classList.contains("is-open")) {
    closeDaBurger();
  }
});

const closeall = (document.querySelectorAll(".mobileNav a"))

closeall.forEach((link)=> {
  link.addEventListener("click", ()=> {
    closeDaBurger();
  })
})

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // reveal once
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
);

reveals.forEach((el) => observer.observe(el));
