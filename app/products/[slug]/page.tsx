import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  products,
  sharedArtworkDetails,
} from "../../product-data";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product not found | yuanheartart",
    };
  }

  return {
    title: `${product.title} | yuanheartart`,
    description: `${product.styleLine} ${product.price} to ${product.priceMax}. Handmade canvas art with ${product.sizeCount} size options and ${product.frameOptions.length} finish choices.`,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.title} | yuanheartart`,
      description: product.summary,
      images: [product.image],
      type: "website",
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: product.image,
    description: product.summary,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: "yuanheartart",
    },
    material: "Professional oil/acrylic paints on high-quality linen canvas",
    category: `Handmade ${product.productType} wall art`,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: product.price.replace("From $", ""),
      highPrice: product.priceMax.replace("$", "").replace(",", ""),
      availability: "https://schema.org/InStock",
      url: `https://yuanheartart.com/products/${product.slug}`,
    },
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this artwork handmade?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. The artwork is made to order on high-quality linen canvas with professional oil or acrylic paints.",
        },
      },
      {
        "@type": "Question",
        name: "Can I order a custom size?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Custom sizing is available by email or WhatsApp for buyers who need a specific wall fit.",
        },
      },
      {
        "@type": "Question",
        name: "How is the artwork shipped?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Rolled canvas is shipped in a hard paper tube. Framed artwork is shipped in a wooden box. Global shipping is generally handled by FedEx or DHL.",
        },
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="notice">
        <span>Buy 1 Get 30% Off & Buy 2 Get 40% Off</span>
        <span>Free Shipping Globally!</span>
      </div>

      <header className="site-header">
        <a className="brand" href="/" aria-label="yuanheartart home">
          yuanheartart
        </a>
        <nav aria-label="Product navigation">
          <a href="/">Home</a>
          <a href="/#collection">Collection</a>
          <a href="#details">Artwork Details</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="header-action" href="#contact">
          Contact
        </a>
      </header>

      <section className="product-hero">
        <div className="product-gallery-panel">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/#collection">Collection</a>
            <span>/</span>
            <span>{product.sku}</span>
          </div>
          <img src={product.image} alt={product.imageAlt} />
          <div className="source-note">
            <span>{product.imageCount} source images on original listing</span>
            <span>Original listing: {product.sku}</span>
          </div>
        </div>

        <div className="product-buy-panel">
          <p className="eyebrow">{product.productType} wall art</p>
          <h1>{product.title}</h1>
          <p className="product-style-line">{product.styleLine}</p>

          <div className="price-row">
            <strong>{product.price}</strong>
            <span>Up to {product.priceMax}</span>
          </div>

          <div className="product-proof">
            <span>{product.reviews}</span>
            <span>{product.sizeCount} size options</span>
            <span>{product.frameOptions.length} finish options</span>
          </div>

          <p>{product.summary}</p>

          <div className="tag-row">
            {product.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <a className="primary-button product-cta" href="#contact">
            Request this artwork
          </a>
          <div className="mini-specs" aria-label="Quick product facts">
            {product.highlights.map((highlight) => (
              <span key={highlight}>{highlight}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="product-section product-tank" id="details">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">Product Intelligence</p>
            <h2>What this artwork is best at</h2>
          </div>
          <p>
            Product facts are sourced from the original public listing. Room,
            styling, and sizing guidance is written specifically for this
            artwork so the page can answer buyer questions directly.
          </p>
        </div>

        <div className="detail-grid">
          <article>
            <h3>Best for</h3>
            <p>{product.bestFor}</p>
          </article>
          <article>
            <h3>Palette</h3>
            <p>{product.palette}</p>
          </article>
          <article>
            <h3>Texture</h3>
            <p>{product.texture}</p>
          </article>
          <article>
            <h3>Composition</h3>
            <p>{product.composition}</p>
          </article>
        </div>
      </section>

      <section className="product-section two-column-copy">
        <div>
          <p className="eyebrow">Room Fit</p>
          <h2>Where to use {product.sku}</h2>
          <p>{product.roomGuide}</p>
        </div>
        <div>
          <p className="eyebrow">Size Strategy</p>
          <h2>How to choose the right scale</h2>
          <p>{product.sizeGuide}</p>
        </div>
      </section>

      <section className="product-section options-section">
        <div>
          <p className="eyebrow">Original Listing Options</p>
          <h2>Sizes and finishes</h2>
        </div>

        <div className="options-grid">
          <article>
            <h3>Starter sizes</h3>
            <ul>
              {product.firstSizes.map((size) => (
                <li key={size}>{size}</li>
              ))}
            </ul>
          </article>
          <article>
            <h3>Largest listed size</h3>
            <p>{product.lastSize}</p>
          </article>
          <article>
            <h3>Canvas or frame</h3>
            <ul>
              {product.frameOptions.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="product-section buyer-section">
        <div>
          <p className="eyebrow">Buyer Decision Guide</p>
          <h2>Who should choose this piece</h2>
        </div>
        <div className="buyer-grid">
          <article>
            <h3>Choose it when</h3>
            <p>{product.bestFor}</p>
          </article>
          <article>
            <h3>Check before ordering</h3>
            <p>
              Confirm wall width, preferred frame color, and whether the artwork
              should arrive rolled or ready to hang.
            </p>
          </article>
          <article>
            <h3>Best contact method</h3>
            <p>
              Send the SKU {product.sku}, desired size, and room photo to
              yancherry931@gmail.com or WhatsApp +86 18235608457.
            </p>
          </article>
        </div>
      </section>

      <section className="product-section styling-section">
        <div>
          <p className="eyebrow">Styling Notes</p>
          <h2>How to make it look intentional</h2>
        </div>
        <div className="styling-list">
          {product.stylingTips.map((tip) => (
            <p key={tip}>{tip}</p>
          ))}
        </div>
      </section>

      <section className="product-section facts-section">
        <div>
          <p className="eyebrow">Artwork Details</p>
          <h2>Material, production, shipping</h2>
        </div>
        <div className="facts-list">
          {sharedArtworkDetails.map((detail) => (
            <span key={detail}>{detail}</span>
          ))}
        </div>
      </section>

      <section className="product-section faq-section" id="faq">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2>Questions buyers usually ask</h2>
        </div>
        <div className="faq-list">
          <details open>
            <summary>Is this artwork handmade?</summary>
            <p>
              Yes. The original listing describes the artwork as 100% handmade
              using professional oil or acrylic paints on high-quality linen
              canvas.
            </p>
          </details>
          <details>
            <summary>Can I order a custom size?</summary>
            <p>
              Yes. The original product information says custom sizing is
              available by email or WhatsApp.
            </p>
          </details>
          <details>
            <summary>Should I choose rolled canvas or framed?</summary>
            <p>
              Choose rolled canvas if you want local framing flexibility.
              Choose framed if you want a ready-to-hang presentation in black,
              gold, silver, wood, or white where available.
            </p>
          </details>
        </div>
      </section>

      <section className="product-section source-section">
        <div>
          <p className="eyebrow">Source-backed product facts</p>
          <h2>Listing data used for this page</h2>
        </div>
        <div className="source-grid">
          <span>SKU: {product.sku}</span>
          <span>Published on original site: {product.publishedAt}</span>
          <span>Original product type: {product.productType}</span>
          <span>Original image alt: {product.imageAlt}</span>
          <span>Source: public product data from the previous storefront</span>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div>
          <h2>yuanheartart</h2>
          <p>
            Request this artwork, ask for a custom size, or confirm frame
            options before ordering.
          </p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>Email: yancherry931@gmail.com</p>
          <p>WhatsApp: +86 18235608457</p>
        </div>
        <div>
          <h3>Explore</h3>
          <a href="/">Home</a>
          <a href="/#collection">Collection</a>
          <a href="#details">Artwork Details</a>
          <a href="#faq">FAQ</a>
        </div>
        <p className="copyright">(c) 2026 yuanheartart</p>
      </footer>
    </main>
  );
}
