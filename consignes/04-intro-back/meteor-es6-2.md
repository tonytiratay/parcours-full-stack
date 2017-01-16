![image alt text](image_0.jpg)

**Bonjour à tous,**

Cette semaine nous continuons le développement du jeu Cookie Clicker avec Meteor.

## Avant de continuer

Ce que nous avons vu la semaine dernière (les templates et les imports / exports) va nous permettre continuer la suite de notre application.

Cette semaine nous allons donc utiliser ces connaissances pour continuer de développer les éléments du store.

> #### Note
> Afin de pouvoir suivre au mieux cet exercice, je vous recommande d'être à jour dans les méthodes et fonctionnalités ES6.
> Vous pouvez trouver un [petit aide mémoire sur les nouveautés ici]().

Suite à l'observation du cookie clicker original, nous avons pu observer que les éléments du store avaient les propriétés suivantes :

* Titre (String)
* Prix original (Number)
* icône (String)
* Une liste des éléments déjà achetés pour en garder la trace et afficher le nombre déjà acheté.

Le template chargé d'afficher la liste des éléments du store doit :

* N'afficher que les éléments dont le prix est inférieur à 10 fois ce que possède l'utilisateur
* Applique une certaine classe aux éléments si l'utilisateur a assez de fond pour l'acheter
* Applique une autre classe aux éléments pour lesquels l'acheteur n'a pas assez.

Chaque élément du store doit écouter les événements de type click, pour lancer l'achat.
