import React, { useState } from "react";
import "./Login.scss";
import Input from "../../component/common/input/input";
import Button from "../../component/common/button/Button";
import { Link, useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { handleLogin } from "../../services/AuthApi";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLoginApi = useApi(handleLogin);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { success, data } = await handleLoginApi.execute({
        email,
        password,
      });
      if (success) {
        localStorage.setItem("accessToken", data.result.accessToken);
        navigate("/");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="auth-interface">
      <div className="auth-container">
        <p>Login</p>
        <form onSubmit={handleSubmit}>
          <Input label="Email" value={email} onChange={setEmail} />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </form>
        <p>
          Dont have Account ? <Link to="/signup">SignUp</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
