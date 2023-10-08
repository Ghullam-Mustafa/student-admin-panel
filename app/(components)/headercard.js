"use client"
import { useState, useEffect } from 'react';
import { GiBookshelf } from "react-icons/gi"
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/config/firebase';
import Image from 'next/image';
import { HiUserGroup } from 'react-icons/hi'
import { FcOvertime } from 'react-icons/fc'
import { ImBooks } from 'react-icons/im'



export default function Headercard() {
  const [loading, setLoading] = useState(false);
  const [student, setstudent] = useState([]);
  const [courses, setcourses] = useState([]);
  const [atendence, setatendence] = useState([]);



  const fetchData = async () => {
    try {
      setLoading(true)
      const collections = collection(db, "students");
      const docs = await getDocs(collections);
      const studentdata = [];
      docs.forEach((doc) => {
        studentdata.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setstudent(studentdata);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };




  const fetchcourses = async () => {
    try {
      // setLoading(true);
      const collections = collection(db, "courses");
      const docs = await getDocs(collections);
      const studentdata = [];
      docs.forEach((doc) => {
        studentdata.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setcourses(studentdata);
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false); // Set loading to false after fetching
    }
  };

  const fetchattendense = async () => {
    try {
      // setLoading(true);
      const collections = collection(db, "attendance");
      const queryRef = query(collections, where("isPresent", "==", true));
      const docs = await getDocs(queryRef);
      const studentdata = [];
      docs.forEach((doc) => {
        studentdata.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setatendence(studentdata);
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchData();
    fetchcourses()
    fetchattendense()
  }, []);


  return (
    <>

      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="rounded-lg bg-white h-40 shadow-sm border-b-8 border-[#7072da] ">
          <div className="flex justify-between px-8 py-2 ">
            <p className="  font-sans text-2xl text-[#7072da] p-2 ">Total Courses</p>

            <div className="rounded-full p-2  bg-[#7072da] ">
              <ImBooks className="text-4xl font-bold" />
            </div>
          </div>
          <div className="font-bold text-[#7072da] m-10 text-2xl">
            {loading ? (<tr className="text-center">
                                <td colSpan="4" className="text-xl text-[#7072da] font-bold mt-10">
                                    Loading...
                                </td>
                            </tr>):(courses.length)}
          </div>
        </div>
        <div className="rounded-lg bg-white h-40 border-b-8  border-[#868a88] shadow-sm">
          <div className="flex justify-between px-8 py-2 ">
            <p className="  font-sans text-2xl p-2 text-[#93A29B] ">Total Students</p>
            <div className="rounded-full p-2 bg-[#868a88] ">
              <HiUserGroup className="text-4xl" />
            </div>
          </div>
          <div className="font-bold text-[#868a88] m-10 text-2xl">

            {loading ? (
                            <tr className="text-center">
                                <td colSpan="4" className="text-xl text-[#868a88] font-bold mt-10">
                                    Loading...
                                </td>
                            </tr>
                        ):(student.length)}
          </div>
        </div>
        <div className="rounded-lg bg-white border-b-8  border-[#8B635C] h-40 shadow-sm">
          <div className="flex justify-between px-8 py-2 ">
            <p className="  font-sans text-2xl p-2 text-[#8B635C] ">Total Attendence</p>
            <div className="rounded-full p-2 bg-[#8B635C] ">
              <FcOvertime className="text-4xl" />
            </div>
          </div>
          <div className="font-bold text-[#8B635C] m-10 text-2xl">
            10
          </div>
        </div>
      </div>
      <div className="grid col-1 bg-white h-96 rounded-lg  shadow-sm">
        <Image src="/graph.png" alt="graph" height={100} width={1000} />
      </div>
    </>
  )
}
