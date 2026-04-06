"use client";

import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section style={{
      width: "100%",
      background: "linear-gradient(135deg, #FDF8F3 60%, #E8F5E9 100%)",
    }}>

      {/* Top Row — Left + Right */}
      <div style={{
        width: "100%",
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0px 80px 0px 80px",
        display: "flex",
        alignItems: "center",
        gap: "60px",
        minHeight: "85vh",
      }}>

        {/* Left Side */}
        <div style={{ flex: "0 0 50%", maxWidth: "50%" }}>
          <h1 style={{
            fontSize: "clamp(32px, 3vw, 52px)",
            fontWeight: "800",
            color: "#1B2A6B",
            lineHeight: "1.2",
            marginBottom: "24px",
            fontFamily: "var(--font-playfair)",
          }}>
            Empower Your Business to{" "}
            <span style={{ color: "#F5A623" }}>Innovate, Elevate & Succeed.</span>
          </h1>

          <p style={{
            fontSize: "clamp(14px, 1.2vw, 16px)",
            color: "#6B7280",
            lineHeight: "1.8",
            marginBottom: "36px",
            maxWidth: "440px",
          }}>
            Expert Funding, Virtual CFO, Strategic Growth Advisory & more designed for Indian startups and SMEs. Ethical. Sustainable. Results-Driven.
          </p>

          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            maxWidth: "460px",
          }}>
            <div style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#ffffff",
              border: "1.5px solid #E5E7EB",
              borderRadius: "999px",
              padding: "12px 20px",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  border: "none",
                  outline: "none",
                  fontSize: "14px",
                  color: "#374151",
                  backgroundColor: "transparent",
                  width: "100%",
                }}
              />
            </div>
            <Link
              href="/contact"
              style={{
                background: "linear-gradient(to right, #F5A623, #C17F24)",
                color: "#ffffff",
                padding: "12px 28px",
                borderRadius: "999px",
                fontWeight: "600",
                fontSize: "14px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div style={{
          flex: "0 0 50%",
          maxWidth: "50%",
          position: "relative",
          height: "520px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>

          {/* Gradient Blob */}
          <svg
            viewBox="0 0 420 420"
            style={{
              position: "absolute",
              width: "90%",
              height: "90%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 0,
            }}
          >
            <defs>
              <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#F5A623" }} />
                <stop offset="100%" style={{ stopColor: "#C17F24" }} />
              </linearGradient>
              <pattern id="gridPattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                <line x1="6" y1="0" x2="6" y2="12" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />
                <line x1="0" y1="6" x2="12" y2="6" stroke="white" strokeWidth="0.6" strokeOpacity="0.25" />
              </pattern>
            </defs>
            <path
              d="M180,20 C260,0 370,40 400,130 C430,220 390,340 300,390 C210,440 80,410 30,320 C-20,230 20,100 100,50 C130,30 150,25 180,20Z"
              fill="url(#blobGrad)"
            />
            <path
              d="M180,20 C260,0 370,40 400,130 C430,220 390,340 300,390 C210,440 80,410 30,320 C-20,230 20,100 100,50 C130,30 150,25 180,20Z"
              fill="url(#gridPattern)"
            />
          </svg>

          {/* Person Image */}
          <img
            src="/hero/hero-person-9.png"
            alt="Hero Person"
            style={{
              position: "relative",
              zIndex: 1,
              height: "95%",
              width: "auto",
              objectFit: "contain",
              marginTop: "-40px",
            }}
          />

          {/* Card 1 — 12 o'clock */}
          <div style={{ position: "absolute", top: "2%", left: "70%", transform: "translateX(-50%)", background: "white", border: "1px solid #E5E7EB", borderRight: "3px solid #F5A623", borderRadius: "8px", padding: "8px 14px", zIndex: 4, boxShadow: "0 4px 16px rgba(0,0,0,0.08)", whiteSpace: "nowrap" }}>
            <div style={{ fontSize: "15px", fontWeight: 800, color: "#1B2A6B" }}>150+</div>
            <div style={{ fontSize: "10px", color: "#6B7280" }}>Startups & SMEs</div>
          </div>

          {/* Card 2 — 2 o'clock */}
          <div style={{ position: "absolute", top: "35%", right: "3%", background: "white", border: "1px solid #E5E7EB", borderRight: "3px solid #F5A623", borderRadius: "8px", padding: "8px 14px", zIndex: 4, boxShadow: "0 4px 16px rgba(0,0,0,0.08)", whiteSpace: "nowrap" }}>
            <div style={{ fontSize: "15px", fontWeight: 800, color: "#1B2A6B" }}>98%</div>
            <div style={{ fontSize: "10px", color: "#6B7280" }}>Success Rate</div>
          </div>

          {/* Card 3 — 4 o'clock */}
          <div style={{ position: "absolute", bottom: "15%", right: "8%", background: "white", border: "1px solid #E5E7EB", borderRight: "3px solid #F5A623", borderRadius: "8px", padding: "8px 14px", zIndex: 4, boxShadow: "0 4px 16px rgba(0,0,0,0.08)", whiteSpace: "nowrap" }}>
            <div style={{ fontSize: "15px", fontWeight: 800, color: "#F5A623" }}>Startup India</div>
            <div style={{ fontSize: "10px", color: "#6B7280" }}>Aligned</div>
          </div>

          {/* Card 4 — 8 o'clock */}
          <div style={{ position: "absolute", bottom: "15%", left: "10%", background: "white", border: "1px solid #E5E7EB", borderLeft: "3px solid #F5A623", borderRadius: "8px", padding: "8px 14px", zIndex: 4, boxShadow: "0 4px 16px rgba(0,0,0,0.08)", whiteSpace: "nowrap" }}>
            <div style={{ fontSize: "15px", fontWeight: 800, color: "#1B2A6B" }}>Pan-India</div>
            <div style={{ fontSize: "10px", color: "#6B7280" }}>Coverage</div>
          </div>

          {/* Card 5 — 10 o'clock */}
          <div style={{ position: "absolute", top: "25%", left: "10%", background: "white", border: "1px solid #E5E7EB", borderLeft: "3px solid #F5A623", borderRadius: "8px", padding: "8px 14px", zIndex: 4, boxShadow: "0 4px 16px rgba(0,0,0,0.08)", whiteSpace: "nowrap" }}>
            <div style={{ fontSize: "15px", fontWeight: 800, color: "#1B2A6B" }}>100%</div>
            <div style={{ fontSize: "10px", color: "#6B7280" }}>Ethical</div>
          </div>

        </div>
      </div>

      
    {/* Wave Transition — connects hero to services section */}
      <div style={{
        lineHeight: 0,
      }}>
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", width: "100%" }}
        >
          <path
           d="M0,50 C180,0 360,60 540,20 C720,0 900,60 1080,10 C1260,0 1380,50 1440,30 L1440,60 L0,60 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

    </section>
  );
}