import React from 'react'
import Link from 'next/link'
import { signOut } from 'firebase/auth';
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
            <div className="justify-end flex ">
                <button
                    className='bg-blue-900 py-3 m-1 px-5 text-white rounded-lg  hover:bg-red-900 '
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>

            <nav className="bg-[#D0A5C]  rounded-full py-4">
                <div className=" ">


                    <div className="grid grid-cols-7 bg-blue-900 rounded-lg ">
                        <Link href="/dashboard" className='items-center p-2 flex hover:bg-red-900    hover:rounded-lg justify-center'>
                            <p className="text-white  ">Dash Board</p>
                        </Link>
                        <Link href="/fscMedical" className='items-center p-2 flex  hover:bg-red-900    hover:rounded-lg justify-center'>
                            <p className="text-white">Fsc Medical</p>
                        </Link>
                        <Link href="/fscPreEngineering" className='items-center p-2 flex  hover:bg-red-900    hover:rounded-lg justify-center'>
                            <p className="text-white">Fsc Engineering</p>
                        </Link>
                        <Link href="/icsPhysics" className='items-center p-2 flex  hover:bg-red-900    hover:rounded-lg justify-center'>
                            <p className="text-white ">Ics Physics</p>
                        </Link>
                        <Link href="/icsStatistic" className='items-center  p-2  flex  hover:bg-red-900    hover:rounded-lg justify-center'>
                            <p className="text-white ">Ics Statistic</p>
                        </Link>
                        <Link href="/icom" className='items-center p-2 flex  hover:bg-red-900    hover:rounded-lg justify-center'>
                            <p className="text-white ">I.Com</p>
                        </Link>
                        <Link href="/faIt" className='items-center p-2 flex  hover:bg-red-900    hover:rounded-lg justify-center'>
                            <p className="text-white ">Fa.It</p>
                        </Link>
                    </div>
                </div>
            </nav>

        </>
    )
}
