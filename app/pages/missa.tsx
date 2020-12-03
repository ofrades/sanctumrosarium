import React from 'react'
import { Title, Label, Row, Latin, Translation } from '../styles/missa'
import fs from 'fs'
import path from 'path'
import Mass from './../models/Mass'
import Info from './../models/Info'
import Section from './../models/Section'

const Missa = ({ massFile }) => {
  const mass: Mass = JSON.parse(massFile)
  const info: Info = mass[0].info
  const section: Section[] = mass[0].sections

  return (
    <>
      <Title>{info.title}</Title>
      {section.map((item) => (
        <>
          <Row>
            <Label>{item.label}</Label>
            <Latin>
              <div>{item.body[0][1]}</div>
            </Latin>
            <Translation>
              <div>{item.body[0][0]}</div>
            </Translation>
          </Row>
        </>
      ))}
    </>
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
