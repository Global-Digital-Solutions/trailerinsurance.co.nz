import type { Metadata } from 'next';
import AgreedValuePage from './TypesAgreedValueClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.trailerinsurance.co.nz/types/agreed-value/' },
};

export default function Page() {
  return <AgreedValuePage />;
}
