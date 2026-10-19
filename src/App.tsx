import { useMemo, useState } from 'react'
import { HashRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import Logo from './components/Logo'
import Seo from './components/Seo'
import { COMPANY, LEGAL_NAV, ORGANIZATION_JSON_LD, PAGES, PRIMARY_NAV } from './config/site'
import {
  AboutPage,
  ContactPage,
  HomePage,
  ManufacturingPage,
  PrivacyPolicyPage,
  ProductsPage,
  QualityPage,
  ResearchPage,
  SustainabilityPage,
  TermsPage,
} from './pages/pages'

function PageFrame() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const pageMeta = useMemo(
    () => PAGES.find((entry) => entry.path === location.pathname) || PAGES[0],
    [location.pathname],
  )

  return (
    <>
      <Seo path={pageMeta.path} title={pageMeta.title} description={pageMeta.description} />
      <header className="site-header">
        <div className="container header-inner">
          <NavLink to="/" className="logo-link" onClick={() => setMenuOpen(false)}>
            <Logo />
          </NavLink>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((value) => !value)}
          >
            Menu
          </button>
          <nav id="site-nav" className={`site-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            <ul>
              {PRIMARY_NAV.map((entry) => (
                <li key={entry.path}>
                  <NavLink
                    to={entry.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    {entry.navLabel}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products-capabilities" element={<ProductsPage />} />
          <Route path="/quality-compliance" element={<QualityPage />} />
          <Route path="/manufacturing-technology" element={<ManufacturingPage />} />
          <Route path="/research-development" element={<ResearchPage />} />
          <Route path="/sustainability-ehs" element={<SustainabilityPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container footer-layout">
          <div>
            <Logo compact />
            <p>{COMPANY.tagline}</p>
            <p>{COMPANY.facilityAddress}</p>
          </div>
          <div>
            <h2>Site Links</h2>
            <ul className="footer-links">
              {[...PRIMARY_NAV, ...LEGAL_NAV].map((entry) => (
                <li key={entry.path}>
                  <NavLink to={entry.path}>{entry.navLabel}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
      <script type="application/ld+json">{JSON.stringify(ORGANIZATION_JSON_LD)}</script>
    </>
  )
}

function App() {
  return (
    <HashRouter>
      <PageFrame />
    </HashRouter>
  )
}

export default App
