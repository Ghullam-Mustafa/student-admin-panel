import {GiBookshelf} from "react-icons/gi"
export default function Headercard() {
  return (
    <>

      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="rounded-lg bg-white h-40 shadow-sm border-b-8 border-[#7072da] ">
            <div className="flex justify-between px-8 py-2 ">
             <p className="  font-sans text-xl ">Total Courses</p>
              <div className="rounded-full p-2 bg-[#7072da]">
                <GiBookshelf className="text-lg"/>
              </div>
            </div>
        </div>
        <div className="rounded-lg bg-white h-40 shadow-sm"></div>
        <div className="rounded-lg bg-white h-40 shadow-sm"></div>
      </div>
      <div className="grid col-1 bg-white h-96 rounded-lg shadow-sm"></div>
    </>
  )
}
