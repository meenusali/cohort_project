const startButton = document.getElementById('startButton')
const timeInput  = document.getElementById('timeInput')
const countdownDisplay = document.getElementById('countdownDisplay')
const pauseButton = document.getElementById('pauseButton')
const resumeButton = document.getElementById('resumeButton')

let isPaused= false;
let ValueInSeconds = 0;
let Timer = null;

function startTimer () {
    ValueInSeconds = parseInt(timeInput.value)



    if (isNaN(ValueInSeconds)){
        countdownDisplay.innerText =   'please enter a valid number'
        return

    }
    if (ValueInSeconds <=0 ) {
        countdownDisplay.innerText = 'please enter seconds > 0'
        return 
    }
    clearInterval(Timer);
    isPaused = false;

    const timer = setInterval(function() {
        if (!isPaused && ValueInSeconds > 0 ) {
             ValueInSeconds--;
            countdownDisplay.innerText = `Time remaining: ${ValueInSeconds} Second`
        }
       

        if (ValueInSeconds <= 0 ) {
            clearInterval(timer);
            countdownDisplay.innerText = 'Time up'
        }

    }, 1 * 1000)

}
function pause() {
    isPaused = true; // Pause the countdown
}

function resume() {
    isPaused = false; // Resume the countdown
}




startButton.addEventListener('click', startTimer)
resumeButton.addEventListener('click', resume)
pauseButton.addEventListener('click', pause)
