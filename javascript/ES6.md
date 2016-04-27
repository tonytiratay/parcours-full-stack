#ES6 Cheat Sheet
## Transpiler en javascript actuel
* BabelJS.IO pour 
* traceur by google

##Destructuring
```javascript
var foo = {
  bar: 1,
  baz: 2
};
```
En javascript traditionnel, pour assigner ces clés à des variables, on devrait procéder comme suit : 
```javascript
var bar = foo.bar; var baz = foo.baz;
```
Grâce à ES6 nous pouvons l'écrire de cette manière :
```javascript
var { bar, baz } = foo;
```
> Si l'on console.log bar, nous obtiendrons 1, et pour baz 2. Il est à noter que le même procédé peut être employé avec des tableaux, à la place d'un objet.

Par exemple : 
```javascript
var personnes = ["moi", "toi", "nous"];
var ["Tarzan", "Jane", "Contents"] = personnes;
```
> Nous obtenons donc l'association suivante : Tarzan = moi, Jane = Toi et Contents = nous. 

### Mais que se passe-t-il dans le premier tableau 
* Si nous mettons moins de variables que l'objet original en contient ? 
* Si nous en mettons plus ?

Essayez par vous même ! Vous allez voir, au fond, c'est assez logique :)
###Créer des objets
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
### Les Template String
Grâce à un caractères spécial, le `(Alt + 7 sur windows, ou la touche £ sur mac) il est désormais possible de contenir du texte sur plusieurs lignes. Mais ça n'est pas tout, il est également possible d'intéerpréter directement des variables ou fonctions à l'intérieur. 
Regardons l'exemple suivant : 
```javascript
var prenom = "Lenny"; var nom = "Bar";
var presentation = `
Bonjour ! Je m'appelle $(prenom) $(nom). 
Vraiment ravi de faire votre connaissance. Ce que j'aime, c'est mon nom :)
`;
```
> Dans cet exemple, non seuelement nous pouvons mettre notre String sur plusieurs lignes, mais vous pouvez noter également l'utilisation de $(). Ce symbole interprete directement son contenu pour l'insérer dans la chaîne de caractères. Pratique non ?

