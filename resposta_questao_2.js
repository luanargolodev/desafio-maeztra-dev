function hasDuplicateNumber(array) {
  let numberDuplicates = []

  array.filter((value, index) => {
    // verifica se o valor do elemento atual é igual ao de algum elemento posterior
    if (
      array.indexOf(value, index + 1) !== -1 &&
      numberDuplicates.indexOf(value) === -1
    ) {
      numberDuplicates.push(value)
    }
  })

  return numberDuplicates
}

console.log(hasDuplicateNumber([4, 5, 44, 98, 4, 5, 6, 7]))
