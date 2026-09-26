const Hobby = require('../models/Hobby');
const Product = require('../models/Product');

const hobbySeedData = [
  {
    name: 'Music',
    count: '12+',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80',
    description: 'Discover instruments, recordings and premium accessories for every music lover.',
  },
  {
    name: 'Art & Craft',
    count: '10+',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80',
    description: 'Paints, sketching tools, clay and craft kits designed for creative minds.',
  },
  {
    name: 'Gardening',
    count: '12+',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
    description: 'Create a greener space with planters, tools and indoor growing essentials.',
  },
  {
    name: 'Photography',
    count: '11+',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    description: 'Capture every detail with cameras, lenses and travel-ready gear.',
  },
  {
    name: 'Woodworking',
    count: '10+',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80',
    description: 'Build, carve and refine with durable workshop essentials.',
  },
  {
    name: 'Coffee',
    count: '10+',
    image: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=900&q=80',
    description: 'Elevate your daily ritual with grinders, brewers and café quality tools.',
  },
  {
    name: 'Gaming',
    count: '11+',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80',
    description: 'Level up your setup with immersive accessories and ergonomic gear.',
  },
  {
    name: 'Mechanical Keyboards',
    count: '10+',
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=900&q=80',
    description: 'Build the perfect typing experience with premium switches and keycaps.',
  },
  {
    name: 'Cloths',
    count: '10+',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
    description: 'Create cozy handmade pieces with yarns, hooks and starter kits.',
  },
  {
    name: 'Fitness',
    count: '12+',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
    description: 'Train smarter with home workout essentials and recovery tools.',
  },
  {
    name: 'Books & Reading',
    count: '10+',
    image: 'https://images.pexels.com/photos/17548877/pexels-photo-17548877/free-photo-of-young-woman-holding-a-book-in-a-library.jpeg?h=1000&w=1500&fit=crop',
    description: 'Create the perfect reading ritual with journals, lighting and cosy accessories.',
  },
  {
    name: 'DIY & Electronics',
    count: '10+',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    description: 'Prototype, repair and build with electronics kits and maker tools.',
  },
];

