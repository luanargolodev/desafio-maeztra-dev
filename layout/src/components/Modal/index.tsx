import { useState, useEffect } from 'react'
import {
  Overlay,
  Container,
  Content,
  ButtonClose,
  Image,
  Background,
  Title,
  Subtitle,
  Strong,
  Form,
  Input,
  Button,
  ImageMail,
} from './styles'

import iconNewsletter from '../../assets/icons/newsletter-mail-icon.svg'
import iconSendMail from '../../assets/icons/send-mail.svg'
import bgNewsletter from '../../assets/bg-newsletter.png'

const Modal = () => {
  const [showModal, setShowModal] = useState(false)
  const isDesktop = window.innerWidth > 1024
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const handleCloseModal = () => {
    localStorage.setItem('modal', 'true')
    setShowModal(false)
  }

  useEffect(() => {
    const modal = localStorage.getItem('modal')
    if (!modal) {
      setShowModal(true)
    }
  }, [])

  return (
    <>
      {showModal && (
        <Overlay>
          <Container>
            {isDesktop && (
              <Content>
                <Background src={bgNewsletter} alt="Newsletter" />
              </Content>
            )}
            <Content>
              <ButtonClose onClick={handleCloseModal}>Fechar</ButtonClose>
              <Image src={iconNewsletter} />
              <Title>Bem vindo à Maeztra</Title>
              <Subtitle>
                Receba em Primeira mão{' '}
                <Strong>desconto e ofertas exclusivas</Strong>
              </Subtitle>
              <Form onSubmit={handleSubmit}>
                <Input type="email" placeholder="Digite seu e-mail" />
                <Button>
                  Enviar
                  <ImageMail src={iconSendMail} />
                </Button>
              </Form>
            </Content>
          </Container>
        </Overlay>
      )}
    </>
  )
}

export default Modal
