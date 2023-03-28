import BenefitBar from '../BenefitBar'
import { Container, Content, IconMenu, Link, Logo, Left, Right } from './styles'

import logoMaeztra from '../../assets/logo-maeztra.png'
import svgMenu from '../../assets/icon-menu.svg'
import svgSearch from '../../assets/search.svg'
import svgBag from '../../assets/bag.svg'

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
    </Container>
  )
}

export default Header
