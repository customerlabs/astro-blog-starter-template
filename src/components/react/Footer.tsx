import '../../styles/footer.css';

export default function Footer() {
  return (
    <footer className="customerlabs-footer" role="contentinfo">
      <div className="footer-container">
        {/* Footer Main Content */}
        <div className="footer-content">
          {/* Footer Column 1: Solutions */}
          <div className="footer-column">
            <h3 className="footer-heading">Solutions</h3>
            <ul className="footer-links">
              <li><a href="/solutions/sources">Sources</a></li>
              <li><a href="/solutions/identity-resolution">Identity resolutions</a></li>
              <li><a href="/solutions/audience-builder">Audience Builder</a></li>
              <li><a href="/solutions/destinations">Destinations</a></li>
              <li><a href="/solutions/audience-activation">Audience Activation</a></li>
              <li><a href="/solutions/google-offline-conversions">Google Offline Conversions tracking</a></li>
              <li><a href="/solutions/conversions-api">Conversions API</a></li>
              <li><a href="/solutions/privacy">Privacy</a></li>
            </ul>
          </div>

          {/* Footer Column 2: Industry */}
          <div className="footer-column">
            <h3 className="footer-heading">Industry</h3>
            <ul className="footer-links">
              <li><a href="/industry/ecommerce-cdp">E-commerce</a></li>
              <li><a href="/industry/b2b-b2c-lead-gen">B2B/ B2C Lead gen</a></li>
              <li><a href="/industry/saas">SaaS</a></li>
              <li><a href="/industry/agency">Agency</a></li>
            </ul>

            <h3 className="footer-heading" style={{ marginTop: '24px' }}>Integrations</h3>
            <ul className="footer-links">
              <li><a href="/integrations/shopify">Shopify</a></li>
              <li><a href="/integrations/woocommerce">Woocommerce</a></li>
              <li><a href="/integrations/bigcommerce">Bigcommerce</a></li>
              <li><a href="/integrations/others">Others</a></li>
            </ul>
          </div>

          {/* Footer Column 3: Resources */}
          <div className="footer-column">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links">
              <li><a href="/resources/blog">Blog</a></li>
              <li><a href="/resources/playbooks">Playbooks</a></li>
              <li><a href="/resources/integrations">Integrations</a></li>
              <li><a href="/resources/webinar">Webinar</a></li>
              <li><a href="/resources/docs">Docs</a></li>
              <li><a href="/resources/playbook">Playbook</a></li>
            </ul>

            <h3 className="footer-heading" style={{ marginTop: '24px' }}>Company</h3>
            <ul className="footer-links">
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/resources/careers">Careers</a></li>
              <li><a href="/community">Community</a></li>
              <li><a href="/write-for-us">Write for us</a></li>
            </ul>
          </div>

          {/* Footer Column 4: Contact */}
          <div className="footer-column">
            <h3 className="footer-heading">CustomerLabs</h3>
            <ul className="footer-links">
              <li>651 N Broad St, Suite 206</li>
              <li>Middletown, DE, 19709, USA</li>
              <li><a href="tel:+16802150147">+1 (680) 215-0147</a></li>
            </ul>

            <div className="footer-ps-club" style={{ marginTop: '24px' }}>
              <h3 className="footer-heading">ps Club</h3>
              <p style={{ marginBottom: '12px', fontSize: '14px', color: '#6b7280' }}>
                Connect. Learn. Grow
              </p>
              <a href="/community" className="btn btn-secondary" style={{ fontSize: '14px', padding: '8px 16px' }}>
                Join the Community
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            {/* Copyright */}
            <p className="footer-copyright">
              Copyright @CustomerLabs 2024
            </p>

            {/* Legal Links */}
            <ul className="footer-legal">
              <li><a href="/privacy-policy">Privacy policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
            </ul>

            {/* Social Links */}
            <ul className="footer-social">
              <li>
                <a href="https://www.linkedin.com/company/customerlabs/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/customerlabs" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://github.com/customerlabs" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

