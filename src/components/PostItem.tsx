import React, { useEffect, useRef, useState } from "react";
import { PostItemType, initialPostItem } from "../Type/PostItemType";
import moment from "moment";
import FormEditPost from "./FormEditPost";

interface PropsPostType {
  data: PostItemType;
  setEditId: (id: string) => void;
  editId: string;
}
function PostItem(props: PropsPostType) {
  const { data } = props;

  return (
    <div className='post-item--wrapper'>
      {data.id === props.editId && (
        <FormEditPost data={data} setEditId={props.setEditId} />
      )}
      <div className='post-item' id={`${data.category}${data.createdAt}`}>
        <div className='post__top'>
          <p className='post--title'>{data.title}</p>
          <p className='post--created'>
            {moment(data.createdAt).format("MMM Do YY")}
          </p>
        </div>
        <div className='post__center'>
          <img className='post--img' src={data.cover} alt={data.title} />
          <a
            className='post--category'
            href={`#${data.category}${data.createdAt}`}
          >
            {data.category}
          </a>
          <div className='post--views'>{data.views}</div>
          <button
            className='post--edit'
            onClick={() => {
              props.setEditId(data.id);
            }}
          >
            Edit
          </button>
          <p className='post--content'>{data.body}</p>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
