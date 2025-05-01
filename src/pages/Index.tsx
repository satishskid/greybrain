
import Hero from "../components/Hero";
import Features from "../components/Features";
import Clients from "../components/Clients";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Clients />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
