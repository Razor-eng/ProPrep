import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ProPrep',
  description: 'Comprehensive interview preparation platform for developers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dark", "forest", "sunset", "ocean"]}
        >
          <div className="min-h-screen flex flex-col bg-background">
            <Navigation />
            <main className="container mx-auto px-2 md:px-4 py-3 md:py-8">
              {children}
            </main>
          </div>
          <Sonner />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}