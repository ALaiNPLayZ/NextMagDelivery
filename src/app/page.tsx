import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "var(--background)",
        color: "var(--gray-700)",
        padding: "2rem 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          width: "100%",
          maxWidth: 900,
          margin: "0 auto",
          padding: "1.2rem 1rem 0.8rem 1rem",
          background: "var(--card-bg)",
          border: "1px solid var(--border)",
          borderRadius: "18px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2.2rem",
            fontWeight: 900,
            marginBottom: "1rem",
            color: "var(--gray-700)",
            letterSpacing: "-1px",
          }}
        >
          Magical Delivery System
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--gray-500)",
            marginBottom: "1.2rem",
            fontWeight: 500,
          }}
        >
          AI-powered, privacy-first, and built for seamless logistics.
        </p>
        <Link
          href="/dashboard"
          style={{
            display: "inline-block",
            background: "var(--gray-700)",
            color: "#fff",
            padding: "0.85rem 2rem",
            borderRadius: "999px",
            fontWeight: 700,
            fontSize: "1.05rem",
            textDecoration: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            transition: "background 0.18s, color 0.18s",
            marginBottom: "1.2rem",
          }}
        >
          Go to Dashboard
        </Link>
      </section>

      {/* Bento Grid Section */}
      <section
        style={{
          width: "100%",
          maxWidth: 900,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.2rem",
          margin: "0 auto",
        }}
      >
        {/* Prediction Block */}
        <div
          style={{
            background: "var(--gray-100)",
            border: "1px solid var(--border)",
            borderRadius: "14px",
            padding: "1.2rem 1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            minHeight: 120,
          }}
        >
          <h2
            style={{
              fontSize: "1.05rem",
              fontWeight: 700,
              color: "var(--gray-700)",
            }}
          >
            🧠 AI Predictions
          </h2>
          <p style={{ color: "var(--gray-500)", fontSize: "0.97rem" }}>
            Personalized product recommendations powered by advanced ML models.
          </p>
        </div>
        {/* Consent Block */}
        <div
          style={{
            background: "var(--gray-100)",
            border: "1px solid var(--border)",
            borderRadius: "14px",
            padding: "1.2rem 1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            minHeight: 120,
          }}
        >
          <h2
            style={{
              fontSize: "1.05rem",
              fontWeight: 700,
              color: "var(--gray-700)",
            }}
          >
            🔒 Consent & Privacy
          </h2>
          <p style={{ color: "var(--gray-500)", fontSize: "0.97rem" }}>
            You control your data. Opt in or out of predictions and feedback at
            any time.
          </p>
        </div>
        {/* Van Tracking Block */}
        <div
          style={{
            background: "var(--gray-100)",
            border: "1px solid var(--border)",
            borderRadius: "14px",
            padding: "1.2rem 1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            minHeight: 120,
          }}
        >
          <h2
            style={{
              fontSize: "1.05rem",
              fontWeight: 700,
              color: "var(--gray-700)",
            }}
          >
            🚚 Real-Time Van Tracking
          </h2>
          <p style={{ color: "var(--gray-500)", fontSize: "0.97rem" }}>
            Track delivery vans live and get instant updates on your orders.
          </p>
        </div>
        {/* Feedback Block */}
        <div
          style={{
            background: "var(--gray-100)",
            border: "1px solid var(--border)",
            borderRadius: "14px",
            padding: "1.2rem 1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            minHeight: 120,
          }}
        >
          <h2
            style={{
              fontSize: "1.05rem",
              fontWeight: 700,
              color: "var(--gray-700)",
            }}
          >
            ⭐ Feedback Driven
          </h2>
          <p style={{ color: "var(--gray-500)", fontSize: "0.97rem" }}>
            Your feedback directly improves our AI models and service quality.
          </p>
        </div>
        {/* Governance Block */}
        <div
          style={{
            background: "var(--gray-100)",
            border: "1px solid var(--border)",
            borderRadius: "14px",
            padding: "1.2rem 1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            minHeight: 120,
          }}
        >
          <h2
            style={{
              fontSize: "1.05rem",
              fontWeight: 700,
              color: "var(--gray-700)",
            }}
          >
            🗂️ Governance & Audit
          </h2>
          <p style={{ color: "var(--gray-500)", fontSize: "0.97rem" }}>
            Full audit logs and governance tools ensure transparency and
            compliance.
          </p>
        </div>
        {/* Inventory Block */}
        <div
          style={{
            background: "var(--gray-100)",
            border: "1px solid var(--border)",
            borderRadius: "14px",
            padding: "1.2rem 1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            minHeight: 120,
          }}
        >
          <h2
            style={{
              fontSize: "1.05rem",
              fontWeight: 700,
              color: "var(--gray-700)",
            }}
          >
            📦 Inventory & Fulfillment
          </h2>
          <p style={{ color: "var(--gray-500)", fontSize: "0.97rem" }}>
            Real-time inventory management and order fulfillment.
          </p>
        </div>
      </section>
    </main>
  );
}
