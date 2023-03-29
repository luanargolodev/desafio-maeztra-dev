import styled from 'styled-components'

export const Container = styled.section``

export const Title = styled.h2`
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #353535;
  margin-top: 24px;
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

export const Mobile = styled.div`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`
