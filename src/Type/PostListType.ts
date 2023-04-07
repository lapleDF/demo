import { PostItemType } from "./PostItemType";

export interface PostListType {
  postList: PostItemType[];
  currentPage: number;
  prevPage: number;
  nexPage: number;
  totalPage: number;
}

export const initalPostListType: PostListType = {
  postList: [],
  currentPage: 1,
  prevPage: 0,
  nexPage: 0,
  totalPage: 1,
};
