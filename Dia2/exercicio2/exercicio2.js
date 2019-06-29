var input = document.querySelector('input');
var exibir = document.querySelector('div.texto');

input.addEventListener('keyup', function(){
    exibir.innerHTML = input.value;
})


