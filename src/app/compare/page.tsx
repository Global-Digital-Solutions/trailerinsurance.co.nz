import type { Metadata } from 'next';
import ComparePage from './CompareClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.trailerinsurance.co.nz/compare/' },
};

export default function Page() {
  return <ComparePage />;
}
