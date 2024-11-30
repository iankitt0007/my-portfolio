// components/Projects.tsx
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";

const Projects: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/");
  };

  return (
    <section className="projects py-20 px-6 bg-gradient-to-r from-indigo-400 to-purple-500 text-white animate-fade-in">
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="back-button absolute top-6 left-6 p-3 rounded-full bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
      >
        <FaArrowLeft className="w-6 h-6" />
      </button>

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-10 text-shadow-lg animate-slide-up">
        Projects
      </h2>

      {/* Project Cards */}
      <div className="projects-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in animate-delay-200">
        <div className="project-card bg-white text-indigo-600 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:translate-y-[-5px] transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-2">CRUD Operations</h3>
          <p>Technologies: Node.js, Express.js, Sequelize, EJS templates</p>
        </div>
        <div className="project-card bg-white text-indigo-600 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:translate-y-[-5px] transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-2">OutrighTalk (Web App)</h3>
          <p>Chatting web app with React Redux Saga & PHP Laravel, MySQL database</p>
        </div>
        <div className="project-card bg-white text-indigo-600 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:translate-y-[-5px] transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-2">Envisify (ML Project)</h3>
          <p>AI model trained for predicting age group and sentiment analysis</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
