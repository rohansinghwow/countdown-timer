const startingMinutes = 10;

let time = startingMinutes * 60;

const countDownEL = document.querySelector(".countdown");

setInterval(updateCount, 1000);

function updateCount(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0'+seconds : seconds;

    countDownEL.innerHTML = `${minutes}:${seconds}`;
    time--;
}