import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import Script from 'next/script';
import { motion } from "framer-motion";


function MyApp({ Component, pageProps, router }, AppProps) {

  return (
      <motion.div
        initial="initial"
        animate="animate"
        variants={{
            initial: {
            opacity: 0,
            },
            animate: {
            opacity: 1,
            },
        }}
      >
          <Script id='GA-script' strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

          <Script strategy="lazyOnload" id='GA-script-two'>
              {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                  });
              `}
          </Script>

          <Head>
              <title>Abdulhamid</title>
              <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>

          <Component {...pageProps} />
      </motion.div>
  );
}

export default MyApp
