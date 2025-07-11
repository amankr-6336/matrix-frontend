import { createSlice } from "@reduxjs/toolkit";

const BlogListSlice = createSlice({
  name: "BlogListSlice",
  initialState: {
    blogs: [],
  },
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
    addBlog: (state, action) => {
      state.blogs.unshift(action.payload);
    },
    addCommentToPost: (state, action) => {
      const { postId, comment } = action.payload;
      const post = state.blogs.find((p) => p._id === postId);
      if (post) {
        post.comments.push(comment);
      }
    },
     deleteBlog: (state, action) => {
      const postId = action.payload;
      state.blogs = state.blogs.filter((blog) => blog._id !== postId);
    },
  },
});

export default BlogListSlice.reducer;
export const { setBlogs,deleteBlog, addBlog ,addCommentToPost} = BlogListSlice.actions;
