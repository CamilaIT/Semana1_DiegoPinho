var input  = document.querySelector('input');
var exibir = document.querySelector('div.imagem');

var frutas = [
    {
        fruta: "laranja",
        imagem: "laranja.png"
    },

    {
        fruta: "banana",
        imagem: "imgbanana"
    },

    {
        fruta: "pera",
        imagem: "imgpera"
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




