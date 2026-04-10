"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Our team will get back to you shortly.");
  };

  return (
    <main className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-container">
          <p className="contact-eyebrow">GET IN TOUCH</p>
          <h1 className="contact-hero-title">
            Let's Start Your <span className="contact-gold">Success Story</span>
          </h1>
          <p className="contact-hero-desc">
            Whether you need funding, tax planning, compliance support, or strategic guidance — we're here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-section contact-white">
        <div className="contact-container">
          <div className="contact-grid">

            {/* Left - Form */}
            <div className="contact-form-section">
              <h2 className="contact-section-title">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <div className="contact-form-row">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="Funding Advisory">Funding Advisory</option>
                  <option value="Virtual CFO">Virtual CFO</option>
                  <option value="Business Advisory">Business Advisory</option>
                  <option value="Startup Mentoring">Startup Mentoring</option>
                  <option value="GST & Compliance">GST & Compliance</option>
                  <option value="Others">Others</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Tell us more about your requirements..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                />

                <button type="submit" className="contact-btn-primary">
                  Send Message →
                </button>
              </form>
            </div>

            {/* Right - Map + Booking */}
            <div className="contact-info-section">
              {/* Map */}
              <div className="contact-map-box">
                <h3 className="contact-small-title">Visit Our Office</h3>
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5!2d88.4123!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzIxLjYiTiA4OMKwMjQnNDQuMyJF"
                    width="100%"
                    height="280"
                    style={{ border: "none", borderRadius: "12px" }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="contact-address">
                  Salt Lake, Kolkata, West Bengal 700091
                </p>
              </div>

              {/* Instant Booking */}
              <div className="contact-booking-box">
                <h3 className="contact-small-title">Book a Free Consultation</h3>
                <p className="contact-booking-desc">
                  Schedule a meeting with our expert team
                </p>
                <div className="contact-booking-widget">
                  <iframe
                    src="https://outlook.office.com/book/LegendInnovators@sktspeaking.com/?ismsaljsauthenabled"
                    width="100%"
                    height="580"
                    style={{ border: "none", borderRadius: "12px" }}
                    title="Book Appointment"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-page { background: #FDF8F3; }

        .contact-hero {
          background: #1B2A6B;
          padding: 110px 0 80px;
          text-align: center;
        }
        .contact-eyebrow {
          font-size: 11px;
          font-weight: 700;
          color: #F5A623;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .contact-hero-title {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 800;
          color: white;
          line-height: 1.2;
          margin-bottom: 20px;
          font-family: var(--font-playfair);
        }
        .contact-hero-desc {
          font-size: 16px;
          color: rgba(255,255,255,0.75);
          max-width: 620px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .contact-section { padding: 80px 0; }
        .contact-white { background: white; }
        .contact-container { 
          max-width: 1280px; 
          margin: 0 auto; 
          padding: 0 80px; 
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
        }

        .contact-section-title {
          font-size: 26px;
          font-weight: 800;
          color: #1B2A6B;
          margin-bottom: 30px;
          font-family: var(--font-playfair);
        }

        .contact-form input,
        .contact-form select,
        .contact-form textarea {
          width: 100%;
          padding: 14px 20px;
          border: 1px solid #E5E7EB;
          border-radius: 10px;
          font-size: 15px;
        }

        .contact-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .contact-btn-primary {
          background: linear-gradient(to right, #F5A623, #C17F24);
          color: white;
          padding: 16px 32px;
          border: none;
          border-radius: 999px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          margin-top: 10px;
        }

        .contact-small-title {
          font-size: 20px;
          font-weight: 700;
          color: #1B2A6B;
          margin-bottom: 16px;
        }

        .contact-map {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #E5E7EB;
        }

        .contact-address {
          margin-top: 12px;
          font-size: 14px;
          color: #6B7280;
        }

        .contact-booking-desc {
          font-size: 14.5px;
          color: #6B7280;
          margin-bottom: 20px;
        }

        /* Mobile */
        @media (max-width: 1023px) {
          .contact-container { padding: 0 20px; }
          .contact-grid { grid-template-columns: 1fr; gap: 60px; }
          .contact-section { padding: 60px 0; }
        }
      `}</style>

    </main>
  );
}