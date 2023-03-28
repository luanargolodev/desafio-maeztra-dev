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
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const Title = styled.h2`
  font-family: 'Montserrat';
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  line-height: 37px;
  width: 223px;
  margin-bottom: 24px;
`

export const Subtitle = styled.h3`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #fff;
  width: 239px;
  margin-bottom: 16px;
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
`

export const Text = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
`
