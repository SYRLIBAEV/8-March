window.addEventListener('scroll', function() {
    const bigEight = document.getElementById('big-eight');
    const contentWrapper = document.getElementById('content-wrapper');

    let scrollPosition = window.scrollY;

    if (scrollPosition > window.innerHeight * 0.5) { // Триггер срабатывает при прокрутке вниз на 50% экрана
        bigEight.style.opacity = '0';
        bigEight.style.pointerEvents = 'none';
        contentWrapper.style.opacity = '1';
        contentWrapper.style.transform = 'translateY(0)';
    } else {
        bigEight.style.opacity = '1';
        bigEight.style.pointerEvents = 'auto';
        contentWrapper.style.opacity = '0';
        contentWrapper.style.transform = 'translateY(50px)';
    }
});

// Функция для создания падающих листьев
function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    leaf.style.left = Math.random() * window.innerWidth + 'px';
    leaf.style.animationDuration = (Math.random() * 4 + 3) + 's';
    leaf.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.querySelector('.falling-leaves').appendChild(leaf);

    setTimeout(() => leaf.remove(), 6000);
}
// Запуск анимации листьев
setInterval(createLeaf, 400);
document.getElementById("rsvp-btn").addEventListener("click", function() {
    alert("🎉 Біз сізді асыға күтеміз! Кездескенше! 💖");
});
