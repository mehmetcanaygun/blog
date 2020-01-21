import React, { useReducer } from "react";
import BlogContext from "./blogContext";
import BlogReducer from "./blogReducer";
import axios from "axios";
import { GET_POSTS, SET_CATEGORY_POSTS, SET_LOADING } from "./types";

const BlogState = props => {
  const initialState = {
    posts: [],
    categoryPosts: [],
    loading: false
  };

  const [state, dispatch] = useReducer(BlogReducer, initialState);

  // Get Posts
  const getPosts = async () => {
    setLoading();

    const res = await axios.get("./files/posts.json");

    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  };

  // Set Category Posts
  const setCategoryPosts = id => {
    setLoading();

    dispatch({
      type: SET_CATEGORY_POSTS,
      payload: id
    });
  };

  // Set Loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  return (
    <BlogContext.Provider
      value={{
        posts: state.posts,
        categoryPosts: state.categoryPosts,
        loading: state.loading,
        getPosts,
        setCategoryPosts
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
