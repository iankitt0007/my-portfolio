// components/Experience.tsx
const Experience: React.FC = () => {
    return (
      <section className="experience py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Experience</h2>
        <div className="experience-item mb-6">
          <h3 className="text-xl font-semibold">Software Engineer at Signity Software Solutions Pvt. Ltd.</h3>
          <p>Feb 2024 - Present</p>
          <p className="mt-2">Currently working as a Software Engineer. Focused on developing scalable software solutions using modern technologies.</p>
        </div>
        <div className="experience-item mb-6">
          <h3 className="text-xl font-semibold">AWS Training at Mapping Skills Technology Pvt. Ltd.</h3>
          <p>Aug 2023 - Sep 2023</p>
          <p className="mt-2">Trained in AWS services like EC2, S3, Lambda, and DynamoDB.</p>
        </div>
        <div className="experience-item">
          <h3 className="text-xl font-semibold">Cloud Bootcamp on GCP at Geeks for Geeks</h3>
          <p>Aug 2023 - Oct 2023</p>
          <p className="mt-2">Completed training on Google Cloud Platform, including services like Virtual Machines, Cloud Storage, IAM, and Cloud Monitoring.</p>
        </div>
      </section>
    );
  };
  
  export default Experience;
  