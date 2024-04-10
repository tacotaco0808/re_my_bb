'use client'

import { useState } from 'react'
import { fetchPostsPost } from './method/fetchMethods'

function CreateThreadPost(props: any) {
  const [inputText, setInputText] = useState('') //テキストボックスに入力されるたび更新
  function handleClick() {
    const postText = inputText
    /*フェッチ(スレッドに投稿)した後、スレッド内ポスト一覧を更新する */
    fetchPostsPost(postText, props.threadId).then(() => props.setThreadReRender())
  }
  return (
    <>
      <input type="text" onChange={e => setInputText(e.target.value)} />
      <button onClick={handleClick}>投稿</button>
    </>
  )
}
export default CreateThreadPost
