import Link from "next/link";

export default function CTABanner() {
  return (
    <section style={{ background: "white", padding: "0 80px 80px 80px" }}>
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        background: "linear-gradient(135deg, #F5A623 0%, #C17F24 100%)",
        borderRadius: "20px",
        padding: "56px 60px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>

        {/* Dot pattern overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
        }} />

        {/* Content */}
        <div style={{ position: "relative" }}>
          <p style={{
            fontSize: "11px",
            fontWeight: "700",
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}>
            Ready to Grow?
          </p>

          <h2 style={{
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: "800",
            color: "white",
            margin: "0 0 12px 0",
            fontFamily: "var(--font-playfair)",
          }}>
            Ready to Innovate, Elevate & Succeed?
          </h2>

          <p style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.8)",
            margin: "0 0 32px 0",
          }}>
            Book your free consultation today. Limited slots available this week.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "white",
                color: "#C17F24",
                padding: "14px 32px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: "800",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              Book Free Consultation →
            </Link>
            <Link
              href="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                color: "white",
                padding: "14px 32px",
                borderRadius: "999px",
                fontSize: "14px",
                fontWeight: "800",
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.5)",
                transition: "all 0.2s",
              }}
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}