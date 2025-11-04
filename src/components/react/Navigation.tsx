import { useState, useEffect } from 'react';
import '../../styles/navigation.css';

interface NavItem {
  label: string;
  href: string;
  dropdown?: Array<{ label: string; href: string }>;
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      label: 'Solutions',
      href: '/solutions',
      dropdown: [
        { label: 'Sources', href: '/solutions/sources' },
        { label: 'Audience Activation', href: '/solutions/audience-activation' },
        { label: 'Identity resolution', href: '/solutions/identity-resolution' },
        { label: 'Google Offline conversions tracking', href: '/solutions/google-offline-conversions' },
        { label: 'Audience Builder', href: '/solutions/audience-builder' },
        { label: 'Conversions API', href: '/solutions/conversions-api' },
        { label: 'Destinations', href: '/solutions/destinations' },
        { label: 'Privacy', href: '/solutions/privacy' },
      ],
    },
    {
      label: 'Industry',
      href: '/industry',
      dropdown: [
        { label: 'Ecommerce', href: '/industry/ecommerce-cdp' },
        { label: 'B2B/ B2C Lead Gen', href: '/industry/b2b-b2c-lead-gen' },
        { label: 'SaaS', href: '/industry/saas' },
        { label: 'Agency', href: '/industry/agency' },
      ],
    },
    {
      label: 'Integrations',
      href: '/integrations',
    },
    {
      label: 'Pricing',
      href: '/pricing',
    },
    {
      label: 'Resources',
      href: '/resources',
      dropdown: [
        { label: 'Blog', href: '/resources/blog' },
        { label: 'Playbooks', href: '/resources/playbooks' },
        { label: 'Webinar', href: '/resources/webinar' },
        { label: 'Docs', href: '/resources/docs' },
        { label: 'Careers', href: '/resources/careers' },
        { label: 'Case studies', href: '/resources/case-studies' },
      ],
    },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="customerlabs-main-nav" role="navigation" aria-label="Main Navigation">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <a href="https://www.customerlabs.com/">
            <img src="/logo.svg" alt="CustomerLabs" className="logo" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span className="hamburger-icon"></span>
        </button>

        {/* Main Navigation Menu */}
        <ul className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item) => (
            <li
              key={item.label}
              className={`nav-item ${item.dropdown ? 'has-dropdown' : ''} ${
                openDropdown === item.label ? 'mobile-open' : ''
              }`}
            >
              <a
                href={item.href}
                className="nav-link"
                onClick={(e) => {
                  if (item.dropdown && window.innerWidth < 1024) {
                    e.preventDefault();
                    toggleDropdown(item.label);
                  }
                }}
              >
                {item.label}
                {item.dropdown && <span className="dropdown-icon" aria-hidden="true">▼</span>}
              </a>
              {item.dropdown && (
                <ul className="dropdown-menu">
                  {item.dropdown.map((subItem) => (
                    <li key={subItem.href}>
                      <a href={subItem.href}>{subItem.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className={`nav-cta ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="https://www.customerlabs.com/request-demo/" className="btn btn-secondary">
            Book a Demo
          </a>
          <a href="https://www.customerlabs.com/start-free-trial/" className="btn btn-primary">
            Start Free Trial
          </a>
        </div>
      </div>
    </nav>
  );
}

