import Link from "next/link"
import React, { ReactElement } from "react"
import styles from "./style.module.scss"
import styled from "styled-components"
import Button from "../Button/Default"
interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <img
              src="https://assets.maccarianagency.com/the-front/logos/logo-negative.svg"
              alt="logo"
            />
          </div>
          <div className={styles.social}>
            <div>
              <span className="material-icons">facebook</span>
            </div>
            <div>
              <span className="material-icons">villa</span>
            </div>
            <div>
              <span className="material-icons">grass</span>
            </div>
            <div>
              <span className="material-icons">spa</span>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <div>Header</div>
            <div>
              <Link href="/">Home</Link>
            </div>
            <div>
              <Link href="/about">About</Link>
            </div>
            <div>
              <Link href="/login">Login</Link>
            </div>
          </div>
          <div>
            <div>Header</div>
            <div>
              <Link href="/">Home</Link>
            </div>
            <div>
              <Link href="/about">About</Link>
            </div>
            <div>
              <Link href="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
