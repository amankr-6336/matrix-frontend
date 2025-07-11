import { configureStore } from "@reduxjs/toolkit";
import BlogListReducer from './Slice/BlogSlice';
import UserReducer from './Slice/userSlice'
export default configureStore({
    reducer:{
       BlogListReducer,
       UserReducer
    }
})