import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Search = ({ posts }) => {
  const { t } = useLanguage();
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    if (!searchInput.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchInput.toLowerCase();
    const results = posts.filter(post => 
      post.title.toLowerCase().includes(query) || 
      post.content.toLowerCase().includes(query)
    );
    
    setSearchResults(results);
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            handleSearch();
          }}
          placeholder={t('searchPlaceholder')}
          id="searchInput"
        />
      </div>
      
      {searchInput && (
        <div id="searchResults">
          {searchResults.length === 0 ? (
            <p>{t('noResults')}</p>
          ) : (
            searchResults.map((post) => (
              <div key={post.id} className="blog-post">
                <Link to={post.url}>
                  <h3>{post.title}</h3>
                </Link>
                <p>{post.content.substring(0, 100)}...</p>
                <span className="post-date">{post.date}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Search; 