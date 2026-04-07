import React, { Fragment } from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Root from './components/layout/Root'
import Details from './components/Details'
import Signup from './components/Signup'
import Login from './components/Login'
import Admin from './components/Admin'

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Root />}>
          <Route index element={<Home />} />
          <Route path='book/:id' element={<Details />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Admin />} />
        </Route>
      </Routes>
    </Fragment>
  )
}

export default App
