import type { Metadata } from 'next';
import HorseFloatInsurancePage from './InsuranceHorseFloatInsuranceNzClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.trailerinsurance.co.nz/insurance/horse-float-insurance-nz/' },
};

export default function Page() {
  return <HorseFloatInsurancePage />;
}
