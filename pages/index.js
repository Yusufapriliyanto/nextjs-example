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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"/>
      </Head>
{/* Header */}
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
{/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2">
              <li className="nav-item">
                <a className="nav-link active ml-3" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ml-3" href="/h2">Halaman Kedua</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
{/* Konten Index*/}
      <p> Ini adalah contoh situs yang dibuat menggunakan NextJS</p>
{/* Footer */}
      <div className="footer mt-auto py-3 bg-light">
        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer" className="container">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </div>
    </div>
  )
}
