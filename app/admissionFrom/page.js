// import React from 'react';
// import Image from 'next/image';
// import { PiPhoneCallBold } from "react-icons/pi";

// export default function Page() {
//     return (
//         <>
//             <div className='bg-white border-2 border-black p-2'>
//                 <div className="grid grid-cols-12">
//                     <div className="col-span-3">
//                         <Image src="/logo.png" alt="graph" height={50} width={100} />
//                     </div>
//                     <div className="flex col-span-9 items-center px-5">
//                         <div className="flex flex-col items-center">
//                             <p className="text-blue-500 text-3xl font-bold border-b-2 border-red-500 ">TIPS COLLAGE OF SCIENCE & COMMERCE</p>
//                             <p className="text-xl font-bold">A College with Professional Excellence</p>
//                         </div>
//                     </div>
//                 </div>

//                 <p className="text-blue-500 py-3">Applied for Admission in :</p>

//                 <div className="grid grid-cols-12">
//                     <div className="flex col-span-9 items-center ">
//                         <div className="">
//                             <div className="flex justify-between">
//                                 <div className="flex px-2">
//                                     <label className="flex items-center space-x-2" htmlFor="FScPreEngineering">
//                                         <input type="checkbox" id="FScPreEngineering" name="FScPreEngineering" />
//                                         <span className=' text-red-600 text-xl font-bold'>F.Sc Pre-Engineering</span>
//                                     </label>
//                                 </div>
//                                 <div className="flex px-2">
//                                     <label className="flex items-center space-x-2" htmlFor="FScMedical">
//                                         <input type="checkbox" id="FScMedical" name="FScMedical" />
//                                         <span className=' text-red-600 text-xl font-bold'>F.Sc Medical</span>
//                                     </label>
//                                 </div>
//                                 <div className="flex px-2">
//                                     <label className="flex items-center space-x-2" htmlFor="ICSPhysics">
//                                         <input type="checkbox" id="ICSPhysics" name="ICSPhysics" />
//                                         <span className=' text-red-600 text-xl font-bold'>ICS (Physics)</span>
//                                     </label>
//                                 </div>
//                             </div>

//                             <div className="flex justify-between">
//                                 <div className="flex px-2">
//                                     <label className="flex items-center space-x-2" htmlFor="ICSStatistics">
//                                         <input type="checkbox" id="ICSStatistics" name="ICSStatistics" />
//                                         <span className=' text-red-600 text-xl font-bold'>ICS (Statistics)</span>
//                                     </label>
//                                 </div>
//                                 <div className="flex px-2">
//                                     <label className="flex items-center space-x-2" htmlFor="ICom">
//                                         <input type="checkbox" id="ICom" name="ICom" />
//                                         <span className=' text-red-600 text-xl font-bold'>I.Com</span>
//                                     </label>
//                                 </div>
//                                 <div className="flex px-2">
//                                     <label className="flex items-center space-x-2" htmlFor="FAIT">
//                                         <input type="checkbox" id="FAIT" name="FAIT" />
//                                         <span className=' text-red-600 text-xl font-bold'>F.A(IT)</span>
//                                     </label>
//                                 </div>
//                             </div>

//                             <p>Applicant should fill this form carefully in his/her own handwriting, get it countersigned by his/her father/guardian, and attach attested copies of certificates (non-returnable in any case), as evidence of the following particulars before submitting to the college office.</p>

//                             <div className="flex py-2">
//                                 <div className="flex px-3">
//                                     <label className="flex items-center space-x-2" htmlFor="Regular">
//                                         <span className=' text-red-600 text-xl font-bold'>Regular</span>
//                                         <input type="checkbox" id="Regular" name="Regular" />
//                                     </label>
//                                 </div>
//                                 <div className="flex px-3">
//                                     <label className="flex items-center space-x-2" htmlFor="Re-Admission">
//                                         <span className=' text-red-600 text-xl font-bold'>Re-Admission</span>
//                                         <input type="checkbox" id="Re-Admission" name="Re-Admission" />
//                                     </label>
//                                 </div>
//                                 <div className="flex px-3">
//                                     <label className="flex items-center space-x-2" htmlFor="OnlyCoaching">
//                                         <span className=' text-red-600 text-xl font-bold'>Only Coaching</span>
//                                         <input type="checkbox" id="OnlyCoaching" name="OnlyCoaching" />
//                                     </label>
//                                 </div>
//                                 <div className="flex px-3">
//                                     <label className="flex items-center space-x-2" htmlFor="Summer Champ">
//                                         <span className=' text-red-600 text-xl font-bold'>Summer Champ</span>
//                                         <input type="checkbox" id="Summer Champ" name="Summer Champ" />
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-span-3">
//                         <label>
//                             Upload Image:
//                             <input type="file" />
//                         </label>
//                     </div>
//                 </div>

