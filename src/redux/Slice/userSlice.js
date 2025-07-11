import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    user: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    deleteUserPost: (state, action) => {
      const postId = action.payload;
      if (state.user?.posts) {
        state.user.posts = state.user.posts.filter(
          (post) => post._id !== postId
        );
      }
    },
     addUserPost: (state, action) => {
      const newPost = action.payload;
      if (state.user?.posts) {
        state.user.posts.unshift(newPost); 
      } else {
        state.user.posts = [newPost];
      }
    },
      addCommentToUserPost: (state, action) => {
      const { postId, comment } = action.payload;
      const post = state.user?.posts?.find((p) => p._id === postId);
      if (post) {
        if (!post.comments) post.comments = [];
        post.comments.push(comment); 
      }
    },
  },
});

export default UserSlice.reducer;
export const { setUser,deleteUserPost,addUserPost ,addCommentToUserPost } = UserSlice.actions;
