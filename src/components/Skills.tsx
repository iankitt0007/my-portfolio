// components/Skills.tsx
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Skills: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/');
  };

  return (
    <section className="skills-section py-16 px-4 bg-gradient-to-r from-green-400 to-blue-500 text-white animate-fade-in">
      {/* Back Button Icon */}
      <button
        onClick={handleBackClick}
        className="back-button-icon absolute top-6 left-6 p-3 rounded-full bg-white text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300"
      >
        <FaArrowLeft className="w-6 h-6" />
      </button>

      <h2 className="text-4xl font-bold text-center mb-8 text-shadow-lg animate-slide-up">
        Skills
      </h2>
      <ul className="skills-list grid grid-cols-2 gap-6 max-w-4xl mx-auto animate-fade-in animate-delay-200">
        <li className="skill-item bg-white text-green-600 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          JavaScript, TypeScript
        </li>
        <li className="skill-item bg-white text-green-600 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          React.js, Next.js
        </li>
        <li className="skill-item bg-white text-green-600 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          Node.js, Express.js, Nest.js
        </li>
        <li className="skill-item bg-white text-green-600 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          AWS, GCP, Azure
        </li>
        <li className="skill-item bg-white text-green-600 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          AI/ML
        </li>
        <li className="skill-item bg-white text-green-600 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          MySQL, PostgreSQL, MongoDB
        </li>
        <li className="skill-item bg-white text-green-600 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          Docker, Git, Linux
        </li>
      </ul>
    </section>
  );
};

export default Skills;

  