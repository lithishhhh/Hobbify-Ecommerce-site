import { useEffect, useMemo, useRef, useState } from 'react';
import Hero from '../components/Hero';
import HobbyGrid from '../components/HobbyGrid';
import HobbyToast from '../components/HobbyToast';
import AdminProductUpload from '../components/AdminProductUpload';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { getHobbies } from '../services/hobbyService';
import { getProducts } from '../services/productService';

const hobbyMessages = {
  Music: 'So you\'re choosing Music? Good. Your neighbors were getting too comfortable.',
  'Art & Craft': 'Art & Craft? Finally, an excuse to turn random things into masterpieces.',
  Gardening: 'Gardening? Time to grow something other than your screen time.',
  Photography: 'Photography? Because apparently your camera roll needs 3,000 more photos.',
  Gaming: 'Gaming? Productivity can wait. Your next level can\'t.',
  Coffee: 'Coffee? Technically it\'s a hobby. Emotionally, it\'s survival.',
  'Books & Reading': 'Reading? Your bookshelf is ready. Your backlog isn\'t.',
  Fitness: 'Fitness? Because your chair has had enough of you.',
  Woodworking: 'Woodworking? Time to make something better than your IKEA furniture.',
  'Mechanical Keyboards': 'Mechanical Keyboards? Yes, typing dramatically is a valid hobby.',
  'Crochet & Knitting': 'Crochet & Knitting? Let\'s turn yarn into something suspiciously impressive.',
  'DIY & Electronics': 'DIY & Electronics? Because buying it is apparently too easy.',
};

const CARDS_PER_HOBBY = 4;
const DEFAULT_HOME_CARDS = 48;
const ADMIN_FIREBASE_UID = '2MRrfTnQH5amE5jF3FvQ83ssBHb2';
const HOME_HOBBY_ORDER = [
  'Music',
  'Fitness',
  'Gaming',
  'Books & Reading',
  'Art & Craft',
  'Gardening',
  'Photography',
  'Coffee',
  'Woodworking',
  'Mechanical Keyboards',
  'Crochet & Knitting',
  'DIY & Electronics',
];

const getHobbyKey = (product) => product?.hobby?._id || product?.hobby?.name || product?.hobby;

const Home = () => {
  const { firebaseUid, token } = useAuth();
  const [hobbies, setHobbies] = useState([]);
  const [selectedHobby, setSelectedHobby] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const productSectionRef = useRef(null);

  useEffect(() => {
    const fetchHomeData = async () => {
      setLoading(true);
      try {
        const [hobbyList, productList] = await Promise.all([getHobbies(), getProducts()]);
        setHobbies(hobbyList);
        setAllProducts(productList);
      } catch (error) {
        console.error('Failed to fetch home data', error);
        setHobbies([]);
        setAllProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  const featuredGroups = useMemo(() => {
    const productsForHobby = (hobby) =>
      allProducts.filter((product) => {
        const key = getHobbyKey(product);
        return key === hobby._id || key === hobby.name || product?.hobby?.name === hobby.name;
      });

    if (selectedHobby) {
      return [
        {
          hobby: selectedHobby,
          products: productsForHobby(selectedHobby),
        },
      ];
    }

    const orderedHobbies = [...hobbies].sort((a, b) => {
      const aIndex = HOME_HOBBY_ORDER.indexOf(a.name);
      const bIndex = HOME_HOBBY_ORDER.indexOf(b.name);
      return (aIndex === -1 ? HOME_HOBBY_ORDER.length : aIndex) - (bIndex === -1 ? HOME_HOBBY_ORDER.length : bIndex);
    });


    const groups = [];
    let remaining = DEFAULT_HOME_CARDS;

    orderedHobbies.forEach((hobby) => {
      if (remaining <= 0) return;

      const products = productsForHobby(hobby).slice(0, Math.min(CARDS_PER_HOBBY, remaining));
      if (!products.length) return;

      groups.push({ hobby, products });
      remaining -= products.length;
    });

    return groups;
  }, [allProducts, hobbies, selectedHobby]);

  const handleHobbySelect = (hobby) => {
    if (!hobby) return;

    setSelectedHobby(hobby);

    const message = hobbyMessages[hobby.name] || `${hobby.name} it is. Let’s make the most of it.`;
    setToastMessage(message);
    setToastVisible(true);

    clearTimeout(handleHobbySelect.timeoutId);
    handleHobbySelect.timeoutId = setTimeout(() => setToastVisible(false), 2800);

    if (window.innerWidth <= 860) {
      productSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="page-shell">
      <Navbar />
      <main>
        {firebaseUid === ADMIN_FIREBASE_UID && <AdminProductUpload token={token} />}
        <Hero />

        <section className="category-section">
          <div className="section-label">EXPLORE YOUR PASSION</div>
          <h2>What’s Your Hobby?</h2>
          <p>Choose what you love, and we’ll show you the best products for your journey.</p>
          <HobbyGrid
            hobbies={hobbies}
            selectedHobby={selectedHobby}
            onSelect={handleHobbySelect}
          />
        </section>

        <section className="featured-section" ref={productSectionRef}>
          {loading ? (
            <div className="empty-message">Loading products...</div>
          ) : featuredGroups.length > 0 ? (
            featuredGroups.map(({ hobby, products }) => (
              <div className="hobby-product-block" key={hobby._id || hobby.name}>
                <div className="featured-header">
                  <h3>
                    Popular in <span>{hobby.name}</span>
                  </h3>
                  <button
                    className="view-all"
                    onClick={() => window.location.assign(`/shop?hobby=${encodeURIComponent(hobby.name)}`)}
                  >
                    View All {hobby.name} <span>→</span>
                  </button>
                </div>

                {products.length > 0 ? (
                  <ProductGrid products={products} />
                ) : (
                  <div className="empty-message">
                    Couldn’t load {hobby.name} products right now.{' '}
                    <button className="link-button" onClick={() => handleHobbySelect(hobby)}>Try Again</button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="empty-message">No products to show right now.</div>
          )}
        </section>
      </main>

      <HobbyToast
        hobby={selectedHobby}
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />

      <Footer />
    </div>
  );
};

export default Home;
