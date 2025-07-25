import React from 'react'
import {Link} from 'react-router-dom'
import { BiHomeAlt } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className='flex flex-col items-center  min-h-screen w-48 text-white p-10 border-2 border-white-600'>

        <div className=' p-4'>
            <h1 className=' text-2xl font-bold'>Projecto</h1>
      <div className="divider w-24"></div>
        </div>


        <main className=' flex flex-grow flex-col items-center mt-4 gap-6'>

          <Link to={'/dashboard'} className=' text-[18px] flex px-6 py-3 rounded-sm  cursor-pointer items-center hover:bg-base-200 justify-center gap-2' >
           <BiHomeAlt />
           DashBoard
           </Link>

 <Link to={'/myprojects'} className=' text-[18px] flex px-6 py-3 rounded-sm  cursor-pointer items-center hover:bg-base-200 justify-center gap-2' >
           <GrProjects />
           MyProjects
           </Link>

    
        </main>

<div className="dropdown dropdown-top">
  <div
    tabIndex={0}
    role="button"
    className="flex items-start justify-start gap-2 px-4 py-2 border border-white-600 rounded text-white hover:bg-white/20 cursor-pointer"
  >
    <CiSettings className="text-xl" />
    <h2 className="text-[14px] whitespace-nowrap">Gaurav Sharma</h2>
  </div>

  <ul
    tabIndex={0}
    className="dropdown-content menu bg-base-200 rounded-box z-10 w-52 p-2 shadow"
  >
    <li><Link to="/profile">Profile</Link></li>
    <li><a>Logout</a></li>
  </ul>
</div>




    </div>
  )
}

export default Sidebar