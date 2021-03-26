const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

i = tab.length - 1
while (i >= 0) {
  console.log(`${tab[i]}, length: ${tab[i].length}, index: ${i}`);
  --i;
}

i = tab.length - 1
do {
  console.log(`${tab[i]}, length: ${tab[i].length}, index: ${i}`);
  --i;
} while (i >= 0)
