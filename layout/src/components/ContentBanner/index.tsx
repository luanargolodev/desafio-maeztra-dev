import {
  Container,
  Content,
  Image,
  Title,
  Subtitle,
  Link,
  Text,
} from './styles'

interface ContentBannerProps {
  image: string
  title: string
  subtitle: string
  buttonText: string
  linkButton: string
}

function ContentBanner({ image, title, subtitle }: ContentBannerProps) {
  return (
    <Container>
      <Image src={image} alt="Imagem do banner" />

      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Link href="#" target={'_blank'}>
          <Text>Conferir</Text>
        </Link>
      </Content>
    </Container>
  )
}

export default ContentBanner
