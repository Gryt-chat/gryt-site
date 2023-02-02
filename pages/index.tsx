import Head from 'next/head';
import DownloadSection from '../components/Sections/Download';
import Footer from '../components/Footer';
import { Hero } from '../components/Sections/Hero';
import { Navbar } from '../components/Navbar';
import { SecondSection } from '../components/Sections/DiscordCopy';
import { ThirdSection } from '../components/Sections/Features';

export function getServerSideProps(context: any) {
  return {
    props: {
      uaString: context.req.headers['user-agent'],
    },
  };
}

export default function Home({ uaString }: { uaString: string }) {
  return (
    <>
      <Head>
        <title>Gryt</title>
      </Head>
      <Navbar />

      <Hero uaString={uaString} />
      <SecondSection />
      <ThirdSection />
      <DownloadSection uaString={uaString} />

      <Footer />
    </>
  );
}
