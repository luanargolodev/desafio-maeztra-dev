import { useState } from 'react'
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
  const [selectedColor, setSelectedColor] = useState(colors[0])

  function handleClick(color: number) {
    setSelectedColor(colors[color])
  }

  function handleAddCart() {
    alert('O produto foi adicionado ao carrinho.')
  }

  return (
    <Container>
      <Image src={image} />
      <Colors>
        {colors.map((color) => (
          <Color
            onClick={() => handleClick(colors.indexOf(color))}
            key={color}
            style={{
              backgroundColor: color,
              border: selectedColor === color ? '1px solid #535353' : 'none',
            }}
          />
        ))}
      </Colors>
      <Price>{formatPrice(price)}</Price>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <BuyButton onClick={handleAddCart}>Adicionar</BuyButton>
    </Container>
  )
}

export default Product
