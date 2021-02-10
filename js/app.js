const daysParagraph = document.querySelector("#days");
const hoursParagraph = document.querySelector("#hours");
const minutesParagraph = document.querySelector("#minutes");
const secondsParagraph = document.querySelector("#seconds");
const cards = document.querySelectorAll(".card");

class Timer {
    constructor(days, hours, minutes, seconds){
        this.days = days.toLocaleString(undefined, {minimumIntegerDigits: 2});
        this.hours = hours.toLocaleString(undefined, {minimumIntegerDigits: 2});
        this.minutes = minutes.toLocaleString(undefined, {minimumIntegerDigits: 2});
        this.seconds = seconds.toLocaleString(undefined, {minimumIntegerDigits: 2});
    }

    secondsLeft(){
        if(Number(this.seconds) == 0){
            this.seconds = 59;
            this.minutesLeft();
        }else{
            this.seconds = (this.seconds - 1).toLocaleString(undefined, {minimumIntegerDigits: 2});
        }
        ui.flipCard("seconds");
    }

    minutesLeft(){
        if(Number(this.minutes) == 0){
            this.minutes = 59;
            this.hoursLeft();
        }else{
            this.minutes = (this.minutes - 1).toLocaleString(undefined, {minimumIntegerDigits: 2});
        }
        ui.flipCard("minutes");
    }

    hoursLeft(){
        if(Number(this.hours) == 0){
            this.hours = 23;
            this.daysLeft();
        }else{
            this.hours = (this.hours - 1).toLocaleString(undefined, {minimumIntegerDigits: 2});
        }
        ui.flipCard("hours");
    }

    daysLeft(){
        if(Number(this.days) == 0){
            this.days = 14;
        }else{
            this.days = (this.days - 1).toLocaleString(undefined, {minimumIntegerDigits: 2});
        }
        ui.flipCard("days");
    }
}

class UI {
    flipCard(element){
        cards.forEach(card=>{
            card.classList.contains(element) ? card.classList.toggle('is-flipped') : undefined;
        })
    }    
}

const timer = new Timer(14,0,0,0);
const ui = new UI();

eventListener();
function eventListener(){
    document.addEventListener("DOMContentLoaded", insertValues);
}

function insertValues(){
    daysParagraph.textContent = timer.days;
    hoursParagraph.textContent = timer.hours;
    minutesParagraph.textContent = timer.minutes;
    secondsParagraph.textContent = timer.seconds;
}


let interval = setInterval(() => {
    timer.secondsLeft();
    insertValues();
    
    if(!Number(daysParagraph.textContent) && !Number(hoursParagraph.textContent) && !Number(minutesParagraph.textContent) && !Number(secondsParagraph.textContent) ){
        clearInterval(interval)
    }
}, 1000);

