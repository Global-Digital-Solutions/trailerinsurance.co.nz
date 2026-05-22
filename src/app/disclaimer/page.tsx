import { AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Disclaimer | TrailerInsurance.co.nz',
  description: 'Important disclaimer regarding TrailerInsurance.co.nz services and the information provided on our website.',
};

export default function DisclaimerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Disclaimer</h1>
          <p className="text-lg text-slate-700">Important information about TrailerInsurance.co.nz</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Disclaimer */}
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 mb-12">
            <div className="flex gap-4 mb-4">
              <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-red-900 mb-3">What TrailerInsurance.co.nz Is</h2>
                <p className="text-red-800 font-semibold mb-3">
                  TrailerInsurance.co.nz is a lead generation service, not an insurance broker, insurance company, or financial adviser.
                </p>
                <p className="text-red-800">
                  We connect you with ICNZ-registered insurance brokers who will provide quotes and recommendations. We do not provide insurance directly, nor do we provide financial or investment advice.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* What We Are Not */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What We Are Not</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="font-bold text-slate-900 mb-2">Not an Insurance Company</h3>
                  <p className="text-slate-700">
                    We do not issue insurance policies. We connect you with licensed insurance companies and brokers who provide the actual coverage.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="font-bold text-slate-900 mb-2">Not an Insurance Broker</h3>
                  <p className="text-slate-700">
                    While we connect you with brokers, we are not ourselves licensed brokers. The brokers we connect you with are ICNZ-registered and fully licensed.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="font-bold text-slate-900 mb-2">Not a Financial Adviser</h3>
                  <p className="text-slate-700">
                    We do not provide financial or investment advice. The information on our website is general educational information only and should not be construed as personal financial advice.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="font-bold text-slate-900 mb-2">Not Regulated by Financial Regulators</h3>
                  <p className="text-slate-700">
                    TrailerInsurance.co.nz is not regulated by the Financial Conduct Authority or similar financial regulators. However, the brokers and insurance companies we connect you with are regulated and licensed.
                  </p>
                </div>
              </div>
            </div>

            {/* General Information Disclaimer */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">General Information Disclaimer</h2>
              <p className="text-slate-700 mb-4">
                All information provided on the TrailerInsurance.co.nz website is intended for general educational purposes only. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                <li>Coverage information and insurance guides</li>
                <li>Trailer insurance tips and articles</li>
                <li>Comparisons of insurance providers</li>
                <li>FAQ answers and educational content</li>
              </ul>
              <p className="text-slate-700 mb-4">
                <strong>Important:</strong> This information is general in nature and not tailored to your specific circumstances. It should not be relied upon as personal advice. Every trailer and owner's situation is unique.
              </p>
            </div>

            {/* Not Personal Advice */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">This Is Not Personal Advice</h2>
              <p className="text-slate-700 mb-4">
                The content on this website is not personal financial or insurance advice. You should not make decisions about purchasing insurance based solely on information provided on this website.
              </p>
              <p className="text-slate-700 mb-4">
                Before purchasing any insurance policy, you should:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Discuss your specific situation with a licensed insurance broker</li>
                <li>Review the Product Disclosure Statement (PDS) for any policy you're considering</li>
                <li>Ask questions about coverage limits, exclusions, and excess amounts</li>
                <li>Ensure the policy meets your actual insurance needs</li>
              </ul>
            </div>

            {/* Accuracy of Information */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Accuracy of Information</h2>
              <p className="text-slate-700 mb-4">
                While we endeavor to ensure the accuracy and completeness of the information on our website, we cannot guarantee that all information is accurate, complete, or up-to-date. Insurance policies and provider offerings change frequently.
              </p>
              <p className="text-slate-700">
                Insurance information provided on this website is based on our understanding as of the date of publication. Always verify current coverage options and pricing directly with insurance providers or their licensed brokers.
              </p>
            </div>

            {/* Broker and Provider Responsibility */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Responsibility of Brokers and Providers</h2>
              <p className="text-slate-700 mb-4">
                The brokers and insurance providers we connect you with are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                <li>Providing accurate quotes and information about their policies</li>
                <li>Explaining policy terms, conditions, and exclusions</li>
                <li>Handling claims fairly and promptly</li>
                <li>Complying with insurance and financial services laws</li>
              </ul>
              <p className="text-slate-700">
                TrailerInsurance.co.nz is not responsible for the actions, services, or representations of brokers or insurance companies.
              </p>
            </div>

            {/* ICNZ Registration */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">ICNZ Registration</h2>
              <p className="text-slate-700 mb-4">
                When we mention "ICNZ-registered brokers," we are referring to brokers registered with the Insurance Council of New Zealand. ICNZ-registered brokers are required to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                <li>Act in accordance with the Insurance Brokers (Ethical Conduct) Rules 2019</li>
                <li>Maintain professional indemnity insurance</li>
                <li>Provide accurate information and fair service to clients</li>
              </ul>
              <p className="text-slate-700">
                You can verify a broker's ICNZ registration at www.icnz.org.nz.
              </p>
            </div>

            {/* No Guarantee of Approval */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">No Guarantee of Insurance Approval</h2>
              <p className="text-slate-700">
                While we connect you with insurance providers, there is no guarantee that you will be offered insurance or that you will be approved at the quoted price. Insurance companies assess applications individually based on their underwriting guidelines. Factors such as your claims history, the condition of your trailer, and how you intend to use it may affect approval and pricing.
              </p>
            </div>

            {/* Legal Compliance */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Legal Compliance</h2>
              <p className="text-slate-700 mb-4">
                This disclaimer and all information on the TrailerInsurance.co.nz website are provided in accordance with New Zealand consumer law, including the Consumer Guarantees Act 1993 and Fair Trading Act 1986.
              </p>
              <p className="text-slate-700">
                If you have a complaint about our services, you may contact the Insurance and Financial Services Ombudsman (IFSO) at www.ifso.nz.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Questions About This Disclaimer</h2>
              <p className="text-slate-700 mb-4">
                If you have questions about what TrailerInsurance.co.nz is or is not, please contact us:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><strong>Email:</strong> hello@cover4you.co.nz</li>
                                <li><strong>Hours:</strong> Monday-Friday, 8am-6pm NZST</li>
              </ul>
            </div>
          </div>

          {/* Final Statement */}
          <div className="mt-12 p-8 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-slate-700">
              <strong className="text-slate-900">Summary:</strong> TrailerInsurance.co.nz is a lead generation service that connects you with licensed insurance brokers. We provide general educational information about trailer insurance to help you make informed decisions. For specific advice about your insurance needs, please speak with a licensed insurance broker. All information on this website is provided "as is" without warranty.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
