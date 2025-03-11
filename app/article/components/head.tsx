import React from 'react';
import SearchButton from './search';
import imageLoader from '@/lib/imageLoader';

export default function ArticleHead() {
  return (
    <div className="h-[400px] flex justify-start items-center bg-center bg-cover" style={{ backgroundImage: `url(${imageLoader({src: '/article/header.jpg', width: 1920, quality: 100})})` }}>
      <div className="mx-4 md:mx-10 lg:mx-14 flex-col justify-start items-start gap-6 inline-flex">
        <div className=" text-brown-50 text-3xl md:text-4xl lg:text-5xl font-bold font-title w-[70%]">Explore Our Articles, Tips, And Events about Sustainable Fashion</div>
        <SearchButton />
      </div>
    </div>
  );
}
