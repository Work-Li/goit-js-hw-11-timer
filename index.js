
const countdown = document.querySelector('#timer-1');
const daysEl = document.querySelector('[data-value="days"]');
const hoursEl = document.querySelector('[data-value="hours"]');
const minsEl = document.querySelector('[data-value="mins"]');
const secsEl = document.querySelector('[data-value="secs"]');
const imageEl = document.querySelector('img');

class CountdownTimer {
    constructor({targetDate, selector, onTick}) {  
        this.targetDate = targetDate;
        this.selector = selector;
        this.onTick = onTick;       
    }

    start() {
        const intervalId = setInterval(() => {
           const currentDate = Date.now();
           const deltaTime = this.targetDate - currentDate;
           const time = getTimeComponents(deltaTime);
            
           if (deltaTime < 0) {
            clearInterval(this.intervalId);
            imageEl.setAttribute('src', './images/UnicornTimeOver.jpg');
            
            return countdown.textContent = 'Time is over, event ended';

           };

           this.onTick(time);
       }, 1000);   
    }

} 

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('October 31, 2021'),
    onTick: updateСountdown,
        
}).start();
    
function updateСountdown({ days, hours, mins, secs }) {
    // countdown.textContent = `${days}:${hours}:${mins}:${secs}`;
    daysEl.textContent = `${days}`;
    hoursEl.textContent = `${hours}`;
    minsEl.textContent = `${mins}`;
    secsEl.textContent = `${secs}`;
};

function pad(value) {
    return String(value).padStart(2, '0');

};

function getTimeComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
}
