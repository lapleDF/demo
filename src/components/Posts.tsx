import React, { useEffect } from "react";
import { PostListType } from "../Type/PostListType";
import { useSelector } from "react-redux";
import store, { RootState } from "../store/store";
import { postAction } from "../constants/postAction.constant";
import PostItem from "./PostItem";

const Posts = () => {
  const posts: PostListType = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    store.dispatch({ type: postAction.GET, payload: [] });
  }, []);

  return (
    <div className='posts'>
      {posts.postList.map((item) => (
        <PostItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Posts;
