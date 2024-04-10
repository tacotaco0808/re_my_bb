import Header from '@/app/components/Header'
import ThreadsPosts from '@/app/components/ThreadsPosts'

export default function Thread_Id({ params }: { params: { id: string } }) {
  return (
    <>
      <Header />
      <ThreadsPosts threadId={params} />
      <div>PostID: {params.id}</div>
    </>
  )
}
