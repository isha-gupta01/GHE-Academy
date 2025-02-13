import Nav from "@/Sections/Nav";
// import Hero from "@/Sections/Hero";
import SchoolImage from "@/assets/images/ghe1.png"
import Footer from '@/Sections/Footer'
import Message from "@/Sections/Message";
import PopUp from "@/components/PopUp";
import Updates from "@/components/Updates";
import FacilitiesSection from "@/Sections/Facilities";
import HeroSection from "@/Sections/HeroSection";



export default function Home() {
  return (
    <>
      <Updates/>
      <Nav />
      <HeroSection 
    image={SchoolImage} 
    video="/videos/vid.mp4" // Use relative path
    title="Welcome to" 
    subBody="Green Heaven English Academy" 
    height={100} 
    className="opacity-0 animate-slideInFromLeft delay-75" 
    className2="opacity-0 animate-slideInFromLeft delay-75"
/>
      <Message/>
      <FacilitiesSection/>
      {/* <PopUp/> */}
      <Footer/>
    </>
  )
}
