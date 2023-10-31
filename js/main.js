// ----------===---------- --- Navbar Start --- ----------===---------- //
// ---------- Set Light Mode --------- //
if (localStorage.getItem("theme") == "light") setDarkMode();

function setDarkMode() {
    let changeIcon = "";
    let isDark = document.body.classList.toggle("light");

    if (isDark) {
        changeIcon = '<img src="./icon/light-mode.svg">';
        localStorage.setItem("theme", "light");
    } else {
        changeIcon = '<img src="./icon/dark-mode.svg">';
        localStorage.removeItem("theme");
    }
    document.getElementById("darkBtn").innerHTML = changeIcon;
}

// ---------- Show & Hide Search --------- //
const searchBtn = document.getElementById("searchBtn");
const searchBox = document.querySelector(".search__box");

searchBtn.addEventListener("click", () => {
    searchBox.classList.toggle("open");
});

window.addEventListener("scroll", () => {
    searchBox.classList.remove("open");
});

window.addEventListener("click", (e) => {
    if (!searchBtn.contains(e.target) && !searchBox.contains(e.target)) {
        searchBox.classList.remove("open");
    }
});

// ---------- Show & Hide Profile --------- //
const profileBtn = document.getElementById("profileBtn");
const profileBox = document.querySelector(".profile__box");
const logoutBtn = document.getElementById("logoutBtn");
const logoutBox = document.querySelector(".logout__box");
const closeLogoutBtn = document.getElementById("closeLogoutBtn");

profileBtn.addEventListener("click", () => {
    profileBox.classList.toggle("open");
});

window.addEventListener("scroll", () => {
    profileBox.classList.remove("open");
});

window.addEventListener("click", (e) => {
    if (!profileBtn.contains(e.target) && !profileBox.contains(e.target)) {
        profileBox.classList.remove("open");
    }
});

logoutBtn.addEventListener("click", () => {
    logoutBox.classList.toggle("open");
    profileBox.classList.remove("open");
});

closeLogoutBtn.addEventListener("click", () => {
    logoutBox.classList.remove("open");
});

// ---------- Show & Hide Sidebar --------- //
const menuBtn = document.getElementById("menuBtn");
const aside = document.querySelector("aside");

menuBtn.addEventListener("click", () => {
    aside.classList.toggle("open");
});

window.addEventListener("scroll", () => {
    aside.classList.remove("open");
});

window.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) && !aside.contains(e.target)) {
        aside.classList.remove("open");
    }
});

// ---------- Show & Hide Navbar in Mobile Phone --------- //
var lastScrollTop = 0;
navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.matchMedia("(max-width: 640px)").matches) {
        var scrollTop = window.screenY || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            navbar.style.top = "-70px";
            navbar.style.transition = "all 0.4s ease";
        } else {
            navbar.style.top = "0";
        }
        lastScrollTop = scrollTop;
    }
});
// ----------===---------- --- Navbar End --- ----------===---------- //
