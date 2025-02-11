import React from "react";

const SchoolInfo = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">School Information</h1>
      
      {/* Table A: General Information */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">General Information</h2>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Sr No.</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">1</td>
              <td className="border p-2">School Name</td>
              <td className="border p-2">ABC International School</td>
            </tr>
            <tr>
              <td className="border p-2">2</td>
              <td className="border p-2">Established</td>
              <td className="border p-2">2005</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table B: Documents and Information */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Documents and Information</h2>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Sr No.</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Download</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">1</td>
              <td className="border p-2">School Brochure</td>
              <td className="border p-2"><a href="#" className="text-blue-500">Download</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table C: Staff (Teaching) */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Staff (Teaching)</h2>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Sr No.</th>
              <th className="border p-2">Information</th>
              <th className="border p-2">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">1</td>
              <td className="border p-2">Total Teachers</td>
              <td className="border p-2">50</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table D: School Infrastructure */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">School Infrastructure</h2>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Sr No.</th>
              <th className="border p-2">Information</th>
              <th className="border p-2">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">1</td>
              <td className="border p-2">Total Classrooms</td>
              <td className="border p-2">30</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table E: Result Xth & XIIth */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Result Xth & XIIth</h2>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Sr.No.</th>
              <th className="border p-2">YEAR</th>
              <th className="border p-2">NO. OF REGISTERED STUDENTS</th>
              <th className="border p-2">NO. OF STUDENTS PASSED</th>
              <th className="border p-2">PASS PERCENTAGE</th>
              <th className="border p-2">REMARKS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">1</td>
              <td className="border p-2">2023</td>
              <td className="border p-2">120</td>
              <td className="border p-2">118</td>
              <td className="border p-2">98%</td>
              <td className="border p-2">Excellent</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SchoolInfo;
