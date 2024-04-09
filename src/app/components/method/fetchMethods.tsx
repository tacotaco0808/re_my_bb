'use client'
// fetchThreads関数の戻り値型定義
type Threads = {
  id: string
  title: string
}
//threadの中のポストまで定義
type ThreadPosts = {
  threadId: string
  posts: Posts[]
}
type Posts = {
  id: string
  post: string
}

//基本URL
const base_url = 'https://railway.bulletinboard.techtrain.dev/threads'
//スレッド一覧取得:GET
export const fetchThreads = async (): Promise<Threads[]> => {
  const res = await fetch(base_url)
  const threads = await res.json()
  return threads
}
// スレッド一覧に新しいスレッドを追加:POST
export const fetchThreadsPost = async (titleString: string): Promise<Threads> => {
  const bodyData = {
    title: titleString,
  }

  const res = await fetch(base_url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyData),
  }).then(res => res.json())
  return res
}
// さきのやつ
export const fetchPosts = async (): Promise<ThreadPosts> => {
  /*投稿が入っているスレッド:7e11ec6a-ae7e-49ca-a312-85b052f90745 */
  const res = await fetch(base_url + '/7e11ec6a-ae7e-49ca-a312-85b052f90745' + '/posts')
  const posts = await res.json()

  return posts
}
