import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from "../components/home/hero/Hero"
import About from "../components/home/about/About"
import Contact from "../components/home/contact/Contact"
import Services from "../components/home/services/Services"
import Blog from "../components/home/blog/Blog"
import Header from "../components/home/header/Header"
import Footer from "../components/home/footer/Footer"
export default function Home() {
  return (
    <div className={styles.container}>
    <Header/>
              <Hero />
              <Services />
              <About />
              <Contact />
              <Blog />
              <Footer/>

    </div>
  )
}
