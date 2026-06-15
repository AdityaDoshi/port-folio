import "./globals.css";

export const metadata = {
  title: "Aditya Doshi | Frontend Developer",
  description: "I build high-converting, lightning-fast websites for copywriters, agencies, and businesses. Clean code, pixel-perfect design, blazing speed.",
  keywords: "frontend developer, web developer, landing pages, portfolio, Aditya Doshi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
