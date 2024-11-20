import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto p-5 bg-white rounded-lg shadow-lg max-w-4xl">
          <h1 className="text-2xl lg:text-4xl font-bold text-center mb-6">
            Terms and Conditions
          </h1>
          <p className="text-sm text-gray-500 text-center mb-6">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <p className="text-gray-700 mb-4">
            Welcome to Voigo! These Terms and Conditions (“Terms”) govern your
            access to and use of the Voigo application (“Service”). Voigo is a
            voice-enabled commerce platform that allows users to place orders
            through voice commands and receive items delivered by local stores.
            By downloading, accessing, or using Voigo, you agree to comply with
            and be bound by these Terms. If you disagree with any part of these
            Terms, please do not use our Service.
          </p>

          <Section title="1. Acceptance of Terms">
            <ul className="list-disc ml-6">
              <li>
                By downloading, accessing, or using Voigo, you confirm that you
                have read, understood, and agree to these Terms and all
                applicable laws and regulations.
              </li>
              <li>
                Voigo reserves the right to modify these Terms at any time. We
                will provide prior notice of any significant changes, and your
                continued use of the Service after such changes indicates your
                acceptance of the revised Terms.
              </li>
            </ul>
          </Section>

          <Section title="2. Eligibility">
            <ul className="list-disc ml-6">
              <li>Voigo is available to users residing in India.</li>
              <li>
                You must provide accurate, truthful, and complete information
                during account registration.
              </li>
              <li>
                You may not use Voigo for any illegal or unauthorized purpose.
              </li>
            </ul>
          </Section>

          <Section title="3. Service Overview">
            <ul className="list-disc ml-6">
              <li>
                <strong>Voigo’s Functionality:</strong>
                <ul className="list-disc ml-6">
                  <li>
                    Allows users to place orders via voice commands for products
                    from local stores.
                  </li>
                  <li>
                    Delivery is facilitated through our delivery partners.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Limitations:</strong>
                <ul className="list-disc ml-6">
                  <li>
                    Voigo does not control store inventory, product quality, or
                    pricing.
                  </li>
                  <li>
                    Substitutions may occur when specific items are unavailable.
                  </li>
                </ul>
              </li>
              <li>
                Updates and Maintenance: Voigo may occasionally update or
                temporarily suspend the Service for maintenance or improvements.
              </li>
            </ul>
          </Section>

          <Section title="4. User Responsibilities">
            <ul className="list-disc ml-6">
              <li>
                You agree to use Voigo in compliance with all applicable laws.
              </li>
              <li>
                Provide accurate and up-to-date information while using the
                Service.
              </li>
              <li>Keep your account credentials secure.</li>
              <li>
                Prohibited Conduct:
                <ul className="list-disc ml-6">
                  <li>
                    Fraudulent activity, including creating false accounts or
                    manipulating pricing, is strictly prohibited.
                  </li>
                  <li>
                    Misuse of the platform may result in account suspension or
                    legal action.
                  </li>
                </ul>
              </li>
            </ul>
          </Section>

          <Section title="5. Orders and Fulfillment">
            <ul className="list-disc ml-6">
              <li>
                Orders are placed using voice commands. Accuracy of voice input
                is crucial for order processing.
              </li>
              <li>
                Order Confirmation:
                <ul className="list-disc ml-6">
                  <li>
                    You will receive an order confirmation containing delivery
                    details, pricing, and payment options.
                  </li>
                  <li>
                    If an item is unavailable, you may be notified and offered
                    alternatives.
                  </li>
                </ul>
              </li>
              <li>
                Order Accuracy and Changes:
                <ul className="list-disc ml-6">
                  <li>Ensure order details are correct before confirming.</li>
                  <li>
                    Voigo cannot guarantee specific brands or products due to
                    varying store inventories.
                  </li>
                </ul>
              </li>
              <li>
                Delivery:
                <ul className="list-disc ml-6">
                  <li>
                    Delivery times are estimates and may vary due to factors
                    beyond our control.
                  </li>
                  <li>
                    Upon receipt, inspect items immediately. Discrepancies or
                    issues should be reported directly to the delivery partner
                    or customer support.
                  </li>
                </ul>
              </li>
            </ul>
          </Section>

          <Section title="6. Pricing and Payment">
            <ul className="list-disc ml-6">
              <li>
                Dynamic Pricing: Prices are entered by the delivery partner
                based on the store’s listed prices.
              </li>
              <li>
                Payment Options:
                <ul className="list-disc ml-6">
                  <li>
                    Pay upon delivery via cash or online payment after reviewing
                    final prices.
                  </li>
                </ul>
              </li>
              <li>
                Refunds and Disputes:
                <ul className="list-disc ml-6">
                  <li>
                    Refunds are processed immediately if items fail to meet
                    expectations upon inspection at delivery.
                  </li>
                  <li>
                    Contact support promptly for price disputes or issues.
                  </li>
                </ul>
              </li>
            </ul>
          </Section>

          <Section title="7. Refund and Cancellation Policy">
            <p>
              Refunds are applicable under the following conditions:
              <ul className="list-disc ml-6">
                <li>
                  Products delivered are defective, incorrect, or damaged.
                </li>
                <li>
                  The service fails to meet user expectations during delivery.
                </li>
              </ul>
              Refunds will be issued immediately upon reporting discrepancies to
              the delivery partner, provided the claim is valid.
              <br />
              <strong>Cancellations:</strong> Currently, we do not offer a
              cancellation feature for orders once placed. Users are encouraged
              to verify all order details before confirming their purchase to
              ensure accuracy. Once the order is confirmed or dispatched, it
              cannot be canceled.
            </p>
          </Section>

          <Section title="8. Delivery Policy">
            <ul className="list-disc ml-6">
              <li>
                Delivery partners will hand over items directly to users for
                inspection.
              </li>
              <li>
                The transaction is finalized once the user approves the
                delivered goods.
              </li>
              <li>Voigo does not currently support contactless delivery.</li>
            </ul>
          </Section>

          <Section title="9. Data Privacy and Security">
            <ul className="list-disc ml-6">
              <li>
                <strong>Data Collection and Use:</strong>
                <ul className="list-disc ml-6">
                  <li>
                    Voigo collects data such as account details, order history,
                    and voice commands to improve Service quality.
                  </li>
                  <li>
                    By using voice commands, you consent to the collection and
                    processing of your voice data for order accuracy.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Data Retention:</strong>
                <ul className="list-disc ml-6">
                  <li>
                    Voice recordings are deleted immediately after you approve
                    the delivered products.
                  </li>
                  <li>
                    Voigo complies with applicable data protection laws,
                    including the Information Technology Act, 2000 (India).
                  </li>
                </ul>
              </li>
              <li>
                Third-Party Sharing: Your data may be shared with delivery
                personnel and partnered stores solely for order fulfillment.
              </li>
            </ul>
          </Section>

          <Section title="10. Intellectual Property Rights">
            <p>
              All content and features of Voigo, including its logo, software,
              and design, are the exclusive property of Voigo. Users are
              prohibited from copying, modifying, distributing, or exploiting
              Voigo’s intellectual property without prior written permission.
            </p>
          </Section>

          <Section title="11. App Store Compliance">
            <p>
              Voigo complies with Google Play Store’s Developer Program
              Policies, including guidelines on user data, functionality, and
              app descriptions. Users may report any violations or concerns
              through the Google Play Store or contact Voigo support directly.
            </p>
          </Section>

          <Section title="12. Liability Disclaimer">
            <ul className="list-disc ml-6">
              <li>
                Voigo facilitates transactions between users and local stores.
              </li>
              <li>We are not liable for quality or safety of products.</li>
              <li>
                Voigo provides no warranties or guarantees about the accuracy of
                product descriptions, pricing, or availability.
              </li>
            </ul>
          </Section>

          <Section title="13. Limitation of Liability">
            <p>
              Voigo is not responsible for any indirect or consequential losses
              arising from the use of the Service or technical issues, including
              app unavailability or errors.
            </p>
          </Section>

          <Section title="14. User Support">
            <p>
              For inquiries, complaints, or support:
              <br />
              <strong>Email:</strong> <a href="#"> voigoapp@gmail.com</a>
              <br />
              <strong>Phone:</strong> 9573623377
            </p>
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

export default TermsAndConditions;
