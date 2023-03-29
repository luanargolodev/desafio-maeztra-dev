import { Container, Content, Title, Subtitle, Image } from './styles'

import imgAbout from '../../assets/about.png'
import imgAboutDesktop from '../../assets/aboutDesktop.png'

function About() {
  const isMobile = window.innerWidth < 1024

  return (
    <Container>
      <Content>
        <Title>Lorem ipsum</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque .
        </Subtitle>
      </Content>

      <Content>
        <Image src={isMobile ? imgAbout : imgAboutDesktop} />
      </Content>
    </Container>
  )
}

export default About
