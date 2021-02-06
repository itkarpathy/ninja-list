import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, minima, recusandae pariatur odio maxime at voluptates quia et in eos aspernatur doloremque ipsum atque ratione nihil repellat quos numquam id cum eius cumque?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos odio quas cupiditate incidunt quibusdam, quisquam explicabo quo quae, delectus et animi consectetur fuga.</p>
        <Link href="/ninjas" ><a className={styles.btn}>see Ninja listing</a></Link>
      </div>
    </>
  )
}
