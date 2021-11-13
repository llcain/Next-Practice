import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <h1 className="logo">Next</h1>
        <nav>        
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Todo</h1>
        <p>This a paragraph</p>
      </main>
      <section className="sidebar">
        <h2>Side Bar</h2>
        <p>This a side paragraph</p>
      </section>
      <footer>
        <h3>LaQuisha Cain</h3>
        <p>This is the footer</p>
      </footer>

    </div>
  )
}
