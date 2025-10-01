import React from 'react'

import { HashRouter, Route, Routes } from 'react-router-dom'

import Home from './components/Pages/Home'
import Affiliate from './components/Pages/Affiliate'
import Layout from './components/sub_components/Layout'

function App() {
  
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/affiliate" element={<Affiliate />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
