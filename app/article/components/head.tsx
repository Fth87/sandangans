import React from 'react';
import SearchButton from './search';

export default function ArticleHead() {
  return (
    <div className="h-[400px] flex justify-start items-center bg-center bg-cover" style={{ backgroundImage: 'url(/article/header.jpg)' }}>
      <div className="mx-14 flex-col justify-start items-start gap-6 inline-flex">
        <div className=" text-brown-50 text-5xl font-bold font-title w-[70%]">Explore Our Articles, Tips, And Events about Sustainable Fashion</div>
        <SearchButton />
      </div>
    </div>
  );
}
