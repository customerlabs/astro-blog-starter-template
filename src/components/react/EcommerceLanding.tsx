import Navigation from './Navigation';
import Footer from './Footer';
import '../../styles/landing.css';

export default function EcommerceLanding() {
  return (
    <div className="landing-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            First-party data Drives Your Ecommerce Growth & makes you the "Best-in-class"
          </h1>
          <p className="hero-subtitle">
            Did you know? "82% of marketing leaders are prioritizing First-party data to create immediate value for customers"
          </p>
          <div className="hero-cta">
            <a href="/start-free-trial" className="btn btn-primary">Start 14-day Free trial</a>
            <a href="/request-demo" className="btn btn-secondary">Book a demo</a>
          </div>
        </div>
      </section>

      {/* Trust Badge */}
      <section className="stats-section">
        <div className="stats-container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>
              Stay ahead of the curve with CustomerLabs First-party data CDP
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>
              We've been voted as #1 world's Most Innovative MarTech for 2023 winning over 11,000+ MarTech Companies.
            </p>
          </div>
        </div>
      </section>

      {/* Best-in-Class Section */}
      <section className="features-section">
        <div className="features-container">
          <h2 className="section-title">Only 2% of the brands like Amazon, Nike are "BEST-IN-CLASS"</h2>
          <p style={{ textAlign: 'center', fontSize: '1.125rem', color: '#6b7280', marginBottom: '60px' }}>
            Best-in-class brands are realizing the performance benefits from leveraging first-party data.
          </p>
          
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h3 style={{ fontSize: '1.875rem', marginBottom: '16px' }}>
              Trusted by 1500+ brands across the world to track the complete user journey
            </h3>
            <a href="/learn-more" className="btn btn-primary">Learn How</a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section" style={{ background: '#f9fafb' }}>
        <div className="features-container">
          <h2 className="section-title">First-Party data CDP can help you Maximize Ad Performance</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="feature-title">Server Side Tracking</h3>
              <p className="feature-description">
                Enhance data accuracy and security through server-side tracking
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="feature-title">Train Ad Platforms</h3>
              <p className="feature-description">
                Optimize Advantage+ Shopping and Performance Max campaigns using advanced AI technology
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="feature-title">Scale Retargeting Campaigns</h3>
              <p className="feature-description">
                Maximize the mid-funnel audience performance and scale them for success
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="feature-title">Advanced Privacy</h3>
              <p className="feature-description">
                Have complete control of your First-party data balancing personalization and data privacy using Sentinel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advertise Fearlessly Section */}
      <section className="features-section">
        <div className="features-container">
          <h2 className="section-title">Advertise Fearlessly! Thrive Beyond 3P Cookie Apocalypse</h2>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
            <h3 style={{ fontSize: '1.875rem', marginBottom: '16px' }}>
              Send high-intent audience signals via Server-Side Tracking with a single click!
            </h3>
            <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '24px' }}>
              Nexor: Destinations – An innovative platform for data sync to various destinations via server side.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '24px' }}>
              <span style={{ padding: '8px 16px', background: '#eff6ff', borderRadius: '6px', fontSize: '14px' }}>Meta Conversions API</span>
              <span style={{ padding: '8px 16px', background: '#eff6ff', borderRadius: '6px', fontSize: '14px' }}>Enhanced Conversions in Google Ads</span>
              <span style={{ padding: '8px 16px', background: '#eff6ff', borderRadius: '6px', fontSize: '14px' }}>TikTok Conversions API</span>
              <span style={{ padding: '8px 16px', background: '#eff6ff', borderRadius: '6px', fontSize: '14px' }}>LinkedIn Conversions API</span>
              <span style={{ padding: '8px 16px', background: '#eff6ff', borderRadius: '6px', fontSize: '14px' }}>GA4 Measurement Protocol</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#9ca3af', fontStyle: 'italic' }}>
              Pro-tip: Attract High-LTV Customers with E-Commerce Subscription Data
            </p>
            <a href="/learn-more-nexor" className="btn btn-primary" style={{ marginTop: '24px' }}>Learn more about Nexor</a>
          </div>
        </div>
      </section>

      {/* iOS & Privacy Section */}
      <section className="features-section" style={{ background: '#f9fafb' }}>
        <div className="features-container">
          <h2 className="section-title">iOS & Privacy Restrictions Are Restricting The Ad Platforms from Collecting Data</h2>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.875rem', marginBottom: '16px' }}>
              Begin collecting your First-party data Now!
            </h3>
            <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '24px' }}>
              Stitcher: An advanced Identity Resolution technology to assist your brand in efficiently collecting and managing IDs.
            </p>
            <p style={{ fontSize: '1rem', color: '#6b7280', marginBottom: '32px' }}>
              This enables the creation of detailed profiles for both Anonymous and Known users along with their website and offline behavior.
            </p>
            <a href="/learn-more-stitcher" className="btn btn-primary">Learn more about Stitcher</a>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="features-section">
        <div className="features-container">
          <h2 className="section-title">It is Proven! First-Party audience demonstrates 69% higher likelihood to purchase</h2>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
            <h3 style={{ fontSize: '1.875rem', marginBottom: '16px' }}>
              Build Crazy and Dynamic First-party Audience
            </h3>
            <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '24px' }}>
              Nucleus: Audience is the futuristic hub, and helps you create dynamic audiences with a few clicks using an amazing UI.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', textAlign: 'left', marginBottom: '32px' }}>
              <div style={{ padding: '16px', background: '#f9fafb', borderRadius: '8px' }}>
                <strong>Behavior</strong> (Product viewed, add to cart)
              </div>
              <div style={{ padding: '16px', background: '#f9fafb', borderRadius: '8px' }}>
                <strong>Product</strong> (Category, product attributes)
              </div>
              <div style={{ padding: '16px', background: '#f9fafb', borderRadius: '8px' }}>
                <strong>Demography</strong> (Geography)
              </div>
              <div style={{ padding: '16px', background: '#f9fafb', borderRadius: '8px' }}>
                <strong>AOV Based</strong> (High average order value)
              </div>
              <div style={{ padding: '16px', background: '#f9fafb', borderRadius: '8px' }}>
                <strong>Low Intent</strong> (People who bounce) as exclusions
              </div>
            </div>
            <a href="/learn-more-nucleus" className="btn btn-primary">Learn more about Nucleus</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="section-title">What our customers say about us</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "After implementing CustomerLabs we saw our match rate increase by 70% in a really short period of time. Because of this, we have so much more confidence in our attribution data and our targeting, which has increased our ROAS from ~13x to over 20x. The CustomerLabs team is a great group to partner with and I couldn't recommend their solution enough."
              </p>
              <div className="testimonial-author">
                <div>
                  <div className="author-name">Alli bird</div>
                  <div className="author-company">Solar labs</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-text">
                "CustomerLabs is our Facebook game-changer. It solved issues with the traditional pixel post iOS changes. With CustomerLabs, we've improved targeting, conversion tracking, and retargeting."
              </p>
              <div className="testimonial-author">
                <div>
                  <div className="author-name">Tyler Archer</div>
                  <div className="author-company">SANESolution</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-text">
                "CustomerLabs transformed our data accuracy and ad campaign performance. Server-side event tracking, easy setup, and seamless integration with Facebook and Google Ads. 180-day persistent customer audiences."
              </p>
              <div className="testimonial-author">
                <div>
                  <div className="author-name">Joe Flattery</div>
                  <div className="author-company">Sawtooth Media Group</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Boost Section */}
      <section className="features-section" style={{ background: '#f9fafb' }}>
        <div className="features-container">
          <h2 className="section-title">Our customers see a 20% incremental revenue boost</h2>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h3 style={{ fontSize: '1.875rem', marginBottom: '16px' }}>
              Activate your first-party audience across Ad and marketing platforms
            </h3>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <h3 className="feature-title">2x Custom Audience Match rates in Ad Platforms</h3>
              <p className="feature-description">
                Stitcher, our advanced ID resolution technology provides higher match rates in Meta, TikTok and Google Ads.
              </p>
              <a href="/learn-more-match-rates" className="btn btn-secondary" style={{ marginTop: '16px' }}>Learn more about match rates</a>
            </div>

            <div className="feature-card">
              <h3 className="feature-title">Win customers in the "messy middle" of the purchase journey</h3>
              <p className="feature-description">
                First-party audiences convert 4X higher than new audiences in ASC campaigns. Optimize your Advantage+ Shopping and PMax AI strategies.
              </p>
              <a href="/learn-more-mofu" className="btn btn-secondary" style={{ marginTop: '16px' }}>Learn more</a>
            </div>

            <div className="feature-card">
              <h3 className="feature-title">Increase LTV, by engaging customers across channels</h3>
              <p className="feature-description">
                Send audience data to Email and Whatsapp marketing platforms to activate cart abandoners, run re-engagement campaigns.
              </p>
              <a href="/learn-more-ltv" className="btn btn-secondary" style={{ marginTop: '16px' }}>Learn more</a>
            </div>

            <div className="feature-card">
              <h3 className="feature-title">Scale Remarketing campaigns with reduced CPP and higher ROAS</h3>
              <p className="feature-description">
                With higher custom audience match rates, you can reach more audience and reduce your CPP while achieving higher ROAS.
              </p>
              <a href="/learn-more-remarketing" className="btn btn-secondary" style={{ marginTop: '16px' }}>Learn more</a>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="features-section">
        <div className="features-container">
          <h2 className="section-title">Privacy It's not a choice, a commitment</h2>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.875rem', marginBottom: '16px' }}>
              GDPR, CCPA, and other regulations: ensuring compliance in data handling
            </h3>
            <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '32px' }}>
              We prioritize your compliance with key regulations like GDPR and CCPA when managing your data. Our Sentinel: Privacy tool empowers you with full control over the data you choose to share with other platforms, ensuring your operations adhere to the latest privacy standards.
            </p>
            <a href="/learn-more-privacy" className="btn btn-primary">Learn more</a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Finally, Your E-commerce Business Deserves a CDP</h2>
          <p className="cta-description">
            Whether you choose us or not, having a CDP is essential. When you choose us, we will not be your vendor, but partner in your First-party data journey.
          </p>
          <div className="cta-buttons">
            <a href="/request-demo" className="btn btn-primary">Talk to us now</a>
            <a href="/start-free-trial" className="btn btn-secondary">Start Free Trial</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

