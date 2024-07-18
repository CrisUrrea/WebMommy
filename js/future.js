document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const popupId = `popup${dot.id.replace('dot', '')}`;
            document.getElementById(popupId).style.display = 'block';
        });
    });
});

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

function goToMain() {
    setTimeout(() => {
        location.replace('../index.html');
    }, 500);
}

function openSpotifyPopup() {
    document.getElementById('spotifyPopup').style.display = 'block';
}

function closeSpotifyPopup() {
    document.getElementById('spotifyPopup').style.display = 'none';
}
