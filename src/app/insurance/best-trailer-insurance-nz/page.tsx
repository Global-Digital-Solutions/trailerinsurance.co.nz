import type { Metadata } from 'next';
import BestTrailerInsurancePage from './InsuranceBestTrailerInsuranceNzClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.trailerinsurance.co.nz/insurance/best-trailer-insurance-nz/' },
};

export default function Page() {
  return <BestTrailerInsurancePage />;
}
