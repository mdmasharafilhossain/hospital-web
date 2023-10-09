import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";


const Register = () => {
    const{createUser} = useContext(AuthContext);


    const handleRegister =e  =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name,email,password)



        createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
      }
    return (
        <div>
           <div className="mt-60 text-center ">
                <h2 className="text-4xl font-bold text-green-600">Please Register</h2>

                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password"className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-green-600 border-none font-bold text-white text-base hover:bg-green-700">Register</button>
                    </div>
                </form>
                <p className="text-xl mt-10">Already Have An Account?Please <Link to="/login" className="font-bold text-green-600">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;