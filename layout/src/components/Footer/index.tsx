import Socials from '../Socials'
import Payments from '../Payments'

import { Container, Area, Content, Title, Link, Image } from './styles'

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
          <Link href="#">
            <Image src={logoVtex} alt="Vtex" />
          </Link>
        </Content>

        <Content>
          <Title>Developed by</Title>
          <Link href="https://maeztra.com/" target={'_blank'}>
            <Image src={logoMaeztra} alt="Maeztra" />
          </Link>
        </Content>
      </Area>
    </Container>
  )
}

export default Footer
