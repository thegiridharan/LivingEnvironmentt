import ContactForm from "@/Components/ContactForm";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Testimonials from "@/Components/Testimonials";
import TypesOfWaterproofing from "@/Components/TypesOfWaterproofing";
import Whytowaterproof from "@/Components/Whytowaterproof";
import BlogSection from "@/Components/BlogSectionC";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <div className="overflow-clip">
      <Navbar bg="black" />
      <Hero />
      <Whytowaterproof />
      <TypesOfWaterproofing />
      <BlogSection />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
