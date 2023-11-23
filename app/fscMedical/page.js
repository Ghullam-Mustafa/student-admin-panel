

"use client";

import { useState, useEffect } from 'react';
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc, query, where } from 'firebase/firestore';
import { db } from '@/config/firebase';


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
            <div className=" grid grid-cols-2 gap-4">
                {student?.map((item,i) => {
                    return <>
                        <div key={i} className=" border-silver border-2 rounded-lg p-5">
                            <div className="   w-[20%]">
                                <img className=' items-center justify-center' src={item.projectImage} alt="" />
                            </div>
                            <div>
                                <p className='text-lg font-bold'>Student Name : <span className='text-sm font-normal'>{item.studentName}</span> </p>
                                <p className='text-lg font-bold'>Father Name : <span className='text-sm font-normal'> {item.fatherName}</span></p>
                                <p className='text-lg font-bold'>Student Contact Number : <span className='text-sm font-normal'>{item.studentPhoneNumber}</span></p>
                                <p className='text-lg font-bold'>Student WhatsApp Number : <span className='text-sm font-normal'>{item.studentWhatsappNumber}</span></p>
                                <p className='text-lg font-bold'>Student Email : <span className='text-sm font-normal'>{item.studentEmail}</span></p>
                                <p className='text-lg font-bold'>Student CNIC : <span className='text-sm font-normal'>{item.studentCnic}</span></p>
                                <p className='text-lg font-bold'>Date Of Birth: <span className='text-sm font-normal'>{item.dateOfBirth}</span></p>
                                <p className='text-lg font-bold'>Religion : <span className='text-sm font-normal'>{item.Religion}</span></p>
                                <p className='text-lg font-bold'>Mark Of Identification: <span className='text-sm font-normal'>{item.markOfIdentification}</span></p>
                                <p className='text-lg font-bold'>Home Address: <span className='text-sm font-normal'>{item.homeAddress}</span></p>

                                <br />
                                <p className='text-lg font-bold'>FATHER'S / GUARDIAN'S PROFILE</p>
                                <br />
                                <p className='text-lg font-bold'>FATHER'S / GUARDIAN'S C.N.I.C: <span className='text-sm font-normal'>{item.fatherCnic}</span></p>
                                <p className='text-lg font-bold'>FATHER'S / GUARDIAN'S phone number: <span className='text-sm font-normal'>{item.fatherPhoneNumber}</span></p>
                                <p className='text-lg font-bold'>FATHER'S / GUARDIAN'S whatsapp number: <span className='text-sm font-normal'>{item.fatherWhatsappNumber}</span></p>
                                <p className='text-lg font-bold'>FATHER'S / GUARDIAN'S Occupation: <span className='text-sm font-normal'>{item.fatherOccupation} </span></p>


                                <p className='text-lg font-bold'>EDUCATIONAL PROFILE</p>
                                <br />
                                <p className='text-sm font-bold'>Matriculation Exams</p>
                                <br />

                                <p className='text-lg font-bold'>Exams Year: <span className='text-sm font-normal'>{item.matriculationYear}</span></p>
                                <p className='text-lg font-bold'>Board Roll # : <span className='text-sm font-normal'>{item.boardRollNo}</span></p>
                                <p className='text-lg font-bold'>Obtained Marks : <span className='text-sm font-normal'>{item.obtainedMarks}</span></p>
                                <p className='text-lg font-bold'>Total Marks : <span className='text-sm font-normal'>{item.totalMarks}</span></p>
                                <p className='text-lg font-bold'>Institute / University : <span className='text-sm font-normal'>{item.insitute}</span></p>
                                <br />
                                <p className='text-lg font-bold'>Others Edusation</p>
                                <br />
                                <p className='text-lg font-bold'>Other Year:<span className='text-sm font-normal'>{item.otherYear}</span></p>
                                <p className='text-lg font-bold'>Other Roll # : <span className='text-sm font-normal'>{item.otherRollNo}</span></p>
                                <p className='text-lg font-bold'>Total Marks :<span className='text-sm font-normal'> {item.othetTotalMarks}</span></p>
                                <p className='text-lg font-bold'>Institute / University : <span className='text-sm font-normal'>{item.otherInsitute}</span></p>















                            </div>
                        </div>
                    </>

                })}
            </div>
        </>
    );
}


