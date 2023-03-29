import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 233px;
  background: #353535;
  gap: 36px;

  @media screen and (min-width: 1024px) {
    height: 85px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 84px;
  }
`

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media screen and (min-width: 1024px) {
    gap: 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 1600px;
    width: 100%;
    margin: 0 auto;
  }
`

export const Title = styled.h2`
  font-size: 10px;
  line-height: 14px;
  font-weight: 400;
  color: #fff;
  margin-bottom: 3px;
`

export const Area = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  width: 100%;

  @media screen and (min-width: 1900px) {
    justify-content: flex-end;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

export const Link = styled.a``

export const Image = styled.img`
  width: 100%;
  height: 100%;
`
