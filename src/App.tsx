import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Actualites from './components/Actualites/Actualites';
import Categories from './components/Categories/Categories';
import Centenaire from './components/Centenaire/Centenaire';
import CarboneCalculator from './components/CarboneCalculator/CarboneCalculator';
import Stats from './components/Stats/Stats';
import Solutions from './components/Solutions/Solutions';
import WhyChoose from './components/WhyChoose/WhyChoose';
import Formats from './components/Formats/Formats';
import Testimonials from './components/Testimonials/Testimonials';
import CTABanner from './components/CTA/CTABanner';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Actualites />
        <Categories />
        <Centenaire />
        <CarboneCalculator />
        <Stats />
        <Solutions />
        <WhyChoose />
        <Formats />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
