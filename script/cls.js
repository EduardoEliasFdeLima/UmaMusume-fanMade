// const btnMOOD = document.getElementById('btn_mood');

// const moodsList = ["good", "normal", "bad", "great"];

// btnMOOD.addEventListener("click", () => {

//     const moods = document.querySelectorAll('.awful');

//     moods.forEach(el => {


//         const randomMood = moodsList[Math.floor(Math.random() * moodsList.length)];

//         alert(randomMood)

//         el.classList.remove("awful");
//         el.classList.add(randomMood);

//     });

// });

const btnMOOD = document.getElementById("btn_mood");
const md_txt = document.getElementById("md_text");

const moods = ["awful", "normal", "great", "bad", "good"];
const allMoodClasses = ["awful", "normal", "great", "bad", "good"];

btnMOOD.addEventListener("click", () => {

    // sorteia UMA mood
    const randomMood = moods[Math.floor(Math.random() * moods.length)];

    // pega todos elementos que possuem alguma mood
    const elements = document.querySelectorAll(".awful, .normal, .great, .bad, .good");

    elements.forEach(el => {

        // remove qualquer mood anterior
        allMoodClasses.forEach(m => el.classList.remove(m));
        md_txt.innerHTML = randomMood;

        // adiciona a nova
        el.classList.add(randomMood);

    });

});