import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
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
          <Linker className="navbar-brand" href="/">Navbar</Linker>
            <ul className="navbar-nav ms-auto mb-2">
              <li className="nav-item">
                <Linker className={styles.Linker} href="/">Home</Linker>
              </li>
              <li className="nav-item">
                <Linker className={styles.Linker} href="/diary_fiksi">Diary Fiksi</Linker>
              </li>
              <li className="nav-item">
                <Linker className={styles.Linker} href="/konten_fiksi">Konten Fiksi</Linker>
              </li>
              <li className="nav-item">
                <Linker className={styles.Linker} href="https://nextjs.org/docs/">Dokumentasi NextJS </Linker>
              </li>
              <li className="nav-item">
                <Linker className={styles.Linker} href="/api/hello">Data Terkait Blog </Linker>
              </li>
            </ul>
        </div>
      </nav>
{/* Konten Fiksi */}
      <h3>Puisi Tak Berjudul #1</h3>
      <h3>Oleh: Yusuf Apriliyanto</h3>
      <h3>Dibuat pada 26 Juli 2022</h3>
      <p>Di sore hari yang hampir gelap</p>
      <p>Di kala mentari hendak pergi</p>
      <p>Hewan pulang ke rumahnya</p>
      <p>Begitu pula dengan manusia</p>
      <p></p>
      <p>Usai sudah hari, berganti dengan malam</p>
      <p>Kini saatnya istirahat, menikmati hasil</p>
      <p>Menuai apa yang telah dikerjakan</p>
      <p>Sedari fajar belum terbit</p>
      <p></p>
      <p>Mereka berencana untuk esok hari</p>
      <p>Sembari larut dalam tidurnya</p>
      <p>Didalamnya mereka bermimpi</p>
      <p>Juga meletakkan harapan</p>
    </div>
  )
}
