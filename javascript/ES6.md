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
