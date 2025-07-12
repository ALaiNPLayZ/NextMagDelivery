import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Magical Delivery System",
  description: "A demo dashboard for Magical Delivery Hackathon project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div style={{ maxWidth: 900, margin: "0 auto" }}>{children}</div>
      </body>
    </html>
  );
}
