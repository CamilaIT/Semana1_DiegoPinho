var listElement  = document.querySelector('#box div.texto');
var inputElement = document.querySelector('#box input');
var btnElement   = document.querySelector('#box button');


var lista = [''];

function render(){
    listElement.innerHTML = '';

    for (item of lista){
        var itemElement = document.createElement('div');
        var itemText = document.createTextNode(item);

        itemElement.appendChild(itemText);
        listElement.appendChild(itemElement);
       
    }
}

render();

function addItem(){
    itemText = inputElement.value;
    lista.push(itemText);
    inputElement.value = '';
    render();
}

btnElement.onclick = addItem;


