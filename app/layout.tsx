import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Gen-AI 4 Burma",
  description: "Gen AI 4 Burma is a web app that enables users to apply various AI-powered transformations to their images, such as restoration, recoloring, generative fill, object removal, and background removal. Users can also explore other users’ transformations, search for images by content, and purchase credits for using the app. The app aims to support the Burma Spring Revolution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#DC143C'}
    }}>
      <html lang="en">
        <body 
          className={cn("font-IBMPlex antialiased", IBMPlex.variable)}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
