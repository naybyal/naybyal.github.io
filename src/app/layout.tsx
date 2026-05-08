import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nabielahammed.com'),
  title: {
    default: "Nabiel Ahammed | Founder & Lead Systems Engineer",
    template: "%s | Nabiel Ahammed"
  },
  description: "Official Portfolio of Nabiel Ahammed, Founder of Cirranex Tech Pvt. Ltd. and architect of xerweon™. Specializing in high-performance enterprise systems.",
  keywords: ['Nabiel Ahammed', 'Founder', 'Systems Engineer', 'Cirranex', 'xerweon', 'Rust', 'C', 'Next.js', 'PostgreSQL'],
  authors: [{ name: 'Nabiel Ahammed' }],
  creator: 'Nabiel Ahammed',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.nabielahammed.com',
    title: 'Nabiel Ahammed | Founder & Lead Systems Engineer',
    description: "Official Portfolio of Nabiel Ahammed, Founder of Cirranex Tech Pvt. Ltd. and architect of xerweon™.",
    siteName: 'Nabiel Ahammed Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nabiel Ahammed | Founder & Lead Systems Engineer',
    description: "Official Portfolio of Nabiel Ahammed, Founder of Cirranex Tech Pvt. Ltd. and architect of xerweon™.",
    creator: '@naybyal', // Assuming this based on github handle, can be updated
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: '/favicon.png',
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${mono.variable} font-sans antialiased selection:bg-black selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
