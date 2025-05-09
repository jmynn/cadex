import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import Wrapper from '@/components/ui/Wrapper';
import '@/styles/globals.css';
import '@/styles/nullstyle.css';
import type { Metadata } from 'next';

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
      <body>
        <Wrapper>
          <Header />
          <div id="content">{children}</div>
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
