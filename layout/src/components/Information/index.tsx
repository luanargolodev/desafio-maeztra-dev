import { useState } from 'react'
import { Container, Title, Option } from './styles'

interface InformationProps {
  title: string
  options?: string[]
  links?: string[]
}

function Information({ title, options, links }: InformationProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const isDesktop = window.innerWidth >= 1024

  const handleChangeOption = () => {
    if (isDesktop) return

    if (selectedOption === title) {
      setSelectedOption(null)
    } else {
      setSelectedOption(title)
    }
  }

  return (
    <Container>
      <Title onClick={handleChangeOption}>{title}</Title>

      {(selectedOption === title || isDesktop) &&
        options?.map((option, i) => (
          <Option key={i} href={links ? links[i] : '#'}>
            {option}
          </Option>
        ))}
    </Container>
  )
}

export default Information
