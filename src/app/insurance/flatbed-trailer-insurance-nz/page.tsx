import type { Metadata } from 'next';
import FlatbedTrailerInsurancePage from './InsuranceFlatbedTrailerInsuranceNzClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.trailerinsurance.co.nz/insurance/flatbed-trailer-insurance-nz/' },
};

export default function Page() {
  return <FlatbedTrailerInsurancePage />;
}
