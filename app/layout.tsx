import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./lib/language";
import { ThemeProvider } from "./lib/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />

            {/* Main should NOT add top padding */}
            <main className="mx-auto max-w-5xl px-6">{children}</main>

            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
