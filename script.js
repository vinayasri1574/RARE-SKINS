document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null, // Use the viewport as the container
        threshold: 0.1 // Trigger when 10% of the element is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Stop observing after adding the class
            }
        });
    }, observerOptions);

    // Target elements to observe
    document.querySelectorAll('.animate').forEach(element => {
        observer.observe(element);
    });
});

function toggleMenu() {
    const menu = document.getElementById('navbar-menu');
    menu.classList.toggle('active');
}
document.querySelectorAll('.video-container .item').forEach(item => {
    const video = item.querySelector('video');
    const poster = item.querySelector('.device-overlay');
    
    item.addEventListener('mouseenter', () => {
        video.play();
    });
    item.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Reset video to start
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});
