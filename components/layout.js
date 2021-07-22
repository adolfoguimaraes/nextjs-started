import Head from 'next/head'
import styles from './layout.module.css'


import NavBar from './navbar/navBar'

const name = 'Adolfo Guimarães'
export const siteTitle = 'Site Title'

export default function Layout({ children, home }) {


  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Site Description"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <NavBar siteTitle={siteTitle} />
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  )
}