import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">AushadhiVerify</div>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#overview" onClick={() => setIsMenuOpen(false)}>Overview</a>
            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="overview" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Verify Medicines with Blockchain-Backed Trust</h1>
            <p className="hero-subtext">
              AushadhiVerify ensures medicine authenticity using secure QR verification, 
              AI-powered packaging analysis, and permissioned blockchain tracking.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-placeholder">
              <div className="phone-mockup">
                <div className="screen">
                  <div className="scan-line"></div>
                  <div className="qr-box"></div>
                  <div className="status-verified">
                    <span className="checkmark">✓</span> Verified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Value Proposition Strip */}
      <section className="value-prop-strip">
        <div className="value-cards">
          <div className="value-card">
            <div className="icon-circle">🔗</div>
            <h3>Blockchain Provenance</h3>
            <p>Immutable tracking from factory to pharmacy.</p>
          </div>
          <div className="value-card">
            <div className="icon-circle">🤖</div>
            <h3>AI Packaging Verification</h3>
            <p>Detects tampering with machine learning.</p>
          </div>
          <div className="value-card">
            <div className="icon-circle">📊</div>
            <h3>Real-Time Insights</h3>
            <p>Supply chain visibility at every step.</p>
          </div>
          <div className="value-card">
            <div className="icon-circle">🛡️</div>
            <h3>Counterfeit Prevention</h3>
            <p>Stopping fake meds before they reach you.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section">
        <h2 className="section-title">How AushadhiVerify Works</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Identity Assignment</h3>
            <p>Manufacturer assigns a unique digital identity to each unit.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Blockchain Recording</h3>
            <p>Every transfer is securely recorded on the blockchain.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>User Scanning</h3>
            <p>User scans the QR code via the mobile app.</p>
          </div>
          <div className="step-card">
            <div className="step-number">4</div>
            <h3>AI Validation</h3>
            <p>AI validates packaging and confirms authenticity.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Permissioned Blockchain Network</h3>
            <p>Secure, private, and scalable ledger technology.</p>
          </div>
          <div className="feature-item">
            <h3>Smart Contract Dispensing</h3>
            <p>Automated and trustless verification logic.</p>
          </div>
          <div className="feature-item">
            <h3>Anomaly Detection Alerts</h3>
            <p>Instant notifications for suspicious activities.</p>
          </div>
          <div className="feature-item">
            <h3>Secure Mobile Verification</h3>
            <p>Easy-to-use app for instant verification.</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2 className="section-title">Our Mission</h2>
        <p className="mission-text">
          We are dedicated to protecting patients, securing the pharmaceutical supply chain, 
          and restoring trust in the medicines we rely on every day.
        </p>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="footer-content">
          <div className="copyright">
            © 2025 AushadhiVerify. All rights reserved.
          </div>
          <div className="footer-links">
            <a href="#">Docs (Coming Soon)</a>
            <a href="#">Contact</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
