

//================== TOGGLE LIGHTS ==================//
const $themeBtn =document.querySelector("[data-theme-btn]");
const $HTML = document.documentElement;
let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if(sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  $HTML.dataset.theme = isDark ? "dark" : "light";
}

const changeTheme = () => {
  $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" :
  "light";
  sessionStorage.setItem("theme", $HTML.dataset.theme);
}
$themeBtn.addEventListener("click", changeTheme);

//================== TABS ==================//
const tabs = document.querySelectorAll(".tab-btn");
const all_content = document.querySelectorAll(".tab-content")

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e)=> {
    tabs.forEach(tab=>{
      tab.classList.remove("active")
      })
      tab.classList.add("active")

    all_content.forEach(content => {
      content.classList.remove("active")
    })
    all_content[index].classList.add("active");
  })
})