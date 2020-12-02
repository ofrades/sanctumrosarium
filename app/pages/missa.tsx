import React from 'react'
import styled from 'styled-components'
import fs from 'fs'
import path from 'path'

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

const Missa = ({ massFile }) => {
  const mass = JSON.parse(massFile)

  const [a:[info, sections]] = mass
  const id: [string] = a.sections.map(b => b.id)
  const body: [string] = a.sections.map(b => b.body)

  return (
    <Container>
      <h1> Title: {a.info.title}</h1>
      <h1> Date: {a.info.date}</h1>
      <h5>{id}</h5>
      <ul>
        {a.sections.map((c) => 
          <li key={c.id}>id: {c.id}</li>
        )}
      </ul>
    </Container>
  )
}

export async function getStaticProps() {
  const date = new Date()
  const today = `${date.getFullYear()}-${date.getMonth() + 1}-${(
    '0' + date.getDate()
  ).slice(-2)}`
  const dir = path.join(process.cwd(), 'public/date/')
  const filePath = path.join(dir, today)
  const massFile = fs.readFileSync(filePath, 'utf8')
  return {
    props: {
      massFile,
    },
  }
}

export default Missa
