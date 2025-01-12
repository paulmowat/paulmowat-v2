import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class TheDocument extends Document {
  render () {
    return (
      <html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
