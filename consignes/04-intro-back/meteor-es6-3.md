![image alt text](image_0.jpg)

**Bonjour à tous,**

Au programme de cette semaine, la découverte des variables réactives, et un approfondissement du système d'Import / export de modules javascript.
Pour voir la vidéo : https://www.youtube.com/watch?v=JExIWPe444E


## Exercices

Afin de bien réaliser les exercices de cette semaine, vous devez partir du projet Meteor qui vous est fourni.

Depuis votre terminal, rendez vous dans votre projet meteor puis tapez

``` git clone https://github.com/tonytiratay/cookie```

Vous devez avoir visionné la vidéo pour réaliser ces exercices.

#### Colonne du milieu

Lister dans la colonne du milieu les éléments achetés.
Chaque élément doit afficher les informations utiles parmi celles ci dessous.

* Titre
* Coefficient (pour le multiplicateur uniquement)
* Délai (pour l'autoClick uniquement)
* Quantité (le cas échéant)
* Cookies par seconde (le cas échéant)

#### Colonne de droite

AutoClick

* Seulement si score suffisant
* Commence par un délai d'une fois toutes les 2 secondes
* Le prix évolue
* Le délai est 25% plus rapide à chaque achat

Multiplicateur

* Seulement si score suffisant
* Le prix évolue

Grand Mère

* Seulement si score suffisant
* Le prix évolue
* Augmente la production de cookies par seconde de 5

Ferme

* Seulement si score suffisant
* Le prix évolue
* Augmente la production de cookies par seconde de 25

Autres

* Seulement si score suffisant
* Le prix évolue
* Augmente la production de cookies par seconde de 5
* A vous d'imaginer

## Conseils

* N'hésitez pas à modifier le storeElement.js et / ou storeElements.js pour vous simplifier la vie.
* Créez autant de variables réactives que nécessaire dans system.js
* N'oubliez pas d'importer les variables que vous créez là où vous les utilisez
* Ces variables fonctionnent uniquement avec .get() et .set(nouveauContenu)
