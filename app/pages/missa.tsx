import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  h1 {
    color: ${(props) => props.theme.colors.text};
  }
`

const Missa = () => {
  return (
    <Container>
      <h1>Missa</h1>
    </Container>
  )
}

export default Missa
