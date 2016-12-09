![image alt text](image_0.jpg)

**Bonjour à tous,**

Continuer d'explorer un peu plus en profondeur le javascript. Ce mois ci y est consacré, y compris en fin de cycle du point de vue de se liens avec le HTML

## Playlist javascript


* [Structures ternaires en JavaScript](https://www.youtube.com/watch?v=SCPhXNMt79I&index=14&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI)
* [Le switch](https://www.youtube.com/watch?v=pkqoAfJkLao&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI&index=15)
* [Les boucles en JavaScript](https://www.youtube.com/watch?v=z5PO4uGT2Gg&index=16&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI)
* [Introduction aux fonctions en JavaScript](https://www.youtube.com/watch?v=JqzEfz1gsVo&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI&index=17)
* [Découverte et définition des objets en JavaScript](https://www.youtube.com/watch?v=9KAZQQoGhYE&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI&index=18)
* [Valeurs primitives et objets natifs](https://www.youtube.com/watch?v=w6dXNYW7BTY&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI&index=19)
* [Créer des objets en JavaScript](https://www.youtube.com/watch?v=AgKYCm6df6o&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI&index=20)
* [Les méthodes de l'objet String](https://www.youtube.com/watch?v=ep4-dpA-pUw&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI&index=21)
* [Numbers, propriétés et méthodes](https://www.youtube.com/watch?v=DqkPxkpj3gU&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI&index=22)
* [Array et tableaux](https://www.youtube.com/watch?v=U_yJypsGMeo&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI&index=23)



## Exercices

#### CV

Reprenez votre CV HTML, et éditez votre fichier js pour y coder ce qui suit.

**Créer une fonction**

Créez une fonction qui prend des paramètres, et qui retournera un objet. Cet objet contient les propriétés suivantes :

* Titre (String)
* Actif (Boolean)

Utilisez les paramètres pour pré-remplir les valeurs de l'objet retourné.

  Exemple:

```javascript

// var CreerMenu = function(titre, actif){
// ...
// };

CreerMenu("Accueil", false);

//Cette fonction retourne

=> {
  titre : "accueil",
  actif: false
}
```
**Créer un tableau**

Créez une variable "menus" qui contiendra une liste d'objets. Vous vous en doutez, nous allons utiliser la fonction pour créer autant d'objets que notre site possède de sections.

* Accueil
* Formation
* Travaux
* Contact

Si vous console.loggez votre variable "menus" vous devez obtenir un tableau de 4 objets.

## Pour aller plus loin

Les consignes ci dessous ne sont pas obligatoires. Elles ne concernent que les personnes ayant le temps de pousser plus loin leur apprentissage.

* Essayez de chercher comment ajouter ou supprimer un élément d'un tableau.

* Essayez de modifier votre fonction pour qu'elle ne prenne plus comme paramètres 2 String et un Boolean, mais un seul paramètre "objet" qui contient toutes les informations nécéssaires.

* Essayez d'anticiper à quoi pourraient ressembler les autres fonctions pour générer d'autres objets dont nous avons besoin pour faire évoluer le site.

* Par exemple, la section Travaux va contenir une liste travaux, dont vous connaissez déjà propriétés, puisque vous connaissez les titres des colonnes :)

* Reprenez le code de l'exercice du plus ou moins, et essayez de le refaire en utilisant ces nouvelles connaissances. Je ne peux que vous le conseiller, cela rendra votre code beaucoup plus lisible, et utilisable. Essayez en le refaisant d'y mettre autant de "beauté" que vous pouvez. Une indentation parfaite, une description de chaque chose limpide, des noms de variables qui parlent, et en utilisant au maximum les éléments suivants : Fonctions, Objets, Tableaux.

* Reprenez l'exerice du convertisseur HT TTC, et essayez de le réecrire intégralement en n'utilisant que des objets et des tableaux (qui eux peuvent contenir fonctions, string, numbers, boolean, tableaux ou autres objets).

Pour vous aider, à commencer à appréhender la logique de POO (programation orientée objet) je vous invite également à regarder cette petite Introduction.

https://www.grafikart.fr/tutoriels/javascript/poo-javascript-object-466

N'oubliez pas qu'il ne s'agit que de prendre de l'avance si vous le pouvez / souhaitez, mais nous reviendrons quoi qu'il en soit sur ce concept.
