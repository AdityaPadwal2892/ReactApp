import React from 'react';
import './Feature.css'; // Optional: For styles

function Features() {
  return (
    <section className="features-section" id="features">
      <h2>Key Features That Set Us Apart</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>✅ Trusted Expertise</h3>
          <p>Over 20 years of industry experience in residential, commercial, and industrial projects.</p>
        </div>
        <div className="feature-card">
          <h3>⏱️ On-Time Delivery</h3>
          <p>We stick to timelines and deliver projects without delays — guaranteed.</p>
        </div>
        <div className="feature-card">
          <h3>💰 Transparent Pricing</h3>
          <p>Upfront estimates with no hidden costs. Fair pricing, always.</p>
        </div>
        <div className="feature-card">
          <h3>📐 Custom Designs</h3>
          <p>Architectural plans crafted to match your exact vision and needs.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
