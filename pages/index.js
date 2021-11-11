import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
    </div>
  )
}
