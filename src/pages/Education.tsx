
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Book, BookOpen, Layers } from 'lucide-react';

const Education = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-28 pb-16 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="heading-gradient">Education Mission</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-greybrain-700/80 dark:text-greybrain-200/80">
                Empowering healthcare professionals with the knowledge and skills to harness the power of generative AI
              </p>
            </div>
          </div>
        </section>
        
        {/* Education Mission Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Our Educational Philosophy</h2>
                <p className="text-lg mb-6">
                  At GreyBrain, we believe that the successful integration of generative AI in healthcare relies on 
                  well-informed professionals who understand both the potential and limitations of these technologies.
                </p>
                <p className="text-lg">
                  Our comprehensive training programs are designed by experts in healthcare AI to ensure that medical 
                  professionals can confidently navigate the rapidly evolving landscape of generative AI.
                </p>
              </div>
              
              {/* Education Programs */}
              <div className="mb-16">
                <Tabs defaultValue="courses">
                  <TabsList className="grid w-full grid-cols-3 mb-8">
                    <TabsTrigger value="courses" className="flex items-center gap-2">
                      <Book className="h-4 w-4" />
                      <span>Courses</span>
                    </TabsTrigger>
                    <TabsTrigger value="workshops" className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      <span>Workshops</span>
                    </TabsTrigger>
                    <TabsTrigger value="certifications" className="flex items-center gap-2">
                      <Layers className="h-4 w-4" />
                      <span>Certifications</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="courses" className="space-y-6">
                    <div className="feature-card">
                      <h3 className="text-2xl font-semibold mb-3">Foundations of Generative AI in Healthcare</h3>
                      <p className="mb-4">
                        A comprehensive introduction to the principles and applications of generative AI in medical contexts.
                        Designed for healthcare professionals at all levels.
                      </p>
                      <Button className="bg-greybrain-400 hover:bg-greybrain-500">Learn More</Button>
                    </div>
                    
                    <div className="feature-card">
                      <h3 className="text-2xl font-semibold mb-3">Advanced Medical LLM Applications</h3>
                      <p className="mb-4">
                        Deep dive into Large Language Models specifically trained for medical applications, 
                        covering implementation strategies and ethical considerations.
                      </p>
                      <Button className="bg-greybrain-400 hover:bg-greybrain-500">Learn More</Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="workshops" className="space-y-6">
                    <div className="feature-card">
                      <h3 className="text-2xl font-semibold mb-3">Hands-on AI Model Training</h3>
                      <p className="mb-4">
                        Practical workshops where participants get hands-on experience with training and fine-tuning 
                        AI models for specific medical use cases.
                      </p>
                      <Button className="bg-greybrain-400 hover:bg-greybrain-500">Register</Button>
                    </div>
                    
                    <div className="feature-card">
                      <h3 className="text-2xl font-semibold mb-3">AI Implementation Strategy</h3>
                      <p className="mb-4">
                        Strategic planning sessions for healthcare organizations looking to integrate 
                        AI solutions into their workflows.
                      </p>
                      <Button className="bg-greybrain-400 hover:bg-greybrain-500">Register</Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="certifications" className="space-y-6">
                    <div className="feature-card">
                      <h3 className="text-2xl font-semibold mb-3">Healthcare AI Practitioner</h3>
                      <p className="mb-4">
                        Professional certification recognizing expertise in implementing and managing AI solutions
                        in clinical settings.
                      </p>
                      <Button className="bg-greybrain-400 hover:bg-greybrain-500">Apply</Button>
                    </div>
                    
                    <div className="feature-card">
                      <h3 className="text-2xl font-semibold mb-3">Medical Data Science Specialist</h3>
                      <p className="mb-4">
                        Advanced certification focused on the technical aspects of medical data handling,
                        model training, and compliance with healthcare regulations.
                      </p>
                      <Button className="bg-greybrain-400 hover:bg-greybrain-500">Apply</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              {/* Education Partners */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Education Partners</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-violet-100 dark:bg-violet-900/30 border border-violet-200 dark:border-violet-700/30 shadow-lg">
                    <h3 className="text-xl font-semibold mb-3">IIHMRB</h3>
                    <p className="mb-4">
                      Partnering with the International Institute of Health Management Research to develop comprehensive
                      healthcare AI curriculum and research opportunities.
                    </p>
                    <Button variant="outline" className="border-violet-400 text-violet-600 dark:text-violet-300 hover:bg-violet-100">
                      Partnership Details
                    </Button>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-violet-100 dark:bg-violet-900/30 border border-violet-200 dark:border-violet-700/30 shadow-lg">
                    <h3 className="text-xl font-semibold mb-3">Medtrain</h3>
                    <p className="mb-4">
                      Collaboration with Medtrain to deliver specialized training programs and workshops for
                      medical professionals across different specialties.
                    </p>
                    <Button variant="outline" className="border-violet-400 text-violet-600 dark:text-violet-300 hover:bg-violet-100">
                      Partnership Details
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

export default Education;
