
// Ici on crée une fonction, en prenant l'habitude dés maintenant
// de lui passer comme paramètres un objet.
// On peut ensuite au sein de la fonction faire les manipulations
// nécéssaires pour prendre les données dont on a besoin.
// On contrôle finalement avec le return l'objet que l'on renvoie.


var maFonction = function(obj){
  var titre = obj.titre; var actif = obj.actif;
  return {
    titre: titre,
    actif: actif
  };
};

// Maintenant que la fonction est créée on peuple un tableau
// en l'utilisant.

var menus = [
  maFonction({ titre: "Accueil", actif: false}),
  maFonction({ titre: "Formation", actif: false}),
  maFonction({ titre: "Travaux", actif: false}),
  maFonction({ titre: "Contact", actif: false})
];

var remplirMenu = function(tab){

  for (var i = 0; i < tab.length; i++) {

    var genererMenu = function(){
      var lien = document.createElement('a');
      var titre = document.createTextNode(tab[i].titre);
      lien.setAttribute('href', '#'+tab[i].titre );
      lien.setAttribute('class', 'button-nav' );
      lien.appendChild(titre);
      var menu = document.getElementById("main-nav");
      menu.appendChild(lien);
    };

    genererMenu();

  }

};
remplirMenu(menus);


// On peut aussi utiliser la méthode push pour ajouter un élément à
// un tableau, ou la méthode pop pour en retirer un.

var tableau = [];
tableau.push(maFonction({ titre: "Accueil", actif: false}));
tableau.pop();


// On peut utiliser un principe similaire au code ci dessus
// pour nous occupper de la section travaux de notre site.

// On créé un tableau pour stocker les travaux

var travaux = [];

// On créé une fonction pour retourner un objet qui contient les propriétés
// nécéssaires au remplissage de notre code html

var creerTravaux = function(obj){
  var titre = obj.titre; var vignette = obj.vignette;
  var technologie = obj.technologie;
  var date = obj.date;
  return {
    titre: titre,
    vignette: vignette,
    technologie: technologie,
    date: date
  };
};


// On utilise cette fonction pour peupler le tableau javascript

travaux.push(  creerTravaux({
  titre: "CV HTML",
  vignette: "http://google.fr/images/monimage.jpg",
  technologie: "HTML / CSS",
  date: "15/12/2016-19:26"
}));


// Vous pouvez utiliser l'aide ci dessous pour vous aider
// pour l'exercice de cette semaine.

// On utilise le tableau javascript créé pour la fonction ci dessous
// dont le but est de créer le tableau HTML

var remplirTableau = function(travaux){
 // tableau contient X élements.
 // faire une boucle dans le tableau
 // pour à chaque élément executer une fonction
 // cette fonction doit prendre l'objet actuel du tabelau
 // Et générer le html pré-rempli, avec l'élément actuel du tableau

for (var i = 0; i < travaux.length; i++) {

  var genererColonneHTML = function(){

    var colonne = document.createElement('div');
    var titre = document.createTextNode(travaux[i].titre + ' / ');
    var vignette = document.createTextNode(travaux[i].vignette + ' / ');
    var technologie = document.createTextNode(travaux[i].technologie + ' / ');
    var date = document.createTextNode(travaux[i].date);

    colonne.appendChild(titre);
    colonne.appendChild(vignette);
    colonne.appendChild(technologie);
    colonne.appendChild(date);

    var div = document.getElementById("tableau");

    div.appendChild(colonne);

  };
  genererColonneHTML();
}};

remplirTableau(travaux);

var sections = [{
  titre: "Accueil",
  texteAccueil: "Je suis le titre de la section Accueil",
  imageBackground: "http://lorempixel.com/1920/1080/city/"
}];

function(tableau de sections){

fait une boucle pour chaque element du tableau
> fonction dont le but est de générer un nouveau lien de menu
> une nouvelle section
> un nouveau h1 dans la section
> Modifier le style background de la section pour changer l'image

}
