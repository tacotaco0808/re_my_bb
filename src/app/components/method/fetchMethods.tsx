'use client'
// fetchThreads関数の戻り値型定義
type Threads = {
  id: string
  title: string
}
type Posts = {
  id: string
  post: string
}
//スレッド一覧取得
export const fetchThreads = async (): Promise<Threads[]> => {
  const res = await fetch('https://railway.bulletinboard.techtrain.dev/threads')
  const threads = await res.json()
  return threads
}
// スレッド一覧に新しいスレッドを追加
export const fetchThreadsPost = async () => {
  const body = {
    title: 'title',
  }
  const res = await fetch('https://railway.bulletinboard.techtrain.dev/threads', { method: 'POST', body: JSON.stringify(body) })
  const threads = await res.json()
  return
}
// さきのやつ
export const fetchPosts = async (): Promise<Posts[]> => {
  const res = await fetch('https://railway.bulletinboard.techtrain.dev/threads' + '/7e11ec6a-ae7e-49ca-a312-85b052f90745' + '/posts')
  const posts = await res.json()
  return posts
}
