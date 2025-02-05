import Image from "next/image";
import Navbar from "@/Sections/Navbar";
import Header from "@/Sections/Header";
import Hero from "@/Sections/Hero";
import SchoolImage from "@/assets/images/ghe1.png"

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero image={SchoolImage} title="Welcome to" subBody="Green Heaven English Academy"/>
    </>
  )
}
