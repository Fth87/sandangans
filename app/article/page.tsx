'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ArticleHead from './components/head';

// Tipe data untuk artikel
type Article = {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
};

export default function BlogListing() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  // Fungsi untuk mengambil artikel
  const fetchArticles = async (pageNumber: number) => {
    // Simulasi API call
    const newArticles: Article[] = Array(6).fill({
      slug: `article-${pageNumber}`,
      title: `Upcycling 101: Turn Your Old Clothes into Trendy New Pieces (Page ${pageNumber})`,
      description: "Don't throw it out—upcycle it! This beginner's guide to upcycling will show you how to transform your old, unused clothes into trendy...",
      author: 'Sandangans Teampeack',
      date: '1 March 2025',
      image: '/images/article/owi.jpg',
      content: ['Lorem ipsum dolor sit amet consectetur.', 'In dictumst ullamcorper in urna.', 'Iaculis velit morbi mauris vel commodo malesuada urna.', 'Tellus vitae massa vitae arcu id at pharetra.'],
    });
    return newArticles;
  };

  useEffect(() => {
    // Restore scroll position when returning to this page
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      requestAnimationFrame(() => {
        window.scrollTo(0, Number.parseInt(savedScrollPosition));
      });
      sessionStorage.removeItem('scrollPosition');
    }

    // Fetch initial articles
    fetchArticles(1).then((newArticles) => setArticles(newArticles));

    // Set up Intersection Observer
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];
      if (target.isIntersecting) {
        setPage((prevPage) => {
          const nextPage = prevPage + 1;
          fetchArticles(nextPage).then((newArticles) => {
            setArticles((prev) => [...prev, ...newArticles]);
          });
          return nextPage;
        });
      }
    }, options);

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []); // Removed setPage from dependencies

  const handleArticleClick = (article: Article) => {
    // Save current scroll position before navigating to article
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());

    // Cache article data
    sessionStorage.setItem(`article_${article.slug}`, JSON.stringify(article));
  };

  return (
    <>
      <ArticleHead />
      <main className="container mx-auto  py-8 ">
        {/* Trending Section */}
        <section>
          <div className="flex items-center mb-6">
            <h2 className="text-4xl  text-brown text-sans font-medium">Trending</h2>
            <div className="h-0.5 bg-brown w-full ml-3"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Main Featured Post */}
            {articles.length > 0 && (
              <div className="md:col-span-2 overflow-hidden h-full">
                <Link href={`article/${articles[0].slug}`} className="group h-full flex flex-col md:flex-row" onClick={() => handleArticleClick(articles[0])}>
                  <div className="md:w-2/5 md:h-[80%]">
                    <Image src={articles[0].image || '/placeholder.svg'} alt={articles[0].title} width={300} height={400} className="w-full h-full object-cover" />
                  </div>
                  <div className="md:w-3/5 px-6">
                    <h3 className="text-4xl font-medium font-title text-brown mb-6 group-hover:text-brown-300">{articles[0].title}</h3>
                    <p className="line-clamp-4 text-brown font-sans text-2xl font-light mb-6 group-hover:text-brown-300">{articles[0].description}</p>
                    <div className="h-px bg-brown-200 w-full mb-6"></div>
                    <div className="flex w-full items-center text-lg font-sans font-light text-brown mt-auto group-hover:text-brown-300">
                      <span>{articles[0].author}</span>
                      <div className="mx-4 h-6 w-px bg-brown-200"></div>
                      <span>{articles[0].date}</span>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Sidebar Posts */}
            <div className="space-y-4">
              {articles.slice(1, 4).map((article, index) => (
                <Link href={`article/${article.slug}`} key={index} className="group flex items-start gap-4  p-4 " onClick={() => handleArticleClick(article)}>
                  <div className="flex-shrink-0">
                    <Image src={articles[0].image || '/placeholder.svg'} alt="Recycling icon" width={100} height={100} className=" " />
                  </div>
                  <div>
                    <div className="flex items-start text-sm font-light font-sans group-hover:text-brown-300 text-brown mb-1">
                      <span className="">{article.author}</span>
                      <span className="mx-2">|</span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="font-medium font-title text-lg text-brown group-hover:text-brown-300 line-clamp-2">{article.title}</h3>
                    <p className="text-sm font-light text-brown group-hover:text-brown-300 line-clamp-1">{article.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newest Section */}
        <section className="mt-12">
          <div className="flex items-center mb-6">
            <h2 className="text-4xl  text-brown text-sans font-medium">Newest</h2>
            <div className="h-0.5 bg-brown w-full ml-3"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {articles.map((article, index) => (
              <Link href={`article/${article.slug}`} key={index} className="group p-4" onClick={() => handleArticleClick(article)}>
                <article className="overflow-hidden">
                  <Image src={article.image || '/placeholder.svg'} alt={article.title} width={400} height={300} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h3 className="font-medium text-lg font-title text-brown group-hover:text-brown-300 mb-2">{article.title}</h3>
                    <p className="font-light text-brown group-hover:text-brown-300 text-sm mb-4 line-clamp-3">{article.description}</p>
                    <div className="flex justify-between items-center font-light text-brown group-hover:text-brown-300 text-sm ">
                      <span>By {article.author}</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Loader for Intersection Observer */}
        <div ref={loader} className="h-10 mt-8"></div>
      </main>
    </>
  );
}
