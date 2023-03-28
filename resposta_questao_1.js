function isOrdered(value) {
  // verificando se o valor é inteiro e positivo
  if (!Number.isInteger(value) || value < 0) return 'Não está ordenado'

  // transformando o valor número em uma array com todos os números
  const numbers = value.toString().split('')

  let growing = true
  let descending = true

  for (let i = 1; i < numbers.length; i++) {
    // verifica se a diferença entre os números é maior que 1
    if (Math.abs(numbers[i] - numbers[i - 1]) > 1) return 'Não está ordenado'

    // verifica se o valor está crescendo ou decrescendo
    if (numbers[i] > numbers[i - 1]) {
      descending = false
    }

    if (numbers[i] < numbers[i - 1]) {
      growing = false
    }
  }

  if (growing || descending) {
    return 'Está ordenado'
  } else {
    return 'Não está ordenado'
  }
}

console.log(isOrdered(12345678))
