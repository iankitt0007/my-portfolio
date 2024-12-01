import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";

const Resume: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/");
  };

  return (
    <section className="resume-section">
      <div className="resume-container">
        {/* Back Button Icon */}
        <button
          onClick={handleBackClick}
          className="back-button-icon absolute top-6 left-6 p-3 rounded-full bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
        >
          <FaArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="resume-title">Resume</h2>
        <a
          href="C:\Users\Ankit\Downloads\My Resume (1) (1).pdf"
          download
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg block text-center"
        >
          Download
        </a>
      </div>
    </section>
  );
};

export default Resume;
