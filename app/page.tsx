import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DigitalMarketing } from './components/DigitalMarketing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <DigitalMarketing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}