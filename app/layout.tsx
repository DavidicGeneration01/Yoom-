import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import { Toaster } from '@/components/ui/toaster'
import 'react-datepicker/dist/react-datepicker.css'
import '@stream-io/video-react-sdk/dist/css/styles.css';

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "YOOM",
  description: "Video calling app",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        localization={{
          signIn: {
            start: {
              title: 'Welcome to Yoom',
              subtitle: 'Sign in to continue',
            }
          },
          signUp: {
            start: {
              title: 'Create Account',
              subtitle: 'Sign up to get started',
            }
          }
        }}
        appearance={{
          layout: {
            logoImageUrl: '/icons/yoom-logo.svg',
            socialButtonsVariant: 'iconButton'  // ← fixed typo (was socialButttonsVariant)
          },
          variables: {
            colorText: '#fff',
            colorPrimary: '#0E78F9',
            colorBackground: '#1c1f2e',
            colorInputBackground: '#252a41',
            colorInputText: '#fff',
            colorNeutral: '#fff',
          },
          elements: {
            headerTitle: { color: '#fff' },
            headerSubtitle: { color: '#fff' },
            formFieldLabel: { color: '#fff' },
            formFieldInput: {
              backgroundColor: '#252a41',
              color: '#fff',
              borderColor: '#4a5568',
            },
            footerActionText: { color: '#fff' },
            footerActionLink: { color: '#0E78F9' },
            footer: { color: '#fff' },
            footerPages: { color: '#fff' },
            socialButtonsIconButton: {
              backgroundColor: '#252a41',
              borderColor: '#4a5568',
            },
            dividerText: { color: '#fff' },
            identityPreviewText: { color: '#fff' },
            formFieldInputShowPasswordButton: { color: '#fff' },
          }
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}