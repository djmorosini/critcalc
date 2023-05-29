function updateCrit() {
  var crit;
  crit = 50;
  for (let i = 1; i < 18; i++) {
    var select = document.getElementById("select" + i).value;
    if(select == "Yes") {
      if(i < 4 || i == 6 || i == 10 || i == 11 || i == 14) {
        crit += 10;
      } else if (i == 4 || i == 13 || i == 17) {
        crit += 12;
      } else if (i == 5 || i == 8) {
        crit += 15;
      } else if (i == 7) {
        crit += 17;
      } else if (i == 9) {
        crit += 20;
      } else if (i == 12) {
        crit += parseInt(document.getElementById("axes").value);
      } else if (i == 15) {
        crit -= 50;
      } else if (i == 16) {
        crit += parseInt(document.getElementById("mediumArmor").value);
      }
    }
  }
  document.getElementById("crit").innerHTML = crit + "%";
  document.getElementById("overcrit").innerHTML = (crit - 125) + "%";
}