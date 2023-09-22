import { Link } from "react-router-dom"
import Logo from "../assets/images/Logo2.jpg"


const Navbar = () => {
  return (
    <div className="container  mx-auto px-8 shadow-md py-3 ">
      <div className="d-flex justify-content-between items-center ">
           <div className="">
             {/* <img className="w-40 p-0" src={Logo} alt="" /> */}
           <Link className="flex items-center" to={'/'} >
            <img className="w-16" src={Logo} alt="" /> <span className=" font-medium">UR</span>
             
           </Link>
           </div>
            <nav className="d-flex gap-9">
                  <Link to={'/login'} >
                    Login
                  </Link>
                  <Link to={'/register'} >
                    register
                  </Link>

            </nav>
      </div>
    </div>
  )
}

export default Navbar