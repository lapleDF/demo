import React from "react";
import { PostItemType } from "../Type/PostItemType";
import moment from "moment";

interface PropsPostType {
  data: PostItemType;
}
function PostItem(props: PropsPostType) {
  const { data } = props;
  return (
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
        <p className='post--content'>{data.body}</p>
      </div>
    </div>
  );
}

export default PostItem;
