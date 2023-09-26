import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../assets/images/Logo2.jpg';

const Navbar = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);

  return (
    <div className="container mx-auto px-8 shadow-md py-3">
      <div className="d-flex justify-content-between items-center">
        <div className="">
          <Link className="flex items-center" to={'/'}>
            <img className="w-16" src={Logo} alt="" /> <span className="font-medium">UR</span>
          </Link>
        </div>
        <nav className="d-flex gap-9 items-center">
          {loggedIn ? (
            <>
              <p className=' text-xl font-medium '>{user.username}</p>
              <div className="btn btn-danger">Log Out</div>
            </>
          ) : (
            <>
              <Link to={'/login'}>Login</Link>
              <Link to={'/register'}>Register</Link>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
