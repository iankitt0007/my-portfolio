// components/Experience.tsx
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";

const Experience: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/");
  };

  return (
    <section className="experience py-20 px-6 bg-gradient-to-r from-indigo-400 to-purple-500 text-white animate-fade-in">
      {/* Back Button Icon */}
      <button
        onClick={handleBackClick}
        className="back-button-icon absolute top-6 left-6 p-3 rounded-full bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
      >
        <FaArrowLeft className="w-6 h-6" />
      </button>

      <h2 className="text-4xl font-bold text-center mb-8 text-shadow-lg animate-slide-up">
        Experience
      </h2>
      <p className="text-lg max-w-2xl mx-auto mb-8 text-center leading-relaxed animate-fade-in animate-delay-200">
        Here are some of the notable roles and experiences that have shaped my
        career in the tech industry.
      </p>

      <div className="experience-list animate-fade-in animate-delay-400">
        {/* Experience Card 1 */}
        <div className="experience-item">
          <div>
            <h3 className="experience-title">Software Engineer</h3>
            <p className="experience-date">2020 - Present</p>
            <p className="experience-description">
              Working at Signity Software Solutions Company, where I design and develop scalable
              applications, ensuring performance and maintainability while
              mentoring junior developers.
            </p>
          </div>
        </div>

        {/* Experience Card 2 */}
        <div className="experience-item">
          <div>
            <h3 className="experience-title">Frontend Developer</h3>
            <p className="experience-date">2018 - 2020</p>
            <p className="experience-description">
              Focused on creating user-friendly interfaces using React.js,
              Redux, and Tailwind CSS at ABC Tech.
            </p>
          </div>
        </div>

        {/* Experience Card 3 */}
        <div className="experience-item">
          <div>
            <h3 className="experience-title">Intern - Web Development</h3>
            <p className="experience-date">2017 - 2018</p>
            <p className="experience-description">
              Built and maintained web applications using HTML, CSS, JavaScript,
              and PHP, while gaining hands-on experience in real-world projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
