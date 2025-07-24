import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
    return (
    <div className=' bg-black min-h-screen w-full flex flex-col ' >
  <Navbar/>


 <main className=' flex-grow'>

  <div className=' flex flex-col items-center justify-center mt-8 p-12'>
    <h1 className=' font-bold text-5xl p-2'>Welcome to Projecto</h1>
    <p className=' font-light text-md'>Your Projects, Managed Smarter</p>
  </div>


<div>
  <h2 className=' flex items-center justify-center text-3xl'>Our Features</h2>
</div>
  <div className=' grid  grid-cols-1 md:grid-cols-2 sm:justify-items-center xl:place-items-start lg:grid-cols-4 ' >

   <div className="card bg-base-200 text-neutral-content m-8 lg:w-56 w-66  ">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Projects</h2>
    <p>create your own project with ease</p>
  </div>
</div>



 <div className="card bg-base-200 text-neutral-content m-8 lg:w-56 w-66">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Member</h2>
    <p>Add members to your project</p>
  </div>
</div>
  

   <div className="card bg-base-200 text-neutral-content m-8 lg:w-56 w-66">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Notes</h2>
    <p>Add notes in your project</p>
  </div>
</div>
  

 <div className="card bg-base-200 text-neutral-content m-8 lg:w-56 w-66">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Tasks</h2>
    <p>Assign tasks and subtasks in your project</p>
  </div>
</div>


  </div>
</main>

<Footer/>


    </div>
  )
}

export default Home