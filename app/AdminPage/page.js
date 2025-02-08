import Navbar from "@/Sections/Navbar";
import Header from "@/Sections/Header";
import Hero from "@/Sections/Hero";
import SchoolImage from "@/assets/images/ghe1.png"
import Footer from '@/Sections/Footer'
import Message from "@/Sections/Message";
import PopUp from "@/components/PopUp";
import Updates from "@/components/Updates";


export default function Home() {
  return (
    <>
      <Updates/>
      <div className="h-[2.4rem]"> <Header /></div>
      <Navbar />
      <Hero image={SchoolImage} title="Welcome to" subBody="Green Heaven English Academy" height={90} className="opacity-0 animate-slideInFromLeft delay-75" className2="opacity-0 animate-slideInFromLeft delay-75"/>
      <Message/>
      <PopUp/>
      <Footer/>
    </>
  )
}
