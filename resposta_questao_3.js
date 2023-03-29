function isSequencyValid(sequence) {
  const matchingBrackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  const caracteres = []

  // Percorre a sequência de caracteres
  for (const char of sequence) {
    // Se encontrar um caractere de abertura, adiciona ao stack
    if (matchingBrackets[char]) {
      caracteres.push(char)
    }

    // Se o caractere for um dos caracteres de fechamento, verifica se o último caractere do stack é o caractere de abertura correspondente
    else if (char === ')' || char === ']' || char === '}') {
      if (matchingBrackets[caracteres.pop()] !== char) {
        return 'Não é uma sequência válida'
      }
    }
  }

  return caracteres.length === 0
    ? 'É uma sequência válida'
    : 'Não é uma sequência válida'
}

console.log(isSequencyValid('{[()(){}[]]{}}'))
