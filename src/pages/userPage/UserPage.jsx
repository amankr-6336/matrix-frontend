import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import useApi from '../../hooks/useApi';
import { handleGetAuthorProfile } from '../../services/userApi';
import Navbar from '../../component/Navbar/Navbar';
import { setUser } from '../../redux/Slice/userSlice';
import AddPost from '../../component/addPost/AddPost';
import Blog from '../../component/Blog/Blog';
import './UserPage.scss'

function UserPage() {
  const[isMyProfile,setIsMyProfile]=useState(false);
  const params=useParams();
  const id=params.id;
  const dispatch=useDispatch();

  const getAuthorApi=useApi(handleGetAuthorProfile);
  const userData=useSelector((state)=>state.UserReducer.user);

  useEffect(()=>{
    getAuthor();

    if(userData?._id===params.id){
      setIsMyProfile(true);
    }

  },[isMyProfile, params.id]);


  async function getAuthor(){
    try {
      const {success,data}=await getAuthorApi.execute({id});
      if(success){
        dispatch(setUser(data.result.user))
      }
    } catch (error) {
       console.log(error);
    }
  }

  return (
    <div className="user-page">
       <Navbar/>
       <div className="blog-list">
          <AddPost />
          {userData?.posts?.map((data)=> <Blog key={data._id} blog={data}/> )}
        </div>
    </div>
  )
}

export default UserPage