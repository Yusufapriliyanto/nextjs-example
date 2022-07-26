import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Linker from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <title>NextJS Example Web</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
      </Head>
{/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://nextjs-example-yusufapriliyanto.vercel.app">Navbar</a>
            <ul className="navbar-nav ms-auto mb-2">
              <li className="nav-item">
                <a className="nav-link active ml-3" href="https://nextjs-example-yusufapriliyanto.vercel.app">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active ml-3" href="https://nextjs-example-yusufapriliyanto.vercel.app/diary_fiksi">Diary Fiksi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active ml-3" href="https://nextjs-example-yusufapriliyanto.vercel.app/konten_fiksi">Konten Fiksi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active ml-3" href="https://nextjs.org/docs/">Dokumentasi NextJS </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active ml-3" href="https://nextjs-example-yusufapriliyanto.vercel.app/api/hello">Data Terkait Blog </a>
              </li>
            </ul>
        </div>
      </nav>
{/* Konten Fiksi */}
      <h3>Puisi Tak Berjudul #2</h3>
      <h3>Oleh: Yusuf Apriliyanto</h3>
    </div>
  )
}
