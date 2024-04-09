'use client'

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
//Threas内のポスト一覧を表示
function ThreadsPosts() {
  //変数
  const [threadsPosts, setThreadsPosts] = useState<Posts[]>([]) //スレッド内の複数ポストを取得 fetchした後のthread -> postsの部分
  const [loading, setLoading] = useState(true)
  //初回マウント時
  useEffect(() => {
    fetchPosts()
      .then(threads => {
        setThreadsPosts(threads.posts)
        console.log(threads.posts[4].post)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [])
  return (
    <>
      <ul>
        {loading ? ( //loadingがtrue:falseそれぞれの際の表示
          <p>loading...</p>
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
