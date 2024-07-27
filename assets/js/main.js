// POPUP SECTION ON PAGE RELOAD
window.onload = function () {
    document.getElementById('popup').style.display = 'block';
};

function handleButtonClick(option) {
    alert(option + ' clicked!');
    document.getElementById('popup').style.display = 'none';
}


// SWIPER SLIDER
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
});
var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
        swiper: swiper,
    },
});



// NAVIGATION BAR EFFECTS ON SCROLL
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


// // RESPONSIVE NAVIGATION MENU TOOGLE
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});
