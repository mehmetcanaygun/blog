import React from "react";

const Post = ({ post: { id, userId, title, body, date } }) => {
  return (
    <div className="arc__wrapper__post">
      <h2 className="post-title">{title}</h2>
      <p className="post-date">{date}</p>
      <p className="post-body">{body}</p>
      <p className="user-id">{userId}</p>
    </div>
  );
};

export default Post;
