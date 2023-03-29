import styled from 'styled-components'

export const Container = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1024px) {
    max-width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 64px;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    &:nth-child(1) {
      width: 465px;
    }

    &:nth-child(2) {
      max-width: 1114px;
    }
  }
`

export const Title = styled.h2`
  font-size: 24px;
  line-height: 37px;
  font-weight: 700;
  color: #000;
  margin-bottom: 16px;
  width: 80%;
`

export const Subtitle = styled.p`
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  color: #000;
  width: 80%;
`

export const Image = styled.img`
  margin-top: 24px;
  background: #d79595;
  border-radius: 4px;
  height: 100%;
  width: 80%;

  @media screen and (min-width: 1024px) {
    max-width: 1114px;
    width: 100%;
  }
`
