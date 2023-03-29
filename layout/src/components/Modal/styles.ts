import styled from 'styled-components'

export const Overlay = styled.section`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;

  display: flex;
`

export const Container = styled.div`
  position: relative;
  top: 29%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 298px;
  height: 307px;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    top: 50%;
    max-width: 851px;
    height: 558px;
    flex-direction: row;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ButtonClose = styled.button`
  position: absolute;
  top: -40px;
  right: -15px;
  border: none;
  background: none;
  margin: 16px;
  cursor: pointer;

  font-size: 12px;
  line-height: 20px;
  font-weight: 400px;
  color: #fff;
  text-transform: uppercase;
`

export const Background = styled.img`
  width: 100%;
  height: 100%;
`

export const Image = styled.img`
  width: 28px;
  height: 29px;
`

export const Title = styled.h3`
  font-size: 12px;
  line-height: 20px;
  font-weight: 400px;
  color: #464b54;
  text-transform: uppercase;
  margin-top: 18px;
`

export const Subtitle = styled.h4`
  font-size: 16px;
  line-height: 23px;
  color: #787d83;
  margin-top: 13px;
  width: 258px;
  font-weight: 400;
  text-align: center;
  padding: 0 20px;

  @media screen and (min-width: 1024px) {
    font-size: 20px;
    width: 260px;
  }
`

export const Strong = styled.strong`
  font-weight: 700;
`

export const Form = styled.form`
  margin-top: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0 20px;
  width: 100%;

  @media screen and (min-width: 1024px) {
    padding: 0 52px;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 0 16px;
  font-size: 12px;
  line-height: 20px;
  color: #787d83;

  &:focus {
    outline: none;
    border: 1px solid #787d83;
  }

  @media screen and (min-width: 1024px) {
    border-radius: 10px;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  border: none;
  height: 40px;
  background-color: #faa500;
  border-radius: 10px;

  color: #fff;
  font-size: 12px;
  line-height: 20px;
  font-weight: 700;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const ImageMail = styled.img`
  width: 12px;
  height: 20px;
`
