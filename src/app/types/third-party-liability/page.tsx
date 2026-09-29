import type { Metadata } from 'next';
import ThirdPartyLiabilityPage from './TypesThirdPartyLiabilityClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.trailerinsurance.co.nz/types/third-party-liability/' },
};

export default function Page() {
  return <ThirdPartyLiabilityPage />;
}
