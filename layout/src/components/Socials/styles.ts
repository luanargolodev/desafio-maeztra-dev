import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 1024px) {
    width: 100%;
  }

  @media screen and (min-width: 1900px) {
    justify-content: flex-start;
  }
`

export const Image = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`
