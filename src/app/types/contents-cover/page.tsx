import type { Metadata } from 'next';
import ContentsCoverPage from './TypesContentsCoverClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.trailerinsurance.co.nz/types/contents-cover/' },
};

export default function Page() {
  return <ContentsCoverPage />;
}
