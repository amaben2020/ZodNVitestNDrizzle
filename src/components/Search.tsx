'use client';

import { useState } from 'react';

const Search = () => {
  const [query, searchQuery] = useState('');
  return (
    <input
      type="search"
      className="p-3 border w-[600px]"
      placeholder="Search users..."
    />
  );
};

export default Search;
