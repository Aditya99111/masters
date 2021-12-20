import Head from "next/head";
import React from 'react'
import Pricing from "../components/support/Pricing"
import Header from "../components/home/header/Header"
import Footer from "../components/home/footer/Footer"
const Support = () => {
    return (
        <div>
        <Head>
          <title>Support Us</title>
          <meta property="og:title" content="Support Us" key="support" />
        </Head>
        <Header/>
            <Pricing />
        <Footer/>
        </div>
    )
}

export default Support
