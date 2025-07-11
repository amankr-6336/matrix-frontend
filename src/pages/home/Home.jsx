import React, { useEffect} from "react";
import "./Home.scss";
import AddPost from "../../component/addPost/AddPost";
import Navbar from "../../component/Navbar/Navbar";
import useApi from "../../hooks/useApi";
import { handleGetAllPost } from "../../services/PostApi";
import { useDispatch, useSelector } from "react-redux";
import { setBlogs } from "../../redux/Slice/BlogSlice";
import Blog from "../../component/Blog/Blog";
import { handleGetUser } from "../../services/userApi";
import { setUser } from "../../redux/Slice/userSlice";

function Home() {
  const dispatch=useDispatch();
  const blogList=useSelector((state)=>state.BlogListReducer.blogs)
  const getBlogApi=useApi(handleGetAllPost);
  const getUserApi=useApi(handleGetUser);

  useEffect(()=>{
     getUser();
     handleGetAllBlog();
  },[])

  async function getUser(){
    try {
      const{success,data}=await getUserApi.execute();
      console.log(success,data);
      if(success){
        dispatch(setUser(data.result.user))
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleGetAllBlog(){
    try {
      const{success,data}=await getBlogApi.execute();
      if(success){
         dispatch(setBlogs(data.result.posts));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="home-container">
      <div className="navbar">
        <Navbar/>
      </div>
      <main className="main">
        <div className="filter"></div>
        <div className="blog-list">
          <AddPost />
          {blogList.map((data)=> <Blog key={data._id} blog={data}/> )}
        </div>
      </main>
    </div>
  );
}

export default Home;
