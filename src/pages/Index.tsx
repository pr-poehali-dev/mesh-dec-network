import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Technology from '@/components/Technology';
import Architecture from '@/components/Architecture';
import Cases from '@/components/Cases';
import Team from '@/components/Team';
import API from '@/components/API';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Technology />
        <Architecture />
        <Cases />
        <Team />
        <API />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
