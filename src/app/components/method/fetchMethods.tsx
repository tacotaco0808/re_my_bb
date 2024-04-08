'use client'
// fetchThreads関数の戻り値型定義
type Threads = {
  id: string
  title: string
}
type Post = {
  id: string
  post: string
}
export const fetchThreads = async (): Promise<Threads[]> => {
  const res = await fetch('https://railway.bulletinboard.techtrain.dev/threads')
  const threads = await res.json()
  return threads
}
