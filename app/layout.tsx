import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import { Toaster } from "@/components/ui/sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yoom",
  description: "Video calling app",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          logoImageUrl: "/icons/yoom-logo.svg",
          socialButtonsVariant: "iconButton",
        },
        variables: {
          colorText: "#FFFFFF",
          colorPrimary: "#0E78F9",
          colorBackground: "#1C1F2E",
          colorInputBackground: "#252A41",
          colorInputText: "#FFFFFF",
        },
      }}
    >
      <html lang="en">
        <body
          className={`${inter.className} bg-dark-2`}
          suppressHydrationWarning
        >
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
