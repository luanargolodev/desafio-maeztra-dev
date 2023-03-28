import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { Container } from './styles'

import ContentBanner from '../ContentBanner'
import imgBanner from '../../assets/banner.png'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function Banner() {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        navigation={true}
        pagination={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <ContentBanner
            image={imgBanner}
            title="Promoções de Outono"
            subtitle="Confira os melhores looks para combinar com você nesse Outono"
            linkButton="#"
            buttonText="Conferir"
          />
        </SwiperSlide>

        <SwiperSlide>
          <ContentBanner
            image={imgBanner}
            title="Promoções de Outono"
            subtitle="Confira os melhores looks para combinar com você nesse Outono"
            linkButton="#"
            buttonText="Conferir"
          />
        </SwiperSlide>

        <SwiperSlide>
          <ContentBanner
            image={imgBanner}
            title="Promoções de Outono"
            subtitle="Confira os melhores looks para combinar com você nesse Outono"
            linkButton="#"
            buttonText="Conferir"
          />
        </SwiperSlide>

        <SwiperSlide>
          <ContentBanner
            image={imgBanner}
            title="Promoções de Outono"
            subtitle="Confira os melhores looks para combinar com você nesse Outono"
            linkButton="#"
            buttonText="Conferir"
          />
        </SwiperSlide>

        <SwiperSlide>
          <ContentBanner
            image={imgBanner}
            title="Promoções de Outono"
            subtitle="Confira os melhores looks para combinar com você nesse Outono"
            linkButton="#"
            buttonText="Conferir"
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Banner
