import { GET_POSTS, SET_CATEGORY_POSTS, SET_LOADING } from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        categoryPosts: action.payload[0].posts,
        loading: false
      };
    case SET_CATEGORY_POSTS:
      return {
        ...state,
        categoryPosts: state.posts[action.payload].posts,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
