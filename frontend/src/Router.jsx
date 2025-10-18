import React, { useState } from 'react'
import { Routes, Route  } from 'react-router-dom'
import pages from "./pages/exports"
import donors from './data'

const Router = () => {
  return (
    <Routes>

 <Route path='/' element={<pages.Home/>}/>
 <Route path='/About' element={<pages.About/>}/>
 <Route path='/Contact' element={<pages.Contact/>}/>
 <Route path='/Login' element={<pages.Login/>}/>
 <Route path='/Register' element={<pages.Register/>}/>
 <Route path='/Dashboard' element={<pages.Dashboard/>}/>
 <Route path='/Profile/:id' element={<pages.Profile/>}/>
 <Route path='/Forget' element={<pages.Forget/>}/>
 <Route path='/SearchPage' element={<pages.SearchPage/>}/>
 <Route path='/RegisterProfile' element={<pages.RegisterProfile data={donors}/>}/>
 <Route path='/FullRegister' element={<pages.FullRegister />}/>

    </Routes>
  )
}
export default Router
