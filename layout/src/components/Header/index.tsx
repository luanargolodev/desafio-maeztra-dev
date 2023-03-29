import BenefitBar from '../BenefitBar'
import { Container, Content, IconMenu, Link, Logo, Left, Right } from './styles'

import logoMaeztra from '../../assets/icons/logo-maeztra.png'
import svgMenu from '../../assets/icons/icon-menu.svg'
import svgSearch from '../../assets/icons/search.svg'
import svgBag from '../../assets/icons/bag.svg'
import Modal from '../Modal'

function Header() {
  return (
    <Container>
      <BenefitBar />

      <Content>
        <Left>
          <IconMenu src={svgMenu} alt="Menu de opções" />
          <Link href="https://maeztra.com/" target="_blank">
            <Logo src={logoMaeztra} alt="Logo Maeztra" />
          </Link>
        </Left>

        <Right>
          <IconMenu src={svgSearch} alt="Buscar" />
          <IconMenu src={svgBag} alt="Buscar" />
        </Right>
      </Content>

      <Modal />
    </Container>
  )
}

export default Header
