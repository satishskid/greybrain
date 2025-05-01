
import { useState, useEffect } from 'react';

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  url: string;
  image?: string;
  date: string;
  source: string;
  tags?: string[];
}

// PubMed API endpoints
const PUBMED_SEARCH_URL = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi';
const PUBMED_FETCH_URL = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi';
const PUBMED_SUMMARY_URL = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi';

// RSS Feed URLs
const RSS_FEEDS = [
  {
    url: 'https://www.healthcareitnews.com/feed',
    name: 'Healthcare IT News'
  },
  {
    url: 'https://www.mobihealthnews.com/feed',
    name: 'MobiHealthNews'
  },
  {
    url: 'https://www.nature.com/npjdigitalmed.rss',
    name: 'npj Digital Medicine'
  }
];

// arXiv API endpoint
const ARXIV_API_URL = 'http://export.arxiv.org/api/query';

// Keywords relevant to GreyBrain
const KEYWORDS = [
  // Primary Keywords (weighted more heavily in search)
  'generative AI healthcare',
  'generative AI medicine',
  'LLM healthcare',
  'LLM medical',
  'large language model healthcare',
  'large language model medical',
  'GPT healthcare',
  'GPT medical',
  
  // Specific Applications
  'generative AI medical documentation',
  'LLM clinical notes',
  'generative AI medical diagnosis',
  'LLM patient care',
  'generative AI medical research',
  'LLM medical knowledge',
  'generative AI medical education',
  'LLM doctor assistance',
  
  // Related Technologies
  'foundation models healthcare',
  'transformer models medicine',
  'medical language model',
  'clinical language model',
  'medical text generation',
  'healthcare text generation'
];

