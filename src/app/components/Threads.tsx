'use client'
import styles from './Threads.module.css'
import { fetchThreads } from '../components/method/fetchMethods'
import { useEffect, useState } from 'react'
type Threads = {
  id: string
  title: string
}
function Threads() {
  //変数
  const [threads, setThreads] = useState<Threads[]>([])
  const [loading, setLoading] = useState(true)
  //初回マウント時
  useEffect(() => {
    fetchThreads().then(threads => {
      setThreads(threads)
      console.log(threads)
      setLoading(false)
    })
  }, [])
  //描画
  return (
    <>
      <ul className={styles.ul}>
        {loading ? ( //loadingがtrue:falseそれぞれの際の表示
          <p>loading...</p>
        ) : (
          threads.map(thread => {
            return <li key={thread.id}>{thread.title}</li>
          })
        )}
      </ul>
    </>
  )
}
export default Threads
