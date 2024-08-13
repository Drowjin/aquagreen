// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects.js";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";
import Resume from "./resume";

export default function Portfolio() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Clients />
      <Skills />
      <Projects />
      <Resume />
      {/* <Testimonial /> */}
      <PopularClients />
      <ContactForm />
      <Footer />
    </div>
  );
}
