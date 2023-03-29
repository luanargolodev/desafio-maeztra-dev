import BenefitBar from '../BenefitBar'
import {
  Container,
  Mobile,
  Desktop,
  IconMenu,
  Form,
  Input,
  Button,
  Link,
  Cart,
  Logo,
  Left,
  Right,
} from './styles'

import logoMaeztra from '../../assets/icons/logo-maeztra.png'
import svgMenu from '../../assets/icons/icon-menu.svg'
import svgSearch from '../../assets/icons/search.svg'
import svgBag from '../../assets/icons/bag.svg'
import svgUser from '../../assets/icons/user.svg'
import svgHeart from '../../assets/icons/heart.svg'

import Modal from '../Modal'
import MenuItems from '../MenuItems'

function Header() {
  return (
    <Container>
      <BenefitBar />

      <Desktop>
        <Link href="https://maeztra.com/" target="_blank">
          <Logo src={logoMaeztra} alt="Logo Maeztra" />
        </Link>

        <Form>
          <Input type="text" placeholder="O que você busca?" />
          <Button type="submit">Buscar</Button>
        </Form>

        <Link href="#">
          <IconMenu src={svgUser} alt="Minha Conta" />
          Minha Conta
        </Link>
        <Link href="#">
          <IconMenu src={svgHeart} alt="Minha Conta" />
          Minha Conta
        </Link>

        <Cart href="#">
          <IconMenu src={svgBag} alt="Meu Carrinho" />
          Meu Carrinho
        </Cart>
      </Desktop>

      <MenuItems />

      <Mobile>
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
      </Mobile>

      <Modal />
    </Container>
  )
}

export default Header
