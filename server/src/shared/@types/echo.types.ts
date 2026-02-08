import { Types } from "mongoose";

export type TEcho = {
  _id?: string;
  projectId: Types.ObjectId;
  authorId: Types.ObjectId;
  title: string;
  content: string;
};
