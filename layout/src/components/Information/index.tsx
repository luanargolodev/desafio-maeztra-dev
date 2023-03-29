import { Container, Title } from './styles'

interface InformationProps {
  title: string
}

function Information({ title }: InformationProps) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}

export default Information
