import Head from 'next/head'

import Layout, {siteTitle} from '../components/layout';

import { Container, Col, Row } from 'react-bootstrap';

import styles from './styles.module.css'

export default function Home() {
  
  return (
    <Layout>
    <div className="container">
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Container className={styles.container_center}>
          First Project Page
        </Container>
      </section>
      

      
    </div>
    </Layout>
  )
}
