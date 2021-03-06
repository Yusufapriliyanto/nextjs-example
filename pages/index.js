import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
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
                <a className="nav-link active ml-3" href="https://nextjs-example-yusufapriliyanto.vercel.app/diary_pribadi">Diary Pribadi</a>
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
{/* Konten Index*/}
      <p> Ini adalah contoh situs yang dibuat menggunakan NextJS</p>
      <div className={styles.grid_container}>
        <div className={styles.item1}> Katalog Konten Pilihan </div>
      </div>
{/* Daftar Konten Fiksi*/}
      <p> Daftar Diary Pribadi dan Konten Fiksi </p>
      <div className={styles.grid_container}>
        <div className={styles.item1}> <Linker href="/diary_pribadi/p1"> Diary-p1 </Linker> </div>
        <div className={styles.item1}> <Linker href="/diary_pribadi/p2"> Diary-p2 </Linker> </div>
        <div className={styles.item1}> <Linker href="/diary_pribadi/p3"> Diary-p3 </Linker> </div>
      </div>
      <div className={styles.grid_container}>
        <div className={styles.item1}> <Linker href="/konten_fiksi/p1"> Konten-p1 </Linker> </div>
        <div className={styles.item1}> <Linker href="/konten_fiksi/p2"> Konten-p2 </Linker> </div>
        <div className={styles.item1}> <Linker href="/konten_fiksi/p3"> Konten-p3 </Linker> </div>
      </div>
{/* Footer */}
      <div className="footer mt-auto py-3 bg-blue">
        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer" className="nav-item nav-link">
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </div>
    </div>
  )
}
