var input  = document.querySelector('input');
var exibir = document.querySelector('div.imagem');

var frutas = [
    {
        fruta: "uva",
        imagem: "imguva"
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
            console.log(item.imagem)
        }
    }
})




