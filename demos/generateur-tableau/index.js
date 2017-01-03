var tableau = {

  getColonnes: function () {
    return document.getElementById('colonnes').value;
  },

  getLignes: function () {
    return document.getElementById('lignes').value;
  },

  createCellule: function (id) {
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
    var cellules = document.createElement('tr');
    for (var i = 0; i < this.getColonnes(); i++){
      var id = "l" + line + "c" + (i+1);
      cellules.appendChild(this.createCellule(id));
    }

    return cellules;
  },

  nettoyerHTML: function () {
    var parent = document.getElementById("table-container");
    var child = document.getElementById("table");
    if(child){
      parent.removeChild(child);
    }
  },

  genererHTML: function () {
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
