import type { Metadata } from 'next';
import CompareTrailerInsurancePage from './InsuranceCompareTrailerInsuranceNzClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.trailerinsurance.co.nz/insurance/compare-trailer-insurance-nz/' },
};

export default function Page() {
  return <CompareTrailerInsurancePage />;
}
