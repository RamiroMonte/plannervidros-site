import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Planner Vidros | Vidraçaria e Serralheria em São Paulo",
    template: "%s | Planner Vidros",
  },
  description:
    "Vidraçaria em São Paulo especializada em box para banheiro, portas de vidro, janelas, guarda-corpo, espelhos e serralheria em alumínio. Orçamento grátis pelo WhatsApp. Atendemos Freguesia do Ó e toda região.",
  keywords: [
    "vidraçaria São Paulo",
    "box para banheiro",
    "box de vidro",
    "porta de vidro",
    "janela de vidro",
    "guarda-corpo de vidro",
    "espelho sob medida",
    "espelho orgânico",
    "cobertura de vidro",
    "fechamento de varanda",
    "serralheria em alumínio",
    "vidro temperado",
    "vidro laminado",
    "vidraçaria Freguesia do Ó",
    "vidraceiro São Paulo",
  ],
  authors: [{ name: "Planner Vidros" }],
  creator: "Planner Vidros",
  publisher: "Planner Vidros",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://plannervidros.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Planner Vidros | Vidraçaria e Serralheria em São Paulo",
    description:
      "Box para banheiro, portas, janelas, guarda-corpo, espelhos e serralheria em alumínio. Orçamento grátis pelo WhatsApp!",
    url: "https://plannervidros.com.br",
    siteName: "Planner Vidros",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Planner Vidros - Vidraçaria em São Paulo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Planner Vidros | Vidraçaria e Serralheria em São Paulo",
    description:
      "Box para banheiro, portas, janelas, guarda-corpo, espelhos e serralheria em alumínio. Orçamento grátis!",
    images: ["/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Adicione seus códigos de verificação quando disponíveis
    // google: "seu-codigo-google",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
