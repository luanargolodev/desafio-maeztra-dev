import {
  Container,
  Image,
  Colors,
  Color,
  Price,
  Name,
  Description,
  BuyButton,
} from './styles'
import { formatPrice } from '../../utils/formatPrice'

interface ProductProps {
  image: string
  colors: string[]
  price: number
  name: string
  description: string
}

function Product({ image, colors, price, name, description }: ProductProps) {
  return (
    <Container>
      <Image src={image} />
      <Colors>
        {colors.map((color) => (
          <Color key={color} style={{ backgroundColor: color }} />
        ))}
      </Colors>
      <Price>{formatPrice(price)}</Price>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <BuyButton>Adicionar</BuyButton>
    </Container>
  )
}

export default Product
