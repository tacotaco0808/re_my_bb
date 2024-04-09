'use client'
import { fetchThreadsPost } from '@/app/components/method/fetchMethods'
import { useState } from 'react'
function CreateThread() {
  const [inputText, setInputText] = useState('') //入力されたスレッドのタイトル名
  function createNewThread() {
    fetchThreadsPost(inputText).then(newThread => console.log('ThreadID:' + newThread.id))
  }
  return (
    <>
      <input type="text" name="newThreadTitle" placeholder="スレッドタイトル" onChange={e => setInputText(e.target.value)} />
      <button onClick={createNewThread}>スレッド作成</button>
    </>
  )
}
export default CreateThread
