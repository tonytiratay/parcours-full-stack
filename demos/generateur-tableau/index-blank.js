var tableau = {

  getColonnes: function () {
    // Récupère dans le champ la valeur souhaitée
  },

  getLignes: function () {
    // Récupère dans le champ la valeur souhaitée
  },

  createCellule: function (id) {
    //Renvoie dans un objet js un "td" HTML avec comme enfant
    //un input de type checkbox, avec le bon identifiant
  },

  createLigne: function (line) {
    // Récupère la valeur du champ "colonnes" et fait une boucle
    // pour créer autant de cellules que nécessaire.
  },

  nettoyerHTML: function () {
    // Vérifie si un tableau avec un identifiant "table" existe, et si oui alors le supprime.
  },

  genererHTML: function () {
    //Générer des lignes autant que la valeur du champs "lignes"
    // Fait une boucle et on appelle la fonction "créer une ligne"
    // autant de fois que nécessaire
  },

};

tableau.genererHTML();
