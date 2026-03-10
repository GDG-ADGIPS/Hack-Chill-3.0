import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Prizes from './sections/Prizes';
import Timeline from './sections/Timeline';
import Partners from './sections/Partners';
import Squad from './sections/Squad';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      <Navbar />
      <main>
        <Hero />
        <Prizes />
        <Timeline />
        <Partners />
        <Squad />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
