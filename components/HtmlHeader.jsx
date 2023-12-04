import Head from "next/head";

function HtmlHeader({ title, desc }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={desc} />
      <link rel="icon" href="/logo-white.png" />
    </Head>
  )
}

export default HtmlHeader