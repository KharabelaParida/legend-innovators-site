"use client";

import { useState } from "react";

const givePillars = [
    { number: "01", title: "Growth System", desc: "Building integrated systems for innovation, efficiency, productivity, profitability, and strong stakeholder relationships." },
    { number: "02", title: "Intelligence System", desc: "Connecting people, ideas, and opportunities to foster collaboration and knowledge sharing across startups, clients, and society." },
    { number: "03", title: "Value System", desc: "Promoting transparency, honesty, integrity, accountability, and genuine care for client and community well-being." },
    { number: "04", title: "Ecosystem", desc: "Creating a sustainable, mutually beneficial environment where innovation, service, clients, and society thrive together." }
];

const craveValues = [
    { number: "01", letter: "C", title: "Collaborative", desc: "We partner with talented startups and experts to deliver the best possible solutions for our clients locally, regionally and globally." },
    { number: "02", letter: "R", title: "Responsible", desc: "We act with full accountability, ethics, and a strong focus on sustainability in everything we do." },
    { number: "03", letter: "A", title: "Acceptance", desc: "We listen deeply to understand and consistently exceed our clients' expectations through adaptive strategies." },
    { number: "04", letter: "V", title: "Visionary & Victorious", desc: "We think big, stay driven, and cultivate a winning mindset to help our clients achieve lasting success." },
    { number: "05", letter: "E", title: "Efficient", desc: "We deliver results with transparency, speed, and maximum value for both clients and society." }
];

