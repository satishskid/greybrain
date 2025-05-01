
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, Book, CheckCircle } from "lucide-react";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Medical AI Terms | GreyBrain";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center">Medical AI Terms of Service</h1>
            <p className="text-xl text-center text-greybrain-600 dark:text-greybrain-300 mb-12">
              Terms governing the use of GreyBrain's healthcare AI solutions
            </p>

            {/* Introduction Card */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="text-greybrain-500" />
                  Introduction
                </CardTitle>
                <CardDescription>
                  Understanding our service agreement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  These Terms of Service govern your access to and use of GreyBrain's clinical decision support 
                  system and related healthcare AI solutions (the "Services"). By accessing or using our Services, 
                  you acknowledge that you have read and understood these terms and agree to be bound by them.
                </p>
                <p>
                  Our Services are designed specifically for healthcare professionals and organizations. By using 
                  the Services, you represent and warrant that you are a licensed healthcare provider or are 
                  authorized by such an organization to access and use the Services.
                </p>
              </CardContent>
            </Card>

            {/* Medical Use Disclaimer Card */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="text-greybrain-500" />
                  Medical Use Disclaimer
                </CardTitle>
                <CardDescription>
                  Important limitations regarding clinical decision support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle size={18} className="text-greybrain-500" />
                    </div>
                    <div>
                      <strong>Clinical Judgment:</strong> GreyBrain's AI solutions are designed to support, 
                      not replace, the professional judgment of healthcare providers. All recommendations 
                      provided by our system should be evaluated by qualified medical professionals.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle size={18} className="text-greybrain-500" />
                    </div>
                    <div>
                      <strong>Intended Use:</strong> Our Services are intended to be used as clinical decision 
                      support tools within the scope of practice of licensed healthcare professionals and in 
                      accordance with all applicable medical standards of care.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle size={18} className="text-greybrain-500" />
                    </div>
                    <div>
                      <strong>Regulatory Status:</strong> Users must comply with all applicable laws and 
                      regulations regarding the use of clinical decision support tools in their jurisdiction.
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Licensing Terms Card */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="text-greybrain-500" />
                  Licensing Terms
                </CardTitle>
                <CardDescription>
                  How you can use our healthcare AI solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle size={18} className="text-greybrain-500" />
                    </div>
                    <div>
                      <strong>License Grant:</strong> Subject to these Terms and applicable subscription 
                      agreements, GreyBrain grants you a limited, non-exclusive, non-transferable license 
                      to access and use the Services within your healthcare organization.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle size={18} className="text-greybrain-500" />
                    </div>
                    <div>
                      <strong>Restrictions:</strong> You may not reverse engineer, decompile, or attempt to 
                      derive the source code of our Services. You may not use the Services to develop competing 
                      products.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle size={18} className="text-greybrain-500" />
                    </div>
                    <div>
                      <strong>User Accounts:</strong> You are responsible for maintaining the confidentiality 
                      of your account credentials and for all activities conducted through your account.
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

export default Terms;
