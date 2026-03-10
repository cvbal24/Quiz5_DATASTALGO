import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const RegisterScreen = () => {

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if(name && email && password){
      navigate("/");
    }
  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">Register</h2>

            <form onSubmit={handleRegister}>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>

              <button className="btn btn-success w-100">
                Register
              </button>

            </form>

            <p className="text-center mt-3">
              Already have an account? <Link to="/">Login</Link>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default RegisterScreen;