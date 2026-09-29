import type { Metadata } from 'next';
import CheapTrailerInsurancePage from './InsuranceCheapTrailerInsuranceNzClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.trailerinsurance.co.nz/insurance/cheap-trailer-insurance-nz/' },
};

export default function Page() {
  return <CheapTrailerInsurancePage />;
}
