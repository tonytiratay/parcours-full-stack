var bouton = document.getElementById('bouton');
var affichage = document.getElementById('affichage');
var multiplicateur = document.getElementById('multiplicateur');
var autoclickbtn = document.getElementById('autoclickbtn');

var score = 0;
var compteur = 1;
var prixMultiplicateur = 5;
var autoClickOnOff = false;
var prixAutoClick = 1;
var delay = 1000;

var updateHTML = function(){
  affichage.innerHTML = score + " cookies";
  multiplicateur.innerHTML = "Multiplicateur X " + (compteur + 1) + "prix: " + prixMultiplicateur;
};

var cookieClick = function(){
  score = score + compteur;
  updateHTML();
};

var incrementer = function(){
  if(score >= prixMultiplicateur){
    compteur ++;
    score = score - prixMultiplicateur;
    prixMultiplicateur = prixMultiplicateur * 2;
    updateHTML();
    return false;
  }

  alert("Vous n'avez pas les fonds pour ça");
};


var launchAutoclick = function(){
 if(!autoClickOnOff){
   autoClickOnOff = true;
 }
 delay
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

var buyAutoclick = function(){
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


console.log(affichage);
updateHTML();
