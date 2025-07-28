import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Layout from './layout/Layout'
import MyProjects from './pages/MyProjects'
import Profile from './pages/Profile'
import Project from './components/Project'
import Task from './pages/Task'

 import { Toaster } from 'react-hot-toast';
 <Toaster position="top-right" reverseOrder={false} />

const App = () => {
  return (
   
    <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
   <Route path='/signup' element={<Signup/>} />

 <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/myprojects" element={<MyProjects />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/project" element={<Project/>} />
          <Route path="/task" element={<Task/>} />
        {/* You can add more sidebar pages here */}
      </Route>

    </Routes>

  )
}

export default App