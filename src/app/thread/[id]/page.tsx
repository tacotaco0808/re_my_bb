'use client'
import CreateThreadPost from '@/app/components/CreateThreadPost'
import Header from '@/app/components/Header'
import ThreadsPosts from '@/app/components/ThreadsPosts'
import { useState } from 'react'

export default function Thread_Id({ params }: { params: { id: string } }) {
  //再レンダリングするためのuseState変数
  const [threadReRender, setThreadReRender] = useState(true)
  const threadRenderToggle = () => {
    setThreadReRender(!threadReRender) // reRenderの状態をトグル
    console.log('toggled')
  }
  //paramsは動的ファイルの[id]の部分
  return (
    <>
      <Header />
      {/* threadReRender変数が更新されるたびにポスト一覧を再レンダリング*/}
      <ThreadsPosts threadId={params.id} threadReRender={threadReRender} />
      <div>PostID: {params.id}</div>
      {/* setThreadReRenderをCreateThreadPost内で実行するたびにuseState変数を更新(再レンダリングのため) */}
      <CreateThreadPost threadId={params.id} setThreadReRender={threadRenderToggle} />
    </>
  )
}
