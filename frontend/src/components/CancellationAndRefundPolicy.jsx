import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CancellationAndRefundPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          Cancellation and Refund Policy
        </h1>
        <p className="mb-4">
          We at <strong>Voigo</strong> are committed to providing a seamless and
          satisfactory shopping experience. Please review our refund and
          cancellation policy below:
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Refund Policy</h2>
          <p className="mb-2">
            Refunds are applicable under the following conditions:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Defective or Incorrect Products:</strong> If the products
              delivered are defective, damaged, or not what you ordered.
            </li>
            <li>
              <strong>Service Issues:</strong> If the service fails to meet
              expectations during delivery.
            </li>
          </ul>
          <h3 className="mt-4 font-medium">How to Request a Refund:</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              Report any discrepancies directly to the delivery partner upon
              receiving the order.
            </li>
            <li>
              Refunds will be issued immediately after validating your claim.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Cancellation Policy</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>No Cancellation Feature:</strong> At present, we do not
              offer a cancellation option for orders once placed.
            </li>
            <li>
              Users are advised to carefully review and confirm all order
              details before finalizing their purchase.
            </li>
            <li>
              Once an order is confirmed or dispatched, it cannot be canceled.
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h3 className="font-medium">
            If you have further questions or need assistance, please contact our
            support team:
          </h3>
          <ul className="mt-2">
            <li>
              <strong>Email:</strong> voigoapp@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> 9573623377, 9544147335
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CancellationAndRefundPolicy;
