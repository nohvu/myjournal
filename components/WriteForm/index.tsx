import React from 'react';
import { Input, Button } from '@mui/material';
import styles from './WriteForm.module.scss';
import dynamic from 'next/dynamic';
import { Api } from '../../utils/api';
import { PostItem } from '../../utils/api/types';
import { useRouter } from 'next/router';

const Editor = dynamic(() => import('../Editor').then((m) => m.Editor), { ssr: false });

interface WriteFormProps {
  data?: PostItem;
}

export const WriteForm: React.FC<WriteFormProps> = ({ data }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [title, setTitle] = React.useState(data?.title || '');
  const [blocks, setBlocks] = React.useState(data?.body || []);

  const onAddPost = async () => {
    try {
      setIsLoading(true);
      const obj = {
        title,
        body: blocks,
      };
      if (!data) {
        const post = await Api().post.create(obj);
        await router.push(`/write/${post.id}`);
      } else {
        await Api().post.update(data.id, obj);
      }
    } catch (error) {
      console.warn('Create post!', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        classes={{ root: styles.titleField }}
        placeholder="Заголовок"
      />
      <div className={styles.editor}>
        <Editor initialBlocks={data?.body} onChange={(arr) => setBlocks(arr)} />
      </div>
      <Button
        disabled={isLoading || !blocks.length || !title}
        className={styles.btn}
        onClick={onAddPost}
        variant="contained"
        color="primary">
        {data ? 'Сохранить' : 'Опубликовать'}
      </Button>
    </div>
  );
};
