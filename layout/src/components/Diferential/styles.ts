import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 64px;
  background-color: #efefef;
  border-radius: 4px;
  margin: 21px auto 0 auto;
`

export const Image = styled.img`
  width: 32px;
  height: 32px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: #353535;
  line-height: 21px;
`

export const Subtitle = styled.h4`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: #4a4441;
`
