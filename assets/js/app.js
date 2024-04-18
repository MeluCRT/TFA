"use strict";

// FADEOUT

document.querySelectorAll('a:not([href^="#"])').forEach(el => {
    const main = document.querySelector("body");
    if (!main) return;
    el.addEventListener("click", (e) => {
        if (!el.href || el.href[0] === "#") return;
        e.preventDefault();
        setTimeout(() => {
            window.location = el.href;
        }, 200);
        main.classList.add("fadeout");
    });
});
