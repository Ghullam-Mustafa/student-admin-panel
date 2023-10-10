// 'use client'
// import React, { useState, useEffect } from 'react';
// import {
//   collection,
//   addDoc,
//   query,
//   where,
//   getDocs,
// } from 'firebase/firestore';
// import { db } from '@/config/firebase';

// export default function Attendance() {
//   const [selectedCourse, setSelectedCourse] = useState('');
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const attendanceCollection = collection(db, 'students');
//       // const q = query(attendanceCollection, where('selectedCourse', '==', 'Web and Mobile developnment'));
//       const docs = await getDocs(attendanceCollection);
//       const studentData = [];
//       docs.forEach((doc) => {
//         studentData.push({
//           id: doc.id,
//           ...doc.data(),
//           isPresent: null, // Initialize isPresent to null
//         });
//       });

//       setStudents(studentData);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddAttendance = async (studentid, isPresent, course, name) => {
//     try {
//       const attendanceCollection = collection(db, 'attendance');
//       const attendanceData = {
//         studentid,
//         name,
//         isPresent,
//         course,
//         date: new Date().toISOString(),
//       };
//       await addDoc(attendanceCollection, attendanceData);
//       fetchData();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="p-5">
//       <h1 className="text-3xl text-orange-900 font-bold mb-5">Attendance Management</h1>
//       <div className="mb-5">
//         <label htmlFor="course" className="block text-sm font-medium text-gray-600">
//           Select Course
//         </label>
//         <select
//           id="course"
//           name="course"
//           value={selectedCourse}
//           onChange={(e) => setSelectedCourse(e.target.value)}
//           className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//         >
//           <option value="">Select a course</option>
//           <option value="Web and Mobile Development">Web and Mobile Development</option>
//           <option value="Graphics Designing">Graphics Designing</option>
//           <option value="CCNP">CCNP</option>
//         </select>
//       </div>
//       <table className="w-full table-auto">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="px-4 py-2">Name</th>
//             <th className="px-4 py-2">Course</th>
//             <th className="px-4 py-2">Student Id</th>
//             <th className="px-4 py-2">Attendance</th>
//           </tr>
//         </thead>
//         <tbody className="text-gray-700">
//           {loading ? (
//             <tr className="text-center">
//               <td colSpan="4" className="text-xl text-orange-500 font-bold mt-10">
//                 Loading...
//               </td>
//             </tr>
//           ) : (
//             students?.map((item, i) => (
//               <tr key={i} className="hover:bg-gray-100 hover:text-orange-600 mt-3 text-center border-b border-orange-200 text-white">
//                 <td className="px-4 py-2">{item.name}</td>
//                 <td className="px-4 py-2">{item.selectedCourse}</td>
//                 <td className="px-4 py-2">{item.studentid}</td>
//                 <td className="px-4 py-2">
//                   <div className={`flex items-center ${item.isPresent === true ? 'selected' : 'unselected'}`}>
//                     <input
//                       type="radio"
//                       id={`present_${item.id}`}
//                       name={`attendance_${item.id}`}
//                       value="present"
//                       checked={item.isPresent === true}
//                       onChange={() => handleAddAttendance(item.studentid, true, item.selectedCourse, item.name)}
//                     />
//                     <label htmlFor={`present_${item.id}`} className="ml-1">Present</label>
//                   </div>
//                   <div className={`flex items-center mt-1 ${item.isPresent === false ? 'selected' : 'unselected'}`}>
//                     <input
//                       type="radio"
//                       id={`absent_${item.studentid}`}
//                       name={`attendance_${item.studentid}`}
//                       value="absent"
//                       checked={item.isPresent === false}
//                       onChange={() => handleAddAttendance(item.studentid, false, item.selectedCourse, item.name)}
//                     />
//                     <label htmlFor={`absent_${item.id}`} className="ml-1">Absent</label>
//                   </div>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>

//     </div>
//   );
// }







"use client";

