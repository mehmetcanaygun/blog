import React, { useReducer } from "react";
import BlogContext from "./blogContext";
import BlogReducer from "./blogReducer";
import axios from "axios";
import { GET_POSTS } from "./types";

const BlogState = props => {
  const initialState = {
    posts: [],
    loading: false
  };

  const [state, dispatch] = useReducer(BlogReducer, initialState);

  // Get Posts
  const getPost = () => {};

  return (
    <BlogContext.Provider
      value={{
        posts: state.posts,
        loading: state.loading
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
