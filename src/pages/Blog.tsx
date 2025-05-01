
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useBlogPosts, BlogPost } from '../services/BlogService';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import BrainAnimation from '../components/BrainAnimation';

const Blog = () => {
  const { posts, loading, error } = useBlogPosts();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter posts based on search query
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-12 md:pb-20 overflow-hidden relative hero-gradient">
          <div className="absolute inset-0 opacity-20">
            <BrainAnimation />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Latest in <span className="heading-gradient">Healthcare AI</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-greybrain-700/80 dark:text-greybrain-200/80">
                Discover cutting-edge research, innovations, and applications of generative AI in medicine
              </p>
              
              {/* Search */}
              <div className="flex max-w-md mx-auto">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-greybrain-400 h-5 w-5" />
                  <Input 
                    type="text"
                    placeholder="Search articles..."
                    className="pl-10 pr-4 py-6 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-16 bg-white dark:bg-greybrain-900/30">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 border-4 border-greybrain-400 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-lg text-greybrain-600 dark:text-greybrain-300">Loading articles...</p>
              </div>
            ) : error ? (
              <div className="max-w-md mx-auto text-center py-12 px-4 bg-red-50 dark:bg-red-900/10 rounded-lg">
                <p className="text-red-600 dark:text-red-400">{error}</p>
                <Button 
                  className="mt-4 bg-greybrain-400 hover:bg-greybrain-500"
                  onClick={() => window.location.reload()}
                >
                  Try Again
                </Button>
              </div>
            ) : (
              <>
                {filteredPosts.length === 0 ? (
                  <div className="text-center py-16">
                    <h3 className="text-2xl font-semibold mb-2">No articles found</h3>
                    <p className="text-greybrain-600 dark:text-greybrain-300 mb-4">
                      Try adjusting your search terms or browse our categories
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setSearchQuery('')}
                    >
                      Clear Search
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post: BlogPost) => (
                      <article key={post.id} className="bg-white dark:bg-greybrain-800/50 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full border border-gray-100 dark:border-greybrain-700/30">
                        <div className="h-32 overflow-hidden rounded-t-lg">
                          <img 
                            src={post.image || 'https://placehold.co/600x400/f8fafc/94a3b8?text=GreyBrain'} 
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-greybrain-700/30 text-gray-600 dark:text-gray-300">{post.source}</span>
                            <span className="text-sm text-greybrain-500">{formatDate(post.date)}</span>
                          </div>
                          <h3 className="text-base font-semibold mb-2 line-clamp-2 text-gray-900 dark:text-gray-100">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-3 flex-grow line-clamp-2 text-sm">
                            {post.description}
                          </p>
                          <a 
                            href={post.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 text-sm font-medium transition-colors"
                          >
                            Read Article
                            <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
