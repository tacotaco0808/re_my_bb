import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import Threads from './components/Threads'

export default function Home() {
  return (
    <>
      <Threads />
    </>
  )
}
