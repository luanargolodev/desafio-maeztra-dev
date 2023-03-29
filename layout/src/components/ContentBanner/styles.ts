import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    top: 45%;
    left: 30%;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;

  @media screen and (min-width: 1024px) {
    max-height: 600px;
    height: 100%;
  }
`

export const Title = styled.h2`
  font-family: 'Montserrat';
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  line-height: 37px;
  width: 223px;
  margin-bottom: 24px;

  @media screen and (min-width: 1024px) {
    font-size: 40px;
    line-height: 49px;
    width: 471px;
  }
`

export const Subtitle = styled.h3`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #fff;
  width: 239px;
  margin-bottom: 16px;

  @media screen and (min-width: 1024px) {
    font-size: 20px;
    line-height: 24px;
    width: 467px;
  }
`

export const Link = styled.a`
  width: 76px;
  height: 28px;
  background-color: #faa500;
  border-radius: 4px;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    width: 128px;
    height: 48px;
    border-radius: 10px;
  }
`

export const Text = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;

  @media screen and (min-width: 1024px) {
    font-size: 16px;
    line-height: 20px;
  }
`
