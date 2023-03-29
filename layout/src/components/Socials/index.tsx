import { Container, Image } from './styles'

import logoFacebook from '../../assets/socials/facebook.svg'
import logoLinkedin from '../../assets/socials/linkedin.svg'
import logoInstagram from '../../assets/socials/instagram.svg'
import logoYoutube from '../../assets/socials/youtube.svg'

const Socials = () => {
  return (
    <Container>
      <Image src={logoFacebook} alt="Facebook" />
      <Image src={logoLinkedin} alt="Linkedin" />
      <Image src={logoInstagram} alt="Instagram" />
      <Image src={logoYoutube} alt="Youtube" />
    </Container>
  )
}

export default Socials
