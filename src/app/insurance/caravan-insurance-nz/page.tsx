import type { Metadata } from 'next';
import CaravanInsurancePage from './InsuranceCaravanInsuranceNzClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.trailerinsurance.co.nz/insurance/caravan-insurance-nz/' },
};

export default function Page() {
  return <CaravanInsurancePage />;
}
