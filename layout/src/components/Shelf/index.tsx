import { Swiper, SwiperSlide } from 'swiper/react'
import Product from '../Product'
import { Container, Title } from './styles'

import { allProducts } from '../../utils/products'

import 'swiper/css'

function Shelf() {
  return (
    <Container>
      <Title>As Mais Pedidas</Title>

      <Swiper slidesPerView={'auto'} className="agroup">
        {allProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <Product
              image={product.image}
              colors={product.colors}
              price={product.price}
              name={product.name}
              description={product.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Shelf
