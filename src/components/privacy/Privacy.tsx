import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Privacy Policy</CardTitle>
              <p className="text-muted-foreground">
                Last updated: September 2025
              </p>
            </CardHeader>
            <CardContent className="prose max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">
                  1. Information We Collect
                </h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>Personal Information:</strong> Name, email, phone
                    number, and address for account creation and transactions.
                  </p>
                  <p>
                    <strong>Book Information:</strong> Details about books you
                    post, including photos and descriptions.
                  </p>
                  <p>
                    <strong>Transaction Data:</strong> Records of purchases,
                    borrows, donations, and exchanges.
                  </p>
                  <p>
                    <strong>Usage Data:</strong> How you interact with our
                    platform for improving user experience.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  2. How We Use Your Information
                </h2>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Facilitate book transactions between users</li>
                  <li>
                    Send important updates about your account and transactions
                  </li>
                  <li>Improve our platform and user experience</li>
                  <li>Ensure platform security and prevent fraud</li>
                  <li>Provide customer support when needed</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  3. Information Sharing
                </h2>
                <p className="text-muted-foreground">
                  We only share necessary information to facilitate transactions
                  (like contact details for book exchanges). We never sell your
                  personal data to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement industry-standard security measures to protect
                  your data, including encryption for sensitive information and
                  secure payment processing.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  5. Cookies and Tracking
                </h2>
                <p className="text-muted-foreground">
                  We use cookies to enhance your browsing experience, remember
                  your preferences, and analyze site usage. You can disable
                  cookies in your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Your Rights</h2>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate data</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt-out of non-essential communications</li>
                  <li>Export your data in a portable format</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  7. Data Retention
                </h2>
                <p className="text-muted-foreground">
                  We retain your information only as long as necessary to
                  provide services and comply with legal obligations.
                  Transaction records may be kept for accounting purposes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  8. Children&apos;s Privacy
                </h2>
                <p className="text-muted-foreground">
                  PUSTOK is not intended for users under 13 years old. We do not
                  knowingly collect personal information from children under 13.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  9. Policy Updates
                </h2>
                <p className="text-muted-foreground">
                  We may update this privacy policy periodically. We&apos;ll
                  notify users of significant changes via email or platform
                  notifications.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>
                <p className="text-muted-foreground">
                  For privacy-related questions or to exercise your rights,
                  contact us at privacy@pustok.com
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Privacy;
