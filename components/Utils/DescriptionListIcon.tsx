import React, { ReactElement } from "react"
import styles from "./DescriptionListIcon.module.scss"

interface Props {
  icon?: string
  textHeader?: string
  discription?: string
}

export default function DescriptionListIcon({
  icon,
  textHeader,
  discription,
}: Props): ReactElement {
  return (
    <div>
      <div>
        <div className={styles.iconWarper}>
          <span
            className={styles.materialIcons}
            style={{ color: "rgb(63, 81, 181)" }}
          >
            {icon || "icon"}
          </span>
        </div>
      </div>
      <div>
        <h6>{textHeader || "Built for developers"}</h6>
      </div>
      <div>
        <p>
          {discription ||
            `TheFront is built to make your life easier. Variables, build tooling,
          documentation, and reusable components.`}
        </p>
      </div>
    </div>
  )
}
