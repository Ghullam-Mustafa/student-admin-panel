// // "use client"

// // import { useState, useEffect } from 'react';
// // import { addDoc, collection, getDocs, query, where, deleteDoc, doc, updateDoc, setIndexConfiguration, } from 'firebase/firestore';
// // import { db } from '@/config/firebase';
// // import { FaEdit } from "react-icons/fa"
// // import { FaTrash } from "react-icons/fa"


// // export default function page() {
// //   const [student, setStudent] = useState();
// //   const [name, setName] = useState("");
// //   const [studentId, setStudentId] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [phoneNumber, setPhoneNumber] = useState("");
// //   const [selectedItem, setSelectedItem] = useState(null); 



// //   const handleDelete = async (id) => {
// //     console.log(`Deleting item with ID ${id}`);
// //     await deleteDoc(doc(db, "students", id));
// //   };

// //   const openModal = (item) => {
// //     setSelectedItem(item);
// //     console.log("itemmmmmmmmmm",item);
// //     setStudent(item.name || "");
// //     setStudentId(item.studentId || "");
// //     setEmail(item.email || "");
// //     setPhoneNumber(item.phoneNumber || "");
// //   };

// //   const handleUpdate = async (e) => {
// //     // e.preventDefault();


// //     if (!selectedItem) {
// //       return;
// //     }

// //     try {
// //       const docRef = doc(db, "students", selectedItem.id);

// //       await updateDoc(docRef, {
// //         name,
// //         studentId,
// //         email,
// //         phoneNumber,
// //       });

// //       // Close the modal and clear selected item
// //       closeModal();
// //       setSelectedItem(null);

// //       // Fetch updated data
// //       fetchData();

// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const fetchDocs = async () => {
// //     try {
// //       const collectionName = collection(db, "students")
// //       const docs = await getDocs(collectionName)
// //       const todoData = []
// //       docs.forEach((doc) => {
// //         todoData.push({
// //           id: doc.id,
// //           ...doc.data()
// //         }
// //         )
// //       })
// //       setStudent(todoData)
// //       console.log(todoData);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   }
// //   useEffect(() => {
// //     fetchDocs()
// //   }, [])

// //   const onSubmitHanlder = async (e) => {
// //     e.preventDefault()
// //     let students = {
// //       name,
// //       studentId,
// //       email,
// //       phoneNumber
// //     }

// //     try {
// //       const collectionName = collection(db, "students")
// //       await addDoc(collectionName, students)
// //       console.log("Code is working")
// //     } catch (e) {
// //       console.error("This code has error ", e);
// //     }
// //   }



// //   return (
// //     <>
// //       <div className=" grid place-content-center py-10">
// //         <form className="w-full max-w-md text-center" onClick={onSubmitHanlder}>
// //           <div className="md:flex md:items-center mb-6">
// //             <div className="md:w-1/3">
// //               <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
// //                 Name:
// //               </label>
// //             </div>
// //             <div className="md:w-2/3">
// //               <input
// //                 className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
// //                 id="name"
// //                 type="text"
// //                 name="name"

// //                 onChange={(e) => setName(e.target.value)}
// //               />
// //             </div>
// //           </div>
// //           <div className="md:flex md:items-center mb-6">
// //             <div className="md:w-1/3">
// //               <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="studentId">
// //                 Student ID:
// //               </label>
// //             </div>
// //             <div className="md:w-2/3">
// //               <input
// //                 className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
// //                 id="studentId"
// //                 type="text"
// //                 name="studentId"

// //                 onChange={(e) => setStudentId(e.target.value)}
// //               />
// //             </div>
// //           </div>
// //           <div className="md:flex md:items-center mb-6">
// //             <div className="md:w-1/3">
// //               <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
// //                 Email:
// //               </label>
// //             </div>
// //             <div className="md:w-2/3">
// //               <input
// //                 className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
// //                 id="email"
// //                 type="text"
// //                 name="email"

// //                 onChange={(e) => setEmail(e.target.value)}
// //               />
// //             </div>
// //           </div>
// //           <div className="md:flex md:items-center mb-6">
// //             <div className="md:w-1/3">
// //               <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="phoneNumber">
// //                 Phone Number:
// //               </label>
// //             </div>
// //             <div className="md:w-2/3">
// //               <input
// //                 className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
// //                 id="phoneNumber"
// //                 type="text"
// //                 name="phoneNumber"

