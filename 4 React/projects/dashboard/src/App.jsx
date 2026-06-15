import React from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import MainLayout from './layout/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContactEnquirys from './pages/Enquirys/ContactEnquirys';
import Newsletters from './pages/Enquirys/Newsletters';
import Users from './pages/Users/Users';
import ViewColor from './pages/color/ViewColor';
import AddColor from './pages/color/AddColor';
import ViewMaterial from './pages/Materials/ViewMaterial';
import AddMaterial from './pages/Materials/AddMaterial';
import AddCategory from './pages/ParentCategorys/AddCategory';
import ViewCategory from './pages/ParentCategorys/ViewCategory';
import AddSubCategory from './pages/SubCategorys/AddSubCategory';
import ViewSubCategory from './pages/SubCategorys/ViewSubCategory';
import AddSubSubCategory from './pages/SubSubCategorys/AddSubSubCategory';
import ViewSubSubCategory from './pages/SubSubCategorys/ViewSubSubCategory';
import AddProducts from './pages/Products/AddProducts';
import ViewProducts from './pages/Products/ViewProducts';
import ViewWhyChoose from './pages/WhyChooseUs/ViewWhyChoose';
import AddWhyChoose from './pages/WhyChooseUs/AddWhyChoose';
import Orders from './pages/Orders/Orders';
import ViewSliders from './pages/Sliders/ViewSliders';
import AddSliders from './pages/Sliders/AddSliders';
import AddCountry from './pages/Country/AddCountry';
import ViewCountry from './pages/Country/ViewCountry';
import AddTestimonials from './pages/Testimonials/AddTestimonials';
import ViewTestimonials from './pages/Testimonials/ViewTestimonials';
import AddFaqs from './pages/Faqs/AddFaqs';
import ViewFaqs from './pages/Faqs/ViewFaqs';
import Profile from './pages/userProfile/Profile';
import CompanyProfile from './pages/userProfile/CompanyProfile';
import Logout from './pages/userProfile/Logout';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },

  {
    path: '/dashboard',
    element: <MainLayout />,

    children: [

      // default dashboard page
      {
        index: true,
        element: <Dashboard />
      },

      // users page
      {
        path: 'users-view',
        element: <Users />
      }, {
        path: 'enquirys-contact',
        element: <ContactEnquirys />
      }, {
        path: 'enquirys-newsletters',
        element: <Newsletters />
      }, {
        path: 'color-add',
        element: <AddColor />
      }, {
        path: 'color-view',
        element: <ViewColor />
      }, {
        path: 'material-add',
        element: <AddMaterial />
      }, {
        path: 'material-view',
        element: <ViewMaterial />
      }, {
        path: 'category-add',
        element: <AddCategory />
      }, {
        path: 'category-view',
        element: <ViewCategory />
      }, {
        path: 'category-add-sub',
        element: <AddSubCategory />
      }, {
        path: 'category-view-sub',
        element: <ViewSubCategory />
      }, {
        path: 'category-add-sub-sub',
        element: <AddSubSubCategory />
      }, {
        path: 'category-view-sub-sub',
        element: <ViewSubSubCategory />
      }, {
        path: 'products-add',
        element: <AddProducts />
      }, {
        path: 'products-view',
        element: <ViewProducts />
      }, {
        path: 'why-choose-add',
        element: <AddWhyChoose />
      }, {
        path: 'why-choose-view',
        element: <ViewWhyChoose />
      }, {
        path: 'orders',
        element: <Orders />
      }, {
        path: 'sliders-add',
        element: <AddSliders />
      }, {
        path: 'sliders-view',
        element: <ViewSliders />
      }, {
        path: 'country-add',
        element: <AddCountry />
      }, {
        path: 'country-view',
        element: <ViewCountry />
      }, {
        path: 'testimonials-add',
        element: <AddTestimonials />
      }, {
        path: 'testimonials-view',
        element: <ViewTestimonials />
      }, {
        path: 'faqs-add',
        element: <AddFaqs />
      }, {
        path: 'faqs-view',
        element: <ViewFaqs />
      }, {
        path: 'profile',
        element: <Profile />
      }, {
        path: 'company-profile',
        element: <CompanyProfile />
      }, {
        path: 'logout',
        element: <Logout />
      },


    ]
  },
]);





const App = () => {
  return (<RouterProvider router={router} />)
}

export default App
