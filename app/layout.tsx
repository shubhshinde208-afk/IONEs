import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "IONEs",
  description: "Wear Silence. Own the Moment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  );
}
