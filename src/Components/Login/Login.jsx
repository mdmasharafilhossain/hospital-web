import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";



const Login = () => {
    const {SignIn} = useContext(AuthContext)
    const handleLogin =e  =>{
      e.preventDefault();
      console.log(e.currentTarget);
      const form = new FormData(e.currentTarget);
      const email = form.get('email')
        const password = form.get('password')
      SignIn(email,password)
      .then(result =>{
        console.log(result.user);
        Swal.fire({
            title: 'Log In',
            text: 'Log In Successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
      })
      .catch(error =>{
        console.error(error)
      })
    }
    return (
        <div>
            <div className="mt-60 text-center ">
                <h2 className="text-4xl font-bold text-green-600">Please login</h2>

                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password"
                        name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-green-600 border-none font-bold text-white text-base hover:bg-green-700">Login</button>
                    </div>
                </form>
                <p className="text-xl mt-10">New Here?Please <Link to="/register" className="font-bold text-green-600">Register</Link></p>
            </div>








        </div>
    );
};

export default Login;