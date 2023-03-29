import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 64px;
  margin: 21px auto 0 auto;

  @media screen and (max-width: 1024px) {
    background: #efefef;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);
    border-radius: 4px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`
