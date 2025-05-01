
import { Button } from '@/components/ui/button';
import BrainAnimation from './BrainAnimation';
import { ArrowRight, Activity, Brain, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section 
      className={cn(
        "pt-28 pb-20 overflow-hidden relative hero-gradient",
        className
      )}
    >
      <div className="absolute inset-0 opacity-30">
        <BrainAnimation />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-greybrain-200 dark:border-greybrain-700/30 text-greybrain-700 dark:text-greybrain-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              Healthcare AI Innovation
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforming Healthcare with 
              <span className="block heading-gradient">Generative AI</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-greybrain-700/80 dark:text-greybrain-200/80 max-w-2xl lg:max-w-none">
              GreyBrain combines medical expertise with cutting-edge AI technology to enhance clinical decision-making, optimize workflows, and improve patient outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button className="bg-greybrain-400 hover:bg-greybrain-500 text-white px-8 py-6 text-lg" onClick={() => window.location.href = '#features'}>
                Explore Healthcare AI Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-greybrain-400 text-greybrain-600 dark:text-greybrain-300 hover:text-greybrain-400 px-8 py-6 text-lg" onClick={() => window.location.href = '/motivation'}>
                Discover Our Mission
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center justify-center sm:justify-start">
                <div className="w-10 h-10 rounded-full bg-greybrain-400/20 flex items-center justify-center mr-3">
                  <Activity className="h-5 w-5 text-greybrain-500" />
                </div>
                <div>
                  <p className="font-medium">Clinical Excellence</p>
                  <p className="text-sm text-greybrain-600 dark:text-greybrain-300">Improved outcomes</p>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <div className="w-10 h-10 rounded-full bg-greybrain-400/20 flex items-center justify-center mr-3">
                  <Brain className="h-5 w-5 text-greybrain-500" />
                </div>
                <div>
                  <p className="font-medium">Medical AI</p>
                  <p className="text-sm text-greybrain-600 dark:text-greybrain-300">Domain expertise</p>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <div className="w-10 h-10 rounded-full bg-greybrain-400/20 flex items-center justify-center mr-3">
                  <Shield className="h-5 w-5 text-greybrain-500" />
                </div>
                <div>
                  <p className="font-medium">Data Security</p>
                  <p className="text-sm text-greybrain-600 dark:text-greybrain-300">HIPAA compliant</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="relative">
              <div className="absolute -inset-4 bg-greybrain-400/10 rounded-full blur-3xl animate-pulse-soft"></div>
              <div className="w-full h-80 sm:h-96 rounded-2xl bg-gradient-to-br from-greybrain-400 to-greybrain-600 p-1 shadow-lg relative overflow-hidden animate-float">
                <div className="w-full h-full rounded-xl bg-white dark:bg-greybrain-900 flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full">
                    <BrainAnimation className="opacity-70" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto rounded-full bg-greybrain-400 flex items-center justify-center">
                          <Brain className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="mt-4 text-xl font-bold heading-gradient">Healthcare AI</h3>
                        <p className="mt-2 text-sm text-greybrain-600 dark:text-greybrain-300">Medical intelligence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
