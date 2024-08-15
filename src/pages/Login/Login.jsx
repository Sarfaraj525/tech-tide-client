
import login from "../../assets/images/login/loginimg.jpg";
import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
  
      const email = form.email.value;
      const password = form.password.value;
  
      // console.log(email, password);
      signInUser(email, password)
        .then((result) => {
          console.log(result.user);
          form.reset();
          navigate("/");
  
          Swal.fire({
            icon: "success",
            title: "Logged in successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: "Invalid email or password. Please try again.",
          });
        });
    };


    const handleGoogleLogIn = () => {
        signInWithGoogle()
          .then((result) => {
            console.log(result.user);
            Swal.fire({
              icon: "success",
              title: "Logged in successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            console.error(error);
          });
      };
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        
        <div className="mr-12 w-1/2">
          <img src={login} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl text-center font-bold text-orange-500">
              Login
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-warning bg-orange-500 text-xl"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="text-center my-4">
            New here? Please{" "}
            <Link to="/register">
              <button className="btn btn-link text-orange-500 text-xl">
                Register
              </button>
            </Link>{" "}
          </p>
          <div>
            <p className="text-center mb-10">
              <button
                onClick={handleGoogleLogIn}
                className="btn btn-warning bg-orange-500 "
              >
                Google
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;