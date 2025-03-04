'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Define Article type
type Article = {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
  content?: string[];
};

export default function ArticleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const [article, setArticle] = useState<Article | null>(null);
  const [resolvedParams, setResolvedParams] = useState<{ slug: string } | null>(null);
  const scrollRef = useRef<number | null>(null);

  useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);

  useEffect(() => {
    if (!resolvedParams) return;

    const cachedArticle = sessionStorage.getItem(`article_${resolvedParams.slug}`);
    if (cachedArticle) {
      setArticle(JSON.parse(cachedArticle));
    } else {
      const fetchedArticle: Article = {
        slug: resolvedParams.slug,
        title: 'Explore Our Articles, Tips, And Events about Sustainable Fashion',
        author: 'Sandangans Team',
        date: '1 March 2025',
        image: '/placeholder.svg?height=500&width=800',
        description: 'A comprehensive guide to sustainable fashion',
        content: ['Lorem ipsum dolor sit amet consectetur.', 'In dictumst ullamcorper in urna.', 'Iaculis velit morbi mauris vel commodo malesuada urna.', 'Tellus vitae massa vitae arcu id at pharetra.'],
      };
      setArticle(fetchedArticle);
      sessionStorage.setItem(`article_${resolvedParams.slug}`, JSON.stringify(fetchedArticle));
    }
  }, [resolvedParams]);

  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.back();
  };

  if (!article) {
    return (
      <div className="flex w-full h-screen justify-center items-center">
        <div className="animate-spin">Loading...</div>
      </div>
    );
  }

  return (
    <main className="w-full relative overflow-hidden">
      <Image src={'/images/article/mie.svg'} alt="mie decoration" className=" w-[60px] sm:w-[100px] md:w-[120px] lg:w-[160px] absolute right-0 top-[10%] lg:top-[20%]" height={160} width={160} />
      <Image src={'/images/article/star.svg'} alt="star decoration" className=" w-[60px] sm:w-[100px] md:w-[120px] lg:w-[160px] absolute left-0 top-[15%] lg:top-[6%]" height={160} width={160} />
      <div className="container max-w-4xl mx-auto mt-20 px-4 py-8 relative">
        <div className="mb-8">
          <Link href="/" onClick={handleBackClick} className="inline-flex text-xl items-center text-brown hover:text-brown-300 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to articles
          </Link>
        </div>

        <div className="mb-10 relative">
          <Image src={article.image || '/placeholder.svg'} alt={article.title} width={800} height={500} className="w-full h-auto object-cover rounded-lg mx-auto" priority />
        </div>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-title text-brown text-center mb-6">{article.title}</h1>

          <div className="flex justify-center items-center text-xl font-medium text-brown mb-10">
            <span>{article.author}</span>
            <span className="mx-3 text-brown-300">|</span>
            <span>{article.date}</span>
          </div>

          {article.content?.map((paragraph, index) => (
            <p key={index} className="text-brown text-xl mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Related articles section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <Link href={`article/${article.slug}`} key={index} className="group">
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
      </div>
    </main>
  );
}
