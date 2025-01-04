import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login');
  return (
    <div>
     
 <Navbar />
      
      <div className='min-h-[calc(100vh-306px)] w-11/12 mx-auto'>
        <Outlet />
      </div>
     
   {noHeaderFooter || <Footer />}
    </div>
  )
}

export default Main
