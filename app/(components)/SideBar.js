'use client'
import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { HiUserGroup } from 'react-icons/hi'
import { FcOvertime } from 'react-icons/fc'
import { ImBooks } from 'react-icons/im'

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <picture className="pt-5">
          <img
            className="w-32 h-auto"
            src="/saylani.jpg"
            alt="company logo"
          />
        </picture>
      </div>

      <div className="flex flex-col">
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 text-center cursor-pointer rounded-full  hover:drop-shadow-2xl mb-3 flex items-center transition-colors ${router.pathname == "/"
                ? "bg-orange-100 text-[#9697DB]"
                : "text-gray-400 hover:bg-[#b8bae6] hover:text-[#7072da]"
              }`}
          >
            <div className="mr-2">

              <HiUserGroup className="h-5 w-5" />
            </div>
            <div>
              <p>Students</p>
            </div>
          </div>
        </Link>
        <Link href="/account" >
          <div
            className={`pl-6 py-3 mx-5  text-center cursor-pointer hover:drop-shadow-2xl mb-3 rounded-full flex items-center transition-colors ${router.pathname == "/account"
                ? "bg-orange-100 text-[#9697DB]"
                : "text-gray-400 hover:bg-[#b8bae6] hover:text-[#7072da]"
              }`}
          >
            <div className="mr-2">
              <FcOvertime className="h-5 w-5" />
            </div>
            <div>
              <p>Attendence</p>
            </div>
          </div>
        </Link>
        <Link href="/billing">
          <div
            className={`pl-6 py-3 mx-5 rounded-full text-center cursor-pointer hover:drop-shadow-2xl
             mb-3 flex items-center transition-colors ${router.pathname == "/billing"
                ? "bg-orange-100 text-[#9697DB]"
                : "text-gray-400 hover:bg-[#b8bae6] hover:text-[#7072da]"
              }`}
          >
            <div className="mr-2">
              <ImBooks className="h-5 w-5" />
            </div>
            <div>
              <p>Courses</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
