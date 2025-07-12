"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/consent", label: "Consent" },
  { href: "/prediction", label: "Prediction" },
  { href: "/prediction-queue", label: "Prediction Queue" },
  { href: "/van", label: "Van Tracking" },
  { href: "/order", label: "Order" },
  { href: "/inventory", label: "Inventory" },
  { href: "/feedback", label: "Feedback" },
  { href: "/governance", label: "Governance" },
  { href: "/jobs", label: "Jobs" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(6px)",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        gap: "0.5rem",
        justifyContent: "center",
        padding: "0.5rem 0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
      }}
    >
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            style={{
              padding: "0.5rem 1.1rem",
              borderRadius: "15px",
              fontWeight: isActive ? 700 : 500,
              background: isActive ? "#ededed" : "transparent",
              color: isActive ? "#222" : "#737373",
              boxShadow: isActive ? "0 1px 4px rgba(0,0,0,0.04)" : "none",
              transition: "background 0.18s, color 0.18s, box-shadow 0.18s",
              border: isActive ? "1px solid #d1d5db" : "1px solid transparent",
              cursor: "pointer",
              textDecoration: "none",
              outline: "none",
            }}
            tabIndex={0}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
