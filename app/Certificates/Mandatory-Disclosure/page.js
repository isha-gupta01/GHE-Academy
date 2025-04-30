import Updates from "@/components/Updates";
import Footer from "@/Sections/Footer";
import Navbar from '@/Sections/Navbar'
import React from "react";
import Hero from "@/Sections/Hero";
import SchoolImage from "@/assets/images/docs.png"

const SchoolInfo = () => {
  const generalInfo = [
    { srNo: 1, title: "Name of School", details: "Green Heaven English Academy" },
    { srNo: 2, title: "AFFILIATION NO.(IF APPLICABLE)", details: "" },
    { srNo: 3, title: "SCHOOL CODE (IF APPLICABLE)", details: "" },
    { srNo: 4, title: "COMPLETE ADDRESS WITH PIN CODE", details: "V/P- MADANPURA/TALHAPUR, BLOCK MUZAFFRABAAD, TEHSIL BEHAT, ON BIHARIGARH MIRZAPUR HIGHWAY, SAHARANPUR, UP-247129" },
    { srNo: 5, title: "PRINCIPAL NAME", details: "Mr. MANUJ DUTT SHARMA" },
    { srNo: 6, title: "PRINCIPAL QUALIFICATION", details: "MSc.(Maths), B.Ed." },
    { srNo: 7, title: "SCHOOL EMAIL ID", details: "greenheavenacademy2011@gmail.com" },
    { srNo: 8, title: "CONTACT DETAILS (LANDLINE/MOBILE)", details: "+91 90586 95869" },
  ];

  const documentsInfo = [
    { srNo: 1, title: "Affiliation Certificate", download: "/certificates/AFFILATION1.pdf" },
    { srNo: 2, title: "Society Certificate", download: "/certificates/SOCIETY1.pdf" },
    { srNo: 3, title: "No Objection Certificate (NOC)", download: "/certificates/NOC1.pdf" },
    { srNo: 4, title: "Recognition Certificate (RC)", download: "/certificates/RC1.pdf" },
    { srNo: 5, title: "Land Certificate", download: "/certificates/LC.jpg" },
    { srNo: 6, title: "Building Safety Certificate", download: "/certificates/BUILDING SAFETY1.pdf" },
    { srNo: 7, title: "Fire Safety Certificate", download: "/certificates/FIRE SAFETY.pdf" },
    { srNo: 8, title: "Self Certificate", download: "/certificates/certification.pdf" },
    { srNo: 9, title: "Water, Health & Sanitation Certificate", download: "/certificates/HEALTHWATER.pdf" },
    { srNo: 10, title: "School Infrastructure Certificate", download: "/certificates/SI1.pdf" },
    { srNo: 11, title: "Fee structure of the School", download: "/certificates/FEE STRUCTURE.pdf" },
    { srNo: 12, title: "Annual Academic Calender", download: "/certificates/calender.pdf" },
    { srNo: 13, title: "List of School Management Committee", download: "/certificates/SMC.pdf" },
    { srNo: 14, title: "List of Parent Teacher Association (PTA) Members", download: "/certificates/PTA.jpg" },
    { srNo: 15, title: "Last 3 Year Result of the Borad Examination as per Applicability", download: "/certificates/3yrresult.pdf" },
    { srNo: 16, title: "Mandatory Public Disclosure Details", download: "/certificates/mpd.pdf" },
    { srNo: 17, title: "Certificate of Salary Disbursement", download: "#" },
    { srNo: 18, title: "Class Room Size Certificate", download: "/certificates/class room size certificate.pdf" },
    { srNo: 19, title: "HT Line Certificate", download: "/certificates/HT LINE CERTIFICATE.pdf" },
    { srNo: 20, title: "Society Registartion Certificate", download: "/certificates/Society-Registartion-Certificate.jpg" },
    { srNo: 21, title: "Teachers Data", download: "/certificates/Teachers Data.png" }

    
  ];

  const staffTeaching = [
    { srNo: 1, info: "PRINCIPAL", details: "Mr. MANUJ DUTT SHARMA" },
    { srNo: 2, info: "TOTAL NO. OF TEACHERS", details: "21" },
    { srNo: 3, info: "TGT", details: "11" },
    { srNo: 4, info: "PRT", details: "9" },
    { srNo: 5, info: "TEACHERS SECTION RATIO", details: "30:1" },
    { srNo: 6, info: "DETAILS OF SPECIAL EDUCATOR", details: "1" },
    { srNo: 7, info: "DETAILS OF COUNSELLOR AND WELLNESS TEACHER", details: "1" },

  ];

  const schoolInfrastructure = [
    { srNo: 1, info: "TOTAL CAMPUS AREA OF THE SCHOOL (IN SQ MTR)", details: "7889" },
    { srNo: 2, info: "NO. OF THE CLASS ROOMS", details: "14" },
    { srNo: 3, info: "NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS", details: "3" },
    { srNo: 4, info: "INTERNET FACILITY", details: "YES" },
    { srNo: 5, info: "NO. OF GIRLS TOILETS", details: "12" },
    { srNo: 6, info: "NO. OF BOYS TOILETS", details: "12" },
    { srNo: 7, info: "CWSN Girls Toilet", details: "02" },
    { srNo: 8, info: "CWSN Boys Toilet", details: "02" },
    { srNo: 9, info: "LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL", details: <a className="hover:text-blue-500 text-green-600" href="https://drive.google.com/file/d/1fKKgW3UuMhkRvjR5bm8FNCRiHWVe8-rY/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">OPEN</a> },
    { srNo: 10, info: "Download SCHOOL INFRASTRUCTURE Details", details: <a className="hover:text-blue-500 text-green-600" href="/certificates/SI1.pdf" download target="_blank" rel="noopener noreferrer">Download</a> },

  ];

  const results = [
    { srNo: 1, year: "", registered: "", passed: "", percentage: "%", remarks: "" },
  ];

  return (
    <>
    <Updates/>
    <Navbar/>
    <Hero image={SchoolImage}  title="Mandatory Public Disclosure" subBody="" height={70}/>
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-600 text-center mb-6">Mandatory Public Disclosure</h1>
      
      {/* Table Component */}
      <div className="overflow-x-auto">
        {[{ title: "GENERAL INFORMATION", data: generalInfo, headers: ["Sr No.", "Title", "Details"] },
          { title: "DOCUMENTS AND INFORMATION", data: documentsInfo, headers: ["Sr No.", "Title", "Download"] },
          { title: "STAFF (TEACHING)", data: staffTeaching, headers: ["Sr No.", "Information", "Details"] },
          { title: "SCHOOL INFRASTRUCTURE ", data: schoolInfrastructure, headers: ["Sr No.", "Information", "Details"] },
          { title: "RESULT Xth & XIIth", data: results, headers: ["Sr No.", "Year", "No. of Registered Students", "No. of Students Passed", "Pass Percentage", "Remarks"] }
        ].map((table, index) => (
          <div key={index} className="mb-14">
            <h2 className="text-xl text-green-600 font-semibold mb-3">{table.title}</h2>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  {table.headers.map((header, idx) => (
                    <th key={idx} className="border border-gray-300 px-4 py-2">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.data.map((row, rowIndex) => (
                  <tr key={rowIndex} className="">
                    {Object.values(row).map((value, colIndex) => (
                      <td key={colIndex} className="border border-gray-300 px-4 py-2">
                        {colIndex === table.headers.length - 1 && table.title.includes("DOCUMENTS") ? (
                          <a href={value} download className="hover:text-blue-600 text-green-600">Download</a>
                        ) : (
                          value
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default SchoolInfo;