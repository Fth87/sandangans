'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';

export default function SearchButton() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full max-w-xl mt-3">
      <div className="relative border border-brown-50">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-brown-50" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent py-3 pl-10 pr-4 text-brown-50 placeholder-brown-50/80 focus:outline-none"
          placeholder="Search articles, tips, or events"
          style={{ caretColor: 'white' }}
        />
      </div>
    </div>
  );
}
