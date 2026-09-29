import type { Metadata } from 'next';
import BoatTrailerInsurancePage from './InsuranceBoatTrailerInsuranceNzClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.trailerinsurance.co.nz/insurance/boat-trailer-insurance-nz/' },
};

export default function Page() {
  return <BoatTrailerInsurancePage />;
}
