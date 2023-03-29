import styled from 'styled-components'

export const Container = styled.section``

export const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 16px;
  line-height: 18px;
  font-weight: 700;
  color: #353535;

  &::after {
    content: '+';
    font-size: 16px;
    line-height: 18px;
    width: 9px;
    height: 18px;
  }
`
