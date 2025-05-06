import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import Wrapper from '@/components/ui/Wrapper';
import '@/styles/globals.css';
import '@/styles/nullstyle.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

export const inter = Inter({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'CADEX',
  description: 'Site of Some Company'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Wrapper>
          <Header />
          <div id="content">{children}</div>
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
