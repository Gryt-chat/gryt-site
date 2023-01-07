import DownloadSection from '../components/DownloadSection';
import Footer from '../components/Footer';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { SecondSection } from '../components/SecondSection';
import { ThirdSection } from '../components/ThirdSection';

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <SecondSection />
      <ThirdSection />
      <DownloadSection />

      <Footer />
    </>
  );
}
