const button = document.querySelector('.button');
const gifContainer = document.getElementById('gif-container');
const btn_body = document.querySelector('.btn-body');
const btn_footer = document.querySelector('.btn-footer');
const audio = document.getElementById('audio');
const body = document.querySelector('body');

button.addEventListener('click', () => {
    document.documentElement.requestFullscreen();
    gifContainer.style.display = 'flex';
    btn_body.style.display = 'none';
    btn_footer.style.display = 'none';
    body.style.backgroundColor = 'black';
    body.style.backgroundImage = 'url(./gif.gif)';
    audio.play();
});
