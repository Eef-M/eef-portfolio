import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen theFont">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