import { useState, useEffect } from 'react';
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function Page() {
  const [student, setStudent] = useState([]);
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);

  // const handleDelete = async (id) => {
  //   console.log(`Deleting item with ID ${id}`);
  //   await deleteDoc(doc(db, "attendence", id));
  //   fetchDocs(); // Refresh the list after deletion
  // };

  // const openModal = (item) => {
  //   setSelectedItem(item);
  //   setName(item.name || "");
  //   setStudentId(item.studentId || "");
  //   setEmail(item.email || "");
  //   setPhoneNumber(item.phoneNumber || "");
  // };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      if (!selectedItem) {
        return;
      }

      const docRef = doc(db, "attendence", selectedItem.id);

      await updateDoc(docRef, {
        name,
        studentId,
        email,
        phoneNumber,
      });

      closeModal(); // Close the modal and clear selected item
      fetchDocs(); // Fetch updated data
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDocs = async () => {
    try {
      setLoading(true)
      const collectionName = collection(db, "attendence");
      const docs = await getDocs(collectionName);
      const studentData = [];
      docs.forEach((doc) => {
        studentData.push({
          id: doc.id,
          ...doc.data()
        });
      });
      setStudent(studentData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const students = {
      name,
      studentId,
     
    };

    try {
      const collectionName = collection(db, "attendence");
      await addDoc(collectionName, students);
      console.log("Code is working");
      fetchDocs(); // Refresh the list after adding a new student
    } catch (e) {
      console.error("This code has an error ", e);
    }
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className="grid place-content-center py-10">
        <form className="w-full max-w-md text-center" onSubmit={onSubmitHandler}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                Name:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="studentId">
                Student ID:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                id="studentId"
                type="text"
                name="studentId"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
              />
            </div>
          </div>
          {/* <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                Email:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                id="email"
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="phoneNumber">
                Phone Number:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                id="phoneNumber"
                type="text"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div> */}
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-200 text-gray-600">Name</th>
              <th className="px-6 py-3 bg-gray-200 text-gray-600">Student ID</th>
              {/* <th className="px-6 py-3 bg-gray-200 text-gray-600">Email</th>
              <th className="px-6 py-3 bg-gray-200 text-gray-600">Phone Number</th>
              <th className="px-6 py-3 bg-gray-200 text-gray-600">Update</th>
              <th className="px-6 py-3 bg-gray-200 text-gray-600">Delete</th> */}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr className="text-center">
                <td colSpan="4" className="text-xl text-orange-900 font-bold mt-10">
                  Loading...
                </td>
              </tr>
            ) : (student?.map((studentItem, i) => (
              <tr key={i} className="hover:bg-gray-800 hover:text-[#7ecdf8] mt-3 text-white text-center border-b border-orange-200">
                <td className="px-6 py-4">{studentItem.name}</td>
                <td className="px-6 py-4">{studentItem.studentId}</td>
                {/* <td className="px-6 py-4">{studentItem.email}</td>
                <td className="px-6 py-4">{studentItem.phoneNumber}</td> */}
                {/* <td className="px-6 py-4">
                  <button
                    className="text-blue-500 hover:text-blue-700 mr-2"
                    onClick={() => openModal(studentItem)}
                  >
                    <FaEdit />
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(studentItem.id)}
                  >
                    <FaTrash />
                  </button>
                </td> */}
              </tr>
            )))}
          </tbody>
        </table>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center modal-overlay">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-5 rounded shadow-md w-[90vh]">
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <h1 className="text-2xl font-semibold mb-6">
                Update Entry
              </h1>
              <form onSubmit={handleUpdate}>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                      Name:
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                      id="name"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="studentId">
                      Student ID:
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                      id="studentId"
                      type="text"
                      name="studentId"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                    />
                  </div>
                </div>
                {/* <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                      Email:
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                      id="email"
                      type="text"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div> */}
                {/* <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="phoneNumber">
                      Phone Number:
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                      id="phoneNumber"
                      type="text"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div> */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


