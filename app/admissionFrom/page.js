


import React from 'react';
import Image from 'next/image';
import { PiPhoneCallBold } from 'react-icons/pi';
import { FaWhatsapp } from "react-icons/fa6";
export default function Page() {
    return (
        <>
            <div className='bg-white border-2 border-black p-2'>
                <div className="grid grid-cols-12">
                    <div className="col-span-3">
                        <Image src="/logo.png" alt="graph" height={50} width={100} />
                    </div>
                    <div className="flex col-span-9 items-center px-5">
                        <div className="flex flex-col items-center">
                            <p className="text-blue-500 text-3xl font-bold border-b-2 border-red-500 ">TIPS COLLEGE OF SCIENCE & COMMERCE</p>
                            <p className="text-xl font-bold">A College with Professional Excellence</p>
                        </div>
                    </div>
                </div>

                <p className="text-blue-500 py-3">Applied for Admission in :</p>

                <div className="grid grid-cols-12">
                    <div className="flex col-span-9 items-center">
                        <div className="">
                            <div className="flex justify-between">
                                <div className="flex px-2">
                                    <label className="flex items-center space-x-2" htmlFor="FScPreEngineering">
                                        <input type="radio" id="ICS" name="course" />
                                        <span className=' text-red-600 text-xl font-bold'>F.Sc Pre-Engineering</span>
                                    </label>
                                </div>
                                <div className="flex px-2">
                                    <label className="flex items-center space-x-2" htmlFor="FScMedical">
                                        <input type="radio" id="ICS" name="course" />
                                        <span className=' text-red-600 text-xl font-bold'>F.Sc Medical</span>
                                    </label>
                                </div>
                                <div className="flex px-2">
                                    <label className="flex items-center space-x-2" htmlFor="ICSPhysics">
                                        <input type="radio" id="ICS" name="course" />
                                        <span className=' text-red-600 text-xl font-bold'>ICS (Physics)</span>
                                    </label>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <div className="flex px-2">
                                    <label className="flex items-center space-x-2" htmlFor="ICSStatistics">
                                        <input type="radio" id="ICS" name="course" />
                                        <span className=' text-red-600 text-xl font-bold'>ICS (Statistics)</span>
                                    </label>
                                </div>
                                <div className="flex px-2">
                                    <label className="flex items-center space-x-2" htmlFor="ICom">
                                        <input type="radio" id="ICS" name="course" />
                                        <span className=' text-red-600 text-xl font-bold'>I.Com</span>
                                    </label>
                                </div>
                                <div className="flex px-2">
                                    <label className="flex items-center space-x-2" htmlFor="FAIT">
                                        <input type="radio" id="ICS" name="course" />
                                        <span className=' text-red-600 text-xl font-bold'>F.A(IT)</span>
                                    </label>
                                </div>
                            </div>

                            <p>Applicant should fill this form carefully in his/her own handwriting, get it countersigned by his/her father/guardian, and attach attested copies of certificates (non-returnable in any case), as evidence of the following particulars before submitting to the college office.</p>

                            <div className="flex py-2">
                                <div className="flex px-3">
                                    <label className="flex items-center space-x-2" htmlFor="Regular">
                                        <span className=' text-red-600 text-xl font-bold'>Regular</span>
                                        <input type="radio" id="Regular" name="class" />
                                    </label>
                                </div>
                                <div className="flex px-3">
                                    <label className="flex items-center space-x-2" htmlFor="Re-Admission">
                                        <span className=' text-red-600 text-xl font-bold'>Re-Admission</span>
                                        <input type="radio" id="Regular" name="class" />
                                    </label>
                                </div>
                                <div className="flex px-3">
                                    <label className="flex items-center space-x-2" htmlFor="OnlyCoaching">
                                        <span className=' text-red-600 text-xl font-bold'>Only Coaching</span>
                                        <input type="radio" id="Regular" name="class" />
                                    </label>
                                </div>
                                <div className="flex px-3">
                                    <label className="flex items-center space-x-2" htmlFor="SummerChamp">
                                        <span className=' text-red-600 text-xl font-bold'>Summer Champ</span>
                                        <input type="radio" id="Regular" name="class" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3">
                        <label>
                            Upload Image:
                            <input type="file" />
                        </label>
                    </div>
                </div>
                <div className=" py-6">
                    <p className=' text-red-600 text-2xl font-bold'>STUDENT'S PROFILE</p>
                    <div>
                        <table className='w-[100%]' >

                            <tr>
                                <td className='border-black border text-left px-8 '>
                                    <div className="">Name : <input type="text" name="" id="" placeholder="Enter your Name" /> </div>

                                </td>
                                <td className='border-black border text-left px-8 flex'>
                                    <div className=" justify-center items-center "> <PiPhoneCallBold />    </div>
                                    <div className=""> <input type="text" name="" id="" placeholder="Enter your Phone Number" /></div>
                                </td>

                            </tr>
                            <tr>
                                {/* <td className='border-black border text-left px-8'>C.N.I.C. / B-form No  <input type='number' pattern='^[0-9]{5}-[0-9]{7}-[0-9]{1}$'  title='Type CNIC Like 12345-1234567-1' required  />   </td> */}
                                <td className='border-black border text-left px-8'>
                                    C.N.I.C. / B-form No
                                    <input
                                        className='px-2'
                                        type='text'
                                        pattern='^[0-9]{5}-[0-9]{7}-[0-9]{1}$'
                                        title='Type CNIC Like 12345-1234567-1'
                                        required
                                        placeholder='(331000-0000000-0)'
                                    />
                                </td>
                                <td className='border-black border text-left px-8 flex'>
                                    <div className=" justify-center items-center "> <FaWhatsapp />    </div>
                                    <div className=""> <input className='px-2' type="text" name="" id="" placeholder="Enter your Phone Number" /></div>
                                </td>

                            </tr>
                            <tr>
                                <td className='border-black border text-left px-8'>
                                    <div className="">Mark of Identification <input className='px-2' type="text" name="" id="" placeholder="Mark of Identification" /> </div>
                                </td>
                                <td className='border-black border text-left px-8'>
                                    <div className="">Date of Birth:<input className='px-2' type="date" name="" id="" placeholder="Enter your Date of Birth" /> </div>
                                </td>

                            </tr>



                        </table>



                    </div>
                </div>

                <div className=" py-3">
                    <p className=' text-red-600 text-2xl font-bold'>FATHER'S / GUARRIAN'S PROFILE</p>
                    <div>
                        <table className='w-[100%]' >

                            <tr>
                                <td className='border-black border text-left px-8 '>
                                    <div className="">Name : <input type="text" name="" id="" placeholder="Enter your Name" /> </div>

                                </td>
                                <td className='border-black border text-left px-8 flex'>
                                    <div className=" justify-center items-center "> <PiPhoneCallBold />    </div>
                                    <div className=""> <input type="text" name="" id="" placeholder="Enter your Phone Number" /></div>
                                </td>

                            </tr>
                            <tr>
                                {/* <td className='border-black border text-left px-8'>C.N.I.C. / B-form No  <input type='number' pattern='^[0-9]{5}-[0-9]{7}-[0-9]{1}$'  title='Type CNIC Like 12345-1234567-1' required  />   </td> */}
                                <td className='border-black border text-left px-8'>
                                    C.N.I.C. / B-form No
                                    <input
                                        type='text'
                                        pattern='^[0-9]{5}-[0-9]{7}-[0-9]{1}$'
                                        title='Type CNIC Like 12345-1234567-1'
                                        required
                                        placeholder='(331000-0000000-0)'
                                    />
                                </td>
                                <td className='border-black border text-left px-8 flex'>
                                    <div className=" justify-center items-center "> <FaWhatsapp />    </div>
                                    <div className=""> <input type="text" name="" id="" placeholder="Enter your Phone Number" /></div>
                                </td>

                            </tr>
                            <tr>
                                <td className='border-black border text-left px-8'>
                                    <div className="">Occupation : <input type="text" name="" id="" placeholder="Occupation" /> </div>
                                </td>
                                <td className='border-black border text-left px-8'>
                                    <div className="">Religion<input type="text" name="" id="" placeholder="Religion" /> </div>
                                </td>

                            </tr>
                            <tr>
                                <td className='border-black border text-left px-8'>Home Address: <input type="text" name="" id="" placeholder="Enter your home address " />  </td>
                                <td className='border-black border text-left px-8'>Email :<input type="text" name="" id="" placeholder="Enter your Email address " /></td>

                            </tr>


                        </table>



                    </div>
                </div>

                <div className=" py-6 w-full overflow-x-auto">
                    <p className=' text-red-600 text-2xl font-bold'>EDUCATIONAL PROFILE</p>
                    <div>
                        <table>
                            <tr>
                                <th className='text-left border-black border px-2'>Qualification</th>
                                <th className='text-left border-black border px-2'>Year</th>
                                <th className='text-left border-black border px-2'>Board Roll #</th>
                                <th className='text-left border-black border px-2'>Obtained</th>
                                <th className='text-left border-black border px-2'>T.Marks</th>
                                <th className='text-left border-black border px-2'>Institute / University</th>

                            </tr>
                            <tr >
                                <td className='border-black border text-left font-bold ' >Matriculation</td>
                                <td className='border-black border text-left '> <input type="text" name="" id="" /> </td>
                                <td className='border-black border text-left '><input type="text" name="" id="" /></td>
                                <td className='border-black border text-left '><input type="text" name="" id="" /></td>
                                <td className='border-black border text-left '><input type="text" name="" id="" /></td>
                                <td className='border-black border text-left '><input type="text" name="" id="" /></td>
                            </tr>
                            <tr>
                                <td className='border-black border text-left font-bold '>Others</td>
                                <td className='border-black border text-left '><input type="text" name="" id="" /></td>
                                <td className='border-black border text-left '><input type="text" name="" id="" /></td>
                                <td className='border-black border text-left '><input type="text" name="" id="" /></td>
                                <td className='border-black border text-left '><input type="text" name="" id="" /></td>
                                <td className='border-black border text-left '><input type="text" name="" id="" /></td>
                            </tr>
                        </table>

                    </div>
                </div>

                <p className=' text-red-600 text-2xl font-bold py-3'>DOCUMENTS REQUIRED</p>

                <div className="border-black  border-2 p-2 flex justify-between">
                    <div>
                        
                        <ol>
                            <li className='text-l font-bold'>1- Three Passport Size Pictures with Blue Back Ground</li>
                            <li className='text-l font-bold'>3- Matric Roll No Slip Coppy and Result Card Copy</li>
                            <li className='text-l font-bold'>4- College First Installement and Registration Fee</li>
                        </ol>
                    </div>
                    <div>
                        
                        <ol>
                            <li className='text-l font-bold'>2- Students CNIC OR B-Form Photocopy</li>
                            <li className='text-l font-bold'>4- Father CNIC Copy</li>
                            <li className='text-l font-bold'>5- Orignal NOC (in case of Matric pass from other Board)</li>
                        </ol>
                    </div>
                </div>

                <p className=' text-red-600 text-2xl font-bold'>DOCUMENTS REQUIRED</p>

                <div className="border-black  border-2 p-2 flex justify-between">
                    <div>
                        
                        <ol>
                            <li className='text-l font-bold'>1- Three Passport Size Pictures with Blue Back Ground</li>
                            <li className='text-l font-bold'>3- Matric Roll No Slip Coppy and Result Card Copy</li>
                            <li className='text-l font-bold'>4- College First Installement and Registration Fee</li>
                        </ol>
                    </div>
                    <div>
                        
                        <ol>
                            <li className='text-l font-bold'>2- Students CNIC OR B-Form Photocopy</li>
                            <li className='text-l font-bold'>4- Father CNIC Copy</li>
                            <li className='text-l font-bold'>5- Orignal NOC (in case of Matric pass from other Board)</li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}
