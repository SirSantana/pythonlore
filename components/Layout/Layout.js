import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../Navbar/Navbar'
import styles from './Layout.module.css'
import Link from 'next/link'
import LogoInicio from '../LogoInicio/LogoInicio'
export default function Layout({children, title, description}){
    return(
        <>
        <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
        <main className={styles.main}>
        <LogoInicio/>
          
        {children}<Navbar/></main>
      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/images/logoTHsinfondo.png"  alt="Vercel Logo" width={72} height={60} />
          </span>
        </a>
      </footer>
        </>
    )
}