// //                 onChange={(e) => setPhoneNumber(e.target.value)}
// //               />
// //             </div>
// //           </div>
// //           <div className="md:flex md:items-center">
// //             <div className="md:w-1/3"></div>
// //             <div className="md:w-2/3">
// //               <button
// //                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //                 type="submit"
// //               >
// //                 Submit
// //               </button>
// //             </div>
// //           </div>
// //         </form>
// //       </div>


// //       <div className="overflow-x-auto">
// //         <table className="min-w-full">
// //           <thead>
// //             <tr>
// //               <th className="px-6 py-3 bg-gray-200 text-gray-600">Name</th>
// //               <th className="px-6 py-3 bg-gray-200 text-gray-600">Student ID</th>
// //               <th className="px-6 py-3 bg-gray-200 text-gray-600">Email</th>
// //               <th className="px-6 py-3 bg-gray-200 text-gray-600">Phone Number</th>
// //               <th className="px-6 py-3 bg-gray-200 text-gray-600">Update</th>
// //               <th className="px-6 py-3 bg-gray-200 text-gray-600">Delete</th>
// //             </tr>
// //           </thead>
// //           <tbody>

// //             {student?.map((studentItems, i) => (
// //               <tr key={i}>
// //                 <td className="px-6 py-4">{studentItems.name}</td>
// //                 <td className="px-6 py-4">{studentItems.studentId}</td>
// //                 <td className="px-6 py-4">{studentItems.email}</td>
// //                 <td className="px-6 py-4">{studentItems.phoneNumber}</td>
// //                 <td className="px-6 py-4">
// //                   <button
// //                     className="text-blue-500 hover:text-blue-700 mr-2"
// //                     onClick={() => handleUpdate(studentItems.id)}
// //                   >
// //                     <FaEdit />
// //                   </button>
// //                 </td>
// //                 <td className="px-6 py-4">
// //                   <button
// //                     className="text-red-500 hover:text-red-700"
// //                     onClick={() => handleDelete(studentItems.id)}
// //                   >
// //                     <FaTrash />
// //                   </button>
// //                 </td>

// //               </tr>
// //             ))}
// //             {/* <tr className='py-2' >
// //               <td className="px-6 py-4">mustafa</td>
// //               <td className="px-6 py-4">1518341</td>
// //               <td className="px-6 py-4">email</td>
// //               <td className="px-6 py-4">03317119123</td>
// //               <td className="px-6 py-4">
// //                 <button className="bg-blue-500 text-white px-4 rounded-full py-2">Update</button>
// //               </td>
// //               <td className="px-6 py-4">
// //                 <button className="bg-red-500 text-white px-4 rounded-full py-2">Delete</button>
// //               </td>
// //             </tr> */}
// //           </tbody>
// //         </table>
// //       </div>
// //     </>
// //   )
// // }


// "use client"

// import { useState, useEffect } from 'react';
// import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
// import { db } from '@/config/firebase';
// import { FaEdit } from "react-icons/fa";
// import { FaTrash } from "react-icons/fa";

// export default function Page() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [student, setStudent] = useState([]);
//   const [name, setName] = useState("");
//   const [studentId, setStudentId] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleDelete = async (id) => {
//     console.log(`Deleting item with ID ${id}`);
//     await deleteDoc(doc(db, "students", id));
//     fetchDocs(); // Refresh the list after deletion
//   };

//   const openModal = (item) => {
//     setSelectedItem(item);
//     setName(item.name || "");
//     setStudentId(item.studentId || "");
//     setEmail(item.email || "");
//     setPhoneNumber(item.phoneNumber || "");
//   };

//   const handleUpdate = async () => {
//     try {
//       if (!selectedItem) {
//         return;
//       }

//       const docRef = doc(db, "students", selectedItem.id);

//       await updateDoc(docRef, {
//         name,
//         studentId,
//         email,
//         phoneNumber,
//       });

