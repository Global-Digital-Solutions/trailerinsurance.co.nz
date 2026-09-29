import type { Metadata } from 'next';
import TrailerInsuranceCostPage from './InsuranceTrailerInsuranceCostNzClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.trailerinsurance.co.nz/insurance/trailer-insurance-cost-nz/' },
};

export default function Page() {
  return <TrailerInsuranceCostPage />;
}
