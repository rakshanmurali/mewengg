export default function Hero() {
  return (
    <section id="top" className="hero hero-industrial">

      {/* Background */}
      <div className="hero-bg" aria-hidden="true" />

      {/* Red geometric decoration */}
      <div className="hero-red-shape hero-red-shape--top" />
      <div className="hero-red-shape hero-red-shape--bottom" />

      <div className="wrap hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            CHENNAI · PROPRIETORSHIP EST. ENGINEERING
          </div>

          <h1 className="hero-title">
            We build the ground,
            <br />
            the steel and the pipe
            <br />
            <span>industry runs on.</span>
          </h1>

          <p className="hero-description">
            Civil construction, mechanical fabrication, piping &amp;
            pipeline execution, plant maintenance, material supply and
            logistics — one contractor, end to end, for NTPC, IOCL,
            CPCL and Bharat Petroleum sites across Tamil Nadu.
          </p>

          <div className="hero-buttons">

            <a href="#contact" className="hero-btn hero-btn-primary">
              Get a Quote
              <span>→</span>
            </a>

            <a href="#services" className="hero-btn hero-btn-outline">
              View Capabilities
              <span>→</span>
            </a>

          </div>

        </div>


        {/* RIGHT STATS */}
        <div className="hero-stats">

          <div className="hero-stat-card">

            <div className="hero-stat-label">
              FY 2023–24 TURNOVER
            </div>

            <div className="hero-stat-main">
              ₹18.66 <small>Cr</small>
            </div>

            <div className="hero-stat-divider" />

            <div className="hero-stat-grid">

              <div>
                <span>DIVISIONS</span>
                <strong>06</strong>
              </div>

              <div>
                <span>MARQUEE CLIENTS</span>
                <strong>12+</strong>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* BOTTOM CAPABILITIES */}
      <div className="hero-capabilities">

        <div className="hero-capability hero-capability-active">
          <div className="capability-icon">⚙</div>
          <div>
            <strong>CIVIL CONSTRUCTION</strong>
            <small>Foundations for a stronger tomorrow</small>
          </div>
        </div>

        <div className="hero-capability">
          <div className="capability-icon">⚙</div>
          <div>
            <strong>MECHANICAL FABRICATION</strong>
            <small>Precision in every component</small>
          </div>
        </div>

        <div className="hero-capability">
          <div className="capability-icon">◉</div>
          <div>
            <strong>PIPING &amp; PIPELINE</strong>
            <small>Safe. Strong. Sustainable.</small>
          </div>
        </div>

        <div className="hero-capability">
          <div className="capability-icon">⚒</div>
          <div>
            <strong>PLANT MAINTENANCE</strong>
            <small>Maximising uptime, always</small>
          </div>
        </div>

        <div className="hero-capability">
          <div className="capability-icon">▣</div>
          <div>
            <strong>MATERIAL SUPPLY &amp; LOGISTICS</strong>
            <small>On time. Every time.</small>
          </div>
        </div>

      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <i />
      </div>

    </section>
  );
}