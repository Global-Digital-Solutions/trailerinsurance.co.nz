import type { Metadata } from 'next';
import EnclosedTrailerInsurancePage from './InsuranceEnclosedTrailerInsuranceNzClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.trailerinsurance.co.nz/insurance/enclosed-trailer-insurance-nz/' },
};

export default function Page() {
  return <EnclosedTrailerInsurancePage />;
}
