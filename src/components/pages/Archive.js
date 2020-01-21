import React, { useEffect, useContext, useState } from "react";
import BlogContext from "../../context/blogContext";
import Loading from "../layout/Loading";
import Post from "./Post";

const Archive = () => {
  const blogContext = useContext(BlogContext);
  const {
    loading,
    getPosts,
    setCategoryPosts,
    categoryPosts,
    posts
  } = blogContext;

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="archive">
      <h1>Archive</h1>
      <div className="arc__categories">
        <button
          onClick={() => {
            setCategoryPosts(0);
          }}
        >
          Cinema
        </button>
        <button
          onClick={() => {
            setCategoryPosts(1);
          }}
        >
          Television
        </button>
        <button
          onClick={() => {
            setCategoryPosts(2);
          }}
        >
          Games
        </button>
        <button
          onClick={() => {
            setCategoryPosts(3);
          }}
        >
          Books
        </button>
        <button
          onClick={() => {
            setCategoryPosts(4);
          }}
        >
          Sports
        </button>
      </div>
      <div className="arc__wrapper">
        {categoryPosts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Archive;
