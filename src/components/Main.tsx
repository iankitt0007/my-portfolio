import Link from "next/link";

const Main = () => {
  return (
    <header>
      <h2>Welcome to My Portfolio</h2>
      <p>Explore my work, experience, and skills!</p>
      <nav>
        <div>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/experience">Experience</Link>
            </li>
            <li>
              <Link href="/skills">Skills</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/resume">Resume</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Main;
