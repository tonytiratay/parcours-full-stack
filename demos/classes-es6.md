

class Personne {

  constructor(name, prenom, age){
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
  }

  direPrenom(){
    console.log('Bonjour je suis ' + this.prenom)
  }

}

Var Peter = new Personne("Stevensen", "Peter", 32);
Peter.direPrenom();