// arXiv categories relevant to GreyBrain
const ARXIV_CATEGORIES = [
  'cs.AI',  // Artificial Intelligence
  'cs.CV',  // Computer Vision
  'cs.CL',  // Computational Linguistics
  'cs.LG',  // Machine Learning
  'stat.ML', // Machine Learning (Stats)
  'q-bio.QM' // Quantitative Methods
];

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Fetch articles from PubMed
  const fetchPubMedArticles = async () => {
    try {
      // Search for relevant articles
      const searchQuery = KEYWORDS.join(' OR ');
      const searchResponse = await fetch(
        `${PUBMED_SEARCH_URL}?db=pubmed&term=${encodeURIComponent(searchQuery)}&retmax=10&retmode=json`
      );
      const searchData = await searchResponse.json();
      const ids = searchData.esearchresult.idlist;

      // Fetch summaries for the articles
      const summaryResponse = await fetch(
        `${PUBMED_SUMMARY_URL}?db=pubmed&id=${ids.join(',')}&retmode=json`
      );
      const summaryData = await summaryResponse.json();

      return Object.values(summaryData.result).slice(0, -1).map((article: any) => ({
        id: article.uid,
        title: article.title,
        description: article.description || 'No abstract available',
        url: `https://pubmed.ncbi.nlm.nih.gov/${article.uid}/`,
        date: article.pubdate,
        source: 'PubMed',
        image: 'https://placehold.co/600x400/f8fafc/94a3b8?text=Medical+Research',
        tags: ['research', 'medical', 'AI']
      }));
    } catch (err) {
      console.error('Error fetching from PubMed:', err);
      return [];
    }
  };

  // Fetch articles from RSS feeds
  const fetchRSSArticles = async () => {
    try {
      const rssArticles = await Promise.all(
        RSS_FEEDS.map(async (feed) => {
          const response = await fetch(
            `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`
          );
          const data = await response.json();
          
          return data.items
            .filter((item: any) => 
              KEYWORDS.some(keyword => 
                item.title.toLowerCase().includes(keyword.toLowerCase()) ||
                item.description.toLowerCase().includes(keyword.toLowerCase())
              )
            )
            .map((item: any) => ({
              id: item.guid,
              title: item.title,
              description: item.description.replace(/<[^>]*>/g, '').slice(0, 200) + '...',
              url: item.link,
              image: item.thumbnail || 'https://placehold.co/600x400/f8fafc/94a3b8?text=Healthcare+News',
              date: item.pubDate,
              source: feed.name,
              tags: ['news', 'healthcare', 'technology']
            }));
        })
      );

      return rssArticles.flat();
    } catch (err) {
      console.error('Error fetching RSS feeds:', err);
      return [];
    }
  };

  // Fallback posts in case both APIs fail
  const getFallbackPosts = (): BlogPost[] => {
    return [
      {
        id: '1',
        title: 'Generative AI in Medical Imaging: New Frontiers in Diagnostics',
        description: 'Researchers have developed a new approach using generative AI models to enhance medical imaging diagnostics, improving early detection rates by 37%.',
        url: '#',
        image: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=Medical+Imaging+AI',
        date: '2025-04-15',
        source: 'HealthTech Today'
      },
      {
        id: '2',
        title: 'LLM-Assisted Clinical Documentation Reduces Physician Burnout',
        description: 'A new study shows that AI-assisted documentation tools can save physicians up to 2 hours per day, significantly reducing burnout while maintaining accuracy.',
        url: '#',
        image: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=Clinical+Documentation',
        date: '2025-04-10',
        source: 'Medical AI Journal'
      },
      {
        id: '3',
        title: 'Patient-Specific Treatment Plans Generated by Healthcare LLMs',
        description: 'AI systems trained on extensive medical literature can now generate personalized treatment plans that incorporate individual patient factors, genomic data, and medical history.',
        url: '#',
        image: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=AI+Treatment+Plans',
        date: '2025-04-05',
        source: 'Future Medicine'
      },
      {
        id: '4',
        title: 'Ethical Considerations in Deploying Generative AI for Healthcare',
        description: 'Medical experts and ethicists outline key guidelines for responsible implementation of generative AI in clinical settings.',
        url: '#',
        image: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=AI+Ethics',
        date: '2025-03-28',
        source: 'Health Ethics Forum'
      },
      {
        id: '5',
        title: 'LLMs Show Promise in Rare Disease Diagnosis',
        description: 'New research demonstrates how large language models can help identify patterns in patient symptoms that point to rare diseases often missed by conventional diagnostic approaches.',
        url: '#',
        image: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=Rare+Disease+AI',
        date: '2025-03-22',
        source: 'Medical Innovation Quarterly'
      },
      {
        id: '6',
        title: 'Generative AI Simulations Help Train Medical Students',
        description: 'Virtual patients created by generative AI provide medical students with diverse and realistic training scenarios, improving diagnostic skills.',
        url: '#',
        image: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=Medical+Training',
        date: '2025-03-18',
        source: 'Medical Education Today'
      }
    ];
  };

  // Fetch articles from arXiv
  const fetchArxivArticles = async () => {
    try {
      const searchQuery = KEYWORDS.map(kw => `(${kw})`).join(' OR ');
      const categoryQuery = ARXIV_CATEGORIES.map(cat => `cat:${cat}`).join(' OR ');
      const fullQuery = `(${searchQuery}) AND (${categoryQuery})`;

      const response = await fetch(
        `${ARXIV_API_URL}?search_query=${encodeURIComponent(fullQuery)}&start=0&max_results=10&sortBy=submittedDate&sortOrder=descending`
      );
      const data = await response.text();
      
      // Parse XML response
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, 'text/xml');
      const entries = xmlDoc.getElementsByTagName('entry');

      return Array.from(entries).map(entry => {
        const title = entry.getElementsByTagName('title')[0].textContent || '';
        const abstract = entry.getElementsByTagName('summary')[0].textContent || '';
        const url = entry.getElementsByTagName('id')[0].textContent || '';
        const published = entry.getElementsByTagName('published')[0].textContent || '';
        const categories = Array.from(entry.getElementsByTagName('category'))
          .map(cat => cat.getAttribute('term'))
          .filter(Boolean);

        return {
          id: url,
          title: title.replace(/\n/g, ' ').trim(),
          description: abstract.slice(0, 200) + '...',
          url,
          date: published,
          source: 'arXiv',
          image: 'https://placehold.co/600x400/f8fafc/94a3b8?text=Research+Paper',
          tags: ['research', 'preprint', ...categories]
        };
      });
    } catch (err) {
      console.error('Error fetching from arXiv:', err);
      return [];
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        
        // Fetch from all sources in parallel
        const [pubmedArticles, rssArticles, arxivArticles] = await Promise.all([
          fetchPubMedArticles(),
          fetchRSSArticles(),
          fetchArxivArticles()
        ]);

        // Combine and sort articles by date
        let allPosts = [...pubmedArticles, ...rssArticles, ...arxivArticles]
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        // If both APIs fail, use fallback data
        if (allPosts.length === 0) {
          allPosts = getFallbackPosts();
        }

        setPosts(allPosts);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setPosts(getFallbackPosts());
        setError('Could not fetch latest articles. Showing cached content.');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};
