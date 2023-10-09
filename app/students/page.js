

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
  const [loading, setLoading] = useState(false);

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
      setLoading(true)
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


