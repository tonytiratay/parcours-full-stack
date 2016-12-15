console.log('ça marche');


var maFonction = function(obj){
  var titre = obj.titre; var actif = obj.actif;
  return {
    titre: titre,
    actif: actif
  };
};

// console.log(maFonction("Accueil", false));

var menus = [
  maFonction({ titre: "Accueil", actif: false}),
  maFonction({ titre: "Formation", actif: false}),
  maFonction({ titre: "Travaux", actif: false}),
  maFonction({ titre: "Contact", actif: false})
];

// console.log(menus);

var tableau = [];
tableau.push("Accueil");
tableau.push("Formation");
tableau.pop();
console.log(tableau);

var travaux = [];

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

travaux.push(  creerTravaux({
  titre: "CV HTML",
  vignette: "http://google.fr/images/monimage.jpg",
  technologie: "HTML / CSS",
  date: "15/12/2016-19:26"
}));

console.log(travaux);

TR > TD

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
  //   titre: "CV HTML",
  // vignette: "http://google.fr/images/monimage.jpg",
  // technologie: "HTML / CSS",
  // date: "15/12/2016-19:26"
  // }




};

}



};
