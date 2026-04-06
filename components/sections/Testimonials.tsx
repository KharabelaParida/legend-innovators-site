"use client";

import { useState } from "react";

const testimonials = [
  {
    image: "/testimonials/client-1.png",
    initials: "RS",
    quote: "Legend Innovators helped us secure ₹2.8 Cr in bank funding within 45 days. Their team made the entire process smooth and stress-free.",
    name: "Rahul Sharma",
    designation: "Founder",
    company: "Tech Startup, Kolkata",
  },
  {
    image: "/testimonials/client-2.jpg",
    initials: "PM",
    quote: "Thanks to their Virtual CFO service, we improved cash flow visibility and successfully raised our next funding round.",
    name: "Priya Mehta",
    designation: "CEO",
    company: "E-commerce SME, Mumbai",
  },
  {
    image: "/testimonials/client-3.jpg",
    initials: "AK",
    quote: "Our startup went from concept to first paying customers in just 4 months with Legend Innovators' mentoring program.",
    name: "Arjun Kumar",
    designation: "Founder",
    company: "Fintech Startup, Bangalore",
  },
  {
    image: "/testimonials/client-4.jpg",
    initials: "SK",
    quote: "Legend Innovators transformed our operations and helped us achieve 40% efficiency gains within six months.",
    name: "Suresh Kumar",
    designation: "Director",
    company: "Manufacturing Firm, Mumbai",
  },
  {
    image: "/testimonials/client-5.jpg",
    initials: "NP",
    quote: "They handled our Private Limited registration and trademark filing seamlessly. We were operational in record time.",
    name: "Neha Patel",
    designation: "Founder",
    company: "HealthTech Startup, Delhi",
  },
  {
    image: "/testimonials/client-6.jpg",
    initials: "VR",
    quote: "The LICON network opened doors we never imagined. Truly a game changer for our business growth.",
    name: "Vikram Rao",
    designation: "Co-founder",
    company: "EdTech Startup, Hyderabad",
  },
  {
    image: "/testimonials/client-7.jpg",
    initials: "AT",
    quote: "Their ethical approach and deep expertise made them our long-term advisory partner. Highly recommended!",
    name: "Anita Trivedi",
    designation: "Managing Director",
    company: "Retail Chain, Delhi",
  },
  {
    image: "/testimonials/client-8.jpg",
    initials: "RG",
    quote: "Professional, responsive and result-oriented. Best investment we made for our startup journey.",
    name: "Rohit Gupta",
    designation: "Founder",
    company: "AgriTech Startup, Pune",
  },
  {
    image: "/testimonials/client-9.jpg",
    initials: "SM",
    quote: "They understood our vision and helped us build a scalable model from day one. Incredible team!",
    name: "Sunita Mishra",
    designation: "CEO",
    company: "Fashion Brand, Jaipur",
  },
  {
    image: "/testimonials/client-10.jpg",
    initials: "KS",
    quote: "IPO readiness program was a game changer. We are now fully prepared for the next stage of growth.",
    name: "Kiran Singh",
    designation: "Founder",
    company: "Logistics Startup, Chennai",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section style={{ background: "white", padding: "0 80px 80px 80px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>

        {/* Left Arrow */}
        <button
          onClick={prev}
          style={{
            position: "absolute",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#F5A623",
            fontSize: "48px",
            fontWeight: "900",
            lineHeight: "1",
            padding: "0",
            zIndex: 10,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          ‹
        </button>

        {/* Main Box */}
        <div style={{
          background: "#1B2A6B",
          borderRadius: "24px",
          padding: "56px 80px",
          position: "relative",
          overflow: "hidden",
        }}>

          {/* Grid pattern */}
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            pointerEvents: "none",
          }} />

          {/* Gold glow */}
          <div style={{
            position: "absolute",
            top: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "500px",
            height: "250px",
            background: "radial-gradient(ellipse, rgba(245,166,35,0.12), transparent 70%)",
            pointerEvents: "none",
          }} />

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "36px", position: "relative" }}>
            <p style={{
              fontSize: "11px",
              fontWeight: "700",
              color: "#F5A623",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}>
              What Clients Say
            </p>
            <h3 style={{
              fontSize: "clamp(22px, 2.5vw, 30px)",
              fontWeight: "800",
              color: "white",
              margin: 0,
              fontFamily: "var(--font-playfair)",
            }}>
              200+ Businesses Trust Us
            </h3>
          </div>

          {/* Content */}
          <div style={{ textAlign: "center", position: "relative", maxWidth: "600px", margin: "0 auto" }}>

            {/* Client Photo */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
              <div style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                border: "3px solid rgba(245,166,35,0.5)",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                background: "rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                {!imgErrors[current] ? (
                  <img
                    src={t.image}
                    alt={t.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={() => setImgErrors((prev) => ({ ...prev, [current]: true }))}
                  />
                ) : (
                  <div style={{
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, #F5A623, #C17F24)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    fontWeight: "900",
                    color: "white",
                  }}>
                    {t.initials}
                  </div>
                )}
              </div>
            </div>

            {/* Quote */}
            <p style={{
              fontSize: "clamp(14px, 1.4vw, 16px)",
              color: "rgba(255,255,255,0.85)",
              lineHeight: "1.8",
              margin: "0 0 24px 0",
              fontStyle: "italic",
              minHeight: "80px",
            }}>
              {t.quote}
            </p>

            {/* Gold divider */}
            <div style={{
              width: "40px",
              height: "2px",
              background: "linear-gradient(to right, #F5A623, #C17F24)",
              borderRadius: "999px",
              margin: "0 auto 20px auto",
            }} />

            {/* Name + Role */}
            <div style={{ marginBottom: "32px" }}>
              <div style={{ fontSize: "16px", fontWeight: "800", color: "white", marginBottom: "4px" }}>
                {t.name}
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
                {t.designation} · {t.company}
              </div>
            </div>

            {/* Dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrent(index)}
                  style={{
                    height: "8px",
                    borderRadius: "999px",
                    background: current === index ? "#F5A623" : "rgba(255,255,255,0.3)",
                    width: current === index ? "24px" : "8px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>

          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#F5A623",
            fontSize: "48px",
            fontWeight: "900",
            lineHeight: "1",
            padding: "0",
            zIndex: 10,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          ›
        </button>

      </div>
    </section>
  );
}