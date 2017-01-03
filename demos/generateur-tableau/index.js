var tableau = {

  getColonnes: function () {

    // Récupère dans le champ la valeur souhaitée
    return document.getElementById('colonnes').value;
  },

  getLignes: function () {

    // Récupère dans le champ la valeur souhaitée
    return document.getElementById('lignes').value;
  },

  createCellule: function (id) {

    //Renvoie dans un objet js un "td" HTML avec comme enfant
    //un input de type checkbox, avec le bon identifiant

    var cell = document.createElement('td');
    var input = document.createElement('input');
    input.type = "checkbox";
    cell.id = id;
    cell.appendChild(input);
    input.onclick = function(){
      alert(cell.id);
    };

    return cell;
  },

  createLigne: function (line) {

    // Récupère la valeur du champ "colonnes" et fait une boucle
    // pour créer autant de cellules que nécessaire.

    var cellules = document.createElement('tr');

    for (var i = 0; i < this.getColonnes(); i++){
      var id = "l" + line + "c" + (i+1);
      cellules.appendChild(this.createCellule(id));
    }

    return cellules;
  },

  nettoyerHTML: function () {

    // Vérifie si un tableau avec un identifiant "table" existe, et si oui alors le supprime.

    var parent = document.getElementById("table-container");
    var child = document.getElementById("table");
    if(child){
      parent.removeChild(child);
    }
  },

  genererHTML: function () {

    //Générer des lignes autant que la valeur du champs "lignes"
    // Fait une boucle et on appelle la fonction "créer une ligne"
    // autant de fois que nécessaire

    var parent = document.getElementById("table-container");
    var table = document.createElement('table');
    table.id = "table";
    table.className = "table table-striped table-bordered";
    this.nettoyerHTML();
    for (var i = 0; i < this.getLignes(); i++){
      table.appendChild(this.createLigne( i + 1));
    }
    parent.appendChild(table);
  },

};

tableau.genererHTML();
