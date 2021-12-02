import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Personal web page of a programmer named Lukáš Litvan, currently a college student at FIT CTU in Prague and a Java Developer at Broadridge Czech Republic, s.r.o." />
          <meta name="keywords" content="Lukáš Litvan, litvaluk, programmer, developer, student" />
          <meta name="author" content="Lukáš Litvan" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <link href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap" rel="stylesheet" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#262626" />
          <link rel="canonical" href="https://lukaslitvan.cz/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html >
    )
  }
}

export default AppDocument;
