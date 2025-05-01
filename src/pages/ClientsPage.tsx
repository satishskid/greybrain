
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Clients from "../components/Clients";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const ClientsPage = () => {
  const handleContactClick = () => {
    window.location.href = `mailto:satish@greybrain.ai?subject=GreyBrain%20Demo%20Request`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-br from-greybrain-400/10 via-background to-greybrain-300/10 dark:from-greybrain-700/10 dark:via-background dark:to-greybrain-800/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
                Healthcare AI Implementation Success Stories
              </h1>
              <p className="text-lg text-greybrain-700/80 dark:text-greybrain-200/80 mb-8">
                Discover how leading healthcare organizations are leveraging GreyBrain's AI solutions to transform patient care, improve clinical outcomes, and optimize operational efficiency.
              </p>
              <Button className="bg-greybrain-400 hover:bg-greybrain-500 text-white" onClick={() => window.location.href = "#clients"}>
                Explore Client Cases
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <Clients />

        {/* CTA Section */}
        <section className="py-16 bg-greybrain-50 dark:bg-greybrain-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 heading-gradient">
                Ready to Transform Your Healthcare Organization?
              </h2>
              <p className="text-lg text-greybrain-700/80 dark:text-greybrain-200/80 mb-8">
                Join the growing network of innovative healthcare providers enhancing patient care with GreyBrain's AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  className="bg-greybrain-400 hover:bg-greybrain-500 text-white" 
                  onClick={handleContactClick}
                >
                  Schedule a Demo
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-greybrain-400 text-greybrain-600 dark:text-greybrain-300" onClick={() => window.location.href = "/motivation"}>
                  Learn About Our Technology
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ClientsPage;
