import Header from '@/app/components/Header'

export default function Thread_Id({ params }: { params: { id: string } }) {
  return (
    <>
      <Header />
      <div>PostID: {params.id}</div>
    </>
  )
}
