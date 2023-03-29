import styled from 'styled-components'

export const FormEmail = styled.form`
  margin-top: 8px;
  width: 100%;
  display: flex;
  gap: 15px;

  @media screen and (min-width: 1024px) {
    width: 630px;
    margin-top: 0;
    height: 40px;
    gap: 0;
  }
`

export const Input = styled.input`
  border: 1px solid #353535;
  border-radius: 4px;
  background-color: #fff;
  width: 100%;
  padding-left: 24px;
`

export const Button = styled.button`
  background-color: #faa500;
  border: 1px solid #faa500;
  border-radius: 4px;
  cursor: pointer;

  color: #fff;
  font-size: 14px;
  line-height: 21px;
  font-weight: 700;
  width: 79px;
  height: 26px;

  @media screen and (min-width: 1024px) {
    width: 131px;
    height: 40px;
    position: relative;
    left: -5px;
  }
`
