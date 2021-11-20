function updateCrit() {
  var crit;
  //baseline
  crit = 50;
  // class
  crit + 10;
  //race
  crit + 12;
  //champion points
  crit + 15;
  crit + 10;
  //mundus
  crit + 17;
  //group buffs
  crit + 15;
  crit + 20;
  crit + 10;
  crit + 10;
  //personal loadout
  crit + 6;
  crit + 12;
  crit + 10;
  crit - 50;
  crit + 2;
  crit + 12;

  document.getElementById("crit").innerHTML = crit;
  document.getElementById("overcrit").innerHTML = crit - 125;
}