import Header from '@/app/components/Header'
import CreateThread from '@/app/components/CreateThread'
import style from './page.module.css'
export default function New() {
  return (
    <>
      <Header />
      <main className={style.main}>
        <CreateThread />
      </main>
    </>
  )
}
