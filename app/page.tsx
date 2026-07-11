const products = [
  {
    title: "Blue & Green Minimalist Abstract Painting #BGM 009",
    price: "From $198.75",
    reviews: "12 reviews",
    image:
      "/art/p01.jpg",
  },
  {
    title: "Beige & Brown Minimalist Painting #BBM 002",
    price: "From $386.25",
    reviews: "13 reviews",
    image:
      "/art/p02.jpg",
  },
  {
    title: "Blue & Green Minimalist Abstract Painting #BGM 012",
    price: "From $198.75",
    reviews: "8 reviews",
    image:
      "/art/p03.jpg",
  },
  {
    title: "Blue & Green Abstract Painting #CXA 017",
    price: "From $198.75",
    reviews: "30 reviews",
    image:
      "/art/p04.jpg",
  },
  {
    title: "Textured Ocean Wave Art 3D Oil Painting #BBS 011",
    price: "From $261.25",
    reviews: "3 reviews",
    image:
      "/art/p05.jpg",
  },
  {
    title: "Golden Blossom Tree Art - Textured Wall Decor #BGM 010",
    price: "From $198.75",
    reviews: "17 reviews",
    image:
      "/art/p06.jpg",
  },
  {
    title: "Vibrant Tree Landscape Wall Art #LL 0409",
    price: "From $198.75",
    reviews: "33 reviews",
    image:
      "/art/p07.jpg",
  },
  {
    title: "Beige Minimalist Abstract Painting #AVG 003",
    price: "From $198.75",
    reviews: "36 reviews",
    image:
      "/art/p08.jpg",
  },
  {
    title: "Black & White Abstract Painting SET OF 2 #AVG 012",
    price: "From $261.25",
    reviews: "24 reviews",
    image:
      "/art/p09.jpg",
  },
  {
    title: "Large Black & White Abstract Textured Canvas Art #BM 092",
    price: "From $198.75",
    reviews: "4 reviews",
    image:
      "/art/p10.jpg",
  },
  {
    title: "Black & White Abstract Painting SET OF 2 #CXA 013",
    price: "From $261.25",
    reviews: "11 reviews",
    image:
      "/art/p11.jpg",
  },
  {
    title: "Blue & Green Minimalist Abstract Painting #BGM 007",
    price: "From $198.75",
    reviews: "7 reviews",
    image:
      "/art/p12.jpg",
  },
];

const categories = [
  "Mountain",
  "Ocean & Sky",
  "Flower & Tree",
  "Landscape",
  "Colorful",
  "Vertical",
  "Horizontal",
  "Square",
  "Set of 2",
  "Vintage Americana Art",
  "Wabi Sabi Wall Art",
  "Black & White Abstract",
  "Beige & Brown Abstract",
  "Blue & Green Abstract",
  "Grey Abstract",
  "Black & Gold Textured",
  "Neutral & Beige Textured",
  "Ocean & Wave Textured",
  "3D Modern Textured",
  "White Minimalist",
  "Black Minimalist",
];

const stories = [
  {
    name: "Clara Faith",
    date: "2026-05-26",
    product: "Elegant Floral Wall Art in 3D Minimalist Style #FT 064",
    copy:
      "I could not wait to unbox this artwork. The soft beige floral pattern pairs beautifully with my modern minimalist space and adds warmth to our home.",
    image:
      "/art/r01.jpg",
  },
  {
    name: "Chloe Pearl",
    date: "2026-06-22",
    product: "Blossoming Pink Peonies Canvas Art #FT 028",
    copy:
      "The colors are gorgeous and the brushstrokes are clearly visible. The warm pink tones make the room feel full of spring.",
    image:
      "/art/r02.jpg",
  },
  {
    name: "Arthur",
    date: "2026-06-11",
    product: "Ocean Majesty Large Textured Wave Wall Art #OS 043",
    copy:
      "Shipping was fast and the wave texture is stunning. It matches my living room perfectly and feels carefully handmade.",
    image:
      "/art/r03.jpg",
  },
  {
    name: "Mia Grace",
    date: "2026-03-12",
    product: "Minimalist Mountain Wall Art #WM 016",
    copy:
      "The soothing beige tones and abstract mountain design fill the room with a calm, elegant atmosphere.",
    image:
      "/art/r04.jpg",
  },
];

const services = [
  ["Professional Artist", "with patience and creativity"],
  ["Free shipping globally", "by insured DHL/FEDEX"],
  ["24/7 support", "customer service around the clock"],
  ["Hassle-free returns", "within 30 days after delivery"],
  ["Secure payments", "by credit card, PayPal, Shop Pay"],
];

export default function Home() {
  return (
    <main>
      <div className="notice">
        <span>Buy 1 Get 30% Off & Buy 2 Get 40% Off</span>
        <span>Free Shipping Globally!</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="yuanheartart home">
          yuanheartart
        </a>
        <nav aria-label="Main navigation">
          <a href="#shop">All Painting</a>
          <a href="#bestsellers">Bestsellers</a>
          <a href="#new">New</a>
          <a href="#story">Our Story</a>
          <a href="#reviews">Reviews</a>
        </nav>
        <a className="header-action" href="#contact">
          Contact
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Original hand-painted canvas art</p>
          <h1>yuanheartart</h1>
          <p className="tagline">
            Whispering Colors, Shaping Dreams - your artistic odyssey begins
            here.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#bestsellers">
              Shop best sellers
            </a>
            <a className="secondary-button" href="#story">
              Read our story
            </a>
          </div>
        </div>
        <div className="hero-gallery" aria-label="Featured artworks">
          <img
            src="/art/p01.jpg"
            alt="Vibrant abstract fish movement painting"
          />
          <img
            src="/art/p08.jpg"
            alt="Beige wabi sabi minimalist wall sculpture"
          />
          <img
            src="/art/p09.jpg"
            alt="Black and white abstract painting set"
          />
        </div>
      </section>

      <section className="section category-strip" id="shop">
        <div className="section-heading">
          <p className="eyebrow">All Painting</p>
          <h2>Browse by subject, form, and finish</h2>
        </div>
        <div className="category-list">
          {categories.map((category) => (
            <a href="#bestsellers" key={category}>
              {category}
            </a>
          ))}
        </div>
      </section>

      <section className="section" id="bestsellers">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">Best Seller</p>
            <h2>Handmade art customers keep choosing</h2>
          </div>
          <p>
            A curated front-window version of the original product collection,
            preserving titles, prices, and review counts from the public site.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.title}>
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <div>
                  <strong>{product.price}</strong>
                  <span>{product.reviews}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="popular">
        <div>
          <p className="eyebrow">Popular Subject</p>
          <h2>Set of 2, wabi sabi art, 3D minimalist</h2>
          <p>
            Dress your walls in dreams and paint your space with emotion.
            yuanheartart focuses on textured, handmade abstract oil paintings
            for modern interiors.
          </p>
        </div>
        <img
          src="/art/popular.png"
          alt="Minimalist artwork displayed in a modern room"
        />
      </section>

      <section className="story section" id="story">
        <img
          src="/art/artist.jpg"
          alt="Artist working on a canvas"
        />
        <div>
          <p className="eyebrow">yuanheartart</p>
          <h2>Welcome to your haven for abstract art</h2>
          <p>
            Step into a world where each painting becomes an unspoken dialogue,
            infusing a unique artistic ambiance into your life.
          </p>
          <p>
            Our mission is to integrate art into everyday living through
            distinct and captivating abstract oil paintings. Each piece is born
            from creativity, designed to spark imagination and emotional
            resonance.
          </p>
        </div>
      </section>

      <section className="section" id="reviews">
        <div className="section-heading">
          <p className="eyebrow">Buyer real shots</p>
          <h2>Customer rooms, real textures</h2>
        </div>
        <div className="review-grid">
          {stories.map((story) => (
            <article className="review-card" key={story.name}>
              <img src={story.image} alt={`${story.name} buyer real shot`} />
              <div>
                <div className="review-meta">
                  <strong>{story.name}</strong>
                  <span>{story.date}</span>
                </div>
                <p>{story.copy}</p>
                <span className="related">Related product: {story.product}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="service-bar" aria-label="Store services">
        {services.map(([title, detail]) => (
          <div key={title}>
            <strong>{title}</strong>
            <span>{detail}</span>
          </div>
        ))}
      </section>

      <footer className="footer" id="contact">
        <div>
          <h2>yuanheartart</h2>
          <p>Sign up to our newsletter to receive exclusive offers.</p>
          <form className="newsletter">
            <label htmlFor="email">E-mail</label>
            <div>
              <input id="email" type="email" placeholder="you@example.com" />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
        <div>
          <h3>Customer Services</h3>
          <a href="#contact">FAQs</a>
          <a href="#contact">Shipping Policy</a>
          <a href="#contact">Return & Refund Policy</a>
          <a href="#contact">Privacy Policy</a>
          <a href="#contact">Terms of Service</a>
          <a href="#contact">Track Order</a>
        </div>
        <div>
          <h3>About</h3>
          <a href="#story">Our Story</a>
          <a href="#shop">Artists</a>
          <a href="#contact">Contact Us</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Trade Program</a>
        </div>
        <div>
          <h3>Contact</h3>
          <p>Email: info@yuanheartart.com</p>
          <p>WhatsApp: +86 134 8094 7630</p>
          <p>Tel: +86 134 8094 7630</p>
        </div>
        <p className="copyright">© 2026 - yuanheartart</p>
      </footer>
    </main>
  );
}
