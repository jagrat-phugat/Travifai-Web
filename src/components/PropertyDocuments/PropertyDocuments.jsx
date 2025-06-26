import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

const documentSections = {
  "Legal Registration Documents": [
    "GST Registration Certificate",
    "Partnership Deed / Memorandum of Association",
  ],
  "Property Ownership or Lease Documents": [
    "Property Deed / Title Deed",
    "Lease Agreement",
    "Property Registration Certificate (NOC)",
  ],
  "Identification Proof": [
    "Passport",
    "Aadhaar Card (India)",
    "National ID Card",
    "Driver’s License",
  ],
  "Financial Documents": [
    "Bank Account Statement",
    "PAN Card (Permanent Account Number)",
    "Canceled Cheque",
  ],
  "Compliance and Safety Certificates": [
    "Fire Safety Certificate",
    "Health and Hygiene Certificate",
    "Tourism Department License",
  ],
  "Industry-Specific Certifications": ["Hospitality Awards and Recognitions"],
  "Special Licenses": ["FSSAI License (Food Safety License)"],
};

const PropertyDocumentsUpload = () => {
  const [documents, setDocuments] = useState({});
  const navigate = useNavigate();

  const handleFileChange = (docType, e) => {
    setDocuments({
      ...documents,
      [docType]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploaded Documents:", documents);
    navigate("/signup/property-rules");
  };

  const handleBack = () => {
    navigate(-1);
  };

  const renderFileInput = (docType) => (
    <div className="flex justify-between items-center bg-white/80 rounded-xl px-4 py-2 shadow">
      <span className="text-black text-sm font-medium">{docType}</span>
      <input
        type="file"
        accept=".pdf,.jpg,.png"
        className="file:mr-2 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:bg-purple-100 file:text-purple-800 text-black"
        onChange={(e) => handleFileChange(docType, e)}
      />
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-800 to-white px-4 py-6 font-sans">
      <div className="w-full max-w-3xl p-8 rounded-3xl shadow-2xl bg-gradient-to-br from-purple-400 via-purple-300 to-white bg-opacity-60 backdrop-blur-lg border border-white border-opacity-30 space-y-6 transition-all duration-500">
        {/* Header */}
        <div className="flex items-center space-x-2 mb-4">
          <button
            onClick={handleBack}
            className="text-black text-2xl hover:scale-110 transition"
          >
            <IoChevronBack />
          </button>
          <h1 className="text-2xl font-bold text-black">Documents</h1>
        </div>

        {/* Document Upload Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {Object.entries(documentSections).map(([section, docs]) => (
            <div key={section}>
              <h2 className="text-md font-bold text-black mb-2">{section}</h2>
              <div className="space-y-2">
                {docs.map((docType) => (
                  <div key={docType}>{renderFileInput(docType)}</div>
                ))}
              </div>
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-purple-700 text-white font-semibold hover:bg-purple-500 hover:scale-105 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PropertyDocumentsUpload;
