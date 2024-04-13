
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../Context/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(authContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('log Out Successfully')
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const navItem = <>
        <li className="mr-6"><NavLink to=''>Home</NavLink></li>
        <li className="mr-6"><NavLink to='/login'>Login</NavLink></li>
        <li className="mr-6"><NavLink to='/register'>Register</NavLink></li>
        <li className="mr-6"><NavLink to='/profileinfo'>ProfileInfo</NavLink></li>
        {
            user && <li className="mr-6"><NavLink to='/deshboard'>Deshboard</NavLink></li>
        }
    </>
    return (
        <div className="navbar bg-base-100 max-w-6xl mx-auto py-5">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <a className=" text-2xl font-bold uppercase">FullAuth</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="avatar mr-5">
                            <div className="w-12 rounded-full ring ring-green-700 ring-offset-base-100 ring-offset-1">
                                <img src={user.photoURL} />
                            </div>
                        </div>
                        <a onClick={handleLogOut} className="btn bg-green-700 text-white rounded-none px-6 text-base">Logout</a>
                    </> :

                        <Link className="btn bg-green-700 text-white rounded-none px-6 text-base" to='/login'>Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;