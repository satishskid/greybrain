
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileImage, FileText, Database, Mail } from "lucide-react";

const Clients = () => {
  const clients = [
    {
      name: "SKids Health",
      logo: "/images/skids-logo.png",
      url: "https://www.skids.health",
      description: "Pediatric healthcare intelligence platform",
      caseStudy: "AI-Enhanced Electronic Medical Records for Pediatrics",
      content: "SKids Health leverages GreyBrain's advanced AI technology to power their pediatric-focused electronic medical records system. The implementation enables automatic clinical documentation, predictive analytics for childhood disease progression, and personalized treatment recommendations based on comprehensive patient data analysis. The solution has reduced documentation time by 45% while improving diagnostic accuracy by 32% across their network of pediatric clinics.",
      solutionType: "AI-Powered EMR",
      icon: <FileText className="h-10 w-10" />
    },
    {
      name: "Santaan",
      logo: "/images/santaan-logo.png",
      url: "https://santaan.in",
      description: "Infertility & IVF treatment center", 
      caseStudy: "Integrated AI for Fertility Treatment Optimization",
      content: "Santaan partnered with GreyBrain to develop an intelligent fertility treatment platform that combines EMR capabilities with AI-driven predictive analytics. The system analyzes patient data to optimize IVF protocols, predict treatment success rates, and generate personalized care plans for infertility patients. The platform has been deployed across 15+ fertility clinics in India, resulting in a 24% improvement in successful pregnancy outcomes and more efficient treatment cycles.",
      solutionType: "AI-Powered EMR",
      icon: <Database className="h-10 w-10" />
    },
    {
      name: "SaiScan",
      logo: "/images/saiscan-logo.png",
      url: "https://saiscan.com",
      description: "Advanced medical imaging diagnostics",
      caseStudy: "AI-Enhanced Diagnostic Imaging Solution",
      content: "SaiScan implemented GreyBrain's specialized imaging AI solution to augment their diagnostic capabilities across multiple modalities including X-ray, CT, and MRI. The technology helps radiologists identify anomalies with greater precision, prioritize urgent cases, and generate structured reports automatically. Since implementation, SaiScan has reported a 40% reduction in reporting time and a 35% increase in the detection of subtle pathologies that might otherwise be missed.",
      solutionType: "AI-Powered Imaging",
      icon: <FileImage className="h-10 w-10" />
    }
  ];

  return (
    <section id="clients" className="py-20 bg-white dark:bg-greybrain-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-gradient">
            Our Healthcare AI Success Stories
          </h2>
          <p className="text-lg text-greybrain-700/80 dark:text-greybrain-200/80">
            GreyBrain technologies are powering the next generation of healthcare solutions at innovative medical organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <Card key={index} className="overflow-hidden border-greybrain-100 dark:border-greybrain-700/30 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-white dark:bg-greybrain-800 flex items-center justify-center p-4 border-b border-greybrain-100 dark:border-greybrain-700/30">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-full max-w-full object-contain p-2" style={{maxHeight: client.name === 'Santaan' ? '160px' : '120px'}}
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{client.name}</CardTitle>
                  <div className="w-10 h-10 rounded-full bg-greybrain-400/10 flex items-center justify-center text-greybrain-500">
                    {client.icon}
                  </div>
                </div>
                <CardDescription>{client.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg text-greybrain-600 dark:text-greybrain-300">
                    {client.caseStudy}
                  </h4>
                  <div className="inline-flex items-center px-2 py-1 rounded-full bg-greybrain-400/10 text-greybrain-600 dark:text-greybrain-300 text-xs font-medium mt-2">
                    {client.solutionType}
                  </div>
                </div>
                <p className="text-greybrain-600/80 dark:text-greybrain-300/80">
                  {client.content}
                </p>
                <Button 
                  variant="ghost" 
                  className="w-full justify-between hover:bg-greybrain-400/10 text-greybrain-500"
                  onClick={() => window.open(client.url, "_blank")}
                >
                  Visit {client.name}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
