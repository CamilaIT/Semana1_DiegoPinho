/* Crie um objeto chamado Professor que deriva de Pessoa e 
implementa um método chamado ensinar() que recebe uma string e imprime na tela: 

 [nome do professor] está ensinado [matéria].
 ps: Cada objeto precisa ter ao menos três atributos */


var Pessoa = function(nome){
    this.nome = nome;
};

Pessoa.prototype.ensinar = function(){
    console.log('Oi meu nome é ' + this.nome)
}

var Professor = function(nome, materia){
    Pessoa.call(this, nome);
    this.materia = materia;
}

Professor.prototype = Object.create(Pessoa.prototype);

Professor.prototype.ensinar = function() {
      console.log('Professor ' + this.nome + ', está ensinado ' + this.materia + '.');
  
  };

  var diego = new Professor('Diego', 'Javascript');
  diego.ensinar();
  






