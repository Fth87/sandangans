'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

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

  console.log({ article });

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 relative">
      <div className="mb-8">
        <Link href="/" onClick={handleBackClick} className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to articles
        </Link>
      </div>

      <div className="mb-10 relative">
        <Image src={article.image || '/placeholder.svg'} alt={article.title} width={800} height={500} className="w-full h-auto object-cover rounded-lg mx-auto" priority />
      </div>

      <article className="prose prose-lg max-w-none">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-6">{article.title}</h1>

        <div className="flex justify-center items-center text-gray-600 mb-10">
          <span>{article.author}</span>
          <span className="mx-3">|</span>
          <span>{article.date}</span>
        </div>

        {article.content?.map((paragraph, index) => (
          <p key={index} className="text-gray-700 mb-6 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </article>
    </main>
  );
}
