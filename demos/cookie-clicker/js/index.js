
// Récupération des zones HTML

var button = document.getElementById('bouton');
var affichage = document.getElementById('affichage');
var multiplicateur = document.getElementById('multiplicateur');
var autoClickBtn = document.getElementById('autoclickbtn');

// Initialisation des variables

var score = 0;
var compteur = 1;
var prixCompteur = 1;
var prixAutoClick = 1;
var autoclick = false;
var delay = 1000;

// Mettre à jour l'affichage

var updateScore = function(){
  affichage.innerHTML = score + " cookies";
  multiplicateur.innerHTML = "Multiplicateur X " + (compteur + 1) + " (" + prixCompteur + " cookies)";
  autoclickbtn.innerHTML = "Auto Click (" + prixAutoClick + " cookies)";
};

// Fonction pour l'achat du multiplicateur

var incrementer = function(){
  if (score >= prixCompteur) {
    compteur ++;
    score -= prixCompteur;
    prixCompteur = prixCompteur * 2;
    updateScore();
    return false;
  }
  // Affiche le popup html
  $('.ui.basic.modal')
    .modal('show')
  ;

};

// Détecter le clique

var cookieClick = function(){
  score = score + compteur;
  updateScore();
};

// Fonction pour acheter l'autoclick

var buyAutoclick = function () {
  if (score >= prixAutoClick) {
    autoclick = true;
    score -= prixAutoClick;
    lancerAutoClick();
    prixAutoClick = prixAutoClick * 2;
    delay = delay / 2;
    updateScore();
    return false;
  }

  // Affiche le popup html
  $('.ui.basic.modal')
    .modal('show')
  ;
};

var AutoCookieClick = function () {
  if (autoclick) {
    cookieClick();
  }
};

var lancerAutoClick = function () {
  if (delay < 10) {
    delay = 10;
  }

  setInterval(AutoCookieClick, delay);
};

// Afin que le bouton multiplicateur affiche correctement son
// contenu, on le met à jour en appelant la fonction suivante

updateScore();

// Cette fonction peut être appelée depuis la console pour doubler le score et gagner du temps.

var cheat = function () {
  score = score * 2;
  updateScore();
};
