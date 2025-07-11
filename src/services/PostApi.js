
import { axiosClient } from "../utils/AxiosClient"

export const handleAddPost= async({title,content})=>{
   return  axiosClient.post('/post/create',{
     title,
     content
   })
}

export const handleGetAllPost= async()=>{
   return  axiosClient.get('/post/getall');
}


export const handleDeletePost=async({id})=>{
   return axiosClient.delete(`/post/delete/${id}`);
}
