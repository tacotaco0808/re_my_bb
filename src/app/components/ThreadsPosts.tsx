'use client'
import styles from './ThreadsPosts.module.css'
import { useEffect, useState } from 'react'
import { fetchPosts } from './method/fetchMethods'
//threadの中のポストまで定義
type ThreadPosts = {
  threadId: string
  posts: Posts[]
}
type Posts = {
  id: string
  post: string
}
type ThreadId = {
  id: string
}
//配列が空でないか判定
function isArrayNotEmpty(array: any[]): boolean {
  return array.length > 0
}
//Threas内のポスト一覧を表示
function ThreadsPosts({ threadId }: { threadId: ThreadId }) {
  //変数
  const [threadsPosts, setThreadsPosts] = useState<Posts[]>([]) //スレッド内の複数ポストを取得 fetchした後のthread -> postsの部分
  const [loading, setLoading] = useState(true)
  //初回マウント時
  useEffect(() => {
    fetchPosts(threadId.id)
      .then(threads => {
        //スレッド内にポストがあるか
        if (isArrayNotEmpty(threads.posts)) {
          setThreadsPosts(threads.posts)
          setLoading(false)
        } else {
          console.log('スレッド内に投稿はありません')
        }
      })
      .catch(error => console.log(error))
  }, [threadId])
  return (
    <>
      <ul className={styles.ul}>
        {loading ? ( //loadingがtrue:falseそれぞれの際の表示
          <p>スレッドに投稿がありません。</p>
        ) : (
          threadsPosts.map((thread, index) => {
            return (
              <>
                <li key={index}>{thread.post}</li>
              </>
            )
          })
        )}
      </ul>
    </>
  )
}
export default ThreadsPosts
