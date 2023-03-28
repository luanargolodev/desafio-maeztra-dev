import { FormEmail, Input, Button } from './styles'

const Form = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    alert('Formulário enviado com sucesso!')
  }

  return (
    <FormEmail onSubmit={handleSubmit}>
      <Input type="email" placeholder="Digite seu e-mail" />
      <Button type="submit">Enviar</Button>
    </FormEmail>
  )
}

export default Form
