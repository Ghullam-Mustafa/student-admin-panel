"use client"
import React, { useEffect , useState} from 'react'

export default function page() {


    const [course, setCourse] = useState("");
    const [courseCode, setCourseCode] = useState("");
    const [description, setDescription] = useState("");

    
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const students = {
        course,courseCode,description
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
  return (
    <>
        <form className="max-w-md mx-auto" onSubmit={onSubmitHandler}>
      <div className="mb-4">
        <label htmlFor="courseName" className="block text-gray-600 font-semibold">
          Course Name:
        </label>
        <input
          type="text"
          id="courseName"
          name="courseName"
       
          onChange={(e)=> setCourse(e.target.value)}
          className="w-full border rounded-lg py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="courseCode" className="block text-gray-600 font-semibold">
          Course Code:
        </label>
        <input
          type="text"
          id="courseCode"
          name="courseCode"
       
          onChange={(e)=> setCourseCode(e.target.value)}
          className="w-full border rounded-lg py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-600 font-semibold">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
     
          onChange={(e)=> setDescription(e.target.value)}
          className="w-full border rounded-lg py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300"
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Submit
      </button>
    </form>
    </>
  )
}
