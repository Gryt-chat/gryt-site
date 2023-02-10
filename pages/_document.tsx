import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const description =
    "Introducing Gryt - the new chat platform that's revolutionizing the way we communicate. Gryt is open source, so you can see how it works and how it's been designed. Plus, there are no paywalls - so you can access all the features and content you need without having to pay a dime. Gryt is also focused on community contribution - so you can help shape the platform to your own needs. And best of all, Gryt is available now! So why wait? Join the community and start chatting today!";
  const imagePreview = '/images/screenshots/Server.png';
  const site = 'https://gryt.chat';
  return (
    <Html lang="en" style={{ backgroundColor: 'rgb(37, 39, 50)' }} id="home">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="title" content="Gryt" />
        <meta name="description" content={description} />
        <meta name="theme-color" content="#252732" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={site} />
        <meta property="og:title" content="Gryt" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imagePreview} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={site} />
        <meta property="twitter:title" content="Gryt" />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={imagePreview} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
