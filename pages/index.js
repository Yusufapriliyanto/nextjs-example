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
                <a className="nav-link active ml-3" href="/h2">Halaman Kedua</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active ml-3" href="/h3">Halaman Lain</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active ml-3" href="/h4">Halaman Lain</a>
              </li>
            </ul>
        </div>
      </nav>
{/* Konten Index*/}
      <p> Ini adalah contoh situs yang dibuat menggunakan NextJS</p>
      <div className="container" style="background-color: #00fff2;">
        <div className="row">
          <div className="col"> Ini adalah contoh konten </div>
        </div>
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
