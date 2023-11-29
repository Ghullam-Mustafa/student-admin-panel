

"use client";

import { useState, useEffect } from 'react';
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc, query, where } from 'firebase/firestore';
import { db } from '@/config/firebase';
import DashboardNavbar from '../(components)/dashboardNavbar';


export default function Page() {
    const [student, setStudents] = useState([]);




    const fetchData = async () => {
        try {
            // setLoading(true);
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
            console.log("studentData", studentData);
            setStudents(studentData);
        } catch (error) {
            console.error(error);
        } finally {
            console.error(
                'fifm'
            );

        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
        <DashboardNavbar/>
            <div className=" grid grid-cols-2 gap-4">
                {student?.map((item,i) => {
                    return <>
                        <div key={i} className=" border-silver border-2 rounded-lg p-5">
                            <div className="    w-[20%]">
                                <img className=' items-center justify-center' src={item.projectImage} alt="" />
                            </div>
                            <div>
                                <p className='text-sm font-bold my-4'>Student Name : <span className='text-sm font-normal bg-slate-50 px-2 py-2 rounded-lg'>{item.studentName}</span> </p>
                                <p className='text-sm font-bold my-4'>Father Name : <span className='text-sm font-normal bg-slate-50 px-2 py-2 rounded-lg'> {item.fatherName}</span></p>
                                <p className='text-sm font-bold my-4'>Student Contact Number : <span className='text-sm font-normal bg-slate-50 px-2 py-2 rounded-lg'>{item.studentPhoneNumber}</span></p>
                                <p className='text-sm font-bold my-4'>Student WhatsApp Number : <span className='text-sm font-normal  bg-slate-50 px-2 py-2 rounded-lg'>{item.studentWhatsappNumber}</span></p>
                                <p className='text-sm font-bold my-4'>Student Email : <span className='text-sm font-normal bg-slate-50 px-2 py-2 rounded-lg'>{item.studentEmail}</span></p>
                                <p className='text-sm font-bold my-4'>Student CNIC : <span className='text-sm font-normal bg-slate-50 px-2 py-2 rounded-lg'>{item.studentCnic}</span></p>
                                <p className='text-sm font-bold my-4'>Date Of Birth: <span className='text-sm font-normal bg-slate-50 px-2 py-2 rounded-lg'>{item.dateOfBirth}</span></p>
                                <p className='text-sm font-bold my-4'>Religion : <span className='text-sm font-normal bg-slate-50 px-2 py-2 rounded-lg' >{item.Religion}</span></p>
                                <p className='text-sm font-bold my-4'>Mark Of Identification: <span className='text-sm font-normal bg-slate-50 px-2 py-2 rounded-lg'>{item.markOfIdentification}</span></p>
                                <p className='text-sm font-bold my-4'>Home Address: <span className='text-sm font-normal bg-slate-50 px-2 py-2 rounded-lg'>{item.homeAddress}</span></p>

                                <br />
                                <p className='text-lg font-bold'>FATHER'S / GUARDIAN'S PROFILE</p>
                                <br />
                                <p className='text-sm font-bold my-4'>FATHER'S / GUARDIAN'S C.N.I.C: <span className='text-sm font-normal bg-slate-50 px-2 py-2 rounded-lg'>{item.fatherCnic}</span></p>
                                <p className='text-sm font-bold my-4'>FATHER'S / GUARDIAN'S phone number: <span className='text-sm font-normal bg-slate-50 px-2 py-2 rounded-lg'>{item.fatherPhoneNumber}</span></p>
                                <p className='text-sm font-bold my-4'>FATHER'S / GUARDIAN'S whatsapp number: <span className='text-sm font-normal bg-slate-50 px-2 py-2 rounded-lg' >{item.fatherWhatsappNumber}</span></p>
                                <p className='text-sm font-bold my-4'>FATHER'S / GUARDIAN'S Occupation: <span className='text-sm font-normal bg-slate-50 px-2 py-2 rounded-lg'>{item.fatherOccupation} </span></p>


                                <p className='text-lg font-bold'>EDUCATIONAL PROFILE</p>
                                <br />
                                <p className='text-lg font-bold'>Matriculation Exams</p>
                                <br />

                                <p className='text-sm font-bold my-4'>Exams Year: <span className='text-sm font-normal  bg-slate-50 px-2 py-2 rounded-lg'>{item.matriculationYear}</span></p>
                                <p className='text-sm font-bold my-4'>Board Roll # : <span className='text-sm font-normal  bg-slate-50 px-2 py-2 rounded-lg'>{item.boardRollNo}</span></p>
                                <p className='text-sm font-bold my-4'>Obtained Marks : <span className='text-sm font-normal  bg-slate-50 px-2 py-2 rounded-lg'>{item.obtainedMarks}</span></p>
                                <p className='text-sm font-bold my-4'>Total Marks : <span className='text-sm font-normal  bg-slate-50 px-2 py-2 rounded-lg'>{item.totalMarks}</span></p>
                                <p className='text-sm font-bold my-4'>Institute / University : <span className='text-sm font-normal  bg-slate-50 px-2 py-2 rounded-lg'>{item.insitute}</span></p>
                                <br />
                                {/* <p className='text-lg font-bold'>Others Edusation</p>
                                <br />
                                <p className='text-lg font-bold'>Other Year:<span className='text-sm font-normal'>{item.otherYear}</span></p>
                                <p className='text-lg font-bold'>Other Roll # : <span className='text-sm font-normal'>{item.otherRollNo}</span></p>
                                <p className='text-lg font-bold'>Total Marks :<span className='text-sm font-normal'> {item.othetTotalMarks}</span></p>
                                <p className='text-lg font-bold'>Institute / University : <span className='text-sm font-normal'>{item.otherInsitute}</span></p> */}















                            </div>
                        </div>
                    </>

                })}
            </div>
        </>
    );
}


