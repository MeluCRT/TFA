"use strict";

/* playroom - love */

function createHeart(x, y) {
    var heart = document.createElement('div');
    heart.innerText = '❤️';
    heart.classList.add('heart');
    document.body.appendChild(heart);

    // ajout coeur puis calcul de position
    const heartRect = heart.getBoundingClientRect();
    heart.style.left = (x - heartRect.width / 2) + 'px';
    heart.style.top = (y - heartRect.height / 2) + 'px';

    setTimeout(() => {
        heart.remove();
    }, 1000);
}

/* playroom - random kitty */

let cat = document.querySelector(".section__play__kitty");
let purrSound = document.querySelector(".audio--purr");

if (cat && purrSound) {

    cat.addEventListener('click', function (e) {
        // random kitty
        var catRandom = getRandomIntInclusive(1, 4);
        cat.setAttribute("src", "assets/images/kitty/cat_" + catRandom + ".png");

        // ronron
        purrSound.play();

        // calcul position clic
        var rect = cat.getBoundingClientRect();
        var x = e.clientX - rect.left + rect.width / 2;
        var y = e.clientY - rect.top + rect.height / 2;

        // love
        createHeart(x, y);
    });
}

/* make it RANDOM */

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}