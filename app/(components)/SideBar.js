'use client'
import { forwardRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiUserGroup } from 'react-icons/hi'
import { FcOvertime } from 'react-icons/fc'
import { ImBooks } from 'react-icons/im'
import { RiHome2Fill } from 'react-icons/ri'

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-4">
        <picture className="pt-4">
          <img
            className="w-32 "
            src="/logo.png"
            alt="company logo"
          />
        </picture>
      </div>

      <div className="flex flex-col">
        <Link href="/">
          <div
            className={`pl-6 py-2 mx-5 text-center cursor-pointer rounded-full  hover:drop-shadow-2xl mb-3 flex items-center transition-colors ${router.pathname == "/"
              ? "bg-orange-100 text-[#9697DB]"
              : "text-gray-400 hover:bg-[#b8bae6] hover:text-[#7072da]"
              }`}
          >
            <div className="mr-2">

              <RiHome2Fill className="text-xl" />
            </div>
            <div>
              <p className=" font-mono	font-bold text-3xl">Home</p>
            </div>
          </div>
        </Link>
        <Link href="/fscMedical">
          <div
            className={`pl-6 py-2 mx-5 text-center cursor-pointer rounded-full  hover:drop-shadow-2xl mb-3 flex items-center transition-colors ${router.pathname == "/"
              ? "bg-orange-100 text-[#9697DB]"
              : "text-gray-400 hover:bg-[#b8bae6] hover:text-[#7072da]"
              }`}
          >
            <div className="mr-2">

              <HiUserGroup className="text-2xl" />
            </div>
            <div>
              <p>F.Sc Medical</p>
            </div>
          </div>
        </Link>
        <Link href="/fscPreEngineering" >
          <div
            className={`pl-6 py-2 mx-5  text-center cursor-pointer hover:drop-shadow-2xl mb-2 rounded-full flex items-center transition-colors ${router.pathname == "/account"
              ? "bg-orange-100 text-[#9697DB]"
              : "text-gray-400 hover:bg-[#b8bae6] hover:text-[#7072da]"
              }`}
          >
            <div className="my-2">
            <HiUserGroup className="text-2xl" />
            </div>
            <div>
              <p>F.Sc Pre-Engineering</p>
            </div>
          </div>
        </Link>
        <Link href="/icsPhysics">
          <div
            className={`pl-6 py-2 mx-5 rounded-full text-center cursor-pointer hover:drop-shadow-2xl
             mb-3 flex items-center transition-colors ${router.pathname == "/billing"
                ? "bg-orange-100 text-[#9697DB]"
                : "text-gray-400 hover:bg-[#b8bae6] hover:text-[#7072da]"
              }`}
          >
            <div className="mr-2">
            <HiUserGroup className="text-2xl" />
            </div>
            <div>
              <p>ICS (Physics)
              </p>
            </div>
          </div>
        </Link>
        <Link href="/icsStatistic">
          <div
            className={`pl-6 py-2 mx-5 rounded-full text-center cursor-pointer hover:drop-shadow-2xl
             mb-3 flex items-center transition-colors ${router.pathname == "/billing"
                ? "bg-orange-100 text-[#9697DB]"
                : "text-gray-400 hover:bg-[#b8bae6] hover:text-[#7072da]"
              }`}
          >
            <div className="mr-2">
            <HiUserGroup className="text-2xl" />
            </div>
            <div>
              <p>ICS (Statistic)
              </p>
            </div>
          </div>
        </Link>
        <Link href="/icom">
          <div
            className={`pl-6 py-2 mx-5 rounded-full text-center cursor-pointer hover:drop-shadow-2xl
             mb-3 flex items-center transition-colors ${router.pathname == "/billing"
                ? "bg-orange-100 text-[#9697DB]"
                : "text-gray-400 hover:bg-[#b8bae6] hover:text-[#7072da]"
              }`}
          >
            <div className="mr-2">
            <HiUserGroup className="text-2xl" />
            </div>
            <div>
              <p>I.Com
              </p>
            </div>
          </div>
        </Link>
        <Link href="/faIt">
          <div
            className={`pl-6 py-2 mx-5 rounded-full text-center cursor-pointer hover:drop-shadow-2xl
             mb-3 flex items-center transition-colors ${router.pathname == "/billing"
                ? "bg-orange-100 text-[#9697DB]"
                : "text-gray-400 hover:bg-[#b8bae6] hover:text-[#7072da]"
              }`}
          >
            <div className="mr-2">
            <HiUserGroup className="text-2xl" />
            </div>
            <div>
              <p>F.A(IT)
              </p>
            </div>
          </div>
        </Link>
        <Link href="/admissionFrom" >
          <div
            className={`pl-6 py-2 mx-5  text-center cursor-pointer hover:drop-shadow-2xl mb-2 rounded-full flex items-center transition-colors ${router.pathname == "/account"
              ? "bg-orange-100 text-[#9697DB]"
              : "text-gray-400 hover:bg-[#b8bae6] hover:text-[#7072da]"
              }`}
          >
            <div className="mr-2">
              <FcOvertime className="text-2xl" />
            </div>
            <div>
              <p>Admissin Page</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
