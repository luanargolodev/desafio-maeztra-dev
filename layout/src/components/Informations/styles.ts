import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 17px;
  padding-left: 31px;
  margin-bottom: 57px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0;
    max-width: 950px;
    margin: 0 auto;
  }
`
