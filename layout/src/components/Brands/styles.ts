import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  @media screen and (min-width: 1024px) {
    margin-top: 74px;
  }
`

export const Title = styled.h2`
  font-size: 24px;
  line-height: 37px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #353535;
`

export const Mobile = styled.div`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`

export const Desktop = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }

  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  margin: 0 auto;
  max-width: 1600px;

  @media screen and (max-width: 1920px) {
    padding: 0 30px;
  }
`
