
let targetDate; // To store the custom date
let timerInterval; // To store the interval ID

document.getElementById("text").innerText = "Set The Timer";

function setCustomDate() {
    const inputDate = document.getElementById("customDate").value;
    targetDate = new Date(inputDate).getTime();
    updateTimer(); // Initial update
}

function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

   

    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("text").innerHTML = "Time is Up !!";
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("text").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

function startTimer() {
    updateTimer(); // Initial update
    timerInterval = setInterval(updateTimer, 1000);
}

let timerRunning = true; // Add a variable to track the timer state

function stopTimer() {
    if (timerRunning) {
        clearInterval(timerInterval); // Stop the timer
        timerRunning = false; // Update the timer state
    } else {
        startTimer(); // Resume the timer
        timerRunning = true; // Update the timer state
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById("text").innerHTML = "Set The Timer"; // Reset the display text
    document.getElementById("customDate").value = ""; // Clear the input value
}
