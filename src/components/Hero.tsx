// components/Hero.tsx
const Hero: React.FC = () => {
  return (
    <section className="hero bg-gradient-to-r from-blue-500 to-teal-400 text-white py-16 text-center relative overflow-hidden">

      <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg">
        Ankit Sirswa
      </h1>
      <p className="text-xl mt-4 font-medium tracking-wide">
        Software Engineer | Azure Certified AI Engineer | AWS Certified Cloud Practitioner
      </p>
      <p className="mt-6 text-lg max-w-2xl mx-auto">
        Versatile Software and AI Engineer with expertise in building scalable software solutions and AI technologies.
      </p>

      <div className="mt-8">
        <a
          href="#contact"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
