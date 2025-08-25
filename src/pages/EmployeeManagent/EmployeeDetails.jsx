import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/BreadCrumb/BreadCrumb";
import { breadcrumbConfig } from "../../routes/breadcrumbConfig";
import { Avatar } from "@mui/material";

const sections = [
  { id: "personalData", label: "Personal Data" },
  { id: "contact", label: "Contact Details" },
  { id: "familyinfo", label: "Family Contact Info" },
  { id: "education", label: "Education Qualifications" },
  { id: "professional", label: "Professional" },
  { id: "family", label: "Family Details" },
  { id: "job", label: "Job Details" },
  { id: "financial", label: "Financial Details" },
];

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [activeSection, setActiveSection] = useState("personalData");

  useEffect(() => {
    setTimeout(() => {
      setEmployee({ id, name: `#${id}` });
    }, 300);
  }, [id]);

  if (!employee) {
    return <div className="text-center">Loading...</div>;
  }

  const crumbs = breadcrumbConfig["/employees/:id"](employee.name);

  const employeeDetails = {
    name: "Selemon Alemayehu",
    department: "Design & Marketing",
    jobTitle: "UI / UX Designer",
    jobCategory: "Full time",
    nextOfKin: {
      name: "Birhanu Masfin",
      job: "Accountant",
      phoneNumber: "093333322",
      relationship: "Relative",
      residentialAddress: "Debrezeit",
    },
  };
  const ProfileCard = () => (
    <div className="flex flex-col items-center py-4 w-full">
      <Avatar src="" alt="Employee" sx={{ width: 150, height: 150, mb: 2 }} />
      <p className="text-lg text-dark py-2">Employee Name</p>
      <h2 className="text-xl font-bold py-2">{employeeDetails.name}</h2>
      <p className="text-dark-600 py-2 text-lg">Department</p>
      <p className="text-3xl py-2 font-bold">{employeeDetails.department}</p>

      <div className="flex justify-between items-start w-full px-4 py-4">
        <div className="text-left w-1/2">
          <p className="text-lg text-dark">Job Title</p>
          <p className="text-2xl font-semibold">{employeeDetails.jobTitle}</p>
        </div>
        <div className="text-right w-1/2">
          <p className="text-lg text-dark">Job Category</p>
          <p className="text-2xl font-semibold">
            {employeeDetails.jobCategory}
          </p>
        </div>
      </div>
    </div>
  );

  const ContactUsCard = () => (
    <div className="flex flex-col gap-4 py-5 w-full">
      <div className="flex justify-between w-full px-4">
        <div>
          <p className="text-lg mb-4 ">Phone Number 1</p>
          <p className="text-lg  py-6 px-8 text-start  text-gray-600 bg-blue-100 rounded-2xl w-100 ">
            099344434
          </p>
        </div>
        <div>
          <p className="text-lg mb-4 ">Phone Number 2</p>
          <p className="text-lg  py-6 px-8 text-start  text-gray-600 bg-blue-100 rounded-2xl w-100 ">
            0933223344
          </p>
        </div>
      </div>
      <div className="px-4 py-4">
        <p className="text-lg mb-4">E-mail Address</p>
        <p className="text-lg  py-6 px-8 text-start  text-gray-600 bg-blue-100 rounded-2xl w-full">
          selemon@example.com
        </p>
      </div>
      <div className="px-4 py-4">
        <p className="text-lg mb-4">City of residence</p>
        <p className="text-lg  py-6 px-8 text-start  text-gray-600 bg-blue-100 rounded-2xl w-100">
          Indore
        </p>
      </div>
      <div className="px-4 py-4">
        <p className="text-lg mb-4">Residential Address</p>
        <p className="text-lg  py-6 px-8 text-start  text-gray-600 bg-blue-100 rounded-2xl w-full">
          Airtport Road , Indore
        </p>
      </div>
    </div>
  );

  const FamilyDetails = () => {
    return (
      <div className="flex flex-col gap-4 py-5 w-full">
        <div className="flex justify-between w-full px-4 py-4">
          <div>
            <p className="text-lg mb-4 ">Next of kin name</p>
            <p className="text-lg  py-6 px-8 text-start  text-gray-600 bg-blue-100 rounded-2xl w-100 ">
              birhanu mesfin
            </p>
          </div>
          <div>
            <p className="text-lg mb-4 ">Job / Occupation</p>
            <p className="text-lg  py-6 px-8 text-start  text-gray-600 bg-blue-100 rounded-2xl w-100 ">
              Accountant
            </p>
          </div>
        </div>
        <div className="flex justify-between w-full px-4 py-4">
          <div>
            <p className="text-lg mb-4">Phone Number</p>
            <p className="text-lg  py-6 px-8 text-start  text-gray-600 bg-blue-100 rounded-2xl w-100">
              093333322
            </p>
          </div>
          <div>
            <p className="text-lg mb-4">Relationship</p>
            <p className="text-lg  py-6 px-8 text-start  text-gray-600 bg-blue-100 rounded-2xl w-100">
              Relative
            </p>
          </div>
        </div>
        <div className="px-4 py-4">
          <p className="text-lg mb-4 py-2">Residential Address</p>
          <p className="text-lg  py-6 px-8 text-start  text-gray-600 bg-blue-100 rounded-2xl w-full">
            Airtport Road , Indore
          </p>
        </div>
      </div>
    );
  };

  const Education = () => {
    return (
      <div className="flex flex-col gap-4 py-5 w-full">
        <div className="flex justify-between w-full px-4 py-4">
          <div>
            <p className="text-lg mb-4 ">Name of Institution</p>
            <p className="text-lg  py-6 px-8 text-start  text-gray-600 bg-blue-100 rounded-2xl w-100 ">
              Jimma University
            </p>
          </div>
          <div>
            <p className="text-lg mb-4 ">Degree</p>
            <p className="text-lg  py-6 px-8 text-start  text-gray-600 bg-blue-100 rounded-2xl w-100 ">
              Bachelors Degree
            </p>
          </div>
        </div>
        <div className="px-4 py-4">
          <p className="text-lg mb-4">Field of Study</p>
          <p className="text-lg  py-6 px-8 text-start  text-gray-600 bg-blue-100 rounded-2xl w-full">
            Computer Science
          </p>
        </div>

        <div className="flex justify-between w-full px-4 py-4">
          <div>
            <p className="text-lg mb-4 py-2">Start Date</p>
            <p className="text-lg  py-6 px-8 text-start  text-gray-600 bg-blue-100 rounded-2xl w-100">
            01/01/1998
            </p>
          </div>
          <div>
          <p className="text-lg mb-4 py-2">End Date</p>
            <p className="text-lg  py-6 px-8 text-start  text-gray-600 bg-blue-100 rounded-2xl w-100">
            01/01/2019
            </p>
          </div>
        </div>
      </div>
    );
  };

  const Professional = () => {
    return (
      <div className="flex flex-col gap-4 py-5 w-full h-[700px] overflow-auto">
        {/* Work Experience Section */}
        <div className="flex justify-between w-full px-4 py-4">
          <div>
            <p className="text-lg mb-4">Company Name</p>
            <p className="text-lg py-6 px-8 text-start text-gray-600 bg-blue-100 rounded-2xl w-100">
              Google LLC
            </p>
          </div>
          <div>
            <p className="text-lg mb-4">Title</p>
            <p className="text-lg py-6 px-8 text-start text-gray-600 bg-blue-100 rounded-2xl w-100">
              Software Engineer
            </p>
          </div>
        </div>
  
        <div className="flex justify-between w-full px-4 py-4">
          <div>
            <p className="text-lg mb-4">Employment Type</p>
            <p className="text-lg py-6 px-8 text-start text-gray-600 bg-blue-100 rounded-2xl w-100">
              Full-time
            </p>
          </div>
          <div>
            <p className="text-lg mb-4">Location</p>
            <p className="text-lg py-6 px-8 text-start text-gray-600 bg-blue-100 rounded-2xl w-100">
              Mountain View, CA, USA
            </p>
          </div>
        </div>
  
        <div className="flex justify-between w-full px-4 py-4">
          <div>
            <p className="text-lg mb-4 py-2">Start Date</p>
            <p className="text-lg py-6 px-8 text-start text-gray-600 bg-blue-100 rounded-2xl w-100">
              07/01/2015
            </p>
          </div>
          <div>
            <p className="text-lg mb-4 py-2">End Date</p>
            <p className="text-lg py-6 px-8 text-start text-gray-600 bg-blue-100 rounded-2xl w-100">
              08/01/2020
            </p>
          </div>
        </div>
  
        <div className="px-4 py-4">
          <p className="text-lg mb-4">Work Summary</p>
          <p className="text-lg py-6 px-8 text-start text-gray-600 bg-blue-100 rounded-2xl w-full">
            Developed and maintained large-scale web applications using React and Node.js. 
            Collaborated with cross-functional teams to improve product performance, scalability, and security. 
            Led several high-impact projects, including the redesign of internal developer tools and the integration of machine learning features into the user experience.
          </p>
        </div>
      </div>
    );
  };
  
  
  const renderSectionContent = () => {
    switch (activeSection) {
      case "personalData":
        return <ProfileCard />;
      case "contact":
        return <ContactUsCard />;
      case "familyinfo":
        return <FamilyDetails />;
      case "education":
        return <Education />;
      case "professional":
        return <Professional/>
      default:
        return <div>Select a section to view details</div>;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="bg-white p-4 shadow-md">
        <Breadcrumb crumbs={crumbs} />
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-100 p-4">
          <div className="mt-4">
            {sections.map(({ id, label }) => (
              <div
                key={id}
                onClick={() => setActiveSection(id)}
                className={`p-4 mb-4 rounded-lg cursor-pointer ${
                  activeSection === id ? "bg-[#FFC20E]" : "bg-blue-100"
                }`}
              >
                <h2 className="text-center text-lg font-medium">{label}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Content Panel */}
        <div className="w-3/4 bg-gray-50 p-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            {renderSectionContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
