'use client'

import { useEffect, useState } from 'react'
import { fetchPostsPost } from './method/fetchMethods'

function CreateThreadPost() {
  const [inputText, setInputText] = useState('')
  function handleClick() {
    const postText = inputText
    fetchPostsPost(postText)
  }
  return (
    <>
      <input type="text" onChange={e => setInputText(e.target.value)} />
      <button onClick={handleClick}>投稿</button>
    </>
  )
}
export default CreateThreadPost
