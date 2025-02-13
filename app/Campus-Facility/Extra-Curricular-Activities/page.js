import React from 'react'
import Navbar from '@/Sections/Navbar'
import Footer from '@/Sections/Footer'
import Hero from '@/Sections/Hero'
import Updates from '@/components/Updates'
import SchoolImage from "@/assets/images/extraC.png"


const ExtraCurricular = () => {
  const activities = [
    {
      category: "Excursions and Field Trips",
      items: ["Excursions and Field Trips"],
    },
    {
      category: "Literary Activities",
      items: ["Debate", "Elocution", "Drama", "Speech & Declamation", "Inter house/ Inter class competition", "E-Lab"],
    },
    {
      category: "Music Classes",
      items: ["Tabla", "Guitar", "Key Board", "Harmonium"],
    },
    {
      category: "Dance Classes",
      items: ["Dance Classes"],
    },
    {
      category: "Athletics & Sports",
      items: ["Athletics", "Indoor Games/Sports", "Outdoor Games"],
    },
    {
      category: "Indoor Games/Sports",
      items: ["Carrom", "Chess", "Table Tennis"],
    },
    {
      category: "Outdoor Games",
      items: ["Cricket", "Football", "Basket Ball", "Throw Ball", "Volley Ball", "Shooting", "Taekwondo / Karate", "Yoga", "Trekking"],
    },
  ];

  return (
    <>
    <Updates/>
    <Navbar/>
    <Hero image={SchoolImage}  title="Extra Curricular Activities" subBody="" height={70}/>
    <div className="min-h-screen  p-6">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Extra Curricular Activities</h1>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-[0px_0px_5px_2px_rgba(0,_0,_0,_0.1)]">
        {activities.map((group, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2 border-b pb-2">{group.category}</h2>
            <ul className="list-disc list-inside text-gray-600">
              {group.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ExtraCurricular;
