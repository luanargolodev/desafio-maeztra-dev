import { Container } from './styles'
import Information from '../Information'

function Informations() {
  return (
    <Container>
      <Information
        title="Informações"
        options={[
          'Quem Somos',
          'Prazo de Envio',
          'Trocas e Devoluções',
          'Promoções e Cupons',
        ]}
        links={['#', '#', '#', '#']}
      />
      <Information
        title="Minha Conta"
        options={['Minha Conta', 'Meus Pedidos', 'Cadastre-se']}
        links={['#', '#', '#']}
      />
      <Information
        title="Onde nos Encontrar"
        options={['Lojas', 'Endereço']}
        links={['#', '#']}
      />
    </Container>
  )
}

export default Informations
