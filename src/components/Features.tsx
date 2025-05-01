
import { 
  Brain, 
  Shield, 
  Database, 
  FileText, 
  Microscope, 
  BookOpen, 
  BrainCircuit, 
  Users,
  Link
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Domain-Specific Understanding",
      description: "Our team of healthcare professionals ensures AI solutions are aligned with medical requirements and priorities."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Data Privacy & Compliance",
      description: "Purpose-built systems that adhere to healthcare regulations and protect sensitive patient information."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Optimized Compute & Cost",
      description: "Advanced infrastructure designed specifically for healthcare AI deployment with efficiency at scale."
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Medical Accuracy Control",
      description: "Rigorous validation processes ensure all AI outputs meet the highest standards of medical precision."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "LLM Fine-Tuning Expertise",
      description: "Customized large language models tailored to specific healthcare use cases and clinical workflows."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Healthcare AI Integration",
      description: "Seamless integration of generative AI into existing healthcare systems and workflows."
    },
    {
      icon: <BrainCircuit className="h-8 w-8" />,
      title: "Clinical Decision Support",
      description: "AI-powered systems providing physicians with evidence-based recommendations to enhance diagnostic accuracy."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaborative Expertise",
      description: "A unique team of doctors, scientists, and AI specialists working together to solve healthcare challenges."
    }
  ];

  const techPartners = [
    {
      name: "DeepNeura",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop&auto=format&q=80",
      url: "https://deepneura.com",
      description: "AI solutions for neuroscience applications"
    },
    {
      name: "AgenixAI",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&fit=crop&auto=format&q=80",
      url: "https://www.agenixai.com",
      description: "Advanced healthcare agents powered by AI"
    },
    {
      name: "Translab",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format&q=80",
      url: "https://translab.io",
      description: "Translational AI for medical research"
    }
  ];

  const eduPartners = [
    {
      name: "IIHMRB",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=100&fit=crop&auto=format&q=80",
      url: "https://iihmrbangalore.edu.in",
      description: "Healthcare management research & education"
    },
    {
      name: "MedTrain",
      logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=100&fit=crop&auto=format&q=80",
      url: "https://med-train.com",
      description: "Medical AI training programs"
    }
  ];

  return (
    <section id="features" className="py-20 bg-greybrain-50 dark:bg-greybrain-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
            Healthcare AI Features & Expertise
          </h2>
          <p className="text-lg text-greybrain-700/80 dark:text-greybrain-200/80">
            GreyBrain combines cutting-edge AI technology with healthcare domain knowledge to transform medical practice and patient outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card group"
            >
              <div className="w-14 h-14 mb-6 rounded-lg bg-greybrain-400/10 flex items-center justify-center text-greybrain-500 group-hover:bg-greybrain-400 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-greybrain-600/80 dark:text-greybrain-300/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
              Our Partners
            </h2>
            <p className="text-lg text-greybrain-700/80 dark:text-greybrain-200/80">
              Working with industry leaders to advance healthcare AI technology and education.
            </p>
          </div>

          {/* Tech Partners */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-greybrain-600 to-greybrain-400 dark:from-greybrain-400 dark:to-greybrain-300">
                Technology Partners
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {techPartners.map((partner, index) => (
                <a 
                  href={partner.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  key={index} 
                  className="block feature-card group"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="w-full h-32 object-contain mb-4 rounded-lg" 
                  />
                  <div className="flex items-center mb-2">
                    <h4 className="text-xl font-semibold">{partner.name}</h4>
                    <Link className="h-4 w-4 ml-2 text-greybrain-400" />
                  </div>
                  <p className="text-greybrain-600/80 dark:text-greybrain-300/80">
                    {partner.description}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Education Partners */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400">
                Education Partners
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eduPartners.map((partner, index) => (
                <a 
                  href={partner.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  key={index} 
                  className="block feature-card group"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="w-full h-32 object-contain mb-4 rounded-lg" 
                  />
                  <div className="flex items-center mb-2">
                    <h4 className="text-xl font-semibold">{partner.name}</h4>
                    <Link className="h-4 w-4 ml-2 text-purple-500" />
                  </div>
                  <p className="text-greybrain-600/80 dark:text-greybrain-300/80">
                    {partner.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
