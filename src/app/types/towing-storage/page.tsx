import type { Metadata } from 'next';
import TowingStoragePage from './TypesTowingStorageClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.trailerinsurance.co.nz/types/towing-storage/' },
};

export default function Page() {
  return <TowingStoragePage />;
}
