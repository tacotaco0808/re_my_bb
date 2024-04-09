import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import NextLink from 'next/link'
import Threads from './components/Threads'
import Header from './components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <Threads />
      <NextLink href="/thread/new">新しいスレッドの作成</NextLink>
    </>
  )
}
