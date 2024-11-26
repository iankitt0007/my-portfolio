const Resume: React.FC = () => {
    return (
      <section id="resume" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Resume</h2>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg block text-center"
          >
            Download Resume
          </a>
        </div>
      </section>
    );
  };
  
  export default Resume;
  