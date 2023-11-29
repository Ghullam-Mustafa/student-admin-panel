"use client"
import { useState, useEffect } from 'react';
import { GiBookshelf } from "react-icons/gi"
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/config/firebase';
import Image from 'next/image';
import { HiUserGroup } from 'react-icons/hi'
import { FcOvertime } from 'react-icons/fc'
import { ImBooks } from 'react-icons/im'
import DashboardNavbar from './dashboardNavbar';
import { FaBookMedical } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { GrCloudComputer } from "react-icons/gr";
import { IoStatsChart } from "react-icons/io5";
import { IoBusinessSharp } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";

export default function Headercard() {
  const [loading, setLoading] = useState(false);
  const [fscMedicalStudent, setFscMedicalStudent] = useState([]);
  const [fscEngineeringStudent, setFscEngineeringStudent] = useState([]);
  const [icsPhysicsStudent, setIcsPhysicsStudent] = useState([]);
  const [icsStatisticStudent, setIcsStatisticStudent] = useState([]);
  const [iComStudent, setIcomStudent] = useState([]);
  const [faItStudent, setFaItStudent] = useState([]);

  const fscMeical = async () => {
    try {
      const attendanceCollection = collection(db, 'AddmissionForm');
      const q = query(attendanceCollection, where('selectedCourse', '==', 'F.Sc Medical'));
      const docs = await getDocs(q);
      const studentData = [];
      docs.forEach((doc) => {
        studentData.push({
          id: doc.id,
          ...doc.data(),
          selectedCourse: "F.Sc Medical",
        });
      });
      setFscMedicalStudent(studentData);
    } catch (error) {
      console.error(error);
    }
  };

  const fscEngineering = async () => {
    try {
      const attendanceCollection = collection(db, 'AddmissionForm');
      const q = query(attendanceCollection, where('selectedCourse', '==', 'F.Sc Pre-Engineering'));
      const docs = await getDocs(q);
      const studentData = [];
      docs.forEach((doc) => {
        studentData.push({
          id: doc.id,
          ...doc.data(),
          selectedCourse: "F.Sc Pre-Engineering",
        });
      });
      setFscEngineeringStudent(studentData);
    } catch (error) {
      console.error(error);
    }
  };

  const icsPhysics = async () => {
    try {
      const attendanceCollection = collection(db, 'AddmissionForm');
      const q = query(attendanceCollection, where('selectedCourse', '==', 'ICS (Physics)'));
      const docs = await getDocs(q);
      const studentData = [];
      docs.forEach((doc) => {
        studentData.push({
          id: doc.id,
          ...doc.data(),
          selectedCourse: "ICS (Physics)",
        });
      });
      setIcsPhysicsStudent(studentData);
    } catch (error) {
      console.error(error);
    }
  };

  const icsStatistic = async () => {
    try {
      const attendanceCollection = collection(db, 'AddmissionForm');
      const q = query(attendanceCollection, where('selectedCourse', '==', 'ICS (Statistics)'));
      const docs = await getDocs(q);
      const studentData = [];
      docs.forEach((doc) => {
        studentData.push({
          id: doc.id,
          ...doc.data(),
          selectedCourse: "ICS (Statistics)",
        });
      });
      setIcsStatisticStudent(studentData);
    } catch (error) {
      console.error(error);
    }
  };

  const iCom = async () => {
    try {
      const attendanceCollection = collection(db, 'AddmissionForm');
      const q = query(attendanceCollection, where('selectedCourse', '==', 'I.Com'));
      const docs = await getDocs(q);
      const studentData = [];
      docs.forEach((doc) => {
        studentData.push({
          id: doc.id,
          ...doc.data(),
          selectedCourse: "I.Com",
        });
      });
      setIcomStudent(studentData);
    } catch (error) {
      console.error(error);
    }
  };

  const faIt = async () => {
    try {
      const attendanceCollection = collection(db, 'AddmissionForm');
      const q = query(attendanceCollection, where('selectedCourse', '==', 'F.A(IT)'));
      const docs = await getDocs(q);
      const studentData = [];
      docs.forEach((doc) => {
        studentData.push({
          id: doc.id,
          ...doc.data(),
          selectedCourse: "F.A(IT)",
        });
      });
      setFaItStudent(studentData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fscMeical();
    fscEngineering();
    icsPhysics();
    icsStatistic();
    iCom();
    faIt();
  }, []);

  return (
    <>

      <DashboardNavbar />

      <p className="text-gray-700 text-3xl mb-6 font-bold">Dashboard</p>


      <div className="grid lg:grid-cols-3 gap-5 mb-8">
        <div className="rounded-lg bg-white h-40 shadow-sm border-b-8 border-[#7072da] ">
          <div className="flex justify-between px-8 py-2 ">
            <p className="  font-sans text-2xl text-[#7072da] p-2 ">F.Sc Medical Students</p>
            <div className="">
              <div className="rounded-full p-2  bg-[#7072da] ">
                <FaBookMedical className="text-4xl font-bold" />
              </div>
            </div>
          </div>
          <div className="font-bold text-[#7072da] mx-10 my-4 text-2xl">
            {loading ? (<tr className="text-center">
              <td colSpan="4" className="text-xl text-[#7072da] font-bold mt-10">
                Loading...
              </td>
            </tr>) : (fscMedicalStudent.length)}
          </div>
        </div>
        <div className="rounded-lg bg-white h-40 border-b-8  border-[#868a88] shadow-sm">
          <div className="flex justify-between px-8 py-2 ">
            <p className="  font-sans text-2xl p-2 text-[#93A29B] ">
              F.Sc Pre-Engineering</p>
            <div className="">
              <div className="rounded-full p-2 bg-[#868a88] ">
                <MdEngineering className="text-4xl" />
              </div>
            </div>
          </div>
          <div className="font-bold text-[#868a88] mx-10 my-4 text-2xl">

            {loading ? (
              <tr className="text-center">
                <td colSpan="4" className="text-xl text-[#868a88] font-bold mt-10">
                  Loading...
                </td>
              </tr>
            ) : (fscEngineeringStudent.length)}
          </div>
        </div>
        <div className="rounded-lg bg-white border-b-8  border-[#8B635C] h-40 shadow-sm">
          <div className="flex justify-between px-8 py-2 ">
            <p className="  font-sans text-2xl p-2 text-[#8B635C] ">ICS (Physics) Students </p>
            <div className=""><div className="rounded-full p-2 bg-[#8B635C] ">
              <GrCloudComputer  className="text-4xl" />
            </div></div>
          </div>
          <div className="font-bold text-[#8B635C] mx-10 my-4 text-2xl">

            {loading ? (
              <tr className="text-center">
                <td colSpan="4" className="text-xl text-[#868a88] font-bold mt-10">
                  Loading...
                </td>
              </tr>
            ) : (icsPhysicsStudent.length)}
          </div>
        </div>
        <div className="rounded-lg bg-white h-40 shadow-sm border-b-8 border-[#7072da] ">
          <div className="flex justify-between px-8 py-2 ">
            <p className="  font-sans text-2xl text-[#7072da] p-2 ">ICS (Statistics) Students</p>
            <div className="">
              <div className="rounded-full p-2  bg-[#7072da] ">
                <IoStatsChart className="text-4xl font-bold" />
              </div></div>
          </div>
          <div className="font-bold text-[#7072da] mx-10 my-4 text-2xl">
            {loading ? (<tr className="text-center">
              <td colSpan="4" className="text-xl text-[#7072da] font-bold mt-10">
                Loading...
              </td>
            </tr>) : (icsStatisticStudent.length)}
          </div>
        </div>
        <div className="rounded-lg bg-white h-40 shadow-sm border-b-8 border-[#868a88] ">
          <div className="flex justify-between px-8 py-2 ">
            <p className="  font-sans text-2xl text-[#868a88] p-2 ">I.Com Students</p>
            <div className="">
              <div className="rounded-full p-2  bg-[#868a88] ">
                <IoBusinessSharp className="text-4xl font-bold" />
              </div>
            </div>
          </div>
          <div className="font-bold text-[#868a88] mx-10 my-10 text-2xl">
            {loading ? (<tr className="text-center">
              <td colSpan="4" className="text-xl text-[#868a88] font-bold mt-10">
                Loading...
              </td>
            </tr>) : (iComStudent.length)}
          </div>
        </div>
        <div className="rounded-lg bg-white h-40 shadow-sm border-b-8 border-[#8B635C] ">
          <div className="flex justify-between px-8 py-2 ">
            <p className="  font-sans text-2xl text-[#8B635C] p-2 ">F.A(IT) Students</p>

            <div className="rounded-full p-2  bg-[#8B635C] ">
                <FaComputer className="text-4xl font-bold" />
            </div>
          </div>
          <div className="font-bold text-[#8B635C] mx-10 my-10 text-2xl">
            {loading ? (<tr className="text-center">
              <td colSpan="4" className="text-xl text-[#8B635C] font-bold mt-10">
                Loading...
              </td>
            </tr>) : (faItStudent.length)}
          </div>
        </div>
      </div>
      {/* <div className="grid col-1 bg-white h-96 rounded-lg  shadow-sm">
        <Image src="/graph.png" alt="graph" height={100} width={1000} />
      </div> */}
    </>
  )
}
