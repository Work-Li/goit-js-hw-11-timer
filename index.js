// const timer = new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
//   });
const timer = {
    start() {
        const targetDate = new Date('October 31, 2021');
    
        setInterval(() => {
        const currentDate = Date.now();
        console.log(currentDate);
        console.log(targetDate - currentDate);

        }, 1000);
        
    },
};

timer.start();

function getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
}
