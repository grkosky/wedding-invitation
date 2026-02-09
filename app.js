// Countdown Timer Functionality
const countdownTimer = () => {
    const countdownDate = new Date('2026-02-09T09:16:16Z').getTime();
    const timerElement = document.getElementById('timer');

    const updateTimer = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(updateTimer);
            timerElement.innerHTML = 'EXPIRED';
        }
    }, 1000);
};

// Audio Player Controls
const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');

playButton.addEventListener('click', () => {
    audioPlayer.play();
});

pauseButton.addEventListener('click', () => {
    audioPlayer.pause();
});

// Dynamic Text Color and Font Updates
const updateTextStyles = (config) => {
    const textElement = document.getElementById('dynamicText');
    textElement.style.color = config.textColor;
    textElement.style.fontFamily = config.font;
};

// Button Click Handlers
document.getElementById('rsvpButton').addEventListener('click', () => {
    window.open('https://your-rsvp-link.com');
});

document.getElementById('mapButton').addEventListener('click', () => {
    window.open('https://www.google.com/maps');
});

document.getElementById('detailsButton').addEventListener('click', () => {
    window.open('https://your-details-page.com');
});

// Initialize Countdown
countdownTimer();