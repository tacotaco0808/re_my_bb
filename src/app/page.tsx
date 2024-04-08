import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import Threads from './components/Threads'
import Header from './components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <Threads />
    </>
  )
}
