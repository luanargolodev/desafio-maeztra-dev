import { Container, MenuItem, Image, Strong } from './styles'

import iconNews from '../../assets/icons/news.svg'

const MenuItems = () => {
  return (
    <Container>
      <MenuItem>
        <Image src={iconNews} alt="Novidades" />
        <Strong>Novidades</Strong>
      </MenuItem>

      <MenuItem>Vestidos</MenuItem>

      <MenuItem>Roupas</MenuItem>

      <MenuItem>Sapatos</MenuItem>

      <MenuItem>Lingerie </MenuItem>

      <MenuItem>Acessórios</MenuItem>

      <MenuItem>OUTLET</MenuItem>
    </Container>
  )
}

export default MenuItems
