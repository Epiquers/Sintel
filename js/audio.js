document.addEventListener("DOMContentLoaded", function () {
    const audio2 = document.getElementById("audio2");
    const animatedText = document.querySelector(".texto-animado");

    audio2.addEventListener("play", () => {
        animatedText.style.animationPlayState = "running";
    });

    audio2.addEventListener("pause", () => {
        animatedText.style.animationPlayState = "paused";
    });

    audio2.addEventListener("timeupdate", () => {
        if (audio2.currentTime > 0 && audio.currentTime < 5) {
            animatedText.style.animationPlayState = "running";
        } else {
            animatedText.style.animationPlayState = "paused";
        }
    });
});

const audio = document.getElementById("audio");
const button = document.getElementById("playButton");
const icon = document.getElementById("icon");

button.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        icon.classList.remove("bi-play-fill");
        icon.classList.add("bi-pause-fill"); // cambia a pausa
    } else {
        audio.pause();
        icon.classList.remove("bi-pause-fill");
        icon.classList.add("bi-play-fill"); // vuelve a nota musical
    }
});