import Link from "next/link"
import React, { ReactElement } from "react"
import styles from "./style.module.scss"
import styled from "styled-components"

interface Props {}

export default function Header({}: Props): ReactElement {
  interface Button {
    b:string;
  }
  const Button = styled.a`
    
  `;
  interface ButtonBProps extends Button {
    b:string;
  }
  const Asdwqwe = styled(Button)<ButtonBProps>`
  
  `;

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
        </div>
      </div>
    </div>
  )
}
