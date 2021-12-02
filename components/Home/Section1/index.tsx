import React, { ReactElement } from "react"
import styles from "./style.module.scss"
import ButtonDefault from "../../Button/Default"
import Link from "next/link"

interface Props {}

export default function Section1({}: Props): ReactElement {
  return (
    <div className={styles.container}>
      <section className={styles.left}>
        <div>
          <div>
            <h2>
              <span>A modern design system for your new</span>
            </h2>
          </div>
          <div>
            <h6>
              TheFront will make your product look modern and professional while
              saving you precious time.
            </h6>
          </div>
          <div className={styles.area__button}>
            <Link href="/login" passHref>
              <ButtonDefault>Documentation</ButtonDefault>
            </Link>
            <Link href="/login" passHref>
              <ButtonDefault>Get started</ButtonDefault>
            </Link>
          </div>
        </div>
      </section>

      <div className={styles.right}>
        <div>
          <div className={styles.image__cover}></div>
        </div>
      </div>
    </div>
  )
}
