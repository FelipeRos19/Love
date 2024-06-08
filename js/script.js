document.addEventListener("DOMContentLoaded", () => {
    verifyActive();

    window.addEventListener("scroll", verifyActive);
})

function verifyActive() {
    let scrollPos = window.scrollY + window.outerHeight;
    let elements = document.getElementsByClassName("fadeIn");

    for (let i = 0; i < elements.length; i++) {
        if (scrollPos >= elements[i].offsetTop) {
            elements[i].classList.add("active");
        }
    }
}