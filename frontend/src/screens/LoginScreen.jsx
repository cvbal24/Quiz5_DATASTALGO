import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginScreen = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      navigate("/home");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">Login</h2>

            <form onSubmit={handleLogin}>

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

              <button className="btn btn-primary w-100">
                Login
              </button>

            </form>

            <p className="text-center mt-3">
              Don't have an account? <Link to="/register">Register</Link>
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginScreen;