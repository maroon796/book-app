import React from 'react';

function SearchResultList({ searchResults }) {
  return (
    <div>
      <h2>Результати пошуку:</h2>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResultList;
