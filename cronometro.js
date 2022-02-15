let min = 0;
let ss = 0;
let mm = 0;

let time = 10;
let cron;

function start() {
    cron = setInterval(() => { timer(); }, time);
}

function pause() {
    clearInterval(cron);
}

function reset(){

    clearInterval(cron);
    min = 0;
    ss = 0;
    mm = 0;
    document.getElementById("counter").innerText = '00:00:00';
}

function timer() {

    mm++;

    if(mm == 100){
        mm = 0;
        ss++;

            if(ss == 60) {
                ss = 0;
                min++
            }
    }
    let format = (min < 10 ? '0' + min : min)+ ':' + (ss < 10 ? '0' + ss : ss) + ':' + (mm < 10 ? '0' + mm : mm);
    document.getElementById("counter").innerText = format;
}