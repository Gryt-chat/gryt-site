import Head from 'next/head';
import DownloadSection from '../components/DownloadSection';
import Footer from '../components/Footer';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { SecondSection } from '../components/SecondSection';
import { ThirdSection } from '../components/ThirdSection';

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
