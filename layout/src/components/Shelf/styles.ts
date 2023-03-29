import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 39px 0 23px 0;

  @media screen and (min-width: 1024px) {
    margin-top: 80px;
  }
`

export const Title = styled.h2`
  font-size: 24px;
  line-height: 37px;
  font-weight: 700;
  color: #353535;
`

export const Content = styled.div`
  width: 100%;

  > div {
    max-width: 95%;
  }
`
