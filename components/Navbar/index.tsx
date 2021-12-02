import Link from "next/link"
import React, { ReactElement } from "react"
import styles from "./style.module.scss"
import styled from "styled-components"
import Button from "../Button/Default"
interface Props {}

export default function Navbar({}: Props): ReactElement {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__content}>
        <div className={styles.navbar__logo}>
          <img
            src="https://assets.maccarianagency.com/the-front/logos/logo.svg"
            alt="logo"
          />
        </div>

        <div className={styles.navbar__menu}>
          <div>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div>
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
          <div>
            <Link href="/login" passHref>
              <Button>Login</Button>
            </Link>
          </div>
        </div>
      </div>
      <hr className="hrDivider"/>
    </nav>
  )
}
