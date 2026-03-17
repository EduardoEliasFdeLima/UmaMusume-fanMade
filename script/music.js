// document.addEventListener("DOMContentLoaded", function() {

//     let testeMS = 1;
//     const testemusica = document.getElementById("musicfundo");
//     const ms = document.getElementById('ms');

//     testemusica.volume = 0.1;

//     ms.addEventListener("click", function () {
//         if(testeMS === 1) {
//             testemusica.play();
//             ms.classList.remove("fa-volume-xmark");
//             ms.classList.add("fa-volume-low");
//             testeMS++;

//             testemusica.addEventListener("ended", function () {
//                 ms.classList.remove("fa-volume-low");
//                 ms.classList.add("fa-volume-xmark");
//             }, false);

//         } else {

//             testemusica.pause();
//             ms.classList.remove("fa-volume-low");
//             ms.classList.add("fa-volume-xmark");
//             testeMS--;

//         }
//     })
// })


document.addEventListener("DOMContentLoaded", () => {

    const musica = document.getElementById("musicfundo");
    const botao = document.getElementById("ms");
    const btn = document.getElementById("msbtn")

    musica.volume = 0.1;

    btn.addEventListener("click", () => {

        if (musica.paused) {
            musica.play();
            botao.classList.remove("fa-volume-xmark");
            botao.classList.add("fa-volume-low");
        } 
        else {
            musica.pause();
            botao.classList.remove("fa-volume-low");
            botao.classList.add("fa-volume-xmark");
        }

    });

    musica.addEventListener("ended", () => {
        botao.classList.remove("fa-volume-low");
        botao.classList.add("fa-volume-xmark");
    });

});