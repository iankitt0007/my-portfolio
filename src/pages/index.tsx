// pages/index.tsx
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Main from "../components/Main";

const Home = () => {
  return (
    <div className="container">
      <Main />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
