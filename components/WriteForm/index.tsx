import React from 'react';
import { Input, Button } from '@mui/material';
import styles from './WriteForm.module.scss';
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('../Editor').then((m) => m.Editor), { ssr: false });

interface WriteFormProps {
  title?: string;
}

export const WriteForm: React.FC<WriteFormProps> = ({ title }) => {
  return (
    <div>
      <Input classes={{ root: styles.titleField }} placeholder="Заголовок" defaultValue={title} />
      <div className={styles.editor}>
        <Editor />
      </div>
      <Button variant="contained" color="primary">
        Опубликовать
      </Button>
    </div>
  );
};
