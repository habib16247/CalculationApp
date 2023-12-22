import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Header from './../../Components/Layout/Header';
import Footer from './../../Components/Layout/Footer';
import Loadding from '../Users/Loadding';

const MainLayout = () => {
  const navigation = useNavigation();



  
  return (
    <div className='container'>
      <Header/>
      <div className="page-data">
        {
          navigation.state === "loading" ? (<Loadding />) : (
            <>
              <Outlet />
              <Footer />
            </>
          )
        }
      </div>
      
    
    </div>
  )
}

export default MainLayout