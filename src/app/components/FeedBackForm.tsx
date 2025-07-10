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

  if (submitted) return <div>Feedback submitted!</div>;

  return (
    <form onSubmit={handleSubmit}>
      <h3>Leave Feedback</h3>
      <label>
        Rating:
        <input
          type="number"
          min={1}
          max={5}
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Comment:
        <input value={comment} onChange={(e) => setComment(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
