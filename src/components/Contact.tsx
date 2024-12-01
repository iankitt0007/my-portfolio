// components/Contact.tsx
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";

const Contact: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Back Button Icon */}
        <button
          onClick={handleBackClick}
          className="back-button-icon absolute top-6 left-6 p-3 rounded-full bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
        >
          <FaArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-description">
          Email me at{" "}
          <a href="mailto:iankitt0007@gmail.com" className="contact-link">
            iankitt0007@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
