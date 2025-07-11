import React, { useState } from 'react'
import Button from '../common/button/Button';
import Dialog from '../common/Dialog/Dialog';
import Input from '../common/input/input';
import useApi from '../../hooks/useApi';
import { handleAddPost } from '../../services/PostApi';
import { useDispatch } from 'react-redux';
import { addBlog } from '../../redux/Slice/BlogSlice';
import { addUserPost } from '../../redux/Slice/userSlice';

function AddPost() {
    const dispatch=useDispatch();
    const[openDialog,setOpenDialog]=useState(false);
    const[title,setTitle]=useState("");
    const[content,setContent]=useState("");

    const handleAddPostApi=useApi(handleAddPost);

    async function HandleAddPost(){
        try {
            const {success,data}=await handleAddPostApi.execute({
                title,
                content
            })
            console.log(success,data);
            if(success){
                dispatch(addBlog(data.result.posy))
                dispatch(addUserPost(data.result.posy));
            }

        } catch (error) {
            console.log(error);
        }
        finally{
            setOpenDialog(false);
        }
    }

    function ToggleDialog(){
        console.log("hii")
        setOpenDialog(!openDialog);
    }

  return (
    <div className="add-post">
        <Button onClick={ToggleDialog} >Add Post</Button>
        <Dialog title="Add Post" isOpen={openDialog} onClose={ToggleDialog} confirm={{text:"Add Post",onConfirm:HandleAddPost }} >
          
            <Input label="Title" value={title} onChange={setTitle} />
            <Input label="Content" textArea={true} value={content} onChange={setContent} />
        </Dialog> 
    </div>
  )
}

export default AddPost