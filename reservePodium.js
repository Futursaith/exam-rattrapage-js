const podium = (tab) => {
  let top3 = tab
    .sort((a, b) => {
      return a - b
    })
    .slice(0, 3)
  console.log(`${top3[2]}`)
  console.log(`${top3[1]}`)
  console.log(`${top3[0]}`)
}

let scores = [1, 2, 3, 4, 5, 6, 7, 8]
podium(scores)