import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Layout from './components/Layout.jsx'
import AboutUs from './components/about.jsx';
import Home from './components/home.jsx'
import ContactForm from './components/contactus.jsx';
import TechnologyUsersEmailList from './components/professional_emailLIst.jsx';
import DataLicensingService from './components/data-licensing.jsx';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout />}>
       <Route path='/' element={<Home />} />
      <Route path='aboutus' element={<AboutUs />} />
      <Route path='contactus' element={<ContactForm />} />
      <Route path='solutions' element={<TechnologyUsersEmailList />} />
      <Route path='services' element={<DataLicensingService />} />
      

    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);