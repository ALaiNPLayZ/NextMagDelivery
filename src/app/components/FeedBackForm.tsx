"use client";
import { useState } from "react";

export default function FeedBackForm({
  userId,
  orderId,
}: {
  userId: string;
  orderId: string;
}) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, orderId, rating, comment }),
    });
    setSubmitted(true);
  }

  if (submitted)
    return (
      <div
        style={{
          background: "var(--gray-100)",
          border: "1px solid var(--border)",
          borderRadius: "10px",
          padding: "1.2rem 1rem",
          color: "var(--gray-700)",
          fontWeight: 600,
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        Feedback submitted!
      </div>
    );

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1.1rem",
        background: "var(--gray-50)",
        borderRadius: "10px",
        padding: "1.2rem 1rem",
        boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
      }}
    >
      <h3
        style={{
          fontSize: "1.15rem",
          fontWeight: 700,
          color: "var(--gray-700)",
          marginBottom: "0.5rem",
        }}
      >
        Leave Feedback
      </h3>
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          fontWeight: 600,
          color: "var(--gray-600)",
          fontSize: "1rem",
        }}
      >
        Rating:
        <input
          type="number"
          min={1}
          max={5}
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          style={{
            marginTop: "0.3rem",
            width: "80px",
            padding: "0.5rem",
            borderRadius: "6px",
            border: "1px solid var(--gray-300)",
            background: "var(--gray-100)",
            color: "var(--gray-700)",
            fontSize: "1rem",
            outline: "none",
            transition: "border 0.2s",
          }}
        />
      </label>
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          fontWeight: 600,
          color: "var(--gray-600)",
          fontSize: "1rem",
        }}
      >
        Comment:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={3}
          style={{
            marginTop: "0.3rem",
            width: "100%",
            padding: "0.7rem",
            borderRadius: "6px",
            border: "1px solid var(--gray-300)",
            background: "var(--gray-100)",
            color: "var(--gray-700)",
            fontSize: "1rem",
            outline: "none",
            resize: "vertical",
            transition: "border 0.2s",
          }}
        />
      </label>
      <button
        type="submit"
        style={{
          background: "var(--gray-700)",
          color: "#fff",
          padding: "0.7rem 2rem",
          borderRadius: "999px",
          fontWeight: 700,
          fontSize: "1rem",
          border: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
          cursor: "pointer",
          alignSelf: "flex-end",
          marginTop: "0.5rem",
          transition: "background 0.18s, color 0.18s",
        }}
      >
        Submit
      </button>
    </form>
  );
}
