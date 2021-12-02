import React, { ReactElement } from "react"
import styles from "./style.module.scss"
import DescriptionListIcon from "../../Utils/DescriptionListIcon"

interface Props {}

export default function Section2({}: Props): ReactElement {
  const DescriptionListIcon_data = [
    {
      icon: "account_balance_wallet",
      textHeader: "Built for developers",
      discription: `TheFront is built to make your life easier. Variables, build tooling, documentation, and reusable components.`,
    },
    {
      icon: "view_in_ar",
      textHeader: "Designed to be modern",
      discription: `Designed with the latest design trends in mind. TheFront feels modern, minimal, and beautiful.`,
    },
    {
      icon: "code",
      textHeader: "Documentation for everything",
      discription: `We've written extensive documentation for components and tools, so you never have to reverse engineer anything.`,
    },
  ]

  return (
    <div className={styles.container}>
      <section>
        <h2 className={styles.header__title}>
          <span>
            Build accessible React apps <span>with speed</span>
          </span>
        </h2>
        <h6 className={styles.header__subtitle}>
          Build a beautiful, modern website with flexible, fully customizable,
          atomic Material UI components.
        </h6>
        <div className={styles.DescriptionListIcon__container}>
          {DescriptionListIcon_data.map((data,index) => {
            return <DescriptionListIcon key={index} {...data} />
          })}
        </div>
      </section>
    </div>
  )
}
