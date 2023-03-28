import { Container, Title, Subtitle, Image } from './styles'

import imgAbout from '../../assets/about.png'

function About() {
  return (
    <Container>
      <Title>Lorem ipsum</Title>
      <Subtitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris
        posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis
        proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh
        sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus
        ut vulputate scelerisque .
      </Subtitle>
      <Image src={imgAbout} />
    </Container>
  )
}

export default About
