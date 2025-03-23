let audios = [
    {caminho:'anacastela.mp3', legenda:'Ana Castela'},
    {caminho:'amordeverdade.mp3', legenda:'Amor de Verdade'},
    {caminho:'cristiano.mp3', legenda:'Cristiano'},
    {caminho:'henriqueejuliano.mp3', legenda:'Henrique e Juliano'},
    {caminho:'hugoeguilherme.mp3', legenda:'Hugo e Guilherme'},
    {caminho:'jorgeematheus.mp3', legenda:'Jorge e Matheus'},
    {caminho:'marilia.mp3', legenda:'Marilia'},
    {caminho:'meuamor.mp3', legenda:'Meu Amor'},
    {caminho:'leoeraphael.mp3', legenda:'Leo e Raphael'},
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
