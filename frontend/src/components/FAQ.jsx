import React, { useState } from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Voigo?",
      answer:
        "Voigo is a voice-activated shopping platform that lets you order anything you need by simply speaking in your preferred language. We partner with local stores to deliver your items quickly and efficiently.",
    },
    {
      question: "How do I place an order on Voigo?",
      answer:
        "Just open the app, speak your order in your preferred language, and confirm the details. We'll take care of the rest, from finding the nearest store to delivering your items to your doorstep.",
    },
    {
      question: "Can I place orders in my regional language?",
      answer:
        "Yes! Voigo supports multiple regional languages, allowing you to place orders comfortably in your native tongue.",
    },
    {
      question: "Is there a minimum order amount?",
      answer:
        "No, there’s no minimum order amount! You can order a single item or a list of items without worrying about restrictions.",
    },
    {
      question: "How much does delivery cost?",
      answer:
        "We offer free delivery for all orders, ensuring you get the best value without any hidden charges.",
    },
    {
      question: "What kinds of items can I order through Voigo?",
      answer:
        "With Voigo, you can order anything—from groceries and daily essentials to snacks, medicines, and more. If it’s available in nearby stores, we’ll deliver it!",
    },
    {
      question: "How do I pay for my order?",
      answer:
        "You can pay via cash on delivery or use online payment options once the final price is confirmed by our delivery partner.",
    },
    {
      question: "What if the items I ordered are unavailable?",
      answer:
        "If a requested item is unavailable, our delivery partner will suggest suitable alternatives, which you can approve or reject before confirming the order.",
    },
    {
      question: "When will my order arrive?",
      answer:
        "Delivery times depend on the availability of items and the distance to the store. You’ll receive an estimated delivery time when your order is confirmed.",
    },
    {
      question: "What happens if I am unsatisfied with my order?",
      answer:
        "You can check your items upon delivery. If something doesn’t meet your expectations or is incorrect, let our delivery partner know right away, and we’ll address the issue immediately.",
    },
    {
      question: "Does Voigo operate in my area?",
      answer:
        "Currently, Voigo operates in Mysuru, Karnataka. We are working to expand our services to more areas soon, so keep an eye out for updates about your region!",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "Once an order is placed on Voigo, it cannot be canceled as we process requests immediately to ensure fast delivery. Please double-check your order details before confirming.",
    },
    {
      question: "Does Voigo have its own stores?",
      answer:
        "No, Voigo does not operate its own stores. Instead, we collaborate with local businesses to fulfill your orders. This approach helps us scale quickly and support neighborhood stores.",
    },
    {
      question: "How is my personal data protected?",
      answer:
        "Voigo values your privacy. We securely store and process your data in compliance with our Privacy Policy, and voice recordings are deleted after your order is completed.",
    },
    {
      question: "Who should I contact for support?",
      answer: `For any questions or issues, reach out to our customer support team via the Voigo app or email us at voigoapp@gmail.com.`,
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container p-6 w-full lg:w-2/3 mx-auto my-10">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Common questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index}>
            <div
              className="flex justify-between items-center border-b border-gray-300 py-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
            </div>
            {openIndex === index && (
              <div className="mt-2 text-gray-700 text-sm">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
