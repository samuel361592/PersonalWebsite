import "./globals.css";
import Navbar from "./components/Navbar";

function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-500 flex justify-between">
        <span>© {new Date().getFullYear()} Samuel</span>
        <span>Built with Next.js</span>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />

        {/* Main should NOT add top padding */}
        <main className="max-w-5xl mx-auto px-6">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
