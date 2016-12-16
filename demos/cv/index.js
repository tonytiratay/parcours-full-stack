console.log('ça marche');

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

// On peut aussi utiliser la méthode push pour ajouter un élément à
// un tableau, ou la méthode pop pour en retirer un.

var tableau = [];
tableau.push(maFonction({ titre: "Accueil", actif: false}));
tableau.pop();
console.log(tableau);


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

console.log(travaux);

// Vous pouvez utiliser l'aide ci dessous pour vous aider
// pour l'exercice de cette semaine.

// On utilise le tableau javascript créé pour la fonction ci dessous
// dont le but est de créer le tableau HTML

var remplirTableau = function(tableau){
 // tableau contient X élements.
 // faire une boucle dans le tableau
 // pour à chaque élément executer une fonction
 // cette fonction doit prendre l'objet actuel du tabelau
 // Et générer le html pré-rempli, avec l'élément actuel du tableau

for (var i=0; i < tableaux.length, i++){

  var genererColonneHTML = function(tableaux[i]){
    //Le code javascript pour créer une ligne en HTML
    // Pré remplir le HTML avec l'objet en cours
    // {
    //  titre: "CV HTML",
    //  vignette: "http://google.fr/images/monimage.jpg",
    //  technologie: "HTML / CSS",
    //  date: "15/12/2016-19:26"
    // }
  };
};
