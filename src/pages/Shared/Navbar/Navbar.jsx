// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";
// import logo from "../../../assets/Logo.jpg";
// import { useContext } from "react";
// import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
//   const { logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log me out!",
      cancelButtonText: "No, keep me logged in",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            console.log("User logged out successfully");
            Swal.fire({
              icon: "success",
              title: "Logged out successfully!",
              timer: 1500,
              showConfirmButton: false,
            });
          })
          .catch((error) => {
            console.error(error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          });
      }
    });
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/login">Login</Link>
      </li>
      
      <li>
        <Link to="/register">Register</Link>
      </li>

      {/* <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/addFood">Add Food</Link>
      </li>
      <li>
        <Link to="/availableFoods">Available Foods</Link>
      </li>
      <li>
        <Link to="/manageMyFoods">My Foods</Link>
      </li>
      <li>
        <Link to="/myFoodRequest">Food Request</Link>
      </li> */}
    </>
  );
  return (
    <div className="navbar bg-base-100 h-28 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        {/* <Link to="/" className="btn btn-ghost text-xl">
          <img className="h-14 w-16 " src={logo} alt="" />
        </Link> */}
        <div>
          <h2 className="text-2xl font-bold">
            <span className="text-orange-500">Tech</span>
            <span className="text-sky-500">Tide</span>
          </h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <a onClick={handleLogOut} className="btn btn-sm">
          Sign Out
        </a>
      </div>
    </div>
  );
};

export default Navbar;
