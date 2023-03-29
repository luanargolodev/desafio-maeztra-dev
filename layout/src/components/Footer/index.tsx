import Socials from '../Socials'
import Payments from '../Payments'

import { Container, Area, Content, Title, Image } from './styles'

import logoVtex from '../../assets/icons/vtex.png'
import logoMaeztra from '../../assets/icons/logo-maeztra-footer.png'

const Footer = () => {
  return (
    <Container>
      <Socials />
      <Payments />

      <Area>
        <Content>
          <Title>Powered by</Title>
          <Image src={logoVtex} alt="Vtex" />
        </Content>

        <Content>
          <Title>Developed by</Title>
          <Image src={logoMaeztra} alt="Maeztra" />
        </Content>
      </Area>
    </Container>
  )
}

export default Footer
