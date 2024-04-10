'use client'

import { useEffect, useState } from 'react'
import { fetchPostsPost } from './method/fetchMethods'
type ThreadId = {
  id: string
}
function CreateThreadPost({ threadId }: { threadId: ThreadId }) {
  const [inputText, setInputText] = useState('')
  function handleClick() {
    const postText = inputText
    fetchPostsPost(postText, threadId.id).then(res => console.log(res))
  }
  return (
    <>
      <input type="text" onChange={e => setInputText(e.target.value)} />
      <button onClick={handleClick}>投稿</button>
    </>
  )
}
export default CreateThreadPost
