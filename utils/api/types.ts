import { OutputData } from '@editorjs/editorjs';

export type LoginDto = {
  email: string;
  password: string;
};

export type CreateUserDto = {
  fullName: string;
} & LoginDto;

export type ResponseUser = {
  createdAt: string;
  email: string;
  fullName: string;
  id: number;
  token: string;
  updatedAt: string;
  commentsCount?: number;
};

export type PostItem = {
  title: string;
  body: OutputData['blocks'];
  description: string;
  tags: string[] | null;
  id: number;
  user: ResponseUser;
  views: number;
  createdAt: string;
  updatedAt: string;
};

export type CommentItem = {
  text: string;
  post: PostItem;
  id: number;
  user: ResponseUser;
  createdAt: string;
  updatedAt: string;
};
