import styled from 'styled-components'

export const Container = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }

  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`

export const Strong = styled.strong`
  color: #faa500;
`

export const MenuItem = styled.h3`
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  color: #353535;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9.75px;

  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  width: 146px;
`

export const Image = styled.img`
  width: 12.5px;
  height: 15px;
`
