import React from 'react'
import './AuthorInfo.scss'
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function AuthorInfo({name,id}) {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/user/${id}`)} className="author-info">
        <span> <FaUser/> </span>
        <p>{name}</p>
    </div>
  )
}

export default AuthorInfo