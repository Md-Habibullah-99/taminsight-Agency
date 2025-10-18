import React from 'react'

import { HashRouter, Route, Routes } from 'react-router-dom'

import Home from './components/Pages/Home'
import Affiliate from './components/Pages/Affiliate'
import Partnership from './components/Pages/Partnership'
import AffiliateFormPage from './components/Pages/AffiliateFormPage'
import Layout from './components/sub_components/Layout'
import ScrollToTop from './components/sub_components/ScrollToTop'

function App() {
  
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="/affiliate_form" element={<AffiliateFormPage />} />
            <Route path="/partnership" element={<Partnership />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
