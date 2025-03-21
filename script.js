let audios = [
    {caminho:'anacastela.mp3', legenda:'AnaCastela'},
    {caminho:'cristiano.mp3', legenda:'Cristiano'},
    {caminho:'henriqueejuliano'.mp3', legenda:'henriqueejuliano'},
    {caminho:'hugoeguilerme.mp3', legenda:'hugoeguilerme'},
    {caminho:'jorgeematheus.mp3', legenda:'jorgeematheus'},
    {caminho:'amordeverdade.mp3', legenda:'amordeverdade'},
    {caminho:'marilia.mp3', legenda:'marilia'},
    {caminho:'meuamor.mp3', legenda:'meuamor'},
    {caminho:'Paula Fernandes.mp3', legenda:'Paula Fernandes'},
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i=0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        });
    });
});
