import styled from 'styled-components'

export const Container = styled.section`
  margin: 39px 0 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
  padding: 24px;

  border-top: 2px solid #efefef;
  border-bottom: 2px solid #efefef;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    padding: 40px;
    gap: 15px;
  }
`

export const Title = styled.h2`
  font-size: 24px;
  line-height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #353535;

  @media screen and (min-width: 1024px) {
    width: 307px;
  }
`
