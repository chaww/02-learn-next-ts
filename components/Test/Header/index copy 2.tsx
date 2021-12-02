import Link from "next/link"
import React, { ReactElement } from "react"
import styles from "./style.module.scss"
import styled from "styled-components"
import _1 from "../Test/_1"
import _2 from "../Test/_2"

interface Button {
  b: string
}
const Button = styled.a``

interface ButtonBProps extends Button {
  b: string
}
const Asdwqwe = styled(Button)<ButtonBProps>``

interface Props {}
export default function Header({}: Props): ReactElement {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__content}>
        <div className={styles.navbar__logo}>
          <img
            src="https://wokas.pl/_nuxt/ac0f2bac6faab4f623263f903a713c03.svg"
            alt="logo"
          />
        </div>

        <div className={styles.navbar__menu}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/about">
            <a className={styles.navbar__menu__button}>Login</a>
          </Link>
          <Link href="/about">
            <Button>Login</Button>
          </Link>
          {/* <Link href="/about" passHref>
            <Test_1 bgDefault="Red" bgHover="blue" bgActive="green">
              AAA
            </Test_1>
          </Link> */}
          <Link href="/about">
            <a>
              <_2 bgDefault="Red" bgHover="blue" bgActive="green">
                AAA
              </_2>
            </a>
          </Link>
          <a href="#"></a>
        </div>
      </div>
    </div>
  )
}
