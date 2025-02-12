
const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="navbar">
        <div className="logo">TalentBoost AI</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#stats">Statistics</a>
          <a href="#cta">Get Started</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div data-aos="fade-right">
            <h1>Transform Your Talent Management with AI</h1>
            <p>Leverage market intelligence to boost candidate campaigns and drive successful placements with our AI-powered platform.</p>
            <a href="#cta" className="btn btn-primary">Get Started</a>
          </div>
          <div className="hero-image" data-aos="fade-left">
            <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" alt="Platform Preview" />
            <div className="floating-stats">
              <div className="stat-bubble" data-aos="zoom-in" data-aos-delay="200">
                <span className="stat-value">98%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat-bubble" data-aos="zoom-in" data-aos-delay="400">
                <span className="stat-value">50K+</span>
                <span className="stat-label">Placements</span>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
          <span>Scroll to explore</span>
        </div>
      </section>

      <section className="features" id="features">
        <div className="features-grid">
          <div className="feature-card" data-aos="fade-up">
            <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" alt="AI Feature" className="feature-icon" />
            <h3>AI-Powered Matching</h3>
            <p>Match candidates with opportunities using advanced AI algorithms and market data.</p>
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
            <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" alt="Market Intelligence" className="feature-icon" />
            <h3>Market Intelligence</h3>
            <p>Access real-time market insights and salary benchmarks to make informed decisions.</p>
          </div>
          <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
            <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" alt="Analytics" className="feature-icon" />
            <h3>Campaign Analytics</h3>
            <p>Track and optimize your recruitment campaigns with detailed analytics.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works" id="how-it-works">
        <h2 className="section-title" data-aos="fade-up">How It Works</h2>
        <div className="steps-container">
          <div className="step" data-aos="fade-up">
            <div className="step-number">01</div>
            <h3>Upload Candidates</h3>
            <p>Import your candidate profiles and let our AI analyze their potential.</p>
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" alt="Upload" className="step-image" />
          </div>
          <div className="step" data-aos="fade-up" data-aos-delay="200">
            <div className="step-number">02</div>
            <h3>AI Analysis</h3>
            <p>Our AI processes candidate data and matches them with market opportunities.</p>
            <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" alt="Analysis" className="step-image" />
          </div>
          <div className="step" data-aos="fade-up" data-aos-delay="400">
            <div className="step-number">03</div>
            <h3>Track Progress</h3>
            <p>Monitor campaigns and optimize based on real-time analytics.</p>
            <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" alt="Track" className="step-image" />
          </div>
        </div>
      </section>

      <section className="interactive-demo" id="demo">
        <div className="demo-container">
          <div className="demo-content" data-aos="fade-right">
            <h2>See It in Action</h2>
            <p>Watch how our AI transforms your recruitment process</p>
            <div className="demo-features">
              <div className="demo-feature">
                <span className="feature-dot"></span>
                <p>Smart Candidate Matching</p>
              </div>
              <div className="demo-feature">
                <span className="feature-dot"></span>
                <p>Real-time Analytics</p>
              </div>
              <div className="demo-feature">
                <span className="feature-dot"></span>
                <p>Market Intelligence</p>
              </div>
            </div>
          </div>
          <div className="demo-video" data-aos="fade-left">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="Demo" className="demo-image" />
            <div className="play-button"></div>
          </div>
        </div>
      </section>

      <section className="stats" id="stats">
        <div className="stats-grid">
          <div className="stat-card" data-aos="fade-up">
            <div className="stat-number">98%</div>
            <div className="stat-label">Placement Success Rate</div>
          </div>
          <div className="stat-card" data-aos="fade-up" data-aos-delay="100">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Candidates Placed</div>
          </div>
          <div className="stat-card" data-aos="fade-up" data-aos-delay="200">
            <div className="stat-number">2000+</div>
            <div className="stat-label">Active Companies</div>
          </div>
        </div>
      </section>

      <section className="cta" id="cta">
        <h2>Ready to Transform Your Recruitment?</h2>
        <p>Join thousands of companies already using TalentBoost AI to revolutionize their talent acquisition.</p>
        <a href="#" className="btn btn-secondary">Start Free Trial</a>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div>
            <h4>TalentBoost AI</h4>
            <p>The future of talent management.</p>
          </div>
          <div>
            <h4>Product</h4>
            <ul className="footer-links">
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Enterprise</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul className="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

