import CreateThreadPost from '@/app/components/CreateThreadPost'
import Header from '@/app/components/Header'
import ThreadsPosts from '@/app/components/ThreadsPosts'

export default function Thread_Id({ params }: { params: { id: string } }) {
  //paramsは動的ファイルの[id]の部分
  return (
    <>
      <Header />
      <ThreadsPosts threadId={params} />
      <div>PostID: {params.id}</div>
      <CreateThreadPost threadId={params} />
    </>
  )
}
