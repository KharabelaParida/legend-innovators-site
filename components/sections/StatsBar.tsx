export default function StatsBar() {
    const stats = [
        {
            number: "150+",
            description: "Businesses served across India with expert advisory.",
        },
        {
            number: "98%",
            description: "Success rate in funding and business growth.",
        },
        {
            number: "₹200Cr+",
            description: "Funding facilitated for startups and SMEs.",
        },
        {
            number: "15+",
            description: "Years of proven business advisory expertise.",
        },
    ];

    return (
        <section style={{
           background: "#FDF8F3",
            padding: "0 80px 60px 80px",
        }}>
            <div style={{
                maxWidth: "1280px",
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "24px",
            }}>
                {stats.map((stat) => (
                    <div
                        key={stat.number}
                        style={{
                            background: "white",
                            borderRadius: "14px",
                            padding: "28px 24px",
                            borderLeft: "4px solid #F5A623",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                        }}
                    >
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            marginBottom: "10px",
                        }}>
                            <span style={{
                                fontSize: "clamp(22px, 2vw, 30px)",
                                fontWeight: "800",
                                color: "#1B2A6B",
                            }}>
                                {stat.number}
                            </span>
                            <span style={{
                                fontSize: "18px",
                                color: "#F5A623",
                                fontWeight: "700",
                            }}>
                                ↗
                            </span>
                        </div>
                        <p style={{
                            fontSize: "13px",
                            color: "#6B7280",
                            lineHeight: "1.6",
                            margin: 0,
                        }}>
                            {stat.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}