import { Button } from "@/components/ui/button";
import {
  Brain,
  Shield,
  Users,
  FileText,
  Database,
  Microscope,
  BookOpen,
  BrainCircuit,
  ArrowRight
} from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BrainAnimation from "../components/BrainAnimation";

const Motivation = () => {
  const partners = [
    {
      name: "DeepNeura",
      type: "Tech Partner",
      logo: "DN",
      url: "https://deepneura.com"
    },
    {
      name: "AgenixAI",
      type: "Tech Partner",
      logo: "AI",
      url: "https://www.agenixai.com"
    },
    {
      name: "Translab",
      type: "Tech Partner",
      logo: "TL",
      url: "https://translab.io"
    },
    {
      name: "IIHMRB",
      type: "Education Partner",
      logo: "IH",
      url: "https://iihmrbangalore.edu.in"
    },
    {
      name: "MedTrain",
      type: "Education Partner",
      logo: "MT",
      url: "https://med-train.com"
    },
  ];

  const capabilities = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Domain-Specific Understanding",
      description:
        "Our team of healthcare professionals ensures AI solutions are aligned with medical requirements and priorities.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Data Privacy & Compliance",
      description:
        "Purpose-built systems that adhere to healthcare regulations and protect sensitive patient information.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Optimized Compute & Cost",
      description:
        "Advanced infrastructure designed specifically for healthcare AI deployment with efficiency at scale.",
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Medical Accuracy Control",
      description:
        "Rigorous validation processes ensure all AI outputs meet the highest standards of medical precision.",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "LLM Fine-Tuning Expertise",
      description:
        "Customized large language models tailored to specific healthcare use cases and clinical workflows.",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Healthcare AI Education",
      description:
        "Comprehensive training programs to empower medical professionals with AI literacy and practical skills.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-20 overflow-hidden relative hero-gradient">
          <div className="absolute inset-0 opacity-30">
            <BrainAnimation />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-greybrain-200 dark:border-greybrain-700/30 text-greybrain-700 dark:text-greybrain-300 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                Transforming Healthcare Through Innovation
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                The Future of Healthcare is{" "}
                <span className="heading-gradient">Generative AI</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-greybrain-700/80 dark:text-greybrain-200/80">
                At GreyBrain, we're pioneering the integration of cutting-edge
                generative AI technology with decades of healthcare expertise.
              </p>
              <Button className="bg-greybrain-400 hover:bg-greybrain-500 text-white px-8 py-6 text-lg" onClick={() => window.location.href = "#contact"}>
                Partner with Our Medical AI Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Transformation Section */}
        <section className="py-20 bg-white dark:bg-greybrain-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
                How Generative AI Will Transform Healthcare
              </h2>
              <p className="text-lg text-greybrain-700/80 dark:text-greybrain-200/80">
                The healthcare industry stands on the brink of a technological
                revolution, with generative AI driving unprecedented
                advancements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-greybrain-50 dark:bg-greybrain-800/30 rounded-2xl p-8 shadow-lg border border-greybrain-100 dark:border-greybrain-700/30">
                <div className="flex items-center mb-4">
                  <BrainCircuit className="h-8 w-8 text-greybrain-400 mr-3" />
                  <h3 className="text-xl font-semibold">Clinical Decision Support</h3>
                </div>
                <p className="text-greybrain-600 dark:text-greybrain-300">
                  AI-powered systems analyze vast medical literature, patient
                  records, and clinical guidelines to provide physicians with
                  evidence-based recommendations in seconds, enhancing diagnostic
                  accuracy and treatment planning.
                </p>
              </div>

              <div className="bg-greybrain-50 dark:bg-greybrain-800/30 rounded-2xl p-8 shadow-lg border border-greybrain-100 dark:border-greybrain-700/30">
                <div className="flex items-center mb-4">
                  <FileText className="h-8 w-8 text-greybrain-400 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Administrative Efficiency
                  </h3>
                </div>
                <p className="text-greybrain-600 dark:text-greybrain-300">
                  Generative AI automates routine documentation, coding, and
                  communication tasks, allowing healthcare providers to focus
                  more time on patient care while reducing burnout and
                  administrative costs.
                </p>
              </div>

              <div className="bg-greybrain-50 dark:bg-greybrain-800/30 rounded-2xl p-8 shadow-lg border border-greybrain-100 dark:border-greybrain-700/30">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-greybrain-400 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Personalized Patient Care
                  </h3>
                </div>
                <p className="text-greybrain-600 dark:text-greybrain-300">
                  AI-driven personalization creates individualized treatment
                  plans, medication regimens, and health recommendations based on
                  each patient's unique genetic makeup, lifestyle factors, and
                  medical history.
                </p>
              </div>

              <div className="bg-greybrain-50 dark:bg-greybrain-800/30 rounded-2xl p-8 shadow-lg border border-greybrain-100 dark:border-greybrain-700/30">
                <div className="flex items-center mb-4">
                  <Microscope className="h-8 w-8 text-greybrain-400 mr-3" />
                  <h3 className="text-xl font-semibold">
                    Research & Drug Discovery
                  </h3>
                </div>
                <p className="text-greybrain-600 dark:text-greybrain-300">
                  Generative AI accelerates medical research by identifying novel
                  drug candidates, predicting protein structures, and uncovering
                  previously unknown relationships between diseases and potential
                  treatments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GreyBrain's Capabilities */}
        <section className="py-20 bg-greybrain-50 dark:bg-greybrain-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
                GreyBrain's Healthcare AI Capabilities
              </h2>
              <p className="text-lg text-greybrain-700/80 dark:text-greybrain-200/80">
                Our team of doctors, scientists, and AI specialists brings
                decades of combined experience in healthcare technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="feature-card">
                  <div className="w-14 h-14 mb-6 rounded-lg bg-greybrain-400/10 flex items-center justify-center text-greybrain-500 group-hover:bg-greybrain-400 group-hover:text-white transition-colors">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-greybrain-600/80 dark:text-greybrain-300/80">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 bg-white dark:bg-greybrain-900/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
                Our Partners in Innovation
              </h2>
              <p className="text-lg text-greybrain-700/80 dark:text-greybrain-200/80">
                GreyBrain collaborates with industry-leading organizations to
                advance healthcare AI education and implementation.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {partners.map((partner, index) => (
                <a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-40 h-40 bg-white dark:bg-greybrain-800/30 rounded-2xl shadow-lg border border-greybrain-100 dark:border-greybrain-700/30 flex flex-col items-center justify-center p-4 transition-transform hover:-translate-y-1"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-greybrain-400 to-greybrain-600 flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-xl">
                      {partner.logo}
                    </span>
                  </div>
                  <p className="font-semibold text-greybrain-800 dark:text-greybrain-200">
                    {partner.name}
                  </p>
                  <p className="text-xs text-greybrain-600 dark:text-greybrain-400">
                    {partner.type}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-br from-greybrain-400/20 via-background to-greybrain-300/20 dark:from-greybrain-700/20 dark:via-background dark:to-greybrain-800/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
                  Our Education Mission
                </h2>
              </div>

              <div className="bg-white dark:bg-greybrain-900/60 rounded-2xl p-8 md:p-12 shadow-xl border border-greybrain-100 dark:border-greybrain-700/30">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3">
                    <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-greybrain-400 to-greybrain-600 flex items-center justify-center">
                      <BookOpen className="h-20 w-20 text-white" />
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4 heading-gradient">
                      Empowering Healthcare Professionals
                    </h3>
                    <p className="text-lg text-greybrain-700/80 dark:text-greybrain-200/80 mb-6">
                      GreyBrain is committed to democratizing AI knowledge in healthcare. 
                      Our comprehensive training programs equip medical professionals with 
                      the skills needed to leverage generative AI effectively and responsibly.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-greybrain-400/20 flex items-center justify-center mr-3 mt-1">
                          <span className="text-greybrain-500 font-bold text-sm">✓</span>
                        </div>
                        <span className="text-greybrain-600 dark:text-greybrain-300">
                          Hands-on workshops with real clinical applications
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-greybrain-400/20 flex items-center justify-center mr-3 mt-1">
                          <span className="text-greybrain-500 font-bold text-sm">✓</span>
                        </div>
                        <span className="text-greybrain-600 dark:text-greybrain-300">
                          Certification programs in healthcare AI implementation
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-greybrain-400/20 flex items-center justify-center mr-3 mt-1">
                          <span className="text-greybrain-500 font-bold text-sm">✓</span>
                        </div>
                        <span className="text-greybrain-600 dark:text-greybrain-300">
                          Executive education on AI strategy for healthcare leaders
                        </span>
                      </li>
                    </ul>
                    <Button className="bg-greybrain-400 hover:bg-greybrain-500 text-white" onClick={() => window.location.href = "/education"}>
                      Browse Healthcare AI Training Programs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Motivation;
