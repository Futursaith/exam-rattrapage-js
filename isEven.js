const isEven = (nb) => {

  return nb % 2 !== 0
}

const isOdd = (nb) => {
  return !isEven(nb)
}

console.log(isEven(10))