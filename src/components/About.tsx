// components/About.tsx
import dynamic from "next/dynamic";
import {
  FaArrowLeft,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
} from "react-icons/fa";
import { useRouter } from "next/router";

const About: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/");
  };

  return (
    <section className="about py-20 px-6 bg-gradient-to-r from-teal-400 to-blue-500 text-white animate-fade-in">
      {/* Back Button Icon */}
      <button
        onClick={handleBackClick}
        className="back-button-icon absolute top-6 left-6 p-3 rounded-full bg-white text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300"
      >
        <FaArrowLeft className="w-6 h-6" />
      </button>

      <h2 className="text-4xl font-bold text-center mb-8 text-shadow-lg animate-slide-up">
        About Me
      </h2>
      <p className="text-lg max-w-2xl mx-auto mb-8 text-center leading-relaxed animate-fade-in animate-delay-200">
        I'm Ankit Sirswa, a Software Engineer with a passion for creating
        scalable software solutions and AI technologies. I have experience
        working with cloud platforms like AWS, GCP, and Azure, and have
        developed applications using a variety of technologies such as
        JavaScript, TypeScript, React.js, Node.js, and more.
      </p>

      <div className="contact-info flex justify-center space-x-8 mt-8 animate-fade-in animate-delay-400">
        <p className="text-lg flex items-center space-x-3">
          <FaEnvelope className="w-5 h-5 text-teal-200" />
          <a
            href="mailto:iankitt0007@gmail.com"
            className="hover:text-teal-200"
          >
            iankitt0007@gmail.com
          </a>
        </p>
        <p className="text-lg flex items-center space-x-3">
          <FaPhoneAlt className="w-5 h-5 text-teal-200" />
          <span className="font-medium">+91 931-538-2020</span>
        </p>
        <p className="text-lg flex items-center space-x-3">
          <FaLinkedin className="w-5 h-5 text-teal-200" />
          <a
            href="https://linkedin.com/in/iankitt0007"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-200"
          >
            linkedin.com/in/iankitt0007
          </a>
        </p>
      </div>

      {/* Google Map for Address */}
      <div className="map-container mt-12 w-full h-80 bg-white rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?q=Fatehabad,+Haryana,+India&key=YOUR_GOOGLE_MAPS_API_KEY"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default About;
