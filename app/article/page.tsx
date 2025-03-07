'use client';


import { useEffect, useRef, useState } from 'react';
import ArticleHead from './components/head';

type Article = {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
};

export default function BlogListing() {
  // Remove unused 'page' variable
  const [, setPage] = useState(1);
  const [, setArticles] = useState<Article[]>([]);
  const loader = useRef<HTMLDivElement>(null);

  const fetchArticles = async (pageNumber: number) => {
    const newArticles: Article[] = Array(6).fill({
      slug: `article-${pageNumber}`,
      title: `Upcycling 101: (Page ${pageNumber})`,
      description: "Don't throw it out—upcycle it!",
      author: 'Sandangans Teampeack',
      date: '1 March 2025',
      image: '/images/article/owi.jpg',
      content: [],
    });
    return newArticles;
  };

  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      requestAnimationFrame(() => {
        window.scrollTo(0, Number.parseInt(savedScrollPosition));
      });
      sessionStorage.removeItem('scrollPosition');
    }

    fetchArticles(1).then((newArticles) => setArticles(newArticles));

    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => {
          const nextPage = prev + 1;
          fetchArticles(nextPage).then((newArticles) =>
            setArticles((old) => [...old, ...newArticles])
          );
          return nextPage;
        });
      }
    }, options);

    // Store current ref in a variable before observing
    const currentLoader = loader.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      // Use the stored variable for cleanup
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, []);

  // const handleArticleClick = (article: Article) => {
  //   sessionStorage.setItem('scrollPosition', window.scrollY.toString());
  //   sessionStorage.setItem(`article_${article.slug}`, JSON.stringify(article));
  // };

  return (
    <>
      <ArticleHead />
      <main className="container mx-auto py-8">
        {/* ...rest of code unchanged... */}
        <div ref={loader} className="h-10 mt-8"></div>
      </main>
    </>
  );
}
