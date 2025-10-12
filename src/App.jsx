import React from 'react'

import { HashRouter, Route, Routes } from 'react-router-dom'

import Home from './components/Pages/Home'
import Affiliate from './components/Pages/Affiliate'
import AffiliateFormPage from './components/Pages/AffiliateFormPage'
import Layout from './components/sub_components/Layout'

function App() {
  
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="/affiliate_form" element={<AffiliateFormPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
