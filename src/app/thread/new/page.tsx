import Header from '@/app/components/Header'
import { fetchThreadsPost } from '@/app/components/method/fetchMethods'
export default function New() {
  return (
    <>
      <Header />
      <button onClick={fetchThreadsPost}>スレッドを作成</button>
    </>
  )
}
