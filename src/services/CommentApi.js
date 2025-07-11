import { axiosClient } from "../utils/AxiosClient"

export const handleAddComment= async({text,postId})=>{
   return  axiosClient.post('/comment/addcomment',{
     text,
     postId
   })
}