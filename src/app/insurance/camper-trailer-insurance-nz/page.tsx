import type { Metadata } from 'next';
import CamperTrailerInsurancePage from './InsuranceCamperTrailerInsuranceNzClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.trailerinsurance.co.nz/insurance/camper-trailer-insurance-nz/' },
};

export default function Page() {
  return <CamperTrailerInsurancePage />;
}
