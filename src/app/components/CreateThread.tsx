'use client'
import { fetchThreadsPost } from '@/app/components/method/fetchMethods'
function CreateThread() {
  function handleClick() {
    const string: string = 'test2' //スレッドのタイトル
    fetchThreadsPost(string)
      .catch(error => console.error(error))
      .then(() => console.log('test'))
  }
  return (
    <>
      <button onClick={handleClick}>スレッド作成</button>
    </>
  )
}
export default CreateThread
