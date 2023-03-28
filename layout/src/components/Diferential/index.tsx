import { Container, Content, Image, Title, Subtitle } from './styles'

interface DiferentialProps {
  icon: string
  title: string
  subtitle: string
}

function Diferential({ icon, title, subtitle }: DiferentialProps) {
  return (
    <Container>
      <Content>
        <Image src={icon} />
      </Content>

      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Content>
    </Container>
  )
}

export default Diferential
