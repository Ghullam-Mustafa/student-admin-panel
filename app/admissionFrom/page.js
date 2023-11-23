"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { PiPhoneCallBold } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa6";
import { db, storage } from "@/config/firebase";
import { addDoc, collection } from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

export default function Page() {
  const [form, setForm] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [admissionType, setAdmissionType] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentphoneNumber, setStudentPhoneNumber] = useState("");
  const [studentCnic, setStudentCnic] = useState("");
  const [studentWhatsappNumber, setStudentWhatsappNumber] = useState("");
  const [markOfIdentification, setMarkOfIdentification] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [fatherPhoneNumber, setFatherPhoneNumber] = useState("");
  const [fatherCnic, setFahterCnic] = useState("");
  const [fatherWhatsappNumber, setFatherWhatsappNumber] = useState("");
  const [fatherOccupation, setFatherOccupation] = useState("");
  const [Religion, setReligion] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [matriculationYear, setMatriculationYear] = useState("");
  const [boardRollNo, setBoardRollNo] = useState("");
  const [obtainedMarks, setObtainedMarks] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [insitute, setinsitute] = useState("");
  const [otherYear, setOtherYear] = useState("");
  const [otherRollNo, setOtherRollNo] = useState("");
  const [OtherObtainedMarks, setOtherObtainedMarks] = useState("");
  const [othetTotalMarks, setOtherTotalMarks] = useState("");
  const [otherInsitute, setOthertinsitute] = useState("");
  const [file, setFile] = useState({});
  const [isUploading, setIsUploading] = useState(false)

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleAdmissionType = (event) => {
    setAdmissionType(event.target.value);
  };

  // const onSubmitHandler = async (e) => {
  //     e.preventDefault();
  //     const AddmissionForm = {
  //         selectedCourse,
  //         admissionType,
  //         studentName,
  //         studentphoneNumber,
  //         studentCnic,
  //         studentWhatsappNumber,
  //         markOfIdentification,
  //         dateOfBirth,
  //         fatherName,
  //         fatherPhoneNumber,
  //         fatherCnic,
  //         fatherWhatsappNumber,
  //         fatherOccupation,
  //         Religion,
  //         homeAddress,
  //         studentEmail,
  //         matriculationYear,
  //         boardRollNo,
  //         obtainedMarks,
  //         totalMarks,
  //         insitute,
  //         otherYear,
  //         otherRollNo,
  //         OtherObtainedMarks,
  //         othetTotalMarks,
  //         otherInsitute
  //     };

  //     try {
  //         const collectionName = collection(db, "AddmissionForm");
  //         await addDoc(collectionName, AddmissionForm);
  //         console.log("Code is working");
  //     } catch (error) {
  //         console.error("Error submitting form: ", error);
  //     }

  // };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const AddmissionForm = {
      selectedCourse,
      admissionType,
      studentName,
      studentphoneNumber,
      studentCnic,
      studentWhatsappNumber,
      markOfIdentification,
      dateOfBirth,
      fatherName,
      fatherPhoneNumber,
      fatherCnic,
      fatherWhatsappNumber,
      fatherOccupation,
      Religion,
      homeAddress,
      studentEmail,
      matriculationYear,
      boardRollNo,
      obtainedMarks,
      totalMarks,
      insitute,
      otherYear,
      otherRollNo,
      OtherObtainedMarks,
      otherInsitute,
      othetTotalMarks,
    };

    if (!file.name) {
      alert("Please Select Image", "error");

      return;
    }

   

    const randomId = Math.random().toString(36).slice(2);

    const imagesRef = ref(storage, `images/${randomId}.${file.name}`);
    const uploadTask = uploadBytesResumable(imagesRef, file);

    setIsUploading(true);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progressValue = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log("Upload is " + progressValue + "% done");
      },
      (error) => {
        console.log(error);
        setIsUploading(false);
      },
      async () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadFileUrl) => {
          const projectImage = downloadFileUrl;

          const AddmissionForm = {
            selectedCourse,
            admissionType,
            studentName,
            studentphoneNumber,
            studentCnic,
            studentWhatsappNumber,
            markOfIdentification,
            dateOfBirth,
            fatherName,
            fatherPhoneNumber,
            fatherCnic,
            fatherWhatsappNumber,
            fatherOccupation,
            Religion,
            homeAddress,
            studentEmail,
            matriculationYear,
            boardRollNo,
            obtainedMarks,
            totalMarks,
            insitute,
            otherYear,
            otherRollNo,
            OtherObtainedMarks,
            otherInsitute,
            othetTotalMarks,
          };

          let studendData = { ...AddmissionForm, projectImage };
          console.log(studendData);

          AddProjectData(studendData);
        });
      }
    );



    const AddProjectData = async (AddmissionForm) => {
      try {
        await addDoc(collection(db, "AddmissionForm"), AddmissionForm);
        setIsUploading(false);
        alert("Your form is added Successfully.", "success");
        return;
      } catch {
        setIsUploading(false);
        alert("Error While Adding you Project. Please try again", "error");
        return;
      }
    };
  };



  return (
    <>

{isUploading ?  <>
    <div class="circle-container h-screen w-[100vh] flex justify-center items-center">

<svg fill="none" class="circle-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle class="circle" cx="50" cy="50" r="45" />
</svg>
</div>
</> :  <>

      <div className="bg-white border-2 border-black p-2">
        <form onSubmit={onSubmitHandler}>
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <Image src="/logo.png" alt="graph" height={50} width={100} />
            </div>
            <div className="flex col-span-9 items-center px-5">
              <div className="flex flex-col items-center">
                <p className="text-blue-500 text-3xl font-bold border-b-2 border-red-500 ">
                  TIPS COLLEGE OF SCIENCE & COMMERCE
                </p>
                <p className="text-xl font-bold italic">
                  A College with Professional Excellence
                </p>
              </div>
            </div>
          </div>

          <p className="text-blue-500 py-3">Applied for Admission in :</p>

          <div className="grid grid-cols-12">
            <div className="flex col-span-9 items-center">
              <div className="">
                <div className="grid gap-x- gap-y-4 grid-cols-3">
                  <div className="flex ">
                    <label
                      className="flex items-center space-x-2"
                      htmlFor="FScPreEngineering"
                    >
                      <input
                        type="radio"
                        id="ICS"
                        name="course"
                        value="F.Sc Pre-Engineering"
                        checked={selectedCourse === "F.Sc Pre-Engineering"}
                        onChange={handleCourseChange}
                      />
                      <span className=" text-red-600 text-xl text-left font-bold">
                        F.Sc Pre-Engineering
                      </span>
                    </label>
                  </div>
                  <div className="flex ">
                    <label
                      className="flex items-center space-x-2"
                      htmlFor="FScMedical"
                    >
                      <input
                        type="radio"
                        id="ICS"
                        name="course"
                        value="F.Sc Medical"
                        checked={selectedCourse === "F.Sc Medical"}
                        onChange={handleCourseChange}
                      />
                      <span className=" text-red-600 text-xl text-left font-bold">
                        F.Sc Medical
                      </span>
                    </label>
                  </div>
                  <div className="flex ">
                    <label
                      className="flex items-center space-x-2"
                      htmlFor="ICSPhysics"
                    >
                      <input
                        type="radio"
                        id="ICS"
                        name="course"
                        value="ICS (Physics)"
                        checked={selectedCourse === "ICS (Physics)"}
                        onChange={handleCourseChange}
                      />
                      <span className=" text-red-600 text-xl font-bold text-left">
                        ICS (Physics)
                      </span>
                    </label>
                  </div>
                </div>

                <div className="grid gap-x- gap-y-4 grid-cols-3">
                  <div className="flex text-left">
                    <label className="flex  space-x-2" htmlFor="ICSStatistics">
                      <input
                        type="radio"
                        id="ICS"
                        name="course"
                        value="ICS (Statistics)"
                        checked={selectedCourse === "ICS (Statistics)"}
                        onChange={handleCourseChange}
                      />
                      <span className="text-red-600 text-xl text-left font-bold">
                        ICS (Statistics)
                      </span>
                    </label>
                  </div>
                  <div className="flex  text-left">
                    <label className="flex  space-x-2" htmlFor="ICom">
                      <input
                        type="radio"
                        id="ICS"
                        name="course"
                        value="I.Com"
                        checked={selectedCourse === "I.Com"}
                        onChange={handleCourseChange}
                      />
                      <span className="text-red-600 text-xl font-bold">
                        I.Com
                      </span>
                    </label>
                  </div>
                  <div className="flex  p- text-left">
                    <label className="flex  space-x-2" htmlFor="FAIT">
                      <input
                        type="radio"
                        id="ICS"
                        name="course"
                        value="F.A(IT)"
                        checked={selectedCourse === "F.A(IT)"}
                        onChange={handleCourseChange}
                      />
                      <span className="text-red-600 text-xl font-bold">
                        F.A(IT)
                      </span>
                    </label>
                  </div>
                </div>

                <p>
                  Applicant should fill this form carefully in his/her own
                  handwriting, get it countersigned by his/her father/guardian,
                  and attach attested copies of certificates (non-returnable in
                  any case), as evidence of the following particulars before
                  submitting to the college office.
                </p>

                <div className="flex py-2">
                  <div className="flex px-3">
                    <label
                      className="flex items-center space-x-2"
                      htmlFor="Regular"
                    >
                      <span className=" text-red-600 text-xl font-bold">
                        Regular
                      </span>
                      <input
                        type="radio"
                        id="Regular"
                        name="class"
                        value="Regular"
                        checked={admissionType === "Regular"}
                        onChange={handleAdmissionType}
                      />
                    </label>
                  </div>
                  <div className="flex px-3">
                    <label
                      className="flex items-center space-x-2"
                      htmlFor="Re-Admission"
                    >
                      <span className=" text-red-600 text-xl font-bold">
                        Re-Admission
                      </span>
                      <input
                        type="radio"
                        id="Re-Admission"
                        name="class"
                        value="Re-Admission"
                        checked={admissionType === "Re-Admission"}
                        onChange={handleAdmissionType}
                      />
                    </label>
                  </div>
                  <div className="flex px-3">
                    <label
                      className="flex items-center space-x-2"
                      htmlFor="OnlyCoaching"
                    >
                      <span className=" text-red-600 text-xl font-bold">
                        Only Coaching
                      </span>
                      <input
                        type="radio"
                        id="Only Coaching"
                        name="class"
                        value="Only Coaching"
                        checked={admissionType === "Only Coaching"}
                        onChange={handleAdmissionType}
                      />
                    </label>
                  </div>
                  <div className="flex px-3">
                    <label
                      className="flex items-center space-x-2"
                      htmlFor="SummerChamp"
                    >
                      <span className=" text-red-600 text-xl font-bold">
                        Summer Camp
                      </span>
                      <input
                        type="radio"
                        id="Summer Champ"
                        name="class"
                        value="Summer Champ"
                        checked={admissionType === "Summer Champ"}
                        onChange={handleAdmissionType}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-3">
              <label>
                Upload Image:
                <input
                  type="file"
                  className="input"
                  accept="image/*"
                  onChange={e => { setFile(e.target.files[0]) }}
                />
              </label>
             
            </div>
          </div>
          <div className=" py-6">
            <p className=" text-red-600 text-2xl font-bold">
              STUDENT'S PROFILE
            </p>
            <div>
              <table className="w-[100%]">
                <tr>
                  <td className="border-black border text-left px-8 ">
                    <div className="">
                      Name :{" "}
                      <input
                        type="text"
                        name="studentName"
                        id="studentName"
                        placeholder="Enter your Name"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        required
                      />{" "}
                    </div>
                  </td>
                  <td className="border-black border text-left px-8 flex">
                    <div className=" justify-center items-center ">
                      {" "}
                      <PiPhoneCallBold />{" "}
                    </div>
                    <div className="">
                      {" "}
                      <input
                        type="text"
                        name="studentphoneNumber"
                        id="studentphoneNumber"
                        placeholder="Enter your Phone Number"
                        pattern="^[0-9]{11}$"
                        value={studentphoneNumber}
                        onChange={(e) => setStudentPhoneNumber(e.target.value)}
                        title="Type CNIC Like 03300000000"
                        required
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  {/* <td className='border-black border text-left px-8'>C.N.I.C. / B-form No  <input type='number' pattern='^[0-9]{5}-[0-9]{7}-[0-9]{1}$'  title='Type CNIC Like 12345-1234567-1' required  />   </td> */}
                  <td className="border-black border text-left px-8">
                    C.N.I.C. / B-form No:
                    <input
                      className="px-2"
                      type="text"
                      pattern="^[0-9]{5}-[0-9]{7}-[0-9]{1}$"
                      title="Type CNIC Like 12345-1234567-1"
                      required
                      placeholder="(33100-0000000-0)"
                      id="studentCnic"
                      value={studentCnic}
                      onChange={(e) => setStudentCnic(e.target.value)}
                    />
                  </td>
                  <td className="border-black border text-left px-8 flex">
                    <div className=" justify-center items-center ">
                      {" "}
                      <FaWhatsapp />{" "}
                    </div>
                    <div className="">
                      {" "}
                      <input
                        className="px-2"
                        type="text"
                        name="studentWhatsappNumber"
                        id="studentWhatsappNumber"
                        placeholder="Enter your Phone Number"
                        pattern="^[0-9]{11}$"
                        required
                        value={studentWhatsappNumber}
                        onChange={(e) =>
                          setStudentWhatsappNumber(e.target.value)
                        }
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-black border text-left px-8">
                    <div className="">
                      Mark of Identification:{" "}
                      <input
                        className="px-2"
                        type="text"
                        name="markOfIdentification"
                        id="markOfIdentification"
                        placeholder="Mark of Identification"
                        required
                        value={markOfIdentification}
                        onChange={(e) =>
                          setMarkOfIdentification(e.target.value)
                        }
                      />{" "}
                    </div>
                  </td>
                  <td className="border-black border text-left px-8">
                    <div className="">
                      Date of Birth:
                      <input
                        className="px-2"
                        type="date"
                        name="dateOfBirth"
                        id="dateOfBirth"
                        placeholder="Enter your Date of Birth"
                        required
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                      />{" "}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div className=" py-3">
            <p className=" text-red-600 text-2xl font-bold">
              FATHER'S / GUARRIAN'S PROFILE
            </p>
            <div>
              <table className="w-[100%]">
                <tr>
                  <td className="border-black border text-left px-8 ">
                    <div className="">
                      Name :{" "}
                      <input
                        type="text"
                        name="fatherName"
                        id="fatherName"
                        placeholder="Enter your Father Name"
                        required
                        value={fatherName}
                        onChange={(e) => setFatherName(e.target.value)}
                      />{" "}
                    </div>
                  </td>
                  <td className="border-black border text-left px-8 flex">
                    <div className=" justify-center items-center ">
                      {" "}
                      <PiPhoneCallBold />{" "}
                    </div>
                    <div className="">
                      {" "}
                      <input
                        type="text"
                        name="fatherPhoneNumber"
                        id="fatherPhoneNumber"
                        placeholder="Enter your Phone Number"
                        required
                        pattern="^[0-9]{11}$"
                        value={fatherPhoneNumber}
                        onChange={(e) => setFatherPhoneNumber(e.target.value)}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  {/* <td className='border-black border text-left px-8'>C.N.I.C. / B-form No  <input type='number' pattern='^[0-9]{5}-[0-9]{7}-[0-9]{1}$'  title='Type CNIC Like 12345-1234567-1' required  />   </td> */}
                  <td className="border-black border text-left px-8">
                    C.N.I.C. / B-form No:
                    <input
                      type="text"
                      pattern="^[0-9]{5}-[0-9]{7}-[0-9]{1}$"
                      title="Type CNIC Like 12345-1234567-1"
                      required
                      placeholder="(33100-0000000-0)"
                      id="fatherCnic"
                      name="fatherCnic"
                      value={fatherCnic}
                      onChange={(e) => setFahterCnic(e.target.value)}
                    />
                  </td>
                  <td className="border-black border text-left px-8 flex">
                    <div className=" justify-center items-center ">
                      {" "}
                      <FaWhatsapp />{" "}
                    </div>
                    <div className="">
                      {" "}
                      <input
                        type="text"
                        name="fatherWhatsappNumber"
                        id="fatherWhatsappNumber"
                        placeholder="Enter your Phone Number"
                        required
                        pattern="^[0-9]{11}$"
                        value={fatherWhatsappNumber}
                        onChange={(e) =>
                          setFatherWhatsappNumber(e.target.value)
                        }
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-black border text-left px-8">
                    <div className="">
                      Occupation :{" "}
                      <input
                        type="text"
                        name="fatherOccupation"
                        id="fatherOccupation"
                        placeholder="Occupation"
                        required
                        value={fatherOccupation}
                        onChange={(e) => setFatherOccupation(e.target.value)}
                      />{" "}
                    </div>
                  </td>
                  <td className="border-black border text-left px-8">
                    <div className="">
                      Religion:
                      <input
                        type="text"
                        name="Religion"
                        id="Religion"
                        placeholder="Religion"
                        required
                        value={Religion}
                        onChange={(e) => setReligion(e.target.value)}
                      />{" "}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-black border text-left px-8">
                    Home Address:{" "}
                    <input
                      type="text"
                      name="homeAddress"
                      id="homeAddress"
                      placeholder="Enter your home address "
                      required
                      value={homeAddress}
                      onChange={(e) => setHomeAddress(e.target.value)}
                    />{" "}
                  </td>
                  <td className="border-black border text-left px-8">
                    Email :
                    <input
                      type="text"
                      name="studentEmail"
                      id="studentEmail"
                      placeholder="Enter your Email address "
                      required
                      value={studentEmail}
                      onChange={(e) => setStudentEmail(e.target.value)}
                    />
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div className=" py-6 w-full overflow-x-auto">
            <p className=" text-red-600 text-2xl font-bold">
              EDUCATIONAL PROFILE
            </p>
            <div>
              <table>
                <tr>
                  <th className="text-left border-black border px-2">
                    Qualification
                  </th>
                  <th className="text-left border-black border px-2">Year</th>
                  <th className="text-left border-black border px-2">
                    Board Roll #
                  </th>
                  <th className="text-left border-black border px-2">
                    Obtained Marks
                  </th>
                  <th className="text-left border-black border px-2">
                    T.Marks
                  </th>
                  <th className="text-left border-black border px-2">
                    Institute / University
                  </th>
                </tr>
                <tr>
                  <td className="border-black border text-left font-bold ">
                    Matriculation
                  </td>
                  <td className="border-black border text-left ">
                    {" "}
                    <input
                      type="text"
                      name="matriculationYear"
                      id="matriculationYear"
                      value={matriculationYear}
                      onChange={(e) => setMatriculationYear(e.target.value)}
                      required
                    />{" "}
                  </td>
                  <td className="border-black border text-left ">
                    <input
                      type="text"
                      name="boardRollNo"
                      id="boardRollNo"
                      value={boardRollNo}
                      onChange={(e) => setBoardRollNo(e.target.value)}
                      required
                    />
                  </td>
                  <td className="border-black border text-left ">
                    <input
                      type="text"
                      name="obtainedMarks"
                      id="obtainedMarks"
                      value={obtainedMarks}
                      onChange={(e) => setObtainedMarks(e.target.value)}
                      required
                    />
                  </td>
                  <td className="border-black border text-left ">
                    <input
                      type="text"
                      name="totalMarks"
                      id="totalMarks"
                      value={totalMarks}
                      onChange={(e) => setTotalMarks(e.target.value)}
                      required
                    />
                  </td>
                  <td className="border-black border text-left ">
                    <input
                      type="text"
                      name="insitute"
                      id="insitute"
                      value={insitute}
                      onChange={(e) => setinsitute(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border-black border text-left font-bold ">
                    Others
                  </td>
                  <td className="border-black border text-left ">
                    <input
                      type="text"
                      name="otherYear"
                      id="otherYear"
                      value={otherYear}
                      onChange={(e) => setOtherYear(e.target.value)}
                      
                    />
                  </td>
                  <td className="border-black border text-left ">
                    <input
                      type="text"
                      name="otherRollNo"
                      id="otherRollNo"
                      value={otherRollNo}
                      onChange={(e) => setOtherRollNo(e.target.value)}
                     
                    />
                  </td>
                  <td className="border-black border text-left ">
                    <input
                      type="text"
                      name="OtherObtainedMarks"
                      id="OtherObtainedMarks"
                      value={OtherObtainedMarks}
                      onChange={(e) => setOtherObtainedMarks(e.target.value)}
                      
                    />
                  </td>
                  <td className="border-black border text-left ">
                    <input
                      type="text"
                      name="othetTotalMarks"
                      id="othetTotalMarks"
                      value={othetTotalMarks}
                      onChange={(e) => setOtherTotalMarks(e.target.value)}
                      
                    />
                  </td>
                  <td className="border-black border text-left ">
                    <input
                      type="text"
                      name="otherInsitute"
                      id="otherInsitute"
                      value={otherInsitute}
                      onChange={(e) => setOthertinsitute(e.target.value)}
                      
                    />
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <p className=" text-red-600 text-2xl font-bold py-3">
            DOCUMENTS REQUIRED
          </p>

          <div className="border-black  border-2 p-2 flex justify-between">
            <div>
              <ol>
                <li className="text-l font-bold">
                  1- Three Passport Size Pictures with Blue Back Ground
                </li>
                <li className="text-l font-bold">
                  3- Matric Roll No Slip Coppy and Result Card Copy
                </li>
                <li className="text-l font-bold">
                  4- College First Installement and Registration Fee
                </li>
              </ol>
            </div>
            <div>
              <ol>
                <li className="text-l font-bold">
                  2- Students CNIC OR B-Form Photocopy
                </li>
                <li className="text-l font-bold">4- Father CNIC Copy</li>
                <li className="text-l font-bold">
                  5- Orignal NOC (in case of Matric pass from other Board)
                </li>
              </ol>
            </div>
          </div>

          <p className=" text-red-600 text-2xl py-4 font-bold">
            DOCUMENTS REQUIRED
          </p>

          <div className="border-black  border-2 p-2 ">
            <div>
              <ol>
                <li className="text-l font-bold">
                  1- All the students are obligatory to obey the college rules &
                  regulations.
                </li>
                <li className="text-l font-bold">
                  2- Students are required to attend 85% classes during the
                  session.{" "}
                </li>
                <li className="text-l font-bold">
                  3- Students with more than days absent in a month without
                  propr application would be struck off. To reinstate Rs:2000/-
                  will be charged.{" "}
                </li>
                <li className="text-l font-bold">
                  4- Fee once paid is non-refundable and non-transferable.{" "}
                </li>
                <li className="text-l font-bold">
                  5- Collage dues would be payable according to the plan
                  announced by the management.{" "}
                </li>
                <li className="text-l font-bold">
                  6- A fine of Rs. 500/-will be sharged per day for late fee and
                  Rs:200/- per day for any absent from the class.{" "}
                </li>
                <li className="text-l font-bold">
                  7- Students are advised to wear proper uniform.Casual Footwear
                  is not allowed{" "}
                </li>
                <li className="text-l font-bold">
                  8- Smoking is strickly prohibited in college premises.{" "}
                </li>
                <li className="text-l font-bold">
                  9- College Management reserves the right to make any
                  amendments in policy without any notice and expel any student
                  without assigning any reason if deemed fit.{" "}
                </li>
                <li className="text-l font-bold">
                  10- Application form would be received only if completed in
                  all respect.{" "}
                </li>
                <li className="text-l font-bold">
                  11- No discount or concession will be allowed after signing
                  off this admission form.{" "}
                </li>
                <li className="text-l font-bold">
                  12- No admisssion form will be accepted without father /
                  Guardaian and Applicant signature{" "}
                </li>
              </ol>
            </div>
          </div>

          <p className=" text-red-600 text-2xl py-4 font-bold">DECLARATION</p>

          <div className="border-black  border-2 p-2 ">
            <div>
              <ol>
                <li className="text-l font-bold">
                  I solemnly declare, confirm and certify that:.
                </li>
                <li className="text-l font-bold">
                  1- I have provided complete and accurate information of all
                  the particulars in the application.{" "}
                </li>
                <li className="text-l font-bold">
                  2- I will obey all the rules and regulations of the college.{" "}
                </li>
                <li className="text-l font-bold">
                  3- I accept that college authorities will not be held
                  responsible regarding any Board / Instition matter.{" "}
                </li>
                <li className="text-l font-bold">
                  4- I will be liable to any penalty including rustication or
                  expulsion is case of any violation of the college rulees &
                  regulations on my part .{" "}
                </li>
                <li className="text-l font-bold">
                  5- I will have no objection if I am detained either before or
                  at the time of Board / Institution Examination due to any
                  Irregularity.{" "}
                </li>
              </ol>
            </div>
          </div>

          <div className="flex p-5 justify-center items-center">
            <button
              className="bg-red-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      </>}
    </>
  );
}
