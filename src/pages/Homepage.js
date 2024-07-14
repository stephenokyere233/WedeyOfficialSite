import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <main className="bg-size-200 w-screen overflow-x-clip bg-linearGradient animate-gradient transition duration-300">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
};

export default HomePage;
