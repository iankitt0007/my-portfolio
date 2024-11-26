// components/Projects.tsx
const Projects: React.FC = () => {
    return (
      <section className="projects py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
        <div className="project-item mb-6">
          <h3 className="text-xl font-semibold">CRUD Operations</h3>
          <p>Technologies: Node.js, Express.js, Sequelize, EJS templates</p>
        </div>
        <div className="project-item mb-6">
          <h3 className="text-xl font-semibold">OutrighTalk (Web App)</h3>
          <p>Chatting web app with React Redux Saga & PHP Laravel, MySQL database</p>
        </div>
        <div className="project-item">
          <h3 className="text-xl font-semibold">Envisify (ML Project)</h3>
          <p>AI model trained for predicting age group and sentiment analysis</p>
        </div>
      </section>
    );
  };
  
  export default Projects;
  