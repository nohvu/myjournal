import { MainLayout } from '../../layouts/MainLayout';
import { FullPost } from '../../components/FullPost';
import React from 'react';
import { PostComments } from '../../components/PostComments';
import { GetServerSideProps, NextPage } from 'next';
import { PostItem } from '../../utils/api/types';
import { Api } from '../../utils/api';

interface FullPostPageProps {
  post: PostItem;
}

const FullPostPage: NextPage<FullPostPageProps> = ({ post }) => {
  return (
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost title={post.title} blocks={post.body} />
      <PostComments />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const id = ctx.params.id;
    const post = await Api(ctx).post.getOne(+id);

    return { props: { post } };
  } catch (error) {
    console.error('Ошибка получения полной статьи', error);
    return {
      props: {},
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

export default FullPostPage;
