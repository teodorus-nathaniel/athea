import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='anonymous'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Yantramanav:wght@300;500&display=swap'
            rel='stylesheet'
          />
          <link href='https://use.typekit.net/bcd3grg.css' rel='stylesheet' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <body className='bg-black font-light pb-16' style={{ letterSpacing: '0.035em' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
