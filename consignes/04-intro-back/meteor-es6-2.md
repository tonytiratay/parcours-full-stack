![image alt text](image_0.jpg)

**Bonjour à tous,**

Cette semaine nous continuons le développement du jeu Cookie Clicker avec Meteor.

## Avant de continuer

Ce que nous avons vu la semaine dernière (les templates et les imports / exports) va nous permettre continuer la suite de notre application.

Cette semaine nous allons donc utiliser ces connaissances pour continuer de développer les éléments du store.

> #### Note
> Afin de pouvoir suivre au mieux cet exercice, nous allons avoir besoin du principe des classes ES6. Nous allons aborder ce point ci dessous, mais vous pouvez trouver un [petit aide mémoire sur les nouveautés ici](https://github.com/tonytiratay/parcours-full-stack/blob/master/javascript/es6/ES6-CheatSheet.md).

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

## A faire

Fort de la comprehension de ce nouveau principe, nous allons l'utiliser pour construire les Store Elements (les éléments achetables du store).

Suite à l'observation du cookie clicker original, nous avons pu observer que les éléments du store avaient les propriétés suivantes :

* Titre (String)
* Prix original (Number)
* icône (String)
* Une liste des éléments déjà achetés pour en garder la trace et afficher le nombre déjà acheté.

Le template chargé d'afficher la liste des éléments du store doit :

* N'afficher que les éléments dont le prix est inférieur à 10 fois ce que possède l'utilisateur
* Applique une certaine classe aux éléments si l'utilisateur a assez de fonds pour l'acheter
* Applique une autre classe aux éléments pour lesquels l'acheteur n'a pas assez de fonds.

Chaque élément du store doit écouter les événements de type click, pour lancer l'achat.

## Pour aller plus loin

#### ES6 français

* [Playlist les teachers du net](https://www.youtube.com/watch?v=-zqdFGibw_w&list=PLlxQJeQRaKDS78HT4rUdsntXajXBslZth&index=7)
* [Playlist Anthony Welc](https://www.youtube.com/watch?v=59YAPY2WYU0&list=PLHSUbP5y6J0UKIYjMkWvU91KwF0Q-th9H&index=12)
* [Grafikart](https://www.youtube.com/watch?v=5146X8FSBUQ)

#### ES6 Essentials

* [Essential ES6 / in 20 minutes](https://www.youtube.com/watch?v=CozSF5abcTA)

#### Meteor Français

* [Introduction](http://fr.discovermeteor.com/chapters/introduction/)
* [Introduction]()
* [Premiers pas](http://fr.discovermeteor.com/chapters/getting-started/)
* [Templates](http://fr.discovermeteor.com/chapters/templates/)
* [Collections](http://fr.discovermeteor.com/chapters/collections/)
* [Routage](http://fr.discovermeteor.com/chapters/routing/)
* [Utilisateurs](http://fr.discovermeteor.com/chapters/adding-users/)
* [Créer des posts](http://fr.discovermeteor.com/chapters/creating-posts/)
* [Editer des posts](http://fr.discovermeteor.com/chapters/editing-posts/)

#### Meteor en Anglais

* [meteor for everyone / LevelUpTuts](https://www.youtube.com/watch?v=hgjyr6BPAtA&list=PLLnpHn493BHECNl9I8gwos-hEfFrer7TV)