//                 <p className=' text-red-600 text-xl font-bold'> STUDENT'S PROFILE</p>
//                 <div>
//                     <table className='border-black border-2 grid grid-cols-12'>
//                         <div className="flex grid-cols-12 ">
//                             <div className="flex col-span-6 border-black border-2">
//                                 <label htmlFor="textInput">Name:</label>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     // value={inputValue}
//                                     // onChange={handleInputChange}
//                                     placeholder="Enter your name"
//                                 />
//                             </div>
//                             <div className="flex col-span-6 border-black border-2">
//                                 <div className="">
//                                     <PiPhoneCallBold />
                                    
//                                 </div>
//                                 <div className="">
//                                 <input
//                                         type="text"
//                                         id="number"
//                                         // value={inputValue}
//                                         // onChange={handleInputChange}
//                                         placeholder="Enter your phone number"
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                     </table>
//                 </div>
//             </div>
//         </>
//     );
// }


import React from 'react';
import Image from 'next/image';
import { PiPhoneCallBold } from 'react-icons/pi';

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
                    <input type="checkbox" id="FScPreEngineering" name="FScPreEngineering" />
                    <span className=' text-red-600 text-xl font-bold'>F.Sc Pre-Engineering</span>
                  </label>
                </div>
                <div className="flex px-2">
                  <label className="flex items-center space-x-2" htmlFor="FScMedical">
                    <input type="checkbox" id="FScMedical" name="FScMedical" />
                    <span className=' text-red-600 text-xl font-bold'>F.Sc Medical</span>
                  </label>
                </div>
                <div className="flex px-2">
                  <label className="flex items-center space-x-2" htmlFor="ICSPhysics">
                    <input type="checkbox" id="ICSPhysics" name="ICSPhysics" />
                    <span className=' text-red-600 text-xl font-bold'>ICS (Physics)</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex px-2">
                  <label className="flex items-center space-x-2" htmlFor="ICSStatistics">
                    <input type="checkbox" id="ICSStatistics" name="ICSStatistics" />
                    <span className=' text-red-600 text-xl font-bold'>ICS (Statistics)</span>
                  </label>
                </div>
                <div className="flex px-2">
                  <label className="flex items-center space-x-2" htmlFor="ICom">
                    <input type="checkbox" id="ICom" name="ICom" />
                    <span className=' text-red-600 text-xl font-bold'>I.Com</span>
                  </label>
                </div>
                <div className="flex px-2">
                  <label className="flex items-center space-x-2" htmlFor="FAIT">
                    <input type="checkbox" id="FAIT" name="FAIT" />
                    <span className=' text-red-600 text-xl font-bold'>F.A(IT)</span>
                  </label>
                </div>
              </div>

              <p>Applicant should fill this form carefully in his/her own handwriting, get it countersigned by his/her father/guardian, and attach attested copies of certificates (non-returnable in any case), as evidence of the following particulars before submitting to the college office.</p>

              <div className="flex py-2">
                <div className="flex px-3">
                  <label className="flex items-center space-x-2" htmlFor="Regular">
                    <span className=' text-red-600 text-xl font-bold'>Regular</span>
                    <input type="checkbox" id="Regular" name="Regular" />
                  </label>
                </div>
                <div className="flex px-3">
                  <label className="flex items-center space-x-2" htmlFor="Re-Admission">
                    <span className=' text-red-600 text-xl font-bold'>Re-Admission</span>
                    <input type="checkbox" id="Re-Admission" name="Re-Admission" />
                  </label>
                </div>
                <div className="flex px-3">
                  <label className="flex items-center space-x-2" htmlFor="OnlyCoaching">
                    <span className=' text-red-600 text-xl font-bold'>Only Coaching</span>
                    <input type="checkbox" id="OnlyCoaching" name="OnlyCoaching" />
                  </label>
                </div>
                <div className="flex px-3">
                  <label className="flex items-center space-x-2" htmlFor="SummerChamp">
                    <span className=' text-red-600 text-xl font-bold'>Summer Champ</span>
                    <input type="checkbox" id="SummerChamp" name="SummerChamp" />
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

        <p className=' text-red-600 text-xl font-bold'>STUDENT'S PROFILE</p>
        <div>
          <table className='border-black border-2 grid grid-cols-12'>
            <tbody>
              <tr className='grid grid-cols-12'>
                <td className='flex col-span-6 border-black border-2'>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                  />
                </td>
                <td className='flex col-span-6 border-black border-2'>
                  <div className="flex">
                    <div className="flex items-center space-x-2">
                      <PiPhoneCallBold />
                    </div>
                    <div className="flex">
                      <input
                        type="text"
                        id="number"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              {/* Additional rows can be added similarly */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
