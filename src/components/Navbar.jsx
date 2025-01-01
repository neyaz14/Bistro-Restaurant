import { useContext } from 'react'
import logo from '../assets/logo.png'
import { AuthContext } from '../providers/AuthProvider'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  return (
    <div className='flex items-center  w-full px-12   z-50 bg-opacity-30 bg-black mx-auto fixed  text-white'>
      <div className='flex-1'>
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-auto h-7' src={logo} alt='' />
          <span className='font-bold'>Bistro Boss Restuarant</span>
        </Link>
      </div>

      <div className='flex-none items-center'>
        <ul className='menu menu-horizontal px-1 flex justify-center items-center'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <div className='lg:flex hidden'>
            <li>
              <Link to='/menu'>Menu</Link>
            </li>
          </div>

          {!user && (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}




          {user && (
            <div className='dropdown dropdown-end z-50'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle  avatar'
              >
                <div title={user?.displayName} className='w-10 rounded-full'>
                  <img
                    referrerPolicy='no-referrer'
                    alt='User Profile Photo'
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black font-medium bg-white bg-opacity-45 rounded-box w-52'
              >
                <li>
                  <Link to='/menu' className='justify-between'>
                    Menu
                  </Link>
                </li>
                <li>
                  <Link to='/my-posted-jobs'>My Posted Jobs</Link>
                </li>
                <li>
                  <Link to='/my-bids'>My Bids</Link>
                </li>
                <li>
                  <Link to='/bid-requests'>Bid Requests</Link>
                </li>
                <li className='mt-2'>
                  <button
                    onClick={logOut}
                    className='bg-gray-200 block text-center'
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </ul>


      </div>
    </div>
  )
}

export default Navbar
