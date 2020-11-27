import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};

  a:link {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
    border: 2px solid ${(props) => props.theme.colors.secondary};
    padding: 10px 20px;
    text-decoration: none;
  }

  a:visited {
    color: ${(props) => props.theme.colors.text};
    border: ${(props) => props.theme.colors.secondary};
  }

  a:hover,
  a:active,
  .active {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary} !important;
  }
`

export const Button = styled.button``
