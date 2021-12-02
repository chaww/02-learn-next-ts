import React, { ReactElement } from "react"
import Section1 from "../components/Home/Section1"
import Section2 from "../components/Home/Section2"

interface Props {}

export default function Home({}: Props): ReactElement {
  return (
    <main>
      <Section1 />
      <hr className="hrDivider"/>
      <Section2 />
    </main>
  )
}
