import { Container, Image } from './styles'

interface BrandProps {
  icon: string
}

function Brand({ icon }: BrandProps) {
  return (
    <Container>
      <Image src={icon} />
    </Container>
  )
}

export default Brand
