import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Main = () => {
  return (
    <div className='mx-auto '>
      {/* Navbar */}
      <Navbar />
      {/* Outlet */}
      <div className='min-h-[calc(100vh-306px)] w-11/12 mx-auto'>
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Main
