import "./MyComponent.css";

function HomePage() {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>🏗️ BuildRight Construction Co.</h1>
        <p>Reliable. Professional. Affordable.</p>
        <a href="#contact" className="cta-button" id="footer">Lets Build together!!</a>
      </header>

      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <p>
          With over 20 years of experience, BuildRight Construction delivers high-quality residential and commercial building services. Our team is fully licensed and insured, and we pride ourselves on on-time, on-budget delivery.
        </p>
      </section>

    

    </div>
  );
}

export default HomePage;
