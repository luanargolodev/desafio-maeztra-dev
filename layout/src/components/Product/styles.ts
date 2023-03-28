import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 16px;
  width: 100%;
  min-height: 585px;
  height: 100%;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const Colors = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`

export const Color = styled.div`
  width: 27px;
  height: 27px;
  border: 1px solid #353535;
  border-radius: 4px;
  margin: 8px 0;
`

export const Price = styled.h3`
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  color: #353535;
`

export const Name = styled.h3`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #000;
`

export const Description = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: #000;
  font-weight: 400;
  opacity: 0.5;
  height: 54px;
`

export const BuyButton = styled.button`
  width: 100%;
  height: 35px;
  border: none;
  background-color: #faa500;
  border-radius: 4px;

  color: #fff;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`
