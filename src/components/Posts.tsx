import React, { useEffect, useState } from "react";
import { PostListType } from "../Type/PostListType";
import { useSelector } from "react-redux";
import store, { RootState } from "../store/store";
import { postAction } from "../constants/postAction.constant";
import PostItem from "./PostItem";

const Posts = () => {
  const posts: PostListType = useSelector((state: RootState) => state.posts);
  const [editId, setEditId] = useState("");

  useEffect(() => {
    store.dispatch({ type: postAction.GET, payload: [] });
  }, []);

  return (
    <div className='posts'>
      {posts.callingStatus === "isSuccess" &&
        posts.postList.map((item) => (
          <PostItem
            key={item.id}
            data={item}
            setEditId={(e) => setEditId(e)}
            editId={editId}
          />
        ))}
      {posts.callingStatus === "isLoading" && <p>Loading...</p>}
    </div>
  );
};

export default Posts;
