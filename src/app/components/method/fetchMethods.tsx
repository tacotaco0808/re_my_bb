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
//スレッド一覧取得:GETリクエスト
export const fetchThreads = async (): Promise<Threads[]> => {
  const res = await fetch(base_url)
  const threads = await res.json()
  return threads
}
// スレッド一覧に新しいスレッドを追加:POSTリクエスト
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
// スレッド内のポスト一覧を取得:GETリクエスト
export const fetchPosts = async (id: string): Promise<ThreadPosts> => {
  /*投稿が入っているスレッド:7e11ec6a-ae7e-49ca-a312-85b052f90745 */
  // /b927076a-c89a-495a-9d59-513d676cef9c

  const res = await fetch(base_url + '/' + id + '/posts')
  const posts = await res.json()

  return posts
}
//スレッド内のポスト一覧に新規投稿をする:POSTリクエスト
export const fetchPostsPost = async (postString: string) => {
  const id = 'f147e400-7dc3-494e-b668-a068f84cc683'
  const bodyData = {
    post: postString,
  }
  const res = await fetch(base_url + '/' + id + '/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyData),
  }).then(res => res.json())
  return res
}
