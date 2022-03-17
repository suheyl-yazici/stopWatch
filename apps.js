const startStop = document.querySelector(".play-pause");
const play = document.querySelector(".bi-play-circle");
const pause = document.querySelector(".bi-pause-circle");
const reset = document.querySelector(".bi-stop-circle-fill");
const miliSecond = document.querySelector(".milisecond");
const second = document.querySelector(".second");
const minute = document.querySelector(".minute");

let milisaniye = 0;
let saniye = 0;
let dakika = 0;
let sayac = 0;


startStop.addEventListener("click", (e) => {
    console.log(e.target);
    if(e.target.classList.contains("bi-play-circle")){
        play.style.display = "none";
        pause.style.display = "block";
        play.innerHTML = `<i class="bi bi-pause-circle" style="font-size: 8rem;"></i>`;
        sayac = setInterval(timer,10);
    } else if(e.target.classList.contains("bi-pause-circle")){
        play.style.display = "block";
        pause.style.display = "none";
        clearInterval(sayac);
        play.innerHTML = `
        <i class="bi bi-play-circle-fill" style="font-size: 8rem;</i>
        `
    }
})

reset.addEventListener("click", (e) => {
    console.log(e.target);
    clearInterval(sayac);
    milisaniye = saniye = dakika = 0;
    miliSecond.innerText = milisaniye.toString().padStart(2,"0");
    second.innerText = saniye.toString().padStart(2,"0");
    minute.innerText = dakika.toString().padStart(2,"0");
})

function timer() {
    milisaniye++;
    // console.log(milisaniye);
    if (milisaniye == 100){
        saniye++;
        milisaniye = 0;
    }
    if (saniye == 60){
        dakika++;
        saniye=0;
    }
    miliSecond.innerHTML = milisaniye.toString().padStart(2,"0");
    second.innerHTML = saniye.toString().padStart(2,"0");
    minute.innerHTML = dakika.toString().padStart(2,"0");
}