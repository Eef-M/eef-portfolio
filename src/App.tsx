// import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen theFont bg-white pt-3 md:pt-6">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      {/* <ContactForm /> */}
      <Footer />
    </div>
  );
}

export default App;
