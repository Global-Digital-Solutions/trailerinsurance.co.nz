import type { Metadata } from 'next';
import CarTrailerInsurancePage from './InsuranceCarTrailerInsuranceNzClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.trailerinsurance.co.nz/insurance/car-trailer-insurance-nz/' },
};

export default function Page() {
  return <CarTrailerInsurancePage />;
}
