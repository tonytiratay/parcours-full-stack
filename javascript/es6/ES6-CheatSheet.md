# ES6 Cheat Sheet
## Transpiler en javascript actuel

Il est nécessaire de compiler le code ES6 en ES5, afin de s'assurer de sa compatibilité avec tous les navigateurs. Pour cela ces 2 outils sont très utilisés.

* BabelJS.IO pour
* traceur by google

## Destructuring
```javascript
var foo = {
  bar: 1,
  baz: 2
};
```
En javascript traditionnel, pour assigner ces clés à des variables, on devrait procéder comme suit :
```javascript
var bar = foo.bar;
var baz = foo.baz;
```
Grâce à ES6 nous pouvons l'écrire de cette manière :
```javascript
var { bar, baz } = foo;
console.log(bar); // 1
console.log(baz); // 2
```

### Par exemple :
```javascript
// on stocke dans "personnes" une liste de prénoms
var personnes = ["moi", "toi", "nous"];

//On déstructure pour créer trois variables, qui contiendront chacune un élément du tableau.
var ["Tarzan", "Jane", "Contents"] = personnes;
```
> Nous obtenons donc l'association suivante : Tarzan = moi, Jane = Toi et Contents = nous.

### Mais que se passe-t-il dans le premier tableau
* Si nous mettons moins de variables que l'objet original en contient ?
* Si nous en mettons plus ?

Essayez par vous même ! Vous allez voir, au fond, c'est assez logique :)
### Créer des objets
Supposons que l'on souhaite créer un objet "John" qui contienne les propriétés suivantes, qui ont déjà été déclarées.
```javascript
var prenom = "John";
var nom = "Doeuf";
var age = 35;

// Exemple avec javascript actuel
var john = {
  prenom: prenom,
  nom: nom
  age: age
};
```
Maintenant, avec ES6 nous pouvons l'écrire plus simplement.
```javascript
var prenom = "John";
var nom = "Doeuf";
var age = 35;

// Exemple avec ES6
var john = {
  prenom,
  nom,
  age
};

// Pour plus de clarté, nous l'avons espacé sur plusieurs lignes, mais nous aurions tout aussi bien pû écrire
// var john = {prenom, nom, age};
```
## Les Template String
Grâce à un caractères spécial, le `(Alt + 7 sur windows, ou la touche £ sur mac) il est désormais possible de contenir du texte sur plusieurs lignes. Mais ça n'est pas tout, il est également possible d'interpréter directement des variables ou fonctions à l'intérieur.
Regardons l'exemple suivant :
```javascript
var prenom = "Lenny";
var nom = "Bar";
var presentation = `
Bonjour ! Je m'appelle $(prenom) $(nom).
Vraiment ravi de faire votre connaissance. Ce que j'aime, c'est mon nom :)
`;
```
> Dans cet exemple, non seulement nous pouvons mettre notre String sur plusieurs lignes, mais vous pouvez noter également l'utilisation de $(). Ce symbole interprete directement son contenu pour l'insérer dans la chaîne de caractères. Pratique non ?

## Scope
Le scope est un concept important en javascript, et il est aisé de se perdre dans des conflits qui lui sont liés.
### Function scoping
Regardons le bout de code suivant
```javascript
var a = 1;
function(){
  var b = 2;
};
console.log(b);
```
> Dans cet exemple b ne peut être affiché dans la console, car il n'existe que dans le scope de la fonction. Ce code retournerai une erreur.

### Block Scoping
Considerons maintenant ce code.
```javascript
var a = 1;
if(true){
  var b = 2;
}
console.log(b);
```
> Cette fois la console affichera bien 2, car la variable a été déclarée à l'interieur du block, et non d'une fonction.

### Le cas de Let
Let permet de déclarer une variable dont la portée ne dépassera pas le block dans lequel elle a été déclarée.
Pour reprendre le code précédent, en remplaçant "var" par "let" nous empêchons à nouveau le console.log de b.
```javascript
var a = 1;
if(true){
  let b = 2;
}
console.log(b);
// Il n'est plus possible d'afficher b, sa portée est mainenant limitée au bloc auquel elle appartient (ce qui suit le if()
```
Puisqu'en javascript le mot var déclare une variable de façon globale (accessible depuis toutes l'application) il est très facile d'écraser une variable qui est en fait déjà utilisée, peut être par un autre script que le votre.
> Moralité : Let is the new var ! Très rares sont les cas où vous avez vraiment besoin d'utiliser var, donc privilégiez dés que possible l'utilisation de let à la place.

### Le cas de Const
Tout comme let, la portée de const est limitée au block courant. Mais la ressemblance s'arrête ici, puisque contrairement à let, une fois déclarée une variable const ne peux plus être modifiée. Le fait d'essayer ne vous donnera aucune erreur, simplement la nouvelle valeur ne sera pas assignée.
Allez y, testez le code suivant :
```javascript
const pi = 3.14;
console.log(pi);
const pi = "Pi vaut Pi et vaudra toujours Pi";
console.log(pi);
```
## Les classes
```javascript
class Parent {
  constructor(name) {
    this.name = name;
  }
  methode1() {
    return "Je suis " + this.name
  }
  methode2() {
    return "Yipiiii"
  }
}
var pere = new Parent(name = "Bob");
pere.methode1(); // Renvoie "Je suis Bob"

class Child extends Parent {
  constructor(){
    super();
    this.filsDe = "Bob"
  }
  methode3(){
    return "Je suis le fils de " + this.filsDe;
  }
}
var thomas = new Child();
thomas.methode1(); // Renvoie "Je suis Thomas"
thomas.methode2(); // Renvoie Yipiiii
thomas.methode3(); // Renvoie "Je suis le fils de Bob"
```
> Ici la classe parent nous permet de définir une propriété, qui sera accessible individuellement par chacune de ses instances (ici pere est une instance de parent). La classe Child hérite de ces mêmes paramètres, et ajoute une propriété "Fils de" dont toutes les instances hériteront aussi. Ici Thomas est une instance de la classe Child.
