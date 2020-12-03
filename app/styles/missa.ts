import styled from 'styled-components'

export const Title = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
`

export const Row = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-areas: 'label label' 'latin translation';
`
export const Label = styled.div`
  grid-area: label;
  text-align: center;
`

export const Latin = styled.div`
  grid-area: latin;
  div {
    margin-top: 10px;
  }
`

export const Translation = styled.div`
  grid-area: translation;
  div {
    margin-top: 10px;
  }
`
