const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

for (let i = tab.length - 1; i >= 0; i--) {
  console.log(tab[i] + ", length: " + tab[i].length + ", index: " + i)
}

var i = tab.length - 1
for (const elem of tab) {
  console.log(tab[i] + ", length: " + tab[i].length + ", index: " + i)
  i--;
}

var i = tab.length
tab.slice().reverse()
  .forEach(function (elem) {
    console.log(elem + ", length: " + elem.length + ", index: " + --i)
  });