//       // Close the modal and clear selected item
//       setSelectedItem(null);
//       fetchDocs(); // Fetch updated data
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const fetchDocs = async () => {
//     try {
//       const collectionName = collection(db, "students");
//       const docs = await getDocs(collectionName);
//       const studentData = [];
//       docs.forEach((doc) => {
//         studentData.push({
//           id: doc.id,
//           ...doc.data()
//         });
//       });
//       setStudent(studentData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchDocs();
//   }, []);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     const students = {
//       name,
//       studentId,
//       email,
//       phoneNumber
//     };

//     try {
//       const collectionName = collection(db, "students");
//       await addDoc(collectionName, students);
//       console.log("Code is working");
//       fetchDocs(); // Refresh the list after adding a new student
//     } catch (e) {
//       console.error("This code has an error ", e);
//     }
//   };

//   const closeModal = () => {
//     setSelectedItem(null);
//   };

//   return (
//     <>
//       <div className=" grid place-content-center py-10">
//         <form className="w-full max-w-md text-center" onClick={onSubmitHandler}>
//           <div className="md:flex md:items-center mb-6">
//             <div className="md:w-1/3">
//               <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
//                 Name:
//               </label>
//             </div>
//             <div className="md:w-2/3">
//               <input
//                 className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
//                 id="name"
//                 type="text"
//                 name="name"

//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className="md:flex md:items-center mb-6">
//             <div className="md:w-1/3">
//               <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="studentId">
//                 Student ID:
//               </label>
//             </div>
//             <div className="md:w-2/3">
//               <input
//                 className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
//                 id="studentId"
//                 type="text"
//                 name="studentId"
//                 onChange={(e) => setStudentId(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className="md:flex md:items-center mb-6">
//             <div className="md:w-1/3">
//               <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
//                 Email:
//               </label>
//             </div>
//             <div className="md:w-2/3">
//               <input
//                 className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
//                 id="email"
//                 type="text"
//                 name="email"

//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className="md:flex md:items-center mb-6">
//             <div className="md:w-1/3">
//               <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="phoneNumber">
//                 Phone Number:
//               </label>
//             </div>
//             <div className="md:w-2/3">
//               <input
//                 className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
//                 id="phoneNumber"
//                 type="text"
//                 name="phoneNumber"
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className="md:flex md:items-center">
//             <div className="md:w-1/3"></div>
//             <div className="md:w-2/3">
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="submit"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>


//       <div className="overflow-x-auto">
//         <table className="min-w-full">
//           <thead>
//             <tr>
//               <th className="px-6 py-3 bg-gray-200 text-gray-600">Name</th>
//               <th className="px-6 py-3 bg-gray-200 text-gray-600">Student ID</th>
//               <th className="px-6 py-3 bg-gray-200 text-gray-600">Email</th>
//               <th className="px-6 py-3 bg-gray-200 text-gray-600">Phone Number</th>
//               <th className="px-6 py-3 bg-gray-200 text-gray-600">Update</th>
//               <th className="px-6 py-3 bg-gray-200 text-gray-600">Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {student?.map((studentItem, i) => (
//               <tr key={i}>
//                 <td className="px-6 py-4">{studentItem.name}</td>
//                 <td className="px-6 py-4">{studentItem.studentId}</td>
//                 <td className="px-6 py-4">{studentItem.email}</td>
//                 <td className="px-6 py-4">{studentItem.phoneNumber}</td>
//                 <td className="px-6 py-4">
//                   <button
//                     className="text-blue-500 hover:text-blue-700 mr-2"
//                     onClick={() => openModal(studentItem)}
//                   >
//                     <FaEdit />
//                   </button>
//                 </td>
//                 <td className="px-6 py-4">
//                   <button
//                     className="text-red-500 hover:text-red-700"
//                     onClick={() => handleDelete(studentItem.id)}
//                   >
//                     <FaTrash />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {isModalOpen && (
//         <div
//           className="fixed text-center inset-0 flex items-center justify-center modal-overlay"

//         >
//           <div className="fixed inset-0 bg-black opacity-50"></div>
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="bg-white p-5 rounded shadow-md w-[90vh]">
//               <div className="flex justify-end">
//                 <button
//                   onClick={closeModal}
//                   className="text-gray-600 hover:text-gray-800 focus:outline-none"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>
//               </div>
//               <h1 className="text-2xl font-semibold mb-6">
//                 Create a New Entry
//               </h1>
//               <form onSubmit={handleUpdate} className="mx-auto">
//                 {/* <div className="mb-6">
//                   <label
//                     htmlFor="title"
//                     className="block text-sm font-medium text-gray-600"
//                   >
//                     Title
//                   </label>
//                   <input
//                     type="text"
//                     id="title"
//                     name="title"
//                     value={title}
//                     className="mt-1 p-2 w-full lg:w-3/4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                     placeholder="Enter title"
//                     onChange={(e) => settitle(e.target.value)}
//                   />
//                 </div> */}

//                 <div className="md:flex md:items-center mb-6">
//                   <div className="md:w-1/3">
//                     <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
//                       Name:
//                     </label>
//                   </div>
//                   <div className="md:w-2/3">
//                     <input
//                       className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
//                       id="name"
//                       type="text"
//                       name="name"

//                       onChange={(e) => setName(e.target.value)}
//                     />
//                   </div>
//                 </div>


//                 {/* <div className="mb-6">
//                   <label
//                     htmlFor="location"
//                     className="block text-sm font-medium text-gray-600"
//                   >
//                     Location
//                   </label>
//                   <select
//                     id="location"
//                     name="location"
//                     value={location}
//                     className="mt-1 p-2 w-full lg:w-3/4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                     onChange={(e) => setlocation(e.target.value)}
//                   >
//                     <option value="" disabled>
//                       Select location
//                     </option>
//                     {countries.map((country, index) => (
//                       <option key={index} value={country}>
//                         {country}
//                       </option>
//                     ))}
//                   </select>
//                 </div> */}

//                 <div className="md:flex md:items-center mb-6">
//                   <div className="md:w-1/3">
//                     <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
//                       Name:
//                     </label>
//                   </div>
//                   <div className="md:w-2/3">
//                     <input
//                       className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
//                       id="name"
//                       type="text"
//                       name="name"

//                       onChange={(e) => setStudentId(e.target.value)}
//                     />
//                   </div>
//                 </div>


//                 {/* <div className="mb-6">
//                   <label
//                     htmlFor="description"
//                     className="block text-sm font-medium text-gray-600"
//                   >
//                     Description
//                   </label>
//                   <textarea
//                     id="description"
//                     name="description"
//                     rows="4"
//                     value={description}
//                     className="mt-1 p-2 w-full lg:w-3/4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                     placeholder="Enter description"
//                     onChange={(e) => setdescription(e.target.value)}
//                   ></textarea>
//                 </div> */}

//                 <div className="md:flex md:items-center mb-6">
//                   <div className="md:w-1/3">
//                     <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
//                       Name:
//                     </label>
//                   </div>
//                   <div className="md:w-2/3">
//                     <input
//                       className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
//                       id="name"
//                       type="text"
//                       name="name"

//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div className="md:flex md:items-center mb-6">
//                   <div className="md:w-1/3">
//                     <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
//                       Name:
//                     </label>
//                   </div>
//                   <div className="md:w-2/3">
//                     <input
//                       className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
//                       id="name"
//                       type="text"
//                       name="name"

//                       onChange={(e) => setPhoneNumber(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div className="flex justify-center">
//                   <button
//                     type="submit"
//                     className="bg-purple-500 text-white py-3 w-[75%] px-6 rounded-lg hover:bg-purple-600 focus:outline-none focus:bg-blue-600"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
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
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDelete = async (id) => {
    console.log(`Deleting item with ID ${id}`);
    await deleteDoc(doc(db, "students", id));
    fetchDocs(); // Refresh the list after deletion
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setName(item.name || "");
    setStudentId(item.studentId || "");
    setEmail(item.email || "");
    setPhoneNumber(item.phoneNumber || "");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      if (!selectedItem) {
        return;
      }

      const docRef = doc(db, "students", selectedItem.id);

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
      const collectionName = collection(db, "students");
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
      email,
      phoneNumber
    };

    try {
      const collectionName = collection(db, "students");
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
          <div className="md:flex md:items-center mb-6">
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
          </div>
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
              <th className="px-6 py-3 bg-gray-200 text-gray-600">Email</th>
              <th className="px-6 py-3 bg-gray-200 text-gray-600">Phone Number</th>
              <th className="px-6 py-3 bg-gray-200 text-gray-600">Update</th>
              <th className="px-6 py-3 bg-gray-200 text-gray-600">Delete</th>
            </tr>
          </thead>
          <tbody>
            {student?.map((studentItem, i) => (
              <tr key={i}>
                <td className="px-6 py-4">{studentItem.name}</td>
                <td className="px-6 py-4">{studentItem.studentId}</td>
                <td className="px-6 py-4">{studentItem.email}</td>
                <td className="px-6 py-4">{studentItem.phoneNumber}</td>
                <td className="px-6 py-4">
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
                </td>
              </tr>
            ))}
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
                <div className="md:flex md:items-center mb-6">
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
                </div>
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