export default function PhilosophyPage() {
    const [activeCrave, setActiveCrave] = useState(0);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [fadeIn, setFadeIn] = useState(true);

    const handleCraveSwitch = (index: number) => {
        setFadeIn(false);
        setTimeout(() => {
            setActiveCrave(index);
            setFadeIn(true);
        }, 200);
    };

    return (
        <section style={{ background: "white", padding: "40px 80px 60px 80px" }}>

            {/* G.I.V.E. Section — Full Navy Block */}
            <div style={{
                position: "relative",
                borderRadius: "24px",
                overflow: "hidden",
                marginBottom: "80px",
            }}>
                <div style={{
                    background: "#111B47",
                    padding: "56px 64px",
                    position: "relative",
                }}>

                    {/* Grid pattern overlay */}
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                        pointerEvents: "none",
                    }} />

                    {/* Gold glow top center */}
                    <div style={{
                        position: "absolute",
                        top: "-80px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "600px",
                        height: "300px",
                        background: "radial-gradient(ellipse, rgba(245,166,35,0.12), transparent 70%)",
                        pointerEvents: "none",
                    }} />

                    {/* Header inside navy */}
                    <div style={{ textAlign: "center", marginBottom: "48px", position: "relative" }}>
                        <p style={{
                            fontSize: "11px",
                            fontWeight: "700",
                            color: "#F5A623",
                            letterSpacing: "3px",
                            textTransform: "uppercase",
                            marginBottom: "12px",
                        }}>
                            G  I  V  E
                        </p>
                        <h2 style={{
                            fontSize: "clamp(28px, 3vw, 40px)",
                            fontWeight: "800",
                            color: "white",
                            margin: "0 0 16px 0",
                            fontFamily: "var(--font-playfair)",
                        }}>
                            Our Philosophy
                        </h2>
                        <p style={{
                            fontSize: "15px",
                            color: "rgba(255,255,255,0.55)",
                            lineHeight: "1.7",
                            maxWidth: "520px",
                            margin: "0 auto",
                            fontStyle: "italic",
                        }}>
                            "We don't just advise — we{" "}
                            <span style={{ color: "#F5A623", fontWeight: "700" }}>empower</span>
                            {" "}you to innovate, grow sustainably, and succeed responsibly."
                        </p>
                        <div style={{
                            width: "60px",
                            height: "2px",
                            background: "linear-gradient(to right, #F5A623, #C17F24)",
                            margin: "24px auto 0",
                            borderRadius: "999px",
                        }} />
                    </div>

                    {/* 2x2 Grid */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "20px",
                        position: "relative",
                        maxWidth: "1000px",
                        margin: "0 auto",
                    }}>
                        {givePillars.map((item, index) => (
                            <div
                                key={item.number}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                style={{
                                    background: hoveredCard === index ? "rgba(245,166,35,0.15)" : "rgba(245,166,35,0.08)",
                                    borderRadius: "16px",
                                    padding: "28px 24px",
                                    border: hoveredCard === index ? "1px solid rgba(245,166,35,0.5)" : "1px solid rgba(245,166,35,0.2)",
                                    transition: "all 0.3s ease",
                                    cursor: "default",
                                    transform: hoveredCard === index ? "translateY(-6px)" : "translateY(0)",
                                    boxShadow: hoveredCard === index ? "0 16px 48px rgba(245,166,35,0.2)" : "none",
                                }}
                            >
                                <div style={{ fontSize: "11px", color: "#F5A623", marginBottom: "10px", fontWeight: "700" }}>
                                    {item.number}
                                </div>
                                <h4 style={{
                                    fontSize: "17px",
                                    fontWeight: "800",
                                    color: "white",
                                    margin: "0 0 10px 0",
                                    fontFamily: "var(--font-playfair)",
                                }}>
                                    {item.title}
                                </h4>
                                <p style={{
                                    fontSize: "13px",
                                    color: "rgba(255,255,255,0.5)",
                                    lineHeight: "1.6",
                                    margin: 0,
                                }}>
                                    {item.desc}
                                </p>
                                <div style={{
                                    width: hoveredCard === index ? "48px" : "0px",
                                    height: "3px",
                                    background: "linear-gradient(to right, #F5A623, #C17F24)",
                                    borderRadius: "999px",
                                    marginTop: "16px",
                                    transition: "width 0.3s ease",
                                }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* C.R.A.V.E. Section */}
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                    <p style={{
                        fontSize: "11px",
                        fontWeight: "700",
                        color: "#F5A623",
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        marginBottom: "8px",
                    }}>
                        C R A V E
                    </p>
                    <h3 style={{
                        fontSize: "clamp(26px, 2.8vw, 36px)",
                        fontWeight: "800",
                        color: "#1B2A6B",
                        fontFamily: "var(--font-playfair)",
                        margin: 0,
                    }}>
                        Our Core Values
                    </h3>
                </div>

                {/* 5 Cards in a row */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gap: "0",
                    border: "1px solid #E5E7EB",
                    borderRadius: "20px",
                    overflow: "hidden",
                }}>
                    {craveValues.map((item, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredCard(index + 10)}
                            onMouseLeave={() => setHoveredCard(null)}
                            style={{
                                padding: "36px 24px",
                                textAlign: "center",
                                borderRight: index < craveValues.length - 1 ? "1px solid #E5E7EB" : "none",
                                background: hoveredCard === index + 10
                                    ? "#FFF8EC"
                                    : index % 2 === 0 ? "white" : "#FAFAF8",
                                transition: "all 0.3s ease",
                                cursor: "default",
                            }}
                        >
                            {/* Big Letter */}
                            <div style={{
                                fontSize: "52px",
                                fontWeight: "900",
                                color: "#F5A623",
                                lineHeight: "1",
                                marginBottom: "16px",
                                transition: "transform 0.3s ease",
                                transform: hoveredCard === index + 10 ? "scale(1.15)" : "scale(1)",
                            }}>
                                {item.letter}
                            </div>

                            {/* Title */}
                            <div style={{
                                fontSize: "13px",
                                fontWeight: "800",
                                color: "#1B2A6B",
                                marginBottom: "10px",
                                fontFamily: "var(--font-playfair)",
                            }}>
                                {item.title}
                            </div>

                            {/* Divider */}
                            <div style={{
                                width: hoveredCard === index + 10 ? "40px" : "24px",
                                height: "2px",
                                background: "linear-gradient(to right, #F5A623, #C17F24)",
                                borderRadius: "999px",
                                margin: "0 auto 12px auto",
                                transition: "width 0.3s ease",
                            }} />

                            {/* Description */}
                            <div style={{
                                fontSize: "11px",
                                color: "#6B7280",
                                lineHeight: "1.6",
                            }}>
                                {item.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}