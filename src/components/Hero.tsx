// components/Hero.tsx
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <h1>Ankit Sirswa</h1>
      <p>
        Software Engineer | Azure Certified AI Engineer | AWS Certified Cloud
        Practitioner
      </p>
      <p>
        Versatile Software and AI Engineer with expertise in building scalable
        software solutions and AI technologies.
      </p>
      <div className="cta">
        <Link href="/contact">Get in Touch</Link>
      </div>
    </section>
  );
};

export default Hero;
