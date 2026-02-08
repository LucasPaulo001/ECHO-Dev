import { Types } from "mongoose";

export type DTOEchoCreate = {
  _id?: string;
  projectId: Types.ObjectId;
  authorId: Types.ObjectId;
  title: string;
  content: string;
};
