import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Terms & Conditions</CardTitle>
              <p className="text-muted-foreground">
                Last updated: September 2025
              </p>
            </CardHeader>
            <CardContent className="prose max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground">
                  By accessing and using PUSTOK, you accept and agree to be
                  bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. User Accounts</h2>
                <p className="text-muted-foreground">
                  You are responsible for maintaining the confidentiality of
                  your account and password. You agree to accept responsibility
                  for all activities under your account.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  3. Book Transactions
                </h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>Buying:</strong> All sales are final. Ensure book
                    condition before purchase.
                  </p>
                  <p>
                    <strong>Borrowing:</strong> Books must be returned within 30
                    days in original condition.
                  </p>
                  <p>
                    <strong>Donating:</strong> Donations are free and cannot be
                    reversed once claimed.
                  </p>
                  <p>
                    <strong>Exchanging:</strong> Both parties must agree to the
                    exchange terms.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  4. User Responsibilities
                </h2>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Provide accurate book descriptions and conditions</li>
                  <li>Maintain respectful communication with other users</li>
                  <li>Follow platform guidelines for all transactions</li>
                  <li>Report any issues or disputes promptly</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  5. Prohibited Activities
                </h2>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Posting illegal, offensive, or copyrighted content</li>
                  <li>
                    Fraudulent transactions or misrepresenting book conditions
                  </li>
                  <li>
                    Harassment or inappropriate behavior toward other users
                  </li>
                  <li>Creating multiple accounts to circumvent restrictions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Payment Terms</h2>
                <p className="text-muted-foreground">
                  All payments are processed securely through our payment
                  gateway. PUSTOK is not responsible for payment disputes, but
                  we will assist in resolution.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  7. Platform Modifications
                </h2>
                <p className="text-muted-foreground">
                  PUSTOK reserves the right to modify or discontinue services
                  with reasonable notice to users.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  8. Contact Information
                </h2>
                <p className="text-muted-foreground">
                  For questions about these terms, contact us at
                  support@pustok.com
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Terms;
