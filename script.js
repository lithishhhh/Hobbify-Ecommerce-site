const hobbies = [
  {
    name: 'Music',
    emoji: '🎸',
    count: '12+',
    image:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80',
    products: [
      { name: 'Acoustic Guitar', rating: 4.8, reviews: 320, price: '₹ 12,999', tag: 'Bestseller', cardImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80' },
      { name: 'Studio Headphones', rating: 4.7, reviews: 186, price: '₹ 7,499', tag: 'New', cardImage: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80' },
      { name: 'Condenser Microphone', rating: 4.6, reviews: 142, price: '₹ 5,999', tag: 'Hot', cardImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80' },
      { name: 'Guitar Strings (Set)', rating: 4.5, reviews: 95, price: '₹ 899', tag: 'Classic', cardImage: 'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  {
    name: 'Art & Craft',
    emoji: '🎨',
    count: '10+',
    image:
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80',
    products: [
      { name: 'Watercolor Set', rating: 4.9, reviews: 280, price: '₹ 1,899', tag: 'Popular', cardImage: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80' },
      { name: 'Canvas Kit', rating: 4.7, reviews: 122, price: '₹ 2,499', tag: 'New', cardImage: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80' },
      { name: 'Brush Bundle', rating: 4.5, reviews: 88, price: '₹ 799', tag: 'Editor’s Pick', cardImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80' },
      { name: 'Pottery Starter', rating: 4.6, reviews: 142, price: '₹ 3,199', tag: 'Fresh', cardImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  {
    name: 'Gardening',
    emoji: '🌱',
    count: '12+',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
    products: [
      { name: 'Planter Set', rating: 4.8, reviews: 402, price: '₹ 2,099', tag: 'Bestseller', cardImage: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80' },
      { name: 'Indoor Herb Kit', rating: 4.6, reviews: 198, price: '₹ 1,399', tag: 'New', cardImage: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80' },
      { name: 'Garden Tool Kit', rating: 4.7, reviews: 172, price: '₹ 2,799', tag: 'Top Rated', cardImage: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=900&q=80' },
      { name: 'Hydroponic Starter', rating: 4.5, reviews: 115, price: '₹ 6,499', tag: 'Hot', cardImage: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  {
    name: 'Photography',
    emoji: '📷',
    count: '11+',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    products: [
      { name: 'Mirrorless Camera', rating: 4.8, reviews: 340, price: '₹ 48,999', tag: 'Premium', cardImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80' },
      { name: 'Camera Lens', rating: 4.7, reviews: 220, price: '₹ 24,499', tag: 'Hot', cardImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80' },
      { name: 'Travel Tripod', rating: 4.6, reviews: 174, price: '₹ 5,899', tag: 'New', cardImage: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80' },
      { name: 'Light Kit', rating: 4.5, reviews: 126, price: '₹ 8,999', tag: 'Popular', cardImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  {
    name: 'Woodworking',
    emoji: '🪵',
    count: '10+',
    image:
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80',
    products: [
      { name: 'Woodworking Kit', rating: 4.7, reviews: 210, price: '₹ 6,399', tag: 'Bestseller', cardImage: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80' },
      { name: 'Precision Saw', rating: 4.6, reviews: 134, price: '₹ 3,999', tag: 'New', cardImage: 'https://images.unsplash.com/photo-1581147036324-c17ac5f7d4c4?auto=format&fit=crop&w=900&q=80' },
      { name: 'Carving Chisel', rating: 4.5, reviews: 114, price: '₹ 1,499', tag: 'Popular', cardImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80' },
      { name: 'Workbench Set', rating: 4.4, reviews: 96, price: '₹ 9,499', tag: 'Classic', cardImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  {
    name: 'Coffee',
    emoji: '☕',
    count: '10+',
    image:
      'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=900&q=80',
    products: [
      { name: 'Barista Set', rating: 4.8, reviews: 311, price: '₹ 4,599', tag: 'Bestseller', cardImage: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=900&q=80' },
      { name: 'Pour Over Kit', rating: 4.7, reviews: 180, price: '₹ 2,699', tag: 'Popular', cardImage: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=80' },
      { name: 'Espresso Tamper', rating: 4.5, reviews: 92, price: '₹ 1,099', tag: 'New', cardImage: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80' },
      { name: 'Coffee Roaster', rating: 4.6, reviews: 146, price: '₹ 7,499', tag: 'Fresh', cardImage: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  {
    name: 'Gaming',
    emoji: '🎮',
    count: '11+',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80',
    products: [
      { name: 'RGB Keyboard', rating: 4.8, reviews: 254, price: '₹ 6,199', tag: 'Bestseller', cardImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80' },
      { name: 'Gaming Mouse', rating: 4.7, reviews: 201, price: '₹ 2,799', tag: 'Top Rated', cardImage: 'https://images.unsplash.com/photo-1587202372775-98927b6b0a8b?auto=format&fit=crop&w=900&q=80' },
      { name: 'Headset Pro', rating: 4.6, reviews: 188, price: '₹ 4,999', tag: 'Hot', cardImage: 'https://images.unsplash.com/photo-1618190136570-d3bdb6b7d705?auto=format&fit=crop&w=900&q=80' },
      { name: 'Streamer Desk', rating: 4.5, reviews: 99, price: '₹ 12,399', tag: 'Featured', cardImage: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  {
    name: 'Mechanical Keyboards',
    emoji: '⌨️',
    count: '10+',
    image:
      'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=900&q=80',
    products: [
      { name: 'Hot-Swap Keyboard', rating: 4.9, reviews: 318, price: '₹ 11,999', tag: 'Featured', cardImage: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=900&q=80' },
      { name: 'Keycap Set', rating: 4.7, reviews: 194, price: '₹ 2,299', tag: 'New', cardImage: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80' },
      { name: 'Switch Pack', rating: 4.6, reviews: 142, price: '₹ 1,799', tag: 'Popular', cardImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80' },
      { name: 'Desk Mat', rating: 4.5, reviews: 110, price: '₹ 1,099', tag: 'Classic', cardImage: 'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  {
    name: 'Crochet & Knitting',
    emoji: '🧶',
    count: '10+',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
    products: [
      { name: 'Yarn Starter Kit', rating: 4.8, reviews: 263, price: '₹ 2,499', tag: 'Bestseller', cardImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80' },
      { name: 'Knitting Needles', rating: 4.6, reviews: 141, price: '₹ 1,199', tag: 'Popular', cardImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80' },
      { name: 'Crochet Set', rating: 4.5, reviews: 116, price: '₹ 1,599', tag: 'New', cardImage: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80' },
      { name: 'Hook Organizer', rating: 4.4, reviews: 88, price: '₹ 999', tag: 'Fresh', cardImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  {
    name: 'Fitness',
    emoji: '🏋️',
    count: '12+',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
    products: [
      { name: 'Yoga Mat', rating: 4.8, reviews: 280, price: '₹ 1,799', tag: 'Popular', cardImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80' },
      { name: 'Resistance Bands', rating: 4.7, reviews: 198, price: '₹ 1,299', tag: 'New', cardImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80' },
      { name: 'Dumbbell Set', rating: 4.6, reviews: 142, price: '₹ 4,599', tag: 'Bestseller', cardImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80' },
      { name: 'Smart Kettlebell', rating: 4.5, reviews: 118, price: '₹ 5,999', tag: 'Fresh', cardImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  {
    name: 'Books & Reading',
    emoji: '📚',
    count: '10+',
    image:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
    products: [
      { name: 'Reading Lamp', rating: 4.7, reviews: 214, price: '₹ 2,399', tag: 'Popular', cardImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80' },
      { name: 'Book Stand', rating: 4.6, reviews: 180, price: '₹ 1,499', tag: 'New', cardImage: 'https://images.unsplash.com/photo-1516979187454-437b6f8c2aea?auto=format&fit=crop&w=900&q=80' },
      { name: 'Reading Bundle', rating: 4.5, reviews: 122, price: '₹ 1,999', tag: 'Hot', cardImage: 'https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=900&q=80' },
      { name: 'Leather Journal', rating: 4.4, reviews: 98, price: '₹ 899', tag: 'Classic', cardImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80' }
    ]
  },
  {
    name: 'DIY & Electronics',
    emoji: '🔧',
    count: '10+',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    products: [
      { name: 'Electronics Starter Kit', rating: 4.8, reviews: 292, price: '₹ 7,499', tag: 'Bestseller', cardImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80' },
      { name: 'Soldering Station', rating: 4.7, reviews: 176, price: '₹ 5,999', tag: 'Hot', cardImage: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=80' },
      { name: 'Smart Sensor Pack', rating: 4.6, reviews: 143, price: '₹ 2,499', tag: 'New', cardImage: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=900&q=80' },
      { name: 'Circuit Tool Kit', rating: 4.5, reviews: 112, price: '₹ 3,299', tag: 'Popular', cardImage: 'https://images.unsplash.com/photo-1558494949cc5c6f0f1d3b2d1?auto=format&fit=crop&w=900&q=80' }
    ]
  }
];

const hobbyGrid = document.getElementById('hobbyGrid');
const productGrid = document.getElementById('productGrid');
const featureTitle = document.getElementById('featuredHobby');

function renderHobbies(selectedName) {
  hobbyGrid.innerHTML = hobbies
    .map((hobby) => {
      const isActive = hobby.name === selectedName;
      return `
        <article class="hobby-card ${isActive ? 'active' : ''}" data-hobby="${hobby.name}" style="--card-image: url('${hobby.image}')">
          <div class="hobby-card-content">
            <div class="meta">
              <span class="emoji">${hobby.emoji}</span>
              <span class="name">${hobby.name}</span>
            </div>
            <div class="count">${hobby.count}</div>
          </div>
        </article>
      `;
    })
    .join('');

  hobbyGrid.querySelectorAll('.hobby-card').forEach((card) => {
    card.addEventListener('click', () => {
      const selected = card.dataset.hobby;
      renderHobbies(selected);
      renderProducts(selected);
    });
  });
}

function renderProducts(selectedHobby) {
  const hobby = hobbies.find((item) => item.name === selectedHobby) || hobbies[0];
  featureTitle.textContent = hobby.name;

  productGrid.innerHTML = hobby.products
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-card-image" style="background-image: url('${product.cardImage}')">
            <span class="product-tag ${product.tag === 'New' || product.tag === 'Fresh' ? 'new' : ''}">${product.tag}</span>
          </div>
          <div class="product-body">
            <div class="product-meta">
              <h4 class="product-name">${product.name}</h4>
            </div>
            <div class="product-rating">
              <span class="star">★</span>
              <span>${product.rating.toFixed(1)} (${product.reviews})</span>
            </div>
            <div class="product-price-row">
              <span class="product-price">${product.price}</span>
              <div class="product-actions">
                <button aria-label="Add to wishlist">♡</button>
                <button aria-label="Add to cart">🛒</button>
              </div>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

const nav = document.querySelector('.topbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 12);
});

renderHobbies('Music');
renderProducts('Music');
