import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Banner } from './components/Banner';
import { Banner2 } from './components/Banner2';
import { ExploreMore } from './components/ExploreMore';
import { FeatureTreats } from './components/FeatureTreats';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { TopProducts } from './components/TopProducts';

gsap.registerPlugin(useGSAP);

const App = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.main',
      { opacity: 0 },
      { opacity: 1, duration: 2.5, ease: 'power2.out' }
    );
  });

  return (
    <main className="main flex flex-col w-full">
      <Nav />
      <Hero />
      <TopProducts />
      <Banner />
      <ExploreMore />
      <Banner2 />
      <FeatureTreats />
      <Footer />
    </main>
  );
};

export default App;
