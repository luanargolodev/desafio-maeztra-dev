import { useState } from 'react'
import { Container, Title, Option } from './styles'

interface InformationProps {
  title: string
  options?: string[]
}

function Information({ title, options }: InformationProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleChangeOption = () => {
    if (selectedOption === title) {
      setSelectedOption(null)
    } else {
      setSelectedOption(title)
    }
  }

  return (
    <Container>
      <Title onClick={handleChangeOption}>{title}</Title>

      {selectedOption === title &&
        options?.map((option, i) => <Option key={i}>{option}</Option>)}
    </Container>
  )
}

export default Information
