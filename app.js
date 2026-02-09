// Countdown Timer
const countdownTimer = () => {
    const countdownDate = new Date('2026-02-09T09:36:28Z').getTime();
    const x = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById('timer').innerHTML = 'EXPIRED';
        }
    }, 1000);
};

// RSVP Button Functionality
const rsvpButton = document.getElementById('rsvpButton');
rsvpButton.addEventListener('click', () => {
    const rsvpResponse = confirm('Will you attend the wedding?');
    if (rsvpResponse) {
        alert('Thank you for your RSVP!');
    } else {
        alert('Hope to see you next time!');
    }
});

// Google Calendar Integration
const addToGoogleCalendar = () => {
    const event = {
        title: 'Wedding Invitation',
        start: '2026-02-09T09:36:28Z',
        end: '2026-02-09T11:36:28Z',
        details: 'Join us for our wedding celebration!',
        url: 'http://your-website.com',
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${encodeURIComponent(event.start)}/${encodeURIComponent(event.end)}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.url)}`;
    window.open(googleCalendarUrl, '_blank');
};

// Initialize Countdown Timer
countdownTimer();
