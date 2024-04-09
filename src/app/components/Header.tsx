'use client'
import style from './Header.module.css'
import Link from 'next/link'
function Header() {
  return (
    <>
      <header>
        <Link href="/">
          <h1 className={style.title}>掲示板だよ</h1>
        </Link>
      </header>
    </>
  )
}
export default Header
