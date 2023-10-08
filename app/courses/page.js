
"use client";


import { useState, useEffect } from 'react';
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function Page() {
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState("");
    const [courseCode, setCourseCode] = useState("");
    const [description, setDescription] = useState("");
  
    const [selectedItem, setSelectedItem] = useState(null);

    const handleDelete = async (id) => {
        console.log(`Deleting item with ID ${id}`);
        await deleteDoc(doc(db, "courses", id)); // Delete from the "courses" collection
        fetchDocs(); // Refresh the list after deletion
    };

    const openModal = (item) => {
        setSelectedItem(item);
        setCourse(item.course || ""); // Set course
        setCourseCode(item.courseCode || ""); // Set courseCode
        setDescription(item.description || ""); // Set description
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            if (!selectedItem) {
                return;
            }

            const docRef = doc(db, "courses", selectedItem.id); // Update data in "courses" collection

            await updateDoc(docRef, {
               course, // Update course
               courseCode, // Update courseCode
               description, // Update description
            });

            closeModal(); // Close the modal and clear the selected item
            fetchDocs(); // Fetch updated data
        } catch (error) {
            console.error(error);
        }
    };

    const fetchDocs = async () => {
        try {
            const collectionName = collection(db, "courses");
            const docs = await getDocs(collectionName);
            const courseData = [];
            docs.forEach((doc) => {
                courseData.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            setCourses(courseData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchDocs();
    }, []);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const newCourse = {
           course,
           courseCode,
           description
        };

        try {
            const collectionName = collection(db, "courses");
            await addDoc(collectionName, newCourse);
            console.log("Code is working");
            fetchDocs(); // Refresh the list after adding a new course
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
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="course">
                                Course:
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                id="course"
                                type="text"
                                name="course"
                                value={course}
                                onChange={(e) => setCourse(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="courseCode">
                                Course Code:
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                id="courseCode"
                                type="text"
                                name="courseCode"
                                value={courseCode}
                                onChange={(e) => setCourseCode(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="description">
                                Description:
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                id="description"
                                type="text"
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
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
                {/* <button  onClick={() => openModal()}>add me</button> */}
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 bg-gray-200 text-gray-600">Course</th>
                            <th className="px-6 py-3 bg-gray-200 text-gray-600">Course Code</th>
                            <th className="px-6 py-3 bg-gray-200 text-gray-600">Description</th>
                            <th className="px-6 py-3 bg-gray-200 text-gray-600">Update</th>
                            <th className="px-6 py-3 bg-gray-200 text-gray-600">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((courseItem, i) => (
                            <tr key={i}>
                                <td className="px-6 py-4">{courseItem.course}</td>
                                <td className="px-6 py-4">{courseItem.courseCode}</td>
                                <td className="px-6 py-4">{courseItem.description}</td>
                                <td className="px-6 py-4">
                                    <button
                                        className="text-blue-500 hover:text-blue-700 mr-2"
                                        onClick={() => openModal(courseItem)}
                                    >
                                        <FaEdit />
                                    </button>
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        className="text-red-500 hover:text-red-700"
                                        onClick={() => handleDelete(courseItem.id)}
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
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="course">
                                            Course
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input
                                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                            id="course"
                                            type="text"
                                            name="course"
                                            value={course}
                                            onChange={(e) => setCourse(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="courseCode">
                                            Course Code:
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input
                                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                            id="courseCode"
                                            type="text"
                                            name="courseCode"
                                            value={courseCode}
                                            onChange={(e) => setCourseCode(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="description">
                                            Description:
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input
                                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                            id="description"
                                            type="text"
                                            name="description"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
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


