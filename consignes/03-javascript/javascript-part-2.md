![image alt text](image_0.jpg)

**Bonjour à tous,**

On continue la découverte du javascript en plongeant plus en détail sur les objets et leurs méthodes. Ce sera également l'occasion de découvrir le DOM :) La semaine prochaine, nous verrons relativement peu de nouveaux concepts, pour nous attarder plus en profondeur sur ce qui a déjà été vu.

## Playlist javascript


* [Les méthodes de l'objet Array](https://www.youtube.com/watch?v=kNWJsWxZXis&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI&index=24)
* [Présentation de l'objet Date](https://www.youtube.com/watch?v=l7UsNg6W1rk)
* [ Les méthodes de l'objet Date](https://www.youtube.com/watch?v=RReVk5ESkkQ)
* [L'objet Math et ses méthodes](https://www.youtube.com/watch?v=GgSDt28k-ak)
* [Présentation du DOM HTML](https://www.youtube.com/watch?v=qsBX7lV60fY)
* [Accéder à des éléments HTML en JavaScript](https://www.youtube.com/watch?v=trO063YQbCs)
* [Modifier du contenu HTML en JavaScript](https://www.youtube.com/watch?v=g0YPzvGBvQk)
* [Ajouter et insérer des éléments HTML en JavaScript](https://www.youtube.com/watch?v=g8znXUnkZvc)


## Exercices

#### CV

Reprenez votre CV HTML, et éditez les fichiers HTML et javascript pour modifier le menu. Pour cet exercice, vous devez avoir fait la partie obligatoire de la semaine précédente.

** A partir de l'exercice de la semaine dernière donc, apportez les modifications suivantes. **

* Effacez de votre fichier html les élements (liens) de menus
* Utilisez la méthode de votre choix pour ajouter à l'aide du javascript les éléments (liens).

> #### Astuce
> Vous avez déjà écrit le code qui contient dans la variable "menus" un tableau d'objets avec un titre et un lien. Vous pouvez donc faire une boucle sur ce tableau, et pour chaque élément trouvé dans le tableau, générer un élement HTML qui contient le titre, et fait un lien vers la propriété "lien" de l'objet en cours


## Pour aller plus loin

Les consignes ci dessous ne sont pas obligatoires. Elles ne concernent que les personnes ayant le temps de pousser plus loin leur apprentissage.

Ici le but va être d'essayer de créer des fonctions, en imaginant des besoins futurs pour une application permettant de mettre à jour un cv.

#### Trier le tableau des Travaux

Dans la partie Tableaux de votre CV, avec le même principe que le tableau de menus, créez des objets  que vous allez stocker dans un tableau "travaux".

* Pensez à comment vous allez créer vos objets "travaux". Inspirez vous du même principe que pour les menus.
* Créez une fonction, qui à partir d'un tableau fourni en paramètres, vide et rempli automatiquement les colonnes d'un tableau HTML
* Créer une fonction de tri d'un tableau, qui renvoie le tableau trié selon des paramètres de votre choix (titre, date etc.)
