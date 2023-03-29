import styled from 'styled-components'

export const Container = styled.section``

export const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: max-content;

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
    position: absolute;
    right: 35px;
  }

  @media screen and (min-width: 1024px) {
    &::after {
      content: '';
    }
  }
`

export const Option = styled.a`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  width: max-content;
  text-decoration: none;

  margin-top: 10px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: #353535;
`
