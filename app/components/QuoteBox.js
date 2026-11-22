"use client";

import { useState } from "react";

export default function QuoteBox() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadQuote() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/quote");
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      setQuote(data);
    } catch (err) {
      setError("Could not load a quote. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <button onClick={loadQuote} disabled={loading}>
        {loading ? "Loading..." : "Get a quote"}
      </button>
      {error && <p role="alert">{error}</p>}
      {quote && (
        <p style={{ marginTop: 12 }}>
          "{quote.text}" - <em>{quote.author}</em>
        </p>
      )}
    </div>
  );
}