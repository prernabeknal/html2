document.getElementById('birthdayButton').addEventListener('click', function() {
    const messages = [
        'Wishing you a year ahead filled with love and success!',
        'May all your dreams and wishes come true on your special day!',
        'Happy Birthday! Enjoy the celebration!'
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    const selectedMessage = messages[randomIndex];

    document.getElementById('birthdayMessage').textContent = selectedMessage;

    // Play the birthday audio
    const audio = document.getElementById('birthdayAudio');
    audio.play();

    // Display fireworks animation
    const fireworksContainer = document.getElementById('fireworks');
    fireworksContainer.innerHTML = '<img src="fireworks.gif" alt="Fireworks">';
});
