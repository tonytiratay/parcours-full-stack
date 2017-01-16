![image alt text](image_0.jpg)

**Bonjour à tous,**

Nous entrons dans le cycle de découverte du backend, avec Meteor. Cette section de 4 semaines va vous emmener dans la découverte d'un aspect primordial du javascript, l' ES6. Cette dernière mouture du langage propose quelques nouveautés syntaxiques qui vont nous aider à rendre notre code plus maintenable, et compréhensible.

## Ce que nous allons construire

Pendant les 4 prochaines semaines nous allons construire notre propre version du cookie clicker. C'est un projet que nous allons gérer comme des pros, avec toutes les bonnes pratiques nécessaires :)

Nous allons notament voir :

* Comment analyser les besoins de notre application.
* Comment utiliser Git pour gérer ce projet
* Organisation des fichiers / dossiers
* Comment ES6 va nous être utile
* Comment créer les premières fonctionnalités
* Comment refactorer ces premières fonctionnalités.

Cette structure sera utilisée chaque semaine, jusqu'à ce que nous ayons terminé l'application.

## Commencer le projet

Avant de nous lancer dans la création de code, ou de notre projet meteor, nous allons analyser le jeu Cookie Clicker, pour lister les fonctionnalités dont nous aurons besoin. Nous allons répartir ces fonctionnalités dans les différentes zones de notre app, pour commencer.

[Voir le jeu](http://orteil.dashnet.org/cookieclicker/)

#### La zone de score

Cette zone est la plus à gauche, et doit afficher plusieurs informations.

* Le nom de l'usine
* Le score
* Le nombre de cookies par seconde
* Un bouton cookie pour augmenter le score

#### La zone de notifications

Cette zone est au milieu, et n'a pour seule fonction que de fournir des indications visuelles sur ce que possède l'utilisateur, ou bien sur ce qu'il vient de débloquer. On peut donc affihcer dans cette zone des notifications pour donner à l'utilisateur un feedback sur son avancement.

#### La zone du store

C'est donc la toute dernière zone, complètement à droite. Cette zone a un double objectif. Permettre à l'utilisateur d'acheter des éléments, et surtout voir en un regard l'intérêt que possède tel ou tel fonctionnalité en lui donnant des statistiques sur ce que lui rapporte un élément.

## Préparer le projet Meteor

Nous allons utiliser Meteor pour réaliser cette application.

[Pour installer meteor](https://www.meteor.com/install)

Une fois meteor installé sur votre machine, vous allez créer un dossier dans lequel nous rangerons tous nos projets meteor.

Nous allons dorénavant faire toutes les manipulations depuis un terminal. Dans un terminal donc, tapez les commandes suivantes

```
cd /
mkdir Meteor
cd Meteor
```

* La commande cd / vous permet de vous déplacer dans le repertoire utlisateur de votre machine
* mkdir Meteor créé un dossier appelé Meteor
* cd meteor vous place à l'interieur de ce dossier.

Pour initialiser un projet meteor, nous allons taper :

``` meteor create cookieclicker ```

Cette commande va initier un projet meteor, et créer un dossier du même nom.

Pour nous rendre à l'interieur de ce dossier, il suffit de taper

```cd cookieclicker```

Comme c'est la première fois que nous utilisons ce projet, nous allons installer les dépendances Node à l'aide de la commande

```meteor npm install```

Puis, pour lancer le serveur et voir notre application, il nous suffit de taper

``` meteor ```

Cette action va faire en sorte que meteor pré configure un tas de chose pour nous, et lance un serveur local contenant notre site internet.

Pour arrêter le serveur, il suffit de faire ```Ctrl + C```.

#### Initier Git

Pour commencer à tracker notre projet avec Git, il suffit de taper

```git init```

 Meteor a automatiquement créé un fichier .gitignore. Ce fichier permet de lister les fichiers ou repertoires que git doit ignorer. Par défaut, ce fichier est prérempli pour ignorer le dossier Node Modules. C'est une bonne chose, puisque ce dossier est généré à l'aide de NPM INSTALL.

 #### La structure de dossiers et fichiers.

 Nous allons mettre en place dés maintenant une structure organisationnelle pour notre code.

 Pour ce faire, nous allons supprimer **TOUS** les fichiers et dossiers **SAUF** les suivants :
* .meteor
* .git
* .gitignore
* package.json

Nous allons ensuite créer les répertoires suivants :

* client
* server
* public
* imports
