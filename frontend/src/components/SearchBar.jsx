import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../services/productService';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (mobileSearchOpen) {
      inputRef.current?.focus();
    }
  }, [mobileSearchOpen]);

  useEffect(() => {
    const query = search.trim();
    if (!query) {
      return undefined;
    }

    let isCurrentRequest = true;
    const timeout = setTimeout(async () => {
      try {
        const results = await getProducts({ search: query, limit: 6 });
        if (isCurrentRequest) setSuggestions(results);
      } catch (error) {
        if (isCurrentRequest) {
          console.error('Failed to fetch product suggestions', error);
          setSuggestions([]);
        }
      } finally {
        if (isCurrentRequest) setLoading(false);
      }
    }, 250);

    return () => {
      isCurrentRequest = false;
      clearTimeout(timeout);
    };
  }, [search]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
        setMobileSearchOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setMobileSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = search.trim();
    setIsOpen(false);
    setMobileSearchOpen(false);
    navigate(`/shop${query ? `?search=${encodeURIComponent(query)}` : ''}`);
  };

  const handleSuggestionClick = (product) => {
    setSearch('');
    setSuggestions([]);
    setIsOpen(false);
    setLoading(false);
    setMobileSearchOpen(false);
    navigate(`/product/${product._id}`);
  };

  const shouldShowSuggestions = isOpen && (loading || suggestions.length > 0 || search.trim().length > 0);
  const toggleMobileSearch = () => {
    if (mobileSearchOpen) {
      setMobileSearchOpen(false);
      setIsOpen(false);
      setLoading(false);
      return;
    }

    setMobileSearchOpen(true);
  };

  return (
    <div className={`search-shell${mobileSearchOpen ? ' mobile-open' : ''}`} ref={containerRef}>
      <form className="search-pill" onSubmit={handleSubmit}>
        <button
          className="search-toggle"
          type="button"
          aria-label={mobileSearchOpen ? 'Close search' : 'Open search'}
          aria-expanded={mobileSearchOpen}
          onClick={toggleMobileSearch}
        >
          {mobileSearchOpen ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4l-6.3 6.31-1.41-1.42L9.17 12 2.88 5.71l1.41-1.42 6.3 6.3 6.3-6.3z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M10.5 3a7.5 7.5 0 015.94 12.56l4.56 4.57 1.41-1.42-4.57-4.56A7.5 7.5 0 1110.5 3zm0 2a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" />
            </svg>
          )}
        </button>
        <input
          ref={inputRef}
          type="text"
          value={search}
          onChange={(event) => {
            const value = event.target.value;
            const hasQuery = Boolean(value.trim());
            setSearch(value);
            setIsOpen(hasQuery);
            setLoading(hasQuery);
            if (!hasQuery) setSuggestions([]);
          }}
          onFocus={() => {
            if (search.trim()) {
              setIsOpen(true);
            }
          }}
          placeholder="Search for products, hobbies..."
          aria-label="Search products"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={shouldShowSuggestions}
          aria-controls="navbar-search-suggestions"
          autoComplete="off"
        />
      </form>

      {shouldShowSuggestions && (
        <div className="search-suggestions" id="navbar-search-suggestions" role="listbox" aria-label="Product search suggestions">
          {loading ? (
            <div className="search-suggestion-status">Searching...</div>
          ) : suggestions.length === 0 ? (
            <div className="search-suggestion-empty">No products found for "{search.trim()}"</div>
          ) : (
            <>
              {suggestions.map((product) => (
                <button
                  type="button"
                  key={product._id}
                  className="search-suggestion-item"
                  onClick={() => handleSuggestionClick(product)}
                >
                  <span className="search-suggestion-icon">🔍</span>
                  <span className="search-suggestion-copy">
                    <span className="search-suggestion-name">{product.name}</span>
                    <span className="search-suggestion-hobby">{product.hobby?.name || 'Hobbify'}</span>
                  </span>
                </button>
              ))}

              <button type="button" className="search-suggestion-view-all" onClick={() => {
                setIsOpen(false);
                navigate(`/shop?search=${encodeURIComponent(search.trim())}`);
              }}>
                View all results →
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
