import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.background};
  grid-template-areas: 'top top' 'left right';
  height: 200px;
`

export const Top = styled.div`
  grid-area: top;
  display: grid;
  justify-content: center;
  align-items: center;
`

export const Left = styled.div`
  grid-area: left;
  ul {
    list-style-type: none;
  }
  a:link {
    color: ${(props) => props.theme.colors.background};
    border: 2px solid ${(props) => props.theme.colors.secondary};
    text-decoration: none;
  }

  a:hover {
    color: ${(props) => props.theme.colors.primary} !important;
  }
`

export const Right = styled.div`
  grid-area: right;
  text-align: right;
`
