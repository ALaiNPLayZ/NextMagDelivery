"use client";
import VanMap from "../components/VanMap";

export default function VanPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "var(--background)",
        color: "var(--gray-700)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "2rem 0",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: 700,
          background: "var(--card-bg)",
          border: "1px solid var(--border)",
          borderRadius: "14px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          padding: "2rem 1.5rem",
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "1.6rem",
            fontWeight: 800,
            marginBottom: "1.2rem",
            color: "var(--gray-700)",
            letterSpacing: "-0.5px",
          }}
        >
          Van Tracking
        </h1>
        <VanMap />
      </section>
    </main>
  );
}
