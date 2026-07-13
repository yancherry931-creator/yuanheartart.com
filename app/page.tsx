import { products, sharedArtworkDetails } from "./product-data";

const categories = [
  "Blue & Green Abstract",
  "Beige & Brown Abstract",
  "Black & White Textured",
  "Wabi Sabi Wall Art",
  "Ocean Wave Art",
  "Set of 2",
  "Large Wall Art",
  "Custom Size",
];

const reviews = [
  {
    name: "Clara Faith",
    date: "2026-05-26",
    product: "Elegant Floral Wall Art in 3D Minimalist Style #FT 064",
    copy:
      "The soft beige texture made the room feel warmer without adding visual noise. It looks carefully handmade up close.",
    image: "/art/r01.jpg",
  },
  {
    name: "Chloe Pearl",
    date: "2026-06-22",
    product: "Blossoming Pink Peonies Canvas Art #FT 028",
    copy:
      "The brushstrokes are visible and the color is richer than a flat print. It became the focal point of my room.",
    image: "/art/r02.jpg",
  },
  {
    name: "Arthur",
    date: "2026-06-11",
    product: "Ocean Majesty Large Textured Wave Wall Art #OS 043",
    copy:
      "The wave texture is the reason I chose it. Shipping was smooth and the artwork works perfectly above our sofa.",
    image: "/art/r03.jpg",
  },
];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "yuanheartart handmade wall art collection",
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `https://yuanheartart.com/products/${product.slug}`,
    name: product.title,
  })),
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "yuanheartart",
  url: "https://yuanheartart.com",
  email: "yancherry931@gmail.com",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+86 18235608457",
    contactType: "customer service",
    availableLanguage: ["English", "Chinese"],
  },
};

export default function Home() {
  const featured = products.slice(0, 3);
  const bestsellers = products.slice(0, 8);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <div className="notice">
        <span>Buy 1 Get 30% Off & Buy 2 Get 40% Off</span>
        <span>Free global shipping by FedEx/DHL</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="yuanheartart home">
          yuanheartart
        </a>
        <nav aria-label="Main navigation">
          <a href="#collection">Collection</a>
          <a href="#studio">Studio</a>
          <a href="#process">Process</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Hand-painted canvas art</p>
          <h1>yuanheartart</h1>
          <p className="tagline">
            Textured abstract paintings, ocean wave art, wabi-sabi wall pieces,
            and custom-size canvas work for calm modern interiors.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#collection">
              View collection
            </a>
            <a className="secondary-button" href="#contact">
              Ask for custom size
            </a>
          </div>
        </div>
        <div className="hero-gallery" aria-label="Featured artworks">
          {featured.map((product) => (
            <a href={`/products/${product.slug}`} key={product.slug}>
              <img src={product.image} alt={product.imageAlt} />
              <span>{product.sku}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section category-strip">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">Shop by intent</p>
            <h2>Find the artwork by mood, color, and wall size</h2>
          </div>
          <p>
            Every listing links to a detailed product page with room fit,
            palette, texture, size strategy, frame choices, and source-backed
            product facts.
          </p>
        </div>
        <div className="category-list">
          {categories.map((category) => (
            <a href="#collection" key={category}>
              {category}
            </a>
          ))}
        </div>
      </section>

      <section className="section" id="collection">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">Best sellers</p>
            <h2>Original handmade wall art from the source collection</h2>
          </div>
          <p>
            Titles, prices, review counts, sizes, finish options, and product
            facts come from the previous public storefront, rebuilt under the
            yuanheartart brand.
          </p>
        </div>
        <div className="product-grid">
          {bestsellers.map((product) => (
            <a
              className="product-card"
              href={`/products/${product.slug}`}
              key={product.slug}
            >
              <div className="product-image">
                <img src={product.image} alt={product.imageAlt} />
              </div>
              <div className="product-info">
                <p>{product.sku}</p>
                <h3>{product.title}</h3>
                <div>
                  <strong>{product.price}</strong>
                  <span>{product.reviews}</span>
                </div>
                <span className="product-link">Open detailed product page</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="studio-band" id="studio">
        <img src="/art/popular.png" alt="Large minimalist artwork in a room" />
        <div>
          <p className="eyebrow">Interior-ready art</p>
          <h2>Made for walls that need texture, scale, and warmth</h2>
          <p>
            yuanheartart focuses on handmade canvas pieces that are practical
            for real rooms: quiet neutral works for calm spaces, ocean wave art
            for wide walls, and high-contrast black-and-white paintings for
            modern interiors.
          </p>
          <div className="stat-row">
            <span>12 featured products</span>
            <span>11-16 size options</span>
            <span>Rolled or framed choices</span>
          </div>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="section-heading">
          <p className="eyebrow">How each order works</p>
          <h2>Clear buying information before the customer contacts you</h2>
        </div>
        <div className="facts-list">
          {sharedArtworkDetails.map((detail) => (
            <span key={detail}>{detail}</span>
          ))}
        </div>
      </section>

      <section className="story section">
        <img src="/art/artist.jpg" alt="Artist working on a canvas" />
        <div>
          <p className="eyebrow">About yuanheartart</p>
          <h2>Original wall art with practical product guidance</h2>
          <p>
            The site is built to help buyers choose art with confidence. Product
            pages do more than show a picture: they explain where the work fits,
            how the palette behaves, what texture to expect, and how to choose
            scale for the wall.
          </p>
          <p>
            Custom sizing is available by email or WhatsApp, with free global
            shipping after production.
          </p>
        </div>
      </section>

      <section className="section" id="reviews">
        <div className="section-heading">
          <p className="eyebrow">Buyer real shots</p>
          <h2>Real rooms, visible texture, specific feedback</h2>
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <img src={review.image} alt={`${review.name} buyer real shot`} />
              <div>
                <div className="review-meta">
                  <strong>{review.name}</strong>
                  <span>{review.date}</span>
                </div>
                <p>{review.copy}</p>
                <span className="related">{review.product}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer" id="contact">
        <div>
          <h2>yuanheartart</h2>
          <p>
            Send the product name, size, and preferred frame option to confirm
            artwork details before ordering.
          </p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>Email: yancherry931@gmail.com</p>
          <p>WhatsApp: +86 18235608457</p>
        </div>
        <div>
          <h3>Collection</h3>
          <a href="#collection">Best sellers</a>
          <a href="#process">Order details</a>
          <a href="#reviews">Reviews</a>
        </div>
        <p className="copyright">(c) 2026 yuanheartart</p>
      </footer>
    </main>
  );
}
