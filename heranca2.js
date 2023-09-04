
function Animal(nome) {
    this.nome = nome;
  }
  
  Animal.prototype.fazerBarulho = function() {
    console.log(this.nome + ' faz um barulho.');
  };
  
  function Cachorro(nome, raca) {
    Animal.call(this, nome);
    
    this.raca = raca;
  }
  
  Cachorro.prototype = Object.create(Animal.prototype);
  
  Cachorro.prototype.latir = function() {
    console.log(this.nome + ' late!');
  };
  
  var animal = new Animal('Animal');
  var cachorro = new Cachorro('Buddy', 'Golden Retriever');
  
  animal.fazerBarulho(); 
  cachorro.fazerBarulho(); 
  cachorro.latir(); 