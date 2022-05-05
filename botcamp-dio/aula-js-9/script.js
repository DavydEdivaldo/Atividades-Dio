const bodyDark = document.getElementById('body');
const footerDark = document.getElementById('footer');
const btnDark = document.getElementById('mode-selector');
const h1Dark = document.getElementById('page-title');

function clicar() {
    bodyDark.classList.toggle('dark-mode');
    footerDark.classList.toggle('dark-mode');
    btnDark.classList.toggle('dark-mode');
    h1Dark.classList.toggle('dark-mode');
    text();
}

function text(){
    if(bodyDark.classList.contains('dark-mode')){
        h1Dark.innerHTML = 'Modo de luz APAGADO';
        btnDark.innerHTML = 'Light Mode'
    }else{
        h1Dark.innerHTML = 'Modo de luz LIGADO'
        btnDark.innerHTML = 'Dark Mode'
    }
}
