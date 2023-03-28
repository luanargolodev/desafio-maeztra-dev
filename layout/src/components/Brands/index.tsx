import { Swiper, SwiperSlide } from 'swiper/react'
import { Container, Title } from './styles'
import Brand from '../Brand'

import 'swiper/css'

import imgComma from '../../assets/brands/comma.png'
import imgMelissa from '../../assets/brands/melissa.png'
import imgForever21 from '../../assets/brands/forever-21.png'
import imgZara from '../../assets/brands/zara.png'
import imgAnaTaylor from '../../assets/brands/ana-taylor.png'

function Brands() {
  const isMobile = window.innerWidth < 1024
  const orderMobile = [
    imgForever21,
    imgMelissa,
    imgComma,
    imgZara,
    imgAnaTaylor,
  ]
  const orderDesktop = [
    imgComma,
    imgMelissa,
    imgForever21,
    imgZara,
    imgAnaTaylor,
  ]

  return (
    <Container>
      <Title>Marcas Parceiras</Title>

      <Swiper slidesPerView={'auto'} className="agroup">
        {isMobile
          ? orderMobile.map((icon) => (
              <SwiperSlide key={icon}>
                <Brand icon={icon} />
              </SwiperSlide>
            ))
          : orderDesktop.map((icon) => (
              <SwiperSlide key={icon}>
                <Brand icon={icon} />
              </SwiperSlide>
            ))}
      </Swiper>
    </Container>
  )
}

export default Brands
