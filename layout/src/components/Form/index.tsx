import { useState } from 'react'
import { FormEmail, Input, Button } from './styles'
import { validateEmail } from '../../utils/validateEmail'

const Form = () => {
  const [email, setEmail] = useState('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!validateEmail(email)) {
      alert('E-mail inválido!')
      return
    }

    alert('Formulário enviado com sucesso!')
  }

  return (
    <FormEmail onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Button type="submit">Enviar</Button>
    </FormEmail>
  )
}

export default Form
