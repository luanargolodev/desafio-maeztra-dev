import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: auto;
  margin: 0 auto;
`

export const Mobile = styled.div`
  @media screen and (min-width: 1024px) {
    display: none;
  }

  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 88px;
  gap: 80px;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1600px;
  width: 100%;
  margin: 0 30px;
`

export const Desktop = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }

  display: flex;
  align-items: center;
  gap: 0;
  width: 100%;
  justify-content: space-evenly;
  height: 88px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  background-color: #efefef;
  border-radius: 10px;
  height: 40px;
  width: 40%;
`

export const Input = styled.input`
  border: none;
  color: #353535;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  height: 40px;
  outline: none;
  width: 100%;
  background-color: #efefef;
  border-radius: 10px;
  padding-left: 24px;

  &::placeholder {
    text-transform: capitalize;
  }
`

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: #faa500;
  border-radius: 8px;
  cursor: pointer;

  color: #fff;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  height: 40px;
  width: 119px;

  &:hover {
    opacity: 0.8;
  }
`

export const IconMenu = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #353535;
`

export const Cart = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #faa500;
  border-radius: 8px;
  padding: 15px;
  color: #353535;
`

export const Logo = styled.img`
  width: 110px;
  height: 12px;
`

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;
`

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`
