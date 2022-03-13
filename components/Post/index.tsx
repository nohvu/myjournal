import React from 'react';
import styles from './Post.module.scss';
import { Paper, Typography } from '@mui/material';
import Image from 'next/image';
import { PostActions } from '../PostActions';
import Link from 'next/link';

interface PostProps {
  id: number;
  title: string;
  description: string;
  imageURL?: string;
}

export const Post: React.FC<PostProps> = ({ id, title, description, imageURL }) => {
  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        <Link href={`/news/${id}`}>
          <a>{title}</a>
        </Link>
      </Typography>
      <Typography className="mt-10 mb-15">{description}</Typography>
      <Image
        alt="news"
        src={
          imageURL ||
          'https://leonardo.osnova.io/53b95f05-e59f-5d91-9be8-8cb60f163403/-/preview/1300/-/format/webp/'
        }
        height={500}
        width={640}
      />
      <PostActions />
    </Paper>
  );
};
