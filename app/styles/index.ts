import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  h1 {
    color: ${(props) => props.theme.colors.text};
  }
`
