import type { Metadata } from 'next';
import CommercialPage from './TypesCommercialClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.trailerinsurance.co.nz/types/commercial/' },
};

export default function Page() {
  return <CommercialPage />;
}
