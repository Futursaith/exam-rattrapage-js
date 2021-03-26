function sumall(tab) {
  var total = 0;
  for (var i = 0; i < tab.length; i++)
    total += tab[i];
  console.log(total);
}
sumall([1, 5, 1, 5]);