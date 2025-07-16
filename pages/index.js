import Head from 'next/head'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokhrel Development LLC</title>
        <meta name="description" content="Building Digital Solutions for Tomorrow - Portfolio of Pokhrel Development LLC" />
        <meta property="og:title" content="Pokhrel Development LLC" />
        <meta property="og:description" content="Building Digital Solutions for Tomorrow" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen-mobile">
        <Navigation />
        <main>
          <Hero />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
} 