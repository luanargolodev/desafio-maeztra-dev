function yearsWorked(years) {
  let start = []

  years.forEach((yearWorked) => {
    // Tratamento de erros para valores inválidos
    if (yearWorked[0] <= 0 || yearWorked[0] > yearWorked[1]) return

    // Adiciona o ano de início de trabalho no array
    start.push(yearWorked[0])
  })

  // Retorna o ano com mais trabalhadores
  let mostWorkedYear = Math.max(...start)

  return `Ano com mais trabalhadores: ${mostWorkedYear}`
}

console.log(
  yearsWorked([
    [1960, 2005],
    [1945, 2008],
    [1938, 1999],
    [1967, 2000],
  ])
)
