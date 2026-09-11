"use client";

export default function OrderSuccess() {
  return (
    <main className="hero">
      <div className="seal">永遠</div>
      <h1>Payment Successful 🎉</h1>
      <p>Your IONEs order has been received.</p>
      <button
        className="btn"
        onClick={() => (window.location.href = "/")}
      >
        Back to Home
      </button>
    </main>
  );
}
