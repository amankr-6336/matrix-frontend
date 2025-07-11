import React from "react";
import Button from "../common/button/Button";
import { IoIosLogOut } from "react-icons/io";
import "./Navbar.scss";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { handleLogout } from "../../services/userApi";

function Navbar() {
  const userData = useSelector((state) => state.UserReducer.user);
  console.log(userData);
  const navigate = useNavigate();
  const logoutApi = useApi(handleLogout);

  async function Logout() {
    try {
      const { success } = await logoutApi.execute();
      if (success) {
        localStorage.removeItem("accessToken");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <nav>
      <p style={{cursor:"pointer"}} onClick={()=>navigate('/')}>Blogs</p>
      <div className="user">
        <span style={{cursor:"pointer"}} onClick={() => navigate(`/user/${userData._id}`)}>
          <FaUser />
        </span>
        <Button type="plain" onClick={Logout}>
          <IoIosLogOut  />
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