const productSeedData = {
  Music: [
    { name: 'Acoustic Guitar', description: 'Premium acoustic guitar for beginners and seasoned players.', price: 12999, rating: 4.8, reviews: 320, tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80', stock: 25 },
    { name: 'Studio Headphones', description: 'Immersive sound with deep bass and long-lasting comfort.', price: 7499, rating: 4.7, reviews: 186, tag: 'New', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80', stock: 18 },
    { name: 'Audiophile IEM', description: 'Capture crystal-clear vocals and instruments in studio quality.', price: 5999, rating: 4.6, reviews: 142, tag: 'Hot', image: 'https://images.unsplash.com/photo-1788001946091-072806bcdc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 12 },
    { name: 'Guitar Strings (Set)', description: 'Premium set for smoother resonance and stable tuning.', price: 899, rating: 4.5, reviews: 95, tag: 'Classic', image: 'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?auto=format&fit=crop&w=900&q=80', stock: 40 },
      {
      name: 'Electric Guitar',
      description: 'Versatile electric guitar designed for expressive riffs, chords and stage performance.',
      price: 18999,
      rating: 4.7,
      reviews: 214,
      tag: 'Popular',
      image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=900&q=80',
      stock: 14
    },
    {
      name: 'Digital Piano',
      description: 'Compact digital piano with realistic keys for practice, composition and performance.',
      price: 24999,
      rating: 4.8,
      reviews: 176,
      tag: 'Premium',
      image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=900&q=80',
      stock: 9
    },
    {
      name: 'Violin Starter Kit',
      description: 'Complete violin setup for beginners ready to explore classical and modern music.',
      price: 8999,
      rating: 4.6,
      reviews: 128,
      tag: 'New',
      image: 'https://images.unsplash.com/photo-1631541312976-aeec5dddbf06?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      stock: 17
    },
    {
      name: 'Ukulele',
      description: 'Lightweight four-string ukulele with a warm tone for casual playing and travel.',
      price: 3499,
      rating: 4.7,
      reviews: 203,
      tag: 'Trending',
      image: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=900&q=80',
      stock: 31
    },
  
  
  ],

  
  'Art & Craft': [
    { name: 'Watercolor Set', description: 'Portable, vibrant set for refined painting practice.', price: 1899, rating: 4.9, reviews: 280, tag: 'Popular', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80', stock: 30 },
    { name: 'Canvas Kit', description: 'Everything you need to sketch, paint and frame your latest ideas.', price: 1299, rating: 4.7, reviews: 122, tag: 'New', image: 'https://images.unsplash.com/photo-1615233877682-fce31fbdb8d7?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 20 },
    { name: 'Brush Bundle', description: 'Precision set crafted for detail work and layering.', price: 999, rating: 4.5, reviews: 88, tag: 'Best Pick', image: 'https://images.unsplash.com/photo-1574703974958-bea8182a7a36?q=80&w=1507&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 36 },
    { name: 'Pottery Starter', description: 'Begin sculpting with clay, tools and a guided starter pack.', price: 2199, rating: 4.6, reviews: 142, tag: 'Fresh', image: 'https://images.unsplash.com/photo-1607556671927-78a6605e290b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 14 },
     {
      name: 'Acrylic Paint Collection',
      description: 'Richly pigmented acrylic colours for canvas painting, crafts and creative projects.',
      price: 2199,
      rating: 4.8,
      reviews: 246,
      tag: 'Bestseller',
      image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=80',
      stock: 32
    },
    {
      name: 'Sketching Pencil Set',
      description: 'Professional graphite range for shading, portraits, illustrations and detailed sketches.',
      price: 999,
      rating: 4.7,
      reviews: 187,
      tag: 'Popular',
      image: 'https://images.pexels.com/photos/8580767/pexels-photo-8580767.jpeg?h=1000&w=1500&fit=crop',
      stock: 45
    },
    {
      name: 'Calligraphy Starter Kit',
      description: 'Elegant lettering kit with nibs, ink and practice tools for aspiring calligraphers.',
      price: 1599,
      rating: 4.6,
      reviews: 132,
      tag: 'New',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
      stock: 24
    },
    {
      name: 'Craft Cutting Mat',
      description: 'Self-healing cutting surface designed for precise paper and fabric craft work.',
      price: 1299,
      rating: 4.5,
      reviews: 91,
      tag: 'Essential',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80',
      stock: 29
    },
    
  ],
  
  Gardening: [
    { name: 'Planter Set', description: 'Stylish indoor planters built for small spaces and beautiful plants.', price: 2099, rating: 4.8, reviews: 402, tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1685689318202-b5a2d11ba7ed?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 28 },
    { name: 'Indoor Herb Kit', description: 'Grow your own herbs at home with fuss-free starter essentials.', price: 1399, rating: 4.6, reviews: 198, tag: 'New', image: 'https://images.unsplash.com/photo-1613568466225-392f7c272664?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 22 },
    { name: 'Garden Tool Kit', description: 'Durable tools for digging, trimming and managing your garden.', price: 1799, rating: 4.7, reviews: 172, tag: 'Top Rated', image: 'https://images.unsplash.com/photo-1573561368183-fd88bdb4503d?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 18 },
    { name: 'Hydroponic Starter', description: 'An easy way to grow greens and herbs with minimal mess.', price: 6499, rating: 4.5, reviews: 115, tag: 'Hot', image: 'https://images.unsplash.com/photo-1657818020607-6fbc636f5e41?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 9 },
      {
      name: 'Seed Organizer Box',
      description: 'Organized storage solution for keeping your favourite garden seeds labelled and protected.',
      price: 899,
      rating: 4.6,
      reviews: 82,
      tag: 'Essential',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80',
      stock: 34
    },
    {
      name: 'Watering Can',
      description: 'Balanced metal watering can designed for controlled watering of indoor and outdoor plants.',
      price: 1499,
      rating: 4.7,
      reviews: 146,
      tag: 'Popular',
      image: 'https://images.pexels.com/photos/7782086/pexels-photo-7782086.jpeg?h=1000&w=1500&fit=crop',
      stock: 27
    },
    {
      name: 'Pruning Shears',
      description: 'Sharp garden shears for clean trimming of branches, stems and ornamental plants.',
      price: 1199,
      rating: 4.8,
      reviews: 188,
      tag: 'Top Rated',
      image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=900&q=80',
      stock: 31
    },
    {
      name: 'Vertical Garden Kit',
      description: 'Space-saving planter system for growing herbs and greenery on walls or balconies.',
      price: 3499,
      rating: 4.6,
      reviews: 103,
      tag: 'Trending',
      image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=900&q=80',
      stock: 13
    },
  ],
  Photography: [
    { name: 'Mirrorless Camera', description: 'Capture sharp details and cinematic color in every frame.', price: 48999, rating: 4.8, reviews: 340, tag: 'Premium', image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 8 },
    { name: 'Camera Lens', description: 'High-performance lens for portraits, landscapes and close-ups.', price: 24499, rating: 4.7, reviews: 220, tag: 'Hot', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80', stock: 11 },
    { name: 'Travel Tripod', description: 'Sturdy tripod built for travel and long exposure work.', price: 5899, rating: 4.6, reviews: 174, tag: 'New', image: 'https://images.unsplash.com/photo-1612144788280-c9096c34486a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 20 },
    { name: 'Light Kit', description: 'Professional-grade lighting for studio portraits and product shots.', price: 8999, rating: 4.5, reviews: 126, tag: 'Popular', image: 'https://images.unsplash.com/photo-1595406236320-a9aa2a54a00e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 10 },
     {
      name: 'Camera Backpack',
      description: 'Protective camera backpack with dedicated compartments for lenses and accessories.',
      price: 5499,
      rating: 4.8,
      reviews: 267,
      tag: 'Bestseller',
      image: 'https://images.pexels.com/photos/1546003/pexels-photo-1546003.jpeg?auto=compress&w=1200',
      stock: 18
    },
    {
      name: 'Memory Card 128GB',
      description: 'High-capacity storage for photographs, videos and long shooting sessions.',
      price: 1799,
      rating: 4.7,
      reviews: 341,
      tag: 'Essential',
      image: 'https://images.unsplash.com/photo-1779896411942-ea4ca54de043?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      stock: 42
    },
    {
      name: 'Camera Cleaning Kit',
      description: 'Complete cleaning essentials for keeping lenses, sensors and camera bodies dust-free.',
      price: 899,
      rating: 4.6,
      reviews: 154,
      tag: 'Must Have',
      image: 'https://images.pexels.com/photos/4398804/pexels-photo-4398804.jpeg?auto=compress&w=1200',
      stock: 36
    },
    {
      name: 'Wireless Shutter Remote',
      description: 'Remote camera trigger for portraits, group shots and creative long exposures.',
      price: 1299,
      rating: 4.5,
      reviews: 97,
      tag: 'New',
      image: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=900&q=80',
      stock: 23
    },
  ],
  Woodworking: [
    { name: 'Woodworking Kit', description: 'Starter toolkit for cutting, shaping and finishing wood projects.', price: 6399, rating: 4.7, reviews: 210, tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1645651964715-d200ce0939cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 17 },
    { name: 'Precision Saw', description: 'Reliable saw for clean edges and accurate home crafts.', price: 3999, rating: 4.6, reviews: 134, tag: 'New', image: 'https://images.unsplash.com/photo-1683115099260-5d5ae7e71a09?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 22 },
    { name: 'Carving Chisel', description: 'Sharp and balanced design for detailed woodworking tasks.', price: 1499, rating: 4.5, reviews: 114, tag: 'Popular', image: 'https://images.unsplash.com/photo-1606077089563-cff5a4f3d3d9?q=80&w=1491&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 30 },
    { name: 'Workbench Set', description: 'Modular setup for efficient, comfortable workshop sessions.', price: 5499, rating: 4.4, reviews: 96, tag: 'Classic', image: 'https://images.unsplash.com/photo-1674065719169-5ba77e617e60?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 12 },
        {
      name: 'Wood Router',
      description: 'Powerful router for shaping edges, grooves and decorative woodworking details.',
      price: 8499,
      rating: 4.7,
      reviews: 143,
      tag: 'Pro Pick',
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80',
      stock: 9
    },
    {
      name: 'Wood Sanding Kit',
      description: 'Multi-grit sanding collection for smooth finishes across different wood projects.',
      price: 1299,
      rating: 4.6,
      reviews: 118,
      tag: 'Essential',
      image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=80',
      stock: 37
    },
    {
      name: 'Wood Glue Set',
      description: 'Reliable woodworking adhesive for strong and durable project joints.',
      price: 699,
      rating: 4.5,
      reviews: 89,
      tag: 'Value Pick',
      image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80',
      stock: 44
    },
    {
      name: 'Wood Burning Tool',
      description: 'Creative pyrography tool for adding detailed patterns and artwork to wooden surfaces.',
      price: 1899,
      rating: 4.7,
      reviews: 106,
      tag: 'Creative',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80',
      stock: 19
    },
  ],
  Coffee: [
    { name: 'Barista Set', description: 'Everything needed to create café-style coffee at home.', price: 4599, rating: 4.8, reviews: 311, tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1649882453801-d5f84502c3f0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 26 },
    { name: 'Coffee Seeds', description: 'Simple setup for precise extraction and a cleaner cup.', price: 699, rating: 4.7, reviews: 180, tag: 'Popular', image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=80', stock: 24 },
    { name: 'Espresso Tamper', description: 'Add consistency and control to your espresso workflow.', price: 1099, rating: 4.5, reviews: 92, tag: 'New', image: 'https://images.unsplash.com/photo-1475296204602-08d15839e95f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 42 },
    { name: 'Coffee Roaster', description: 'A compact roaster for fresh, small-batch home roasting.', price: 3499, rating: 4.6, reviews: 146, tag: 'Fresh', image: 'https://images.unsplash.com/photo-1558618666-397fb0670f29?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 15 },
       {
      name: 'French Press',
      description: 'Classic brewing device for rich, full-bodied coffee with effortless preparation.',
      price: 1799,
      rating: 4.8,
      reviews: 286,
      tag: 'Bestseller',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80',
      stock: 35
    },
    {
      name: 'Coffee Grinder',
      description: 'Adjustable burr grinder for consistent grounds and better control over extraction.',
      price: 4299,
      rating: 4.8,
      reviews: 234,
      tag: 'Top Rated',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
      stock: 17
    },
    {
      name: 'Coffee Scale',
      description: 'Precision brewing scale for accurately measuring coffee and water ratios.',
      price: 1999,
      rating: 4.6,
      reviews: 127,
      tag: 'Essential',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=80',
      stock: 26
    },
    {
      name: 'Milk Frother',
      description: 'Create smooth creamy foam for cappuccinos, lattes and café-style drinks.',
      price: 1499,
      rating: 4.5,
      reviews: 178,
      tag: 'Popular',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80',
      stock: 31
    },
  ],
  Gaming: [
    { name: 'RGB Keyboard', description: 'Responsive keys with vibrant lighting for marathon sessions.', price: 6199, rating: 4.8, reviews: 254, tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80', stock: 16 },
    { name: 'Gaming Mouse', description: 'Ultra-precise tracking and ergonomic comfort for every click.', price: 2799, rating: 4.7, reviews: 201, tag: 'Top Rated', image: 'https://images.unsplash.com/photo-1628832307345-7404b47f1751?q=80&w=1483&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 24 },
    { name: 'Headset Pro', description: 'Clear audio and deep comfort for focused multiplayer play.', price: 4999, rating: 4.6, reviews: 188, tag: 'Hot', image: 'https://images.unsplash.com/photo-1708024660760-7252034ca84a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 18 },
    { name: 'Streamer Desk', description: 'Organized workstation with a clean, high-performance setup flow.', price: 12399, rating: 4.5, reviews: 99, tag: 'Featured', image: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 9 },
      {
      name: 'Gaming Monitor',
      description: 'Fast refresh display designed for fluid gameplay and immersive visuals.',
      price: 18999,
      rating: 4.8,
      reviews: 318,
      tag: 'Bestseller',
      image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80',
      stock: 12
    },
    {
      name: 'Gaming Controller',
      description: 'Ergonomic wireless controller with responsive buttons and comfortable grips.',
      price: 4499,
      rating: 4.7,
      reviews: 229,
      tag: 'Popular',
      image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=900&q=80',
      stock: 22
    },
    {
      name: 'Gaming Chair',
      description: 'Supportive gaming chair with adjustable positioning for extended sessions.',
      price: 12999,
      rating: 4.6,
      reviews: 184,
      tag: 'Premium',
      image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=900&q=80',
      stock: 8
    },
    {
      name: 'Gaming Desk',
      description: 'Spacious gaming desk with cable management and a dedicated setup surface.',
      price: 8999,
      rating: 4.6,
      reviews: 142,
      tag: 'Featured',
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=900&q=80',
      stock: 11
    },
  ],
  'Mechanical Keyboards': [
    { name: 'Hot-Swap Keyboard', description: 'Modular keyboard built for customizable feel and easy maintenance.', price: 11999, rating: 4.9, reviews: 318, tag: 'Featured', image: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 11 },
    { name: 'Keycap Set', description: 'Create your own aesthetic with bold, tactile keycaps.', price: 2299, rating: 4.7, reviews: 194, tag: 'New', image: 'https://images.unsplash.com/photo-1702833935489-5950c6d19828?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 26 },
    { name: 'Gamming Joystick', description: 'Tune your gamming mode on with this beast.', price: 2799, rating: 4.6, reviews: 142, tag: 'Popular', image: 'https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 34 },
    { name: 'Desk Mat', description: 'Premium desk mat for comfort, stability and clean desk vibes.', price: 1099, rating: 4.5, reviews: 110, tag: 'Classic', image: 'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?auto=format&fit=crop&w=900&q=80', stock: 38 },
    {
      name: 'Aluminium Keyboard Case',
      description: 'Premium aluminium replacement case designed for a refined mechanical keyboard setup.',
      price: 3999,
      rating: 4.7,
      reviews: 84,
      tag: 'Premium',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80',
      stock: 16
    },
    {
      name: 'Lubing Station',
      description: 'Organized workstation for tuning and maintaining mechanical keyboard switches.',
      price: 1499,
      rating: 4.6,
      reviews: 71,
      tag: 'Workshop',
      image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=900&q=80',
      stock: 25
    },
    {
      name: 'Coiled USB Cable',
      description: 'Stylish detachable coiled cable that adds personality to your keyboard desk setup.',
      price: 1299,
      rating: 4.8,
      reviews: 155,
      tag: 'Popular',
      image: 'https://images.pexels.com/photos/4219867/pexels-photo-4219867.jpeg?h=1000&w=1500&fit=crop',
      stock: 37
    },
    {
      name: 'Switch Tester',
      description: 'Compact collection of mechanical switches for comparing different typing feels.',
      price: 799,
      rating: 4.5,
      reviews: 62,
      tag: 'New',
      image: 'https://images.pexels.com/photos/9020272/pexels-photo-9020272.jpeg?h=1000&w=1500&fit=crop',
      stock: 29
    },
  ],
  'Cloths': [
    { name: 'Hoodie', description: 'Premium hoodie for women and men.', price: 2499, rating: 4.8, reviews: 263, tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1691132615844-b013a05b51e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 25 },
    { name: 'Beach Fit', description: 'Lightweight, comfortable clothing for relaxed days by the beach.', price: 1199, rating: 4.6, reviews: 141, tag: 'Popular', image: 'https://images.unsplash.com/photo-1541652392840-f51c8a5ecd25?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 30 },
    { name: 'Trendy Fit', description: 'Versatile casual clothing designed for comfortable everyday wear.', price: 1599, rating: 4.5, reviews: 116, tag: 'New', image: 'https://images.unsplash.com/photo-1591338459467-bd36100b07c2?q=80&w=1504&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 33 },
    { name: 'Cool Jacket', description: 'Lightweight everyday jacket with a comfortable fit for easy layering.', price: 999, rating: 4.4, reviews: 88, tag: 'Fresh', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80', stock: 35 },
    {
      name: 'Sleeveless for Men',
      description: 'Breathable sleeveless top designed for relaxed everyday wear in warm weather.',
      price: 499,
      rating: 4.7,
      reviews: 128,
      tag: 'Popular',
      image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=900&q=80',
      stock: 35
    },
    {
      name: 'Lenin Pant',
      description: 'Comfortable linen trousers with a lightweight feel for everyday outfits.',
      price: 1899,
      rating: 4.8,
      reviews: 204,
      tag: 'Bestseller',
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80',
      stock: 28
    },
    {
      name: 'Stripped shirt',
      description: 'Classic striped shirt with a comfortable fit for casual everyday styling.',
      price: 1599,
      rating: 4.6,
      reviews: 76,
      tag: 'New',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80',
      stock: 23
    },
    {
      name: 'Oversized Tshirt',
      description: 'Soft oversized T-shirt with a relaxed fit for comfortable casual wear.',
      price: 499,
      rating: 4.5,
      reviews: 92,
      tag: 'Essential',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
      stock: 52
    },

  ],
  Fitness: [
    { name: 'Yoga Mat', description: 'Comfortable, durable mat for flexible workouts and recovery.', price: 1799, rating: 4.8, reviews: 280, tag: 'Popular', image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1326&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 27 },
    { name: 'Resistance Bands', description: 'Portable strength training gear for home, travel and recovery.', price: 399, rating: 4.7, reviews: 198, tag: 'New', image: 'https://images.unsplash.com/photo-1518609571773-39b7d303a87b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 40 },
    { name: 'Dumbbell Set', description: 'Versatile weight set for strength routines and gradual progression.', price: 4599, rating: 4.6, reviews: 142, tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1674834726923-3ba828d37846?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 16 },
    { name: 'Smart Kettlebell', description: 'Track reps and workouts with a compact connected training tool.', price: 5999, rating: 4.5, reviews: 118, tag: 'Fresh', image: 'https://images.unsplash.com/photo-1706029831387-fd8bc3d27d01?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 12 },
    {
      name: 'Adjustable Bench',
      description: 'Multi-position workout bench for strength exercises and home training routines.',
      price: 8999,
      rating: 4.7,
      reviews: 164,
      tag: 'Premium',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80',
      stock: 10
    },
    {
      name: 'Jump Rope',
      description: 'Lightweight speed rope for cardio training, warmups and conditioning sessions.',
      price: 699,
      rating: 4.6,
      reviews: 217,
      tag: 'Popular',
      image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80',
      stock: 48
    },
    {
      name: 'Foam Roller',
      description: 'Textured recovery roller designed for post-workout stretching and mobility routines.',
      price: 1299,
      rating: 4.7,
      reviews: 192,
      tag: 'Essential',
      image: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?auto=format&fit=crop&w=900&q=80',
      stock: 32
    },
    {
      name: 'Pull-Up Bar',
      description: 'Doorway training bar for upper-body exercises and convenient home workouts.',
      price: 2199,
      rating: 4.6,
      reviews: 154,
      tag: 'Bestseller',
      image: 'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      stock: 20
    },
  ],
  'Books & Reading': [
    { name: 'Reading Lamp', description: 'Warm, adjustable light designed for long reading sessions.', price: 2399, rating: 4.7, reviews: 214, tag: 'Popular', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80', stock: 21 },
    { name: 'Book Stand', description: 'An elegant stand that keeps notes and books comfortably open.', price: 1499, rating: 4.6, reviews: 180, tag: 'New', image: 'https://images.unsplash.com/photo-1580501170854-a66ac9b17e94?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 19 },
    { name: 'Reading Bundle', description: 'A selection of accessories for a focused and enjoyable reading habit.', price: 1999, rating: 4.5, reviews: 122, tag: 'Hot', image: 'https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=900&q=80', stock: 24 },
    { name: 'Leather Journal', description: 'A premium notebook for ideas, notes and memorable passages.', price: 899, rating: 4.4, reviews: 98, tag: 'Classic', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80', stock: 35 },
      {
      name: 'Kindle Reading Stand',
      description: 'Adjustable stand for comfortable hands-free reading at your desk or bedside.',
      price: 1299,
      rating: 4.6,
      reviews: 105,
      tag: 'New',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=80',
      stock: 24
    },
    {
      name: 'Book Sleeve',
      description: 'Protective fabric sleeve designed to keep your favourite books safe while travelling.',
      price: 899,
      rating: 4.7,
      reviews: 143,
      tag: 'Popular',
      image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=900&q=80',
      stock: 37
    },
    {
      name: 'Magnetic Bookmark Set',
      description: 'Elegant reusable bookmarks that securely mark your reading progress without damaging pages.',
      price: 399,
      rating: 4.5,
      reviews: 211,
      tag: 'Value Pick',
      image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=80',
      stock: 62
    },
    {
      name: 'Reading Pillow',
      description: 'Supportive backrest pillow designed for comfortable long reading sessions.',
      price: 1899,
      rating: 4.6,
      reviews: 117,
      tag: 'Comfort',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80',
      stock: 19
    },
  ],
  'DIY & Electronics': [
    { name: 'Electronics Starter Kit', description: 'Build circuits and learn setup with a beginner-friendly kit.', price: 7499, rating: 4.8, reviews: 292, tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 13 },
    { name: 'Soldering Station', description: 'Precision station with control and safety features for hobby projects.', price: 5999, rating: 4.7, reviews: 176, tag: 'Hot', image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=80', stock: 12 },
    { name: 'Smart Sensor Pack', description: 'Create connected prototypes with reliable environmental sensors.', price: 2499, rating: 4.6, reviews: 143, tag: 'New', image: 'https://images.unsplash.com/photo-1599508266124-804fc6eecf09?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 22 },
    { name: 'Circuit Tool Kit', description: 'Precision tools for prototyping and basic electronics work.', price: 3299, rating: 4.5, reviews: 112, tag: 'Popular', image: 'https://images.unsplash.com/photo-1679240219409-51901fb6d2db?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', stock: 20 },
     {
      name: 'Arduino Development Board',
      description: 'Flexible microcontroller board for electronics experiments, automation and prototypes.',
      price: 1899,
      rating: 4.8,
      reviews: 326,
      tag: 'Bestseller',
      image: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=900&q=80',
      stock: 27
    },
    {
      name: 'Raspberry Pi Starter Kit',
      description: 'Compact computing kit for learning programming, electronics and DIY projects.',
      price: 7499,
      rating: 4.8,
      reviews: 218,
      tag: 'Popular',
      image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=80',
      stock: 14
    },
    {
      name: 'Breadboard Pack',
      description: 'Reusable prototyping boards for quickly testing circuits without soldering.',
      price: 699,
      rating: 4.6,
      reviews: 142,
      tag: 'Essential',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
      stock: 45
    },
    {
      name: 'Jumper Wire Kit',
      description: 'Colour-coded jumper wires for connecting components during electronics prototyping.',
      price: 499,
      rating: 4.5,
      reviews: 119,
      tag: 'Value Pick',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=900&q=80',
      stock: 57
    },
  ],
};

const seedDatabase = async () => {
  const existingHobbies = await Hobby.find({}).lean();
  const hobbyMap = Object.fromEntries(existingHobbies.map((hobby) => [hobby.name, hobby]));

  const hobbiesToCreate = hobbySeedData.filter((hobby) => !hobbyMap[hobby.name]);
  const createdHobbies = hobbiesToCreate.length ? await Hobby.insertMany(hobbiesToCreate) : [];
  await Hobby.collection.updateMany(
    { emoji: { $exists: true } },
    { $unset: { emoji: '' } }
  );

  const allHobbies = await Hobby.find({}).lean();
  const seededHobbyImages = new Map(hobbySeedData.map(({ name, image }) => [name, image]));
  const hobbyImageUpdates = allHobbies.flatMap((hobby) => {
    const image = seededHobbyImages.get(hobby.name);
    if (!image || hobby.image === image) return [];

    return [{
      updateOne: {
        filter: { _id: hobby._id },
        update: { $set: { image } },
      },
    }];
  });

  if (hobbyImageUpdates.length > 0) {
    await Hobby.bulkWrite(hobbyImageUpdates);
  }

  const fullHobbyMap = Object.fromEntries(allHobbies.map((hobby) => [hobby.name, hobby._id]));

  const productsByHobby = {};
  for (const hobby of allHobbies) {
    productsByHobby[hobby.name] = await Product.find({ hobby: hobby._id }).lean();
  }

  const allProducts = [];
  const productUpdates = [];

  for (const [hobbyName, items] of Object.entries(productSeedData)) {
    const hobbyId = fullHobbyMap[hobbyName];
    const existingProducts = new Map(
      (productsByHobby[hobbyName] || []).map((product) => [product.name, product])
    );

    items.forEach((item) => {
      const existingProduct = existingProducts.get(item.name);
      if (existingProduct) {
        if (existingProduct.image !== item.image) {
          productUpdates.push({
            updateOne: {
              filter: { _id: existingProduct._id },
              update: { $set: { image: item.image } },
            },
          });
        }
        return;
      }

      allProducts.push({
        ...item,
        hobby: hobbyId,
      });
    });
  }

  if (productUpdates.length > 0) {
    await Product.bulkWrite(productUpdates);
  }

  if (allProducts.length > 0) {
    await Product.insertMany(allProducts);
  }

  console.log('Seed data synced successfully');
};

module.exports = { seedDatabase, hobbySeedData, productSeedData };
