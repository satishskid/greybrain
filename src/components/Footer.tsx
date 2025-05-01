
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Brain, Twitter, Facebook, Instagram, Linkedin, ArrowRight, Mail, FileText, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const footerLinks = {
    solutions: [
      { name: 'Healthcare AI Solutions', href: '/features', icon: <ArrowRight size={16} /> },
      { name: 'Clinical Decision Support', href: '/education', icon: <ArrowRight size={16} /> },
    ],
    company: [
      { name: 'Our Mission', href: '/education', icon: <BookOpen size={16} /> },
      { name: 'Healthcare AI Blog', href: '/blog', icon: <BookOpen size={16} /> },
    ],
    legal: [
      { name: 'HIPAA & Data Policy', href: '/privacy', icon: <FileText size={16} /> },
      { name: 'Service Terms for Healthcare', href: '/terms', icon: <FileText size={16} /> },
    ],
  };
  
  const socialLinks = [
    { icon: <Twitter size={18} />, href: 'https://twitter.com/greybrain', label: "Twitter" },
    { icon: <Facebook size={18} />, href: 'https://facebook.com/greybrain', label: "Facebook" },
    { icon: <Instagram size={18} />, href: 'https://instagram.com/greybrain', label: "Instagram" },
    { icon: <Linkedin size={18} />, href: 'https://linkedin.com/company/greybrain', label: "LinkedIn" },
  ];
  
  return (
    <footer className="bg-greybrain-100 dark:bg-greybrain-900">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter */}
        <div className="mb-16 p-8 rounded-xl bg-white dark:bg-greybrain-800/50 shadow-lg">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay updated with Healthcare AI advancements</h3>
              <p className="text-greybrain-600 dark:text-greybrain-300">
                Get the latest medical AI research and healthcare implementation updates.
              </p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-greybrain-400" size={18} />
                <Input 
                  type="email" 
                  placeholder="Your professional email address" 
                  className="pl-10 pr-3 py-6 w-full"
                />
              </div>
              <Button className="bg-greybrain-400 hover:bg-greybrain-500 py-6" variant="healthcare">
                Subscribe to Updates
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-greybrain-400 to-greybrain-600 flex items-center justify-center">
                <Brain className="h-4 w-4 text-white" />
              </div>
              <span className="ml-2 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-greybrain-700 to-greybrain-500 dark:from-greybrain-300 dark:to-greybrain-400">
                GreyBrain
              </span>
            </div>
            <p className="text-greybrain-600 dark:text-greybrain-300 mb-6 max-w-xs">
              Combining clinical expertise with advanced AI to transform healthcare delivery, enhance medical decision-making, and improve patient outcomes.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  className="w-8 h-8 rounded-full bg-greybrain-200 dark:bg-greybrain-700 flex items-center justify-center text-greybrain-600 dark:text-greybrain-300 hover:bg-greybrain-400 hover:text-white dark:hover:bg-greybrain-400 transition-colors"
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Healthcare Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="flex items-center gap-2 text-greybrain-600 dark:text-greybrain-300 hover:text-greybrain-400 dark:hover:text-greybrain-400 transition-colors">
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">About GreyBrain</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="flex items-center gap-2 text-greybrain-600 dark:text-greybrain-300 hover:text-greybrain-400 dark:hover:text-greybrain-400 transition-colors">
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="flex items-center gap-2 text-greybrain-600 dark:text-greybrain-300 hover:text-greybrain-400 dark:hover:text-greybrain-400 transition-colors">
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-greybrain-200 dark:border-greybrain-700/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-greybrain-600 dark:text-greybrain-300 text-sm mb-4 md:mb-0">
            &copy; {year} GreyBrain Technologies. All rights reserved. HIPAA compliant healthcare AI solutions.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-greybrain-600 dark:text-greybrain-300 hover:text-greybrain-400 dark:hover:text-greybrain-400">
              Healthcare Data Policy
            </Link>
            <Link to="/terms" className="text-sm text-greybrain-600 dark:text-greybrain-300 hover:text-greybrain-400 dark:hover:text-greybrain-400">
              Medical AI Terms
            </Link>
            <button 
              className="text-sm text-greybrain-600 dark:text-greybrain-300 hover:text-greybrain-400 dark:hover:text-greybrain-400"
              onClick={() => alert("Cookie preferences updated")}
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
