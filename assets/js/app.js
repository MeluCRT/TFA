"use strict";

/* playroom - love */

function createHeart(x, y) {
    var heart = document.createElement('div');
    heart.innerText = '❤️';
    heart.classList.add('heart');
    document.body.appendChild(heart);

    // ajout coeur puis calcul position
    const heartRect = heart.getBoundingClientRect();
    heart.style.left = (x - heartRect.width / 2) + 'px';
    heart.style.top = (y - heartRect.height / 2) + 'px';

    setTimeout(() => {
        heart.remove();
    }, 1000); // disparaît après 1s
}

/* playroom - random kitty */

let cat = document.querySelector(".section__play__kitty");
let purrSound = document.querySelector(".audio--purr");

if (cat && purrSound) {
    cat.addEventListener('click', function (e) {
        handleCatClick(e);
    });

    cat.addEventListener('touchend', function (e) {
        handleCatClick(e);
    });
}

function handleCatClick(e) {
    e.preventDefault();

    // random kitty
    var catRandom = getRandomIntInclusive(1, 4);
    cat.setAttribute("src", "assets/images/kitty/cat_" + catRandom + ".png");

    // ronron
    purrSound.play();

    // calcul position clic
    let x, y;
    if (e.changedTouches) {
        // toucher
        x = e.changedTouches[0].clientX + window.scrollX;
        y = e.changedTouches[0].clientY + window.scrollY;
    } else {
        // souris
        x = e.clientX + window.scrollX;
        y = e.clientY + window.scrollY;
    }

    // love
    createHeart(x, y);
}

/* make it RANDOM */

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}