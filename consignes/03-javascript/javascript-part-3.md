![image alt text](image_0.jpg)

**Bonjour à tous,**

Cette semaine sera consacrée presque exclusivement à de la pratique. Vous trouverez dans les ressources quelques vidéos qui concernent des sujets qui n'ont pas encore été abordés, comme la gestion des événements, mais l'essentiel du travail consiste à réutiliser toutes les connaissances que vous avez acquises depuis le début.

Vous trouverez [ici](https://www.youtube.com/watch?v=vGoyZD-TA28) la retransmission du point vidéo pour les exercices de la semaine précédente, et [ici](https://github.com/tonytiratay/parcours-full-stack/blob/master/demos/cv/index.js) le lien vers le code montré dans la vidéo.

## Playlist javascript


* [Modifier ou supprimer des éléments HTML en JavaScript](https://www.youtube.com/watch?v=o7gVp33dLDE&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI&index=36)
* [Naviguer dans le DOM en JavaScript](https://www.youtube.com/watch?v=VRdz6g6nOT4&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI&index=37)
* [Introduction aux évènements](https://www.youtube.com/watch?v=3Qin-KZN1dE&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI&index=38)
* [La méthode addEventListener](https://www.youtube.com/watch?v=ierLz3rZ0Vk&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI&index=39)
* [La propagation des évènements](https://www.youtube.com/watch?v=q10j1QGGjq4&list=PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI&index=40)

## Lorem Pixel

Lorem pixel est un site très pratique lorsque l'on développe des sites ou applications nécessitant des images, que l'on n'a pas forcément encore à disposition.

Il suffit de définir la source de votre image, à l'aide d'un lien type celui-ci:

http://lorempixel.com/1920/1080/city/

Le site renverra alors une image aléatoire, dans les dimensions spécifiées (1920 * 1080 dans cet exemple). Le mot après les dimensions désigne la catégorie des images. Vous pouvez vous rendre sur la page d'accueil du site pour connaitre les autres catégories et options disponibles.

## Exercices

#### Automatiser la structure d'une page

Pour cet exercice nous allons partir d'une page HTML presque vierge, qui ne contient qu'une seule div, appelée "root".

Vous devez utiliser Bootstrap pour ce projet, afin que la police et les éléments n'aient pas l'apparence par défaut.

Le but va être à l'aide du javascript de :

Créer un tableau d'objets en javascript, à l'image de celui utilisé pour les menus de l'exercice précédent.

Ce tableau devrai comporter 4 objets, comme les sections de notre CV. Chaque objet suivra le modèle suivant :

```javascript
{
  titre: "Accueil",
  texteAccueil: "Je suis le titre de la section Accueil",
  imageBackground: "http://lorempixel.com/1920/1080/city/"
}
```

A l'aide de vos connaissances en fonction et en manipulation du DOM, créez un code qui à l'aide uniquement du tableau d'objet va générer toute la structure du site.

* Créer autant de sections que d'objets
* Assigner le titre de chaque objet comme identifiant à chaque section
* Dans chaque section un h1 est créé, rempli avec "texteAccueil"
* Chaque section se voit assignée une image d'arriere plan, dont l'adresse est elle aussi récupére dans l'objet
* La hauteur minimum de chaque section est de 700px
* Créer la div qui contient le menu
* Créer les liens de menus  avec le titre
* Chaque lien se voit assigné un href vers # + titre (ex: #accueil, #contact etc.)

#### Astuces

Il n'y a normalement besoin d'une feuille css que pour faire en sorte que les sections aient par défaut une taille minimum de 700px. Tout le reste doit se faire depuis le javascript.

Pour rappel, lors de la démo vidéo, voici le code qui avait été utilisé pour définir le href et la classe en javascript.

```javascript
lien.setAttribute('href', '#'+tab[i].titre );
lien.setAttribute('class', 'button-nav' );
```

N'oubliez pas que vous trouverez en haut de ce document l'intégralité du code de la semaine dernière si besoin.

## Pour aller plus loin

Comme chaque semaine, les consignes ci dessous sont optionnelles, et ne concernent que ceux qui veulent / peuvent consacrer plus de temps à la formation.


#### Générateur de tableaux

Essayez de créer un générateur de tableau HTML, avec les contraintes suivantes:

* 2 inputs permettent à l'utilisateur de préciser combien de colonnes, et combien de lignes il souhaite créer
* Un bouton permet une fois les valeurs saisies de générer un tableau HTML.
* Tableau génere x lignes de y colonnes, et chaque case contient une case à cocher.
* chaque case à cocher possede un identifiant unique, généré à partir de sa position sur la ligne, et sur la colonne.
* Par exemple: la premiere case peut avoir comme identifiant A1. La deuxieme sur la même ligne A2. La premiere case de la seconde ligne B1 etc.
