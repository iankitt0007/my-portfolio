import Link from "next/link";

const Main = () => {
  return (
    <header className="main-header text-center py-16 bg-gradient-to-b from-blue-600 to-blue-400 text-white relative">
      <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
      <p className="text-lg mb-8">
        Explore my work, experience, and skills!
      </p>
      <nav>
        <div className="nav-links">
          <ul className="flex flex-wrap justify-center gap-8">
            <li>
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link href="/experience" className="nav-link">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/skills" className="nav-link">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/resume" className="nav-link">
                Resume
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Main;
