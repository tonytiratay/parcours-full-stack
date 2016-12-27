![image alt text](image_0.jpg)

**Bonjour à tous,**

Cette dernière semaine de préparation au javascript se termine par un projet :) Le but va être de réaliser un jeu HTML, basé sur une plateforme déjà existante.


Est-ce que vous connaissez le jeu [Cookie Clicker](http://orteil.dashnet.org/cookieclicker/) ? Le principe du jeu est très simple : vous devez faire le plus de cookie à la seconde.

** Comment ? **

Au début, en cliquant sur le gros cookie. Puis vous allez engendrer des points qui vont vous permettre d'acheter une grand-mère, une usine, une ferme, etc...

Le but ultime étant d'acheter la dernière machine à cookie qui vaut 75 billions de cookies :)

# Votre Cookie Clicker

Pour bien comprendre le jeu, c'est comme le code il faut pratiquer ! Alors faîtes un tour sur la plateforme pour voir à quoi ça ressemble et comment ça se joue ;)

Vous allez coder votre propre Cookie Clicker ! Nous avons divisé ce pas à pas en 12 étapes :

#### Étape 1 : structure de base

Faire une structure de base HTML / CSS / JS. Dans le HTML, mettre un bouton avec un identifiant « bouton » et une div avec un identifiant « affichage », dont la valeur initiale sera 0.

#### Étape 2 : préparer le JS

Préparez les variables en tête du JS qui nous permettront de manipuler notre bouton et notre div. Nous aurons également besoin d'une variable score que nous initialiserons à 0.

#### Étape 3 : augmenter le score

Quand on clique sur le bouton, faire augmenter la variable score de 1, puis afficher ce score dans le innerHTML de l'affichage.

#### Étape 4 : préparation du multiplicateur

Ajouter un bouton dont l'identifiant est multiplicateur. Préparer sa variable à coté de l'affichage et du bouton dans le JS. Entretenir un compteur de clics (dont la variable s'appellera compteur et sera initialisée à 1) sur ce bouton. La fonction associée au clic du multiplicateur s'appellera incrementer.

#### Étape 5 : utilisation du multiplicateur

Faire en sorte que l'augmentation du score via le clic du premier bouton ne soit plus de 1 mais de compteur. Par exemple, si j'ai cliqué une fois sur le bouton multiplicateur, chaque clic sur le premier bouton ajoutera désormais 2 au lieu de 1.

#### Étape 6 : prix du multiplicateur

Le multiplicateur vous permet de gagner du score plus rapidement. Ça ne devrait pas être gratuit ! Faites en sorte que cliquer sur le bouton multiplicateur diminue de 50 votre score.

#### Étape 7 : on ne fait pas crédit

On ne peut pas faire crédit et on ne veut pas de score négatif. Pensez à mettre à jour l'affichage du score après l'achat !

#### Étape 8 : affichage du compteur

Affichez le compteur de multiplicateur à l'intérieur du bouton. Par exemple, si compteur vaut 5, il faut que le texte du bouton soit « Multiplicateur x5 ».

#### Étape 9 : augmentation du prix

Acheter plein de multiplicateurs est trop facile. Essayez à partir de l'étape 6, vous comprendrez pourquoi ;) Il faudrait que plus on achète de multiplicateurs, plus ceux-ci soit chers.

Par exemple, le premier vaudrait 50, le suivant 100, le suivant 200, etc. Pas la peine de vous compliquer la vie, ne faites pas pleins de conditions :) Trouvez une autre façon de faire évoluer le prix !

#### Étape 10 : affichage du prix

Dans le texte du bouton, en plus du « x5 », ajouter le coût du prochain achat.

#### Étape 11 : autoclicker

Nouvelle amélioration à acheter : Autoclick. Dès que vous avez un score de 200, un clic sur le premier bouton est fait automatiquement chaque seconde.

Pour cela, vous aurez besoin de [setInterval](http://www.xul.fr/ecmascript/settimeout.php) pour exécuter automatiquement la même fonction que le onclick du premier bouton.

#### Étape 12 : innovez

Améliorez votre CSS en utilisant des images pour que votre site ressemble le plus possible à l'original ! Vous pouvez chercher sur google images un cookie.

http://fr.lmgtfy.com/?t=i&q=cookie.png

Essayez de trouver une image de fond, des polices, et couleurs qui font ressembler votre jeu à un vrai jeu.
