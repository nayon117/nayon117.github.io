// import About from "@/components/shared/About";
import Certificate from "@/components/shared/Certificate";
import ContactForm from "@/components/shared/ContactForm";
import CustomCursor from "@/components/shared/CustomCursor";
import { Education } from "@/components/shared/Education";
import Footer from "@/components/shared/Footer";
import Projects from "@/components/shared/Projects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/constants";
import dynamic from "next/dynamic";


const BlogShowcase = dynamic(() => import('@/components/shared/BlogShowCase'), { 
  ssr: false 
});
const Hero = dynamic(() => import('@/components/shared/Hero'), { 
  ssr: false 
});
const About = dynamic(() => import('@/components/shared/About'), { 
  ssr: false 
});

const HomePage = () => {
  return (
    <section className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-[#010103] px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <CustomCursor />
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Projects />
        <Certificate />
        <Education />
        <BlogShowcase />
        <ContactForm />
        <Footer />
      </div>
    </section>
  );
};

export default HomePage;
