import React from 'react'
import Head from 'next/head'

export default function GlobalHead() {
    return (
        <Head>
        <title>Sex Shop No Sigilo</title>
        <meta name="description" content="E-commerce de produtos eróticos." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <style data-href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" />
        <style>
          {`
            *{
              padding: 0;
              margin: 0;
              border: 0;
              outline: 0;
              box-shadow: none;
            }
            body{
              background: rgb(0,0,0);
            }
          `}
        </style>
      </Head>
    )
}