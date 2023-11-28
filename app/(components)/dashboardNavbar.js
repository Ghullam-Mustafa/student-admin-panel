import React from 'react'
import Link from 'next/link'
import {  signOut } from 'firebase/auth';
import { auth } from '@/config/firebase';


export default function dashboardNavbar() {

    const handleLogout = () => {
        signOut(auth)
          .then(() => {
            setUser(null);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    return (
        <>
          <div className="text-center flex justify-evenly">
                <button
                  className='bg-blue-600 py-3 m-1 px-5 text-white rounded-lg'
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>

            <nav className="bg-[#D0A5C]  rounded-full p-4">
                <div className="flex items-center justify-between">


                    <div className="grid grid-cols-7 bg-slate-400 rounded-lg ">
                        <Link href="/dashboard">
                            <p className="text-white hover:text-gray-300">Dash Board</p>
                        </Link>
                        <Link href="/fscMedical">
                            <p className="text-white hover:text-gray-300">Fsc Medical</p>
                        </Link>
                        <Link href="/fscPreEngineering">
                            <p className="text-white hover:text-gray-300">Fsc PreEngineering</p>
                        </Link>
                        <Link href="/icsPhysics">
                            <p className="text-white hover:text-gray-300">Ics Physics</p>
                        </Link>
                        <Link href="/icsStatistic">
                            <p className="text-white hover:text-gray-300">Ics Statistic</p>
                        </Link>
                        <Link href="/icom">
                            <p className="text-white hover:text-gray-300">I.Com</p>
                        </Link>
                        <Link href="/faIt">
                            <p className="text-white hover:text-gray-300">Fa.It</p>
                        </Link>
                    </div>
                </div>
            </nav>

        </>
    )
}
