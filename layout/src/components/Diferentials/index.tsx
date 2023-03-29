import { Swiper, SwiperSlide } from 'swiper/react'
import Diferential from '../Diferential'
import { Container, Title, Desktop, Mobile } from './styles'

import 'swiper/css'

import imgWorld from '../../assets/icons/world.png'
import imgHouse from '../../assets/icons/house.png'
import imgReplacement from '../../assets/icons/replacement.png'
import imgTag from '../../assets/icons/tag.png'
import imgTruck from '../../assets/icons/truck.png'

const Diferentials = () => {
  return (
    <Container>
      <Title>Por que comprar na Maeztra?</Title>

      <Mobile>
        <Swiper slidesPerView={'auto'} className="agroup">
          <SwiperSlide>
            <Diferential
              icon={imgWorld}
              title="Produtos importados"
              subtitle="Produtos de Alta Qualidade"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Diferential
              icon={imgHouse}
              title="Estoque no Brazil"
              subtitle="Produtos mais perto de você"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Diferential
              icon={imgReplacement}
              title="Trocas Garantidas"
              subtitle="Trocas em até 48 horas, vejas as regras"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Diferential
              icon={imgTag}
              title="Ganhe 5% off"
              subtitle="Pagando à vista no Cartão"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Diferential
              icon={imgTruck}
              title="Frete grátis"
              subtitle="Em compras acima de R$ 499,00"
            />
          </SwiperSlide>
        </Swiper>
      </Mobile>

      <Desktop>
        <Diferential
          icon={imgWorld}
          title="Produtos importados"
          subtitle="Produtos de Alta Qualidade"
        />
        <Diferential
          icon={imgHouse}
          title="Estoque no Brazil"
          subtitle="Produtos mais perto de você"
        />
        <Diferential
          icon={imgReplacement}
          title="Trocas Garantidas"
          subtitle="Trocas em até 48 horas, vejas as regras"
        />
        <Diferential
          icon={imgTag}
          title="Ganhe 5% off"
          subtitle="Pagando à vista no Cartão"
        />
        <Diferential
          icon={imgTruck}
          title="Frete grátis"
          subtitle="Em compras acima de R$ 499,00"
        />
      </Desktop>
    </Container>
  )
}

export default Diferentials
