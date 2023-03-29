import Socials from '../Socials'
import Payments from '../Payments'

import { Container, Area, Content, Title, Link, Image } from './styles'

import logoVtex from '../../assets/icons/vtex.png'
import logoMaeztra from '../../assets/icons/logo-maeztra-footer.png'
import logoVtexDesktop from '../../assets/icons/vtex-desktop.png'
import logoMaeztraDesktop from '../../assets/icons/logo-maeztra-footer-desktop.png'

const Footer = () => {
  const isMobile = window.innerWidth < 1024

  return (
    <Container>
      <Socials />
      <Payments />

      <Area>
        <Content>
          <Title>Powered by</Title>
          <Link href="#">
            <Image src={isMobile ? logoVtex : logoVtexDesktop} alt="Vtex" />
          </Link>
        </Content>

        <Content>
          <Title>Developed by</Title>
          <Link href="https://maeztra.com/" target={'_blank'}>
            <Image
              src={isMobile ? logoMaeztra : logoMaeztraDesktop}
              alt="Maeztra"
            />
          </Link>
        </Content>
      </Area>
    </Container>
  )
}

export default Footer
