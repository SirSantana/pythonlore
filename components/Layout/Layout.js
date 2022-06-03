import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../Navbar/Navbar'
import styles from './Layout.module.css'
import Link from 'next/link'
export default function Layout({children, title, description}){
    return(
        <>
        <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
        <main className={styles.main}>
          <Link href={'/'}>
          <Image
          src={"/images/PYTHON LOGO PAGINA INICIO.png"}
          width={180}
          height={130}
          alt={"Logo TH"}
        />
          </Link>
        {children}<Navbar/></main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by colMotors
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </a>
      </footer>
        </>
    )
}