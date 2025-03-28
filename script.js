document.getElementById('event-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;

    const eventCard = document.createElement('div');
    eventCard.className = 'event-card';
    eventCard.innerHTML = `
        <h4>${title}</h4>
        <p>Date: ${date}</p>
        <p>${description}</p>
        <button onclick="shortlistEvent(this)">Shortlist</button>
    `;

    document.getElementById('event-list').appendChild(eventCard);
    this.reset();
});

function shortlistEvent(button) {
    button.parentElement.style.backgroundColor = '#d4edda';
    alert('Event shortlisted!');
}
// JavaScript to handle banner slides dynamically (included for future expansion if needed)
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    setInterval(() => {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
        index = (index + 1) % slides.length;
    }, 3000); // Slide changes every 3 seconds
});
