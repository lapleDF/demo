export interface PostItemType {
  body: string;
  category: string;
  cover: string;
  createdAt: string;
  id: string;
  isDraft: boolean;
  title: string;
  views: number;
}

export const initialPostItem = {
  body: "body initial",
  category: "category initial",
  cover: "cover initial",
  createdAt: "createdAt initial",
  id: "id initial",
  isDraft: true,
  title: "title initial",
  views: 0,
};
