import Frontimg from "@/Components/Frontimg";
import CompanyProfile from "@/Components/CompanyProfile";
import Services from "@/Components/Services"
import BlogSectionC from "@/Components/BlogSectionC";
import Testimonials from "@/Components/Testimonials";
import ContactForm from "@/Components/ContactForm";
import Footer from "@/Components/Footer";
import NavbarCons from "@/Components/NavbarCons";


export default function Construction() {
    return (
        <div className="overflow-clip">
            <NavbarCons bg="black" />
            <Frontimg />
            <CompanyProfile />
            <Services />
            <BlogSectionC />
            <Testimonials />
            <ContactForm />
            <Footer />
        </div>
    )
}