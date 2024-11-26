// components/About.tsx
const About: React.FC = () => {
    return (
      <section className="about py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
        <p className="text-lg text-center">
          I'm Ankit Sirswa, a Software Engineer with a passion for creating scalable software solutions and AI technologies. I have
          experience working with cloud platforms like AWS, GCP, and Azure, and have developed applications using a variety of technologies such as JavaScript, TypeScript, React.js, Node.js, and more.
        </p>
        <div className="text-center mt-6">
          <p>Email: <a href="mailto:iankitt0007@gmail.com">iankitt0007@gmail.com</a></p>
          <p>Phone: +91 931-538-2020</p>
          <p>Location: Fatehabad, Haryana, India</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/iankitt0007" target="_blank" rel="noopener noreferrer">linkedin.com/in/iankitt0007</a></p>
        </div>
      </section>
    );
  };
  
  export default About;
  