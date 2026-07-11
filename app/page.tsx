const products = [
  {
    title: "Blue & Green Minimalist Abstract Painting #BGM 009",
    price: "From $198.75",
    reviews: "12 reviews",
    image:
      "https://www.artvistagallery.com/cdn/shop/files/il_NxN.4804146086_c2bq.jpg?v=1711269337&width=1200",
  },
  {
    title: "Beige & Brown Minimalist Painting #BBM 002",
    price: "From $386.25",
    reviews: "13 reviews",
    image:
      "https://www.artvistagallery.com/cdn/shop/files/il_NxN.5185831150_ljf9.jpg?v=1713226159&width=1140",
  },
  {
    title: "Blue & Green Minimalist Abstract Painting #BGM 012",
    price: "From $198.75",
    reviews: "8 reviews",
    image:
      "https://www.artvistagallery.com/cdn/shop/files/il_NxN.5490919830_qw38.jpg?v=1711271762&width=1200",
  },
  {
    title: "Blue & Green Abstract Painting #CXA 017",
    price: "From $198.75",
    reviews: "30 reviews",
    image:
      "https://www.artvistagallery.com/cdn/shop/files/4_f559f115-37df-4683-accb-320f3eb21e0e.jpg?v=1703916996&width=1200",
  },
  {
    title: "Textured Ocean Wave Art 3D Oil Painting #BBS 011",
    price: "From $261.25",
    reviews: "3 reviews",
    image:
      "https://www.artvistagallery.com/cdn/shop/files/IMG_202310195_82eee589-fa93-4071-b268-aeb0f8aafd66.jpg?v=1724429577&width=1200",
  },
  {
    title: "Golden Blossom Tree Art - Textured Wall Decor #BGM 010",
    price: "From $198.75",
    reviews: "17 reviews",
    image:
      "https://www.artvistagallery.com/cdn/shop/files/il_NxN.5318381706_k3mp.jpg?v=1735358435&width=1200",
  },
  {
    title: "Vibrant Tree Landscape Wall Art #LL 0409",
    price: "From $198.75",
    reviews: "33 reviews",
    image:
      "https://www.artvistagallery.com/cdn/shop/files/1_efb1aef7-d6a2-46c5-8057-4882bfa2d7e7.jpg?v=1706751383&width=1200",
  },
  {
    title: "Beige Minimalist Abstract Painting #AVG 003",
    price: "From $198.75",
    reviews: "36 reviews",
    image:
      "https://www.artvistagallery.com/cdn/shop/files/001_06cd7fba-7ca0-48fb-9637-72bd4519099c.jpg?v=1738894857&width=1140",
  },
  {
    title: "Black & White Abstract Painting SET OF 2 #AVG 012",
    price: "From $261.25",
    reviews: "24 reviews",
    image:
      "https://www.artvistagallery.com/cdn/shop/files/2p5_7c7629fb-d139-4f17-947b-8d53dbd1f4d7.jpg?v=1705761056&width=1200",
  },
  {
    title: "Large Black & White Abstract Textured Canvas Art #BM 092",
    price: "From $198.75",
    reviews: "4 reviews",
    image:
      "https://www.artvistagallery.com/cdn/shop/files/IMG_202205092_7a672abb-e74e-46f5-8495-9a0feb93f6c8.jpg?v=1729747295&width=1200",
  },
  {
    title: "Black & White Abstract Painting SET OF 2 #CXA 013",
    price: "From $261.25",
    reviews: "11 reviews",
    image:
      "https://www.artvistagallery.com/cdn/shop/files/2p5_0b8697c4-edfd-4426-9609-9340f959d7e6.jpg?v=1703829908&width=1200",
  },
  {
    title: "Blue & Green Minimalist Abstract Painting #BGM 007",
    price: "From $198.75",
    reviews: "7 reviews",
    image:
      "https://www.artvistagallery.com/cdn/shop/files/il_NxN.4978874082_hp5l.jpg?v=1711264130&width=1200",
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
      "https://www.artvistagallery.com/cdn/shop/files/preview_images/2d0001e87f614388a25fb5ec7e71862e.thumbnail.0000000000_1100x.jpg?v=1782371784",
  },
  {
    name: "Chloe Pearl",
    date: "2026-06-22",
    product: "Blossoming Pink Peonies Canvas Art #FT 028",
    copy:
      "The colors are gorgeous and the brushstrokes are clearly visible. The warm pink tones make the room feel full of spring.",
    image:
      "https://www.artvistagallery.com/cdn/shop/files/preview_images/fb91cf28d00c40ab8b18f9e106938b2e.thumbnail.0000000000_1100x.jpg?v=1782204094",
  },
  {
    name: "Arthur",
    date: "2026-06-11",
    product: "Ocean Majesty Large Textured Wave Wall Art #OS 043",
    copy:
      "Shipping was fast and the wave texture is stunning. It matches my living room perfectly and feels carefully handmade.",
    image:
      "https://www.artvistagallery.com/cdn/shop/files/preview_images/cd1a8f2d00e2430fa2ef8b9dc0e2672d.thumbnail.0000000000_1100x.jpg?v=1782287554",
  },
  {
    name: "Mia Grace",
    date: "2026-03-12",
    product: "Minimalist Mountain Wall Art #WM 016",
    copy:
      "The soothing beige tones and abstract mountain design fill the room with a calm, elegant atmosphere.",
    image:
      "https://www.artvistagallery.com/cdn/shop/files/preview_images/71e693517ca148eab37b3a2a557d1153.thumbnail.0000000000_1100x.jpg?v=1782285709",
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
            src="https://www.artvistagallery.com/cdn/shop/files/il_NxN.4804146086_c2bq.jpg?v=1711269337&width=1200"
            alt="Vibrant abstract fish movement painting"
          />
          <img
            src="https://www.artvistagallery.com/cdn/shop/files/001_06cd7fba-7ca0-48fb-9637-72bd4519099c.jpg?v=1738894857&width=1140"
            alt="Beige wabi sabi minimalist wall sculpture"
          />
          <img
            src="https://www.artvistagallery.com/cdn/shop/files/2p5_7c7629fb-d139-4f17-947b-8d53dbd1f4d7.jpg?v=1705761056&width=1200"
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
          src="https://www.artvistagallery.com/cdn/shop/files/WX20240225-223601_2x_31259b96-d30c-4d30-887e-0d2ba25571ab.png?v=1708871899&width=1352"
          alt="Minimalist artwork displayed in a modern room"
        />
      </section>

      <section className="story section" id="story">
        <img
          src="https://www.artvistagallery.com/cdn/shop/files/painter_imm.jpg?v=1703848598&width=900"
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
