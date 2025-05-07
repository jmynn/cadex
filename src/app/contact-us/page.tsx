import SectionFormContact from '@/components/views/SectionFormContact';
import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CADEX | Связаться с нами',
  description: 'Site of Some Company'
};

const page = (): ReactNode => {
  return (
    <>
      <SectionFormContact />
    </>
  );
};

export default page;
