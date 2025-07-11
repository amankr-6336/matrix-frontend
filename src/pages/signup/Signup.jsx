import React, { useState } from "react";
import "./Signup.scss";
import Input from "../../component/common/input/input";
import Button from "../../component/common/button/Button";
import { Link, useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { handlesignin } from "../../services/AuthApi";

function Signup() {
  const [userName, SetName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  const signInApi = useApi(handlesignin);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { success, data } = await signInApi.execute({
        userName,
        email,
        password,
      });
      if (success) {
        localStorage.setItem("accessToken", data.result.accessToken);
        navigate("/dashboard/setting");
        setEmail("");
        SetName("");
        setPassword("");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="auth-interface">
      <div className="auth-container">
        <p>Sign Up</p>
        <form onSubmit={handleSubmit}>
          <Input label="Name"  value={userName} onChange={SetName} />
          <Input label="Email" type="email" value={email} onChange={setEmail} />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </form>
        <p>
          Already have Account ? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
