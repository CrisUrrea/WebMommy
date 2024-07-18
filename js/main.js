let past = document.getElementById('past');
let present = document.getElementById('present');
let future = document.getElementById('future');

const redireccion = () => {
    past.addEventListener('click', (e) => {
        e.preventDefault();
        location.replace('./templates/past.html');
    });

    present.addEventListener('click', (e) => {
        e.preventDefault();
        location.replace('./templates/present.html');
    });

    future.addEventListener('click', (e) => {
        e.preventDefault();
        location.replace('./templates/future.html');
    });
}

redireccion();
