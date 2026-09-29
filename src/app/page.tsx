import type { Metadata } from 'next';
import HomePage from './HomePageClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.trailerinsurance.co.nz/' },
};

export default function Page() {
  return <HomePage />;
}
