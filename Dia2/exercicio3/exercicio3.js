var input  = document.querySelector('input');
var exibir = document.querySelector('div.imagem');

var frutas = [
    {
        fruta: "laranja",
        imagem: "laranja.png"
    },

    {
        fruta: "banana",
        imagem: "banana.png"
    },

    {
        fruta: "pera",
        imagem: "pera.png"
    },

    {
        fruta: "uva",
        imagem: "uva.png"
    },

    {
        fruta: "abacaxi",
        imagem: "abacaxi.png"
    }
];




input.addEventListener('keyup', function(){
    for(item of frutas){
        if(item.fruta == input.value){
            console.log(item.imagem);
            exibir.innerHTML ="<img src=" + item.imagem + " />";
        }
    }
    
})




