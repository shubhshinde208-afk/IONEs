"use client";

export default function Home() {
  const goToShop = () => {
    document.getElementById("shop")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main>
      <section className="hero">
        <div className="seal">永遠</div>

        <h1 style={{ fontSize: "54px", letterSpacing: "0.3em" }}>
          IONEs
        </h1>

        <p>Wear Silence. Own the Moment.</p>

        <button
  className="btn"
  style={{ width: "100%" }}
  onClick={() => window.location.href = "/checkout"}
>
  Buy Now
</button>
      </section>

      <section id="shop" className="wrap">
        <h2>DROP 001 — EIEN</h2>

        <div className="grid">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=900&auto=format&fit=crop"
              alt="Lavender Tee"
            />

            <div className="pad">
              <h3>Lavender Oversized Tee</h3>

              <p style={{ color: "#ff4d6d", fontSize: "24px" }}>
                ₹799
              </p>

              <p>Made in India 🇮🇳</p>

              <button className="btn" style={{ width: "100%" }}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer>© 2026 IONEs. All Rights Reserved.</footer>
    </main>
  );
      }
