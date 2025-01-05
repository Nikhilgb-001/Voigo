import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PrivacyAndPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto p-5 bg-white rounded-lg shadow-lg max-w-4xl">
          <h1 className="text-2xl lg:text-4xl font-bold text-center mb-6">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 text-center mb-6">
            Last Updated: 11/25/2024
          </p>

          <p className="text-gray-700 mb-4">
            Welcome to Voigo! Your privacy is of utmost importance to us. This
            Privacy Policy outlines how Voigo (“we,” “our,” or “us”) collects,
            uses, shares, and safeguards your personal information when you use
            our voice-enabled commerce platform (“Service”). By using Voigo, you
            consent to the collection and use of your information as described
            in this Privacy Policy. If you do not agree with this Privacy
            Policy, please do not use our Service.
          </p>

          <Section title="1. Information We Collect">
            <ul className="list-disc ml-6">
              <li>
                <strong>1.1. Information You Provide Directly:</strong>
                <ul className="list-disc ml-6">
                  <li>
                    Account Information: Name, phone number, email address, and
                    other details during registration.
                  </li>
                  <li>
                    Order Details: Items requested, delivery address, and
                    payment preferences.
                  </li>
                </ul>
              </li>
              <li>
                <strong>1.2. Information Collected Automatically:</strong>
                <ul className="list-disc ml-6">
                  <li>
                    Voice Data: Voice commands recorded to process your orders.
                  </li>
                  <li>
                    Usage Data: Information about your interactions with the
                    app, such as navigation and feature usage.
                  </li>
                  <li>
                    Device Data: Device model, operating system, IP address, and
                    app version.
                  </li>
                </ul>
              </li>
              <li>
                <strong>1.3. Information from Third Parties:</strong>
                <ul className="list-disc ml-6">
                  <li>
                    Delivery Partners and Stores: Information shared to fulfill
                    orders, such as items purchased and delivery status.
                  </li>
                </ul>
              </li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <ul className="list-disc ml-6">
              <li>Process and fulfill your orders.</li>
              <li>Improve the accuracy of voice-based commands.</li>
              <li>Provide customer support and resolve issues.</li>
              <li>Send notifications about order status and app updates.</li>
              <li>Enhance app functionality and user experience.</li>
              <li>Comply with legal obligations.</li>
              <li>
                Share your information with third parties for data validation
                purposes, such as verifying the authenticity of pin codes or
                addresses.
              </li>
            </ul>
          </Section>

          <Section title="3. Data Retention and collection policy">
            <ul className="list-disc ml-6">
              <li>
                Collection: Voice commands are recorded to understand your
                requests and process orders.
              </li>
              <li>
                Retention: Voice recordings are retained for up to 7 days to
                improve the Service.
              </li>
              <li>
                Use: Voice data is analyzed solely for improving Service
                accuracy and user experience.
              </li>
              <li>
                Consent: By using voice commands, you consent to the collection
                and processing of voice data.
              </li>
            </ul>
          </Section>

          <Section title="4. Sharing Your Information">
            <ul className="list-disc ml-6">
              <li>
                With Delivery Personnel: For accurate order delivery and
                coordination.
              </li>
              <li>
                With Partnered Stores: To ensure product availability and
                fulfillment.
              </li>
              <li>
                With Service Providers: Trusted third parties providing hosting,
                payment processing, or analytics services.
              </li>
              <li>
                For Legal Compliance: When required by law or to enforce our
                Terms of Service.
              </li>
              <li>We do not sell your personal data to any third party.</li>
            </ul>
          </Section>

          <Section title="5. Data Security">
            <ul className="list-disc ml-6">
              <li>
                We take reasonable measures to protect your data from
                unauthorized access, alteration, or disclosure.
              </li>
              <li>
                Secure servers and encryption protocols are used for sensitive
                information.
              </li>
              <li>Regular app security audits and updates.</li>
              <li>
                Restricted access to personal data for employees and third
                parties.
              </li>
              <li>
                However, no security system is foolproof. Please notify us
                immediately if you suspect unauthorized access to your account.
              </li>
            </ul>
          </Section>

          <Section title="6. Your Rights and Choices">
            <ul className="list-disc ml-6">
              <li>
                Access and Correction: You can review or update your personal
                information through the app’s settings.
              </li>
              <li>
                Data Deletion: You may request the deletion of your account and
                personal data at any time. Voice recordings are automatically
                deleted after 7 days.
              </li>
              <li>
                Withdraw Consent: You may stop using the Service if you no
                longer agree to the collection or use of your data.
              </li>
            </ul>
          </Section>

          <Section title="7. Children’s Privacy">
            <p>
              Voigo is not intended for use by individuals under the age of 12+.
              We do not knowingly collect personal information from children.
            </p>
          </Section>

          <Section title="8. Third-Party Links">
            <p>
              The app may include links to third-party websites or services.
              Voigo is not responsible for the privacy practices or content of
              these external services.
            </p>
          </Section>

          <Section title="9. Compliance with Google Play Store Policies">
            <ul className="list-disc ml-6">
              <li>
                Voigo adheres to Google Play’s policies on user data collection,
                storage, and transparency.
              </li>
              <li>
                Data is collected solely for the purpose of providing and
                improving the Service.
              </li>
            </ul>
          </Section>

          <Section title="10. Intellectual Property and Usage Restrictions">
            <ul className="list-disc ml-6">
              <li>
                <strong>10.1. Voigo Logo and Branding:</strong> The Voigo logo,
                name, and any associated trademarks, service marks, or other
                intellectual property (collectively referred to as "Voigo
                Marks") are the exclusive property of Voigo.
              </li>
              <li>
                <strong>10.2. Content Ownership:</strong> All content,
                materials, features, and functionality available on the Voigo
                app, including but not limited to text, graphics, images, logos,
                videos, and software, are the property of Voigo or its
                licensors.
              </li>
            </ul>
          </Section>

          <Section title="11. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. Updates will be
              notified through the app or email.
            </p>
          </Section>

          <Section title="12. Contact Us">
            <ul className="list-disc ml-6">
              <li>Email: voigoapp@gmail.com</li>
              <li>Phone: 9573623377, 9544147335</li>
            </ul>
          </Section>
        </div>
      </div>
      <Footer />
    </>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-semibold mb-3">{title}</h2>
    <div className="text-gray-700">{children}</div>
  </div>
);

export default PrivacyAndPolicy;
