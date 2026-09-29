import type { Metadata } from 'next';
import ComprehensivePage from './TypesComprehensiveClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.trailerinsurance.co.nz/types/comprehensive/' },
};

export default function Page() {
  return <ComprehensivePage />;
}
