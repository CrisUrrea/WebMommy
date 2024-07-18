document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.flip-card');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            // Desactiva todas las tarjetas primero
            cards.forEach(c => c.classList.remove('flipped'));
            // Activa la tarjeta actual
            this.classList.add('flipped');
        });
    });
});

document.querySelectorAll('.return-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        button.closest('.flip-card').classList.remove('flip');
        setTimeout(() => {
            location.replace('main.html');
        }, 500);
    });
});
