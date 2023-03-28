function possibleOrganizationForPhotos(people) {
  // Tratamento de erros para o parâmetro people
  if (!Number.isInteger(people) || people < 0)
    return 'O número de pessoas precisa ser um inteiro'

  let result = 1

  // Realizando a matemática do n fatorial e somando ao resultado
  for (let i = 1; i <= people; i++) {
    result *= i
  }

  return `Existem ${result} possibilidades de organização para ${people} pessoas`
}

console.log(possibleOrganizationForPhotos(6))
