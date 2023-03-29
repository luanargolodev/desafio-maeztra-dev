import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import Product from '../Product'
import { Container, Title, Content } from './styles'

import { allProducts } from '../../utils/products'

import 'swiper/css'
import 'swiper/css/navigation'

function Shelf() {
  const isMobile = window.innerWidth < 1024

  return (
    <Container>
      <Title>As Mais Pedidas</Title>

      <Content>
        <Swiper
          slidesPerView={isMobile ? 'auto' : 5}
          className={isMobile ? 'agroup' : 'shelf'}
          spaceBetween={isMobile ? 0 : 15}
          navigation={isMobile ? false : true}
          modules={isMobile ? [] : [Navigation]}
        >
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
      </Content>
    </Container>
  )
}

export default Shelf
