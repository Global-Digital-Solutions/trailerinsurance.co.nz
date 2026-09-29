import type { Metadata } from 'next';
import BoxTrailerInsurancePage from './InsuranceBoxTrailerInsuranceNzClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.trailerinsurance.co.nz/insurance/box-trailer-insurance-nz/' },
};

export default function Page() {
  return <BoxTrailerInsurancePage />;
}
