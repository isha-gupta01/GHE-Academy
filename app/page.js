import Image from "next/image";
import Navbar from "@/Sections/Navbar";
import Header from "@/Sections/Header";
import Hero from "@/Sections/Hero";
import SchoolImage from "@/assets/images/ghe1.png"
import PrincipalMessage from "./About/Principal-Message/page";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mt-6"> 
        <Navbar />
      </div>
      <Hero image={SchoolImage} title="Welcome to" subBody="Green Heaven English school" height={90}/>
      <PrincipalMessage/>
    </>
  )
}
