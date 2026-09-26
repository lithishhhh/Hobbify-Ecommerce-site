import { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';
import { getHobbies } from '../services/hobbyService';
import { getProducts } from '../services/productService';

const Shop = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsLoading, setSuggestionsLoading] = useState(false);
  const [suggestionsError, setSuggestionsError] = useState(false);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const searchControlRef = useRef(null);

  const search = searchParams.get('search') || '';
  const hobby = searchParams.get('hobby') || '';

  useEffect(() => {
    setSearchInput(search);
  }, [search]);

  useEffect(() => {
    const query = searchInput.trim();
    if (!query) {
      setSuggestions([]);
      setSuggestionsLoading(false);
      setSuggestionsError(false);
      setActiveSuggestion(-1);
      return undefined;
    }

    let isCurrentRequest = true;
    const timeout = setTimeout(async () => {
      setSuggestionsLoading(true);
      setSuggestionsError(false);
      try {
        const results = await getProducts({ search: query, hobby, limit: 6 });
        if (isCurrentRequest) {
          setSuggestions(results);
          setActiveSuggestion(-1);
        }
      } catch (error) {
        if (isCurrentRequest) {
          console.error('Failed to fetch product suggestions', error);
          setSuggestions([]);
          setSuggestionsError(true);
        }
      } finally {
        if (isCurrentRequest) {
          setSuggestionsLoading(false);
        }
      }
    }, 250);

    return () => {
      isCurrentRequest = false;
      clearTimeout(timeout);
    };
  }, [searchInput, hobby]);

  useEffect(() => {
    getHobbies().then(setHobbies).catch((error) => console.error('Failed to fetch hobbies', error));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchControlRef.current && !searchControlRef.current.contains(event.target)) {
        setSuggestionsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSuggestionsOpen(false);
        setActiveSuggestion(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getProducts({ search, hobby });
        setProducts(data);
      } catch (error) {
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [search, hobby]);

  const selectedHobby = hobbies.find((item) => item._id === hobby || item.name === hobby);
  const hobbyName = selectedHobby?.name || (hobby && !hobby.match(/^[a-f\d]{24}$/i) ? hobby : '');
  const headerTitle = hobbyName ? `${hobbyName} Products` : search ? `Results for “${search}”` : 'Shop';

  const updateFilters = (nextSearch, nextHobby) => {
    const params = new URLSearchParams();
    if (nextSearch.trim()) params.set('search', nextSearch.trim());
    if (nextHobby) params.set('hobby', nextHobby);
    setSuggestionsOpen(false);
    setActiveSuggestion(-1);
    navigate(`/shop${params.toString() ? `?${params}` : ''}`);
  };

  const selectSuggestion = (product) => {
    setSearchInput(product.name);
    updateFilters(product.name, hobby);
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === 'ArrowDown' && suggestions.length > 0) {
      event.preventDefault();
      setSuggestionsOpen(true);
      setActiveSuggestion((current) => (current + 1) % suggestions.length);
    } else if (event.key === 'ArrowUp' && suggestions.length > 0) {
      event.preventDefault();
      setSuggestionsOpen(true);
      setActiveSuggestion((current) => (current <= 0 ? suggestions.length - 1 : current - 1));
    } else if (event.key === 'Enter' && suggestionsOpen && activeSuggestion >= 0) {
      event.preventDefault();
      selectSuggestion(suggestions[activeSuggestion]);
    }
  };

  const showSuggestions = suggestionsOpen && searchInput.trim();

  return (
    <div className="page-shell">
      <Navbar />
      <main className="content-page">
        <div className="inner-page-header">
          <h2>{headerTitle}</h2>
          <p>{products.length} curated items</p>
        </div>

        <form
          className="shop-filters"
          onSubmit={(event) => {
            event.preventDefault();
            updateFilters(searchInput, hobby);
          }}
        >
          <div className="shop-search-control" ref={searchControlRef}>
            <input
              type="search"
              value={searchInput}
              onChange={(event) => {
                setSearchInput(event.target.value);
                setSuggestionsOpen(Boolean(event.target.value.trim()));
              }}
              onFocus={() => {
                if (searchInput.trim()) setSuggestionsOpen(true);
              }}
              onKeyDown={handleSearchKeyDown}
              placeholder="Search products..."
              aria-label="Search products"
              role="combobox"
              aria-autocomplete="list"
              aria-expanded={Boolean(showSuggestions)}
              aria-controls="shop-search-suggestions"
              aria-activedescendant={activeSuggestion >= 0 ? `shop-suggestion-${activeSuggestion}` : undefined}
              autoComplete="off"
            />
            {showSuggestions && (
              <div
                className="search-suggestions shop-search-suggestions"
                id="shop-search-suggestions"
                role="listbox"
                aria-label="Product search suggestions"
              >
                {suggestionsLoading ? (
                  <div className="search-suggestion-status" role="status">Searching products...</div>
                ) : suggestionsError ? (
                  <div className="search-suggestion-empty" role="status">Suggestions are unavailable. You can still search all products.</div>
                ) : suggestions.length === 0 ? (
                  <div className="search-suggestion-empty">No products found for “{searchInput.trim()}”</div>
                ) : (
                  suggestions.map((product, index) => (
                    <button
                      type="button"
                      key={product._id}
                      id={`shop-suggestion-${index}`}
                      className={`search-suggestion-item${activeSuggestion === index ? ' active' : ''}`}
                      role="option"
                      aria-selected={activeSuggestion === index}
                      onMouseEnter={() => setActiveSuggestion(index)}
                      onClick={() => selectSuggestion(product)}
                    >
                      <img className="shop-suggestion-image" src={product.image} alt="" />
                      <span className="search-suggestion-copy">
                        <span className="search-suggestion-name">{product.name}</span>
                        <span className="search-suggestion-hobby">{product.hobby?.name || 'Hobbify'}</span>
                      </span>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
          <select
            value={selectedHobby?._id || (hobbyName && selectedHobby ? selectedHobby._id : '')}
            onChange={(event) => updateFilters(searchInput, event.target.value)}
            aria-label="Filter by hobby"
          >
            <option value="">All hobbies</option>
            {hobbies.map((item) => (
              <option key={item._id} value={item._id}>{item.name}</option>
            ))}
          </select>
          <button className="primary-btn" type="submit">Search</button>
        </form>

        {loading ? <div className="empty-message">Loading products...</div> : <ProductGrid products={products} />}
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
