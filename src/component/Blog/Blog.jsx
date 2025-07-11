import React, { useState } from "react";
import "./Blog.scss";
import AuthorInfo from "../authorInfo/AuthorInfo";
import Input from "../common/input/input";
import Button from "../common/button/Button";
import useApi from "../../hooks/useApi";
import { handleAddComment } from "../../services/CommentApi";
import Comment from "../comment/Comment";
import { useDispatch, useSelector } from "react-redux";
import { addCommentToPost, deleteBlog } from "../../redux/Slice/BlogSlice";
import { handleDeletePost } from "../../services/PostApi";
import { addCommentToUserPost, deleteUserPost } from "../../redux/Slice/userSlice";

function Blog({ blog }) {
  const { title, content } = blog;
  const userData = useSelector((state) => state.UserReducer.user);

  const [addComment, setAddComment] = useState("");
  const AddCommentApi = useApi(handleAddComment);
  const deleteCommentApi = useApi(handleDeletePost);
  const dispatch = useDispatch();

  async function HandleAddComment() {
    try {
      const { success, data } = await AddCommentApi.execute({
        text: addComment,
        postId: blog._id,
      });
      if (success) {
        dispatch(
          addCommentToPost({
            postId: blog._id,
            comment: data.result.comment,
          })
        );
        dispatch(addCommentToUserPost({
          postId:blog._id,
          comment:data.result.comment
        }))
        setAddComment("");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(id) {
    try {
      const { success, data } = await deleteCommentApi.execute({ id });
      console.log(success, data);
      if (success) {
        dispatch(deleteUserPost(id));
        dispatch(deleteBlog(id));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="blogs">
      <div className="author">
        <AuthorInfo name={blog.author.userName} id={blog.author._id} />
        {userData?._id === blog?.author?._id && (
          <Button size="small" onClick={() => handleDelete(blog._id)}>Delete</Button>
        )}
      </div>
      <div className="blog-content">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
      <div className="blog-comment">
        <div className="add-comment">
          <Input value={addComment} onChange={setAddComment} />
          <Button size="small"  onClick={HandleAddComment}>
            Add Comment
          </Button>
        </div>

        <div className="comment-list">
          {blog.comments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
