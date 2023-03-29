import { Container } from './styles'
import Information from '../Information'

function Informations() {
  return (
    <Container>
      <Information
        title="Informações"
        options={['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum']}
      />
      <Information
        title="Minha Conta"
        options={['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum']}
      />
      <Information
        title="Onde nos Encontrar"
        options={['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum']}
      />
    </Container>
  )
}

export default Informations
