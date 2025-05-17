
"use client"
import Updates from "@/components/Updates";
import Footer from "@/Sections/Footer";
import Navbar from '@/Sections/Navbar'
import React from "react";
import Hero from "@/Sections/Hero";
import SchoolImage from "@/assets/images/docs.png"

const SchoolInfo = () => {
  const pdfUrl = "/certificates/Mandatory_Disclosure_Details_SARAS_6.0.pdf";

  const availablePdfs = [
    { id: "RC1", title: "Recognition Certificate (RC)", url: "/certificates/RC1.pdf" },
    { id: "NOC1", title: "No Objection Certificate (NOC)", url: "/certificates/NOC1.pdf" },
    { id: "AFFILATION1", title: "Affiliation Certificate", url: "/certificates/AFFILATION1.pdf" },
    { id: "BUILDING_SAFETY", title: "Building Safety Certificate", url: "/certificates/BUILDING SAFETY1.pdf" },
    { id: "FIRE_SAFETY", title: "Fire Safety Certificate", url: "/certificates/FIRE SAFETY.pdf" },
    { id: "FEE_STRUCTURE", title: "Fee Structure", url: "/certificates/FEE STRUCTURE.pdf" },
    { id: "SI1", title: "School Infrastructure", url: "/certificates/SI1.pdf" },
    { id: "CALENDAR", title: "Academic Calendar", url: "/certificates/calender.pdf" },
  ];
  // Function to open PDF in a new tab
  const openPdfInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const generalInfo = [
    { srNo: 1, title: "Name of School", details: "Green Heaven English Academy" },
    { srNo: 2, title: "AFFILIATION NO.(IF APPLICABLE)", details: "" },
    { srNo: 3, title: "SCHOOL CODE (IF APPLICABLE)", details: "" },
    { srNo: 4, title: "COMPLETE ADDRESS WITH PIN CODE", details: "VILL. MADANPURA, TEH. BEHAT, DISTT. SAHARANPUR, SAHARANPUR, UTTAR PRADESH - 247129" },
    { srNo: 5, title: "PRINCIPAL NAME", details: "Mr. MANUJ DUTT" },
    { srNo: 6, title: "PRINCIPAL QUALIFICATION", details: "M.Sc. B.Ed." },
    { srNo: 7, title: "SCHOOL EMAIL ID", details: "asdutta.1982@gmail.com" },
    { srNo: 8, title: "CONTACT DETAILS (LANDLINE/MOBILE)", details: "+91 9058695869" },
  ];

  const documentsInfo = [
    { srNo: 1, title: "Affiliation Certificate", download: "/certificates/AFFILATION1.pdf" },
    { srNo: 2, title: "Society Registartion Certificate", download: "/certificates/Society-Registartion-Certificate.jpg" },
    { srNo: 3, title: "No Objection Certificate (NOC)", download: "/certificates/NOC1.pdf" },
    { srNo: 4, title: "Recognition Certificate (RC)", download: "/certificates/RC1.pdf" },
    { srNo: 5, title: "Land Certificate", download: "/certificates/LC.jpg" },
    { srNo: 6, title: "Building Safety Certificate", download: "/certificates/BUILDING SAFETY1.pdf" },
    { srNo: 7, title: "Fire Safety Certificate", download: "/certificates/FIRE SAFETY.pdf" },
    { srNo: 8, title: "Self Certificate", download: "/certificates/certification.pdf" },
    { srNo: 9, title: "Water, Health & Sanitation Certificate", download: "/certificates/Sanitation n water TDS 2025-26.pdf" },
    { srNo: 10, title: "School Infrastructure Certificate", download: "/certificates/SI1.pdf" },
    { srNo: 11, title: "Fee structure of the School", download: "/certificates/FEE STRUCTURE.pdf" },
    { srNo: 12, title: "Annual Academic Calender", download: "/certificates/calender.pdf" },
    { srNo: 13, title: "List of School Management Committee", download: "/certificates/SMC.pdf" },
    { srNo: 14, title: "List of Parent Teacher Association (PTA) Members", download: "/certificates/PTA.jpg" },
    // { srNo: 15, title: "Last 3 Year Result of the Borad Examination as per Applicability", download: "/certificates/3yrresult.pdf" },
    { srNo: 15, title: "Mandatory Public Disclosure Details", download: "/certificates/Mandatory_Disclosure_Details_SARAS_6.0.pdf" },
    { srNo: 16, title: "Certificate of Salary Disbursement", download: "#" },
    { srNo: 17, title: "Class Room Size Certificate", download: "/certificates/class room size certificate.pdf" },
    { srNo: 18, title: "HT Line Certificate", download: "/certificates/HT LINE CERTIFICATE.pdf" },
    // { srNo: 20, title: "Society Registartion Certificate", download: "/certificates/Society-Registartion-Certificate.jpg" },
    // { srNo: 21, title: "Teachers Data", download: "/certificates/Teachers Data.png" }


  ];

  const staffTeaching = [
    { srNo: 1, info: "PRINCIPAL", details: "Mr. MANUJ DUTT" },
    { srNo: 2, info: "TOTAL NO. OF TEACHERS", details: "14" },
    { srNo: 3, info: "TGT", details: "6" },
    { srNo: 4, info: "PRT", details: "8" },
    { srNo: 5, info: "TEACHERS SECTION RATIO", details: "25:1" },
    { srNo: 6, info: "DETAILS OF SPECIAL EDUCATOR", details: "MR. AMIT KUMAR (DIPLOMA IN SP. EDUCATION)" },
    { srNo: 7, info: "DETAILS OF COUNSELLOR AND WELLNESS TEACHER", details: "MRS. MONIKA CHAUHAN (MSc. PSYCOLOGY, B.Ed.)" },
    { srNo: 8, info: "Teachers Data", details: <a className="hover:text-blue-500 text-green-600" href="/certificates/Teachers Data.png" download target="_blank" rel="noopener noreferrer">Download</a> }

  ];

  const schoolInfrastructure = [
    { srNo: 1, info: "TOTAL CAMPUS AREA OF THE SCHOOL (IN SQ MTR)", details: "7889" },
    { srNo: 2, info: "NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR)", details: "15 & 50" },
    { srNo: 3, info: "NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS", details: "2 & 66" },
    { srNo: 4, info: "INTERNET FACILITY", details: "YES" },
    { srNo: 5, info: "NO. OF GIRLS TOILETS", details: "10" },
    { srNo: 6, info: "NO. OF BOYS TOILETS", details: "10" },
    { srNo: 7, info: "CWSN Girls Toilet", details: "02" },
    { srNo: 8, info: "CWSN Boys Toilet", details: "02" },
    // { srNo: 9, info: "LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL", details: <a className="hover:text-blue-500 text-green-600" href="https://drive.google.com/file/d/1fKKgW3UuMhkRvjR5bm8FNCRiHWVe8-rY/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">OPEN</a> },
    { srNo: 9, info: "Download SCHOOL INFRASTRUCTURE Details", details: <a className="hover:text-blue-500 text-green-600" href="/certificates/SI1.pdf" download target="_blank" rel="noopener noreferrer">Download</a> },

  ];

  const results = [
    { srNo: 1, year: "", registered: "", passed: "", percentage: "%", remarks: "" },
  ];

  return (
    <>
      <Updates />
      <Navbar />
      <Hero image={SchoolImage} title="Mandatory Public Disclosure" subBody="" height={70} />
      <div className="p-6">
        <h1 className="text-2xl font-bold text-green-600 text-center mb-6">Mandatory Public Disclosure</h1>
        {/* PDF Viewer Section */}
        <div className="max-w-screen mb-6 md:mb-14 mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-green-600 mb-4">School Documents</h2>


              {/* Featured Document */}
              <div className="mb-8 bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Mandatory Disclosure PDF</h4>
                      <p className="text-sm text-gray-500">Official mandatory disclosure PDF</p>
                    </div>
                  </div>
                  <button
                    onClick={() => openPdfInNewTab(pdfUrl)}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    View
                  </button>
                </div>
              </div>

              {/* Document Grid */}
              <h2 className="text-green-500 font-bold text-xl text-center mb-6">Quick Link</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {availablePdfs.map((pdf, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gray-100 p-2 rounded">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">{pdf.title}</span>
                      </div>
                      <button
                        onClick={() => openPdfInNewTab(pdf.url)}
                        className="text-green-600 hover:text-green-800"
                        aria-label={`View ${pdf.title}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Information */}
              <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Additional Information</h3>
                <p className="text-sm text-gray-600">
                  For any questions regarding these documents, please contact the school administration.
                </p>
                <div className="mt-4">
                  <a href="mailto:greenheavenacademy2011@gmail.com" className="text-green-600 hover:text-green-800 text-sm flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Mail
                  </a>
                  <a href="tel:+919058695869" className="text-green-600 hover:text-green-800 text-sm flex items-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 90586 95869
                  </a>
                  <a
                    href="/Contact"
                    className="text-green-800 rounded-md ring-2 ring-green-600 w-fit px-3 font-bold hover:text-white hover:bg-green-600 text-lg flex items-center mt-2 transform transition-transform duration-300 hover:scale-105"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

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
      <Footer />
    </>
  );
};

export default SchoolInfo;