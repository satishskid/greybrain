
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Lock, Shield, UserCheck } from "lucide-react";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Healthcare Data Policy | GreyBrain";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center">Healthcare Data Policy</h1>
            <p className="text-xl text-center text-greybrain-600 dark:text-greybrain-300 mb-12">
              Our commitment to protecting patient data and maintaining HIPAA compliance
            </p>

            {/* Introduction Card */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="text-greybrain-500" />
                  Data Protection Framework
                </CardTitle>
                <CardDescription>
                  GreyBrain's approach to healthcare data security
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  At GreyBrain, we understand the critical importance of healthcare data privacy and security. 
                  Our platform is built from the ground up with HIPAA compliance as a foundational principle, 
                  ensuring all patient information and clinical data are protected with the highest standards 
                  of security and confidentiality.
                </p>
                <p>
                  This policy outlines how we collect, process, store, and protect healthcare data within our 
                  AI systems, and the measures we take to ensure compliance with all relevant regulations.
                </p>
              </CardContent>
            </Card>

            {/* HIPAA Compliance Card */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="text-greybrain-500" />
                  HIPAA Compliance
                </CardTitle>
                <CardDescription>
                  Our adherence to healthcare privacy regulations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <Lock size={18} className="text-greybrain-500" />
                    </div>
                    <div>
                      <strong>Business Associate Agreements:</strong> We enter into BAAs with all healthcare 
                      organizations that use our AI platform, clearly defining responsibilities for data 
                      protection and limiting our use of PHI strictly to provide services.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <Lock size={18} className="text-greybrain-500" />
                    </div>
                    <div>
                      <strong>Privacy Rule Compliance:</strong> Our systems are designed to handle Protected 
                      Health Information (PHI) in full compliance with HIPAA Privacy Rule standards, ensuring 
                      appropriate use and disclosure limitations.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <Lock size={18} className="text-greybrain-500" />
                    </div>
                    <div>
                      <strong>Security Rule Implementation:</strong> We implement all required administrative, 
                      physical, and technical safeguards to protect electronic PHI, including encryption, 
                      access controls, and audit trails.
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Processing Card */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="text-greybrain-500" />
                  Data Processing Practices
                </CardTitle>
                <CardDescription>
                  How we handle healthcare data within our AI systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <Shield size={18} className="text-greybrain-500" />
                    </div>
                    <div>
                      <strong>Data Minimization:</strong> Our AI systems are designed to process only the 
                      minimum necessary data required for clinical decision support, reducing exposure risks.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <Shield size={18} className="text-greybrain-500" />
                    </div>
                    <div>
                      <strong>De-identification Protocols:</strong> When using data for model training and 
                      improvement, we employ robust de-identification techniques that exceed HIPAA standards.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <Shield size={18} className="text-greybrain-500" />
                    </div>
                    <div>
                      <strong>Data Segregation:</strong> Customer data is logically separated to prevent 
                      cross-contamination between different healthcare organizations.
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
