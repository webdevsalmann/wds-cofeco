import { Rubik, Poppins, Anton } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/context/ThemeProvider';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import { Toaster } from '@/components/ui/toaster';

const rubik = Poppins({ subsets: ['latin'],  weight: ["400", "500", "600", "700", "800", "900"], });

export const metadata = {
  title: 'Cofeco',
  description: 'Best Coffee Shop In a Town',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className} suppressHydrationWarning="true" suppressContentEditableWarning="true">
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html >
  )
}
