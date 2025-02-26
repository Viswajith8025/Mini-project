import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { CeLogin } from './CE/Login.jsx'
import Signup from './CE/Signup.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AdminUserList } from './CE/Adminusers.jsx';
import Home2 from './CE/Home2.jsx'
import ReportIssueForm from './CE/Reportissue.jsx'
import CEUserprofile from './CE/Userprofile.jsx'
import CEHome from './CE/Home.jsx'
import InvoiceApp from './CE/Invoice.jsx'
import MyComplaints from './CE/Mycomplaints.jsx'
import Home3 from './CE/Home3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/celogin" element={<CeLogin />} />
      <Route path="/cesignup" element={<Signup />} />
      <Route path="/ceadminuser" element={<AdminUserList />} />
      <Route path="/cehome" element={<CEHome/>} />
      <Route path="/cehome2" element={<Home2 />} />
      <Route path="/cereportissue" element={<ReportIssueForm />} />
      <Route path="/ceuserprofile" element={<CEUserprofile/>} />
      <Route path="/invoice" element={<InvoiceApp />} />
      <Route path="/cemycomplaints" element={<MyComplaints/>} />
      <Route path="/cehome3" element={<Home3/>} />









    </Routes>
    </BrowserRouter>
    
    
  </StrictMode>

  ,)
