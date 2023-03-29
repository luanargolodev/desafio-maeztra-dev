import { Container, Image } from './styles'

import logoVisa from '../../assets/payments/visa.svg'
import logoMastercard from '../../assets/payments/mastercard.svg'

const Socials = () => {
  return (
    <Container>
      <Image src={logoVisa} alt="Visa" />
      <Image src={logoMastercard} alt="MasterCard" />
      <Image src={logoVisa} alt="Visa" />
      <Image src={logoMastercard} alt="MasterCard" />
    </Container>
  )
}

export default Socials
