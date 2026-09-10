"use client";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function Checkout() {
  const payNow = () => {
    const options = {
      key: "rzp_test_TaP6p5WU8KTl8A", // Test Key ID
      amount: 79900,
      currency: "INR",
      name: "IONEs",
      description: "DROP 001 — Lavender Oversized Tee",
      image: "/logo.png",
      handler: function (response: any) {
        window.location.href =
          `/order-success?payment=${response.razorpay_payment_id}`;
      },
      theme: {
        color: "#B3001B",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <main className="hero">
      <div className="seal">永遠</div>

      <h1>Checkout</h1>

      <p>Lavender Oversized Tee</p>

      <h2>₹799</h2>

      <button className="btn" onClick={payNow}>
        Pay Securely
      </button>
    </main>
  );
}
