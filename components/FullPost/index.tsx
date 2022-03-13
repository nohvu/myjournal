import { Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { PostActions } from '../PostActions';
import MessageIcon from '@mui/icons-material/TextsmsOutlined';
import UserAddIcon from '@mui/icons-material/PersonAddOutlined';

import styles from './FullPost.module.scss';
import { OutputData } from '@editorjs/editorjs';

interface FullPostProps {
  title: string;
  blocks: OutputData['blocks'];
}

export const FullPost: React.FC<FullPostProps> = ({ title, blocks }) => {
  return (
    <Paper elevation={0} className={styles.paper}>
      <div className="container">
        <Typography variant="h4" className={styles.title}>
          {title}
        </Typography>
        <div className={styles.text}>
          {blocks.map((obj) => (
            <Typography key={obj.id} dangerouslySetInnerHTML={{ __html: obj.data.text }} />
          ))}

          <div style={{ width: 250, marginLeft: -14 }}>
            <PostActions />
          </div>
          <div className="d-flex justify-between align-center mt-30 mb-30">
            <div className={styles.userInfo}>
              <img
                src="data:image/png;base64,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"
                alt="Avatar"
              />
              <b>Tho Berzloev</b>
              <span>+1685</span>
            </div>
            <div className={styles.butActions}>
              <Button variant="contained" className="mr-15">
                <MessageIcon />
              </Button>
              <Button variant="contained">
                <UserAddIcon />
                <b className="ml-10">Подписаться</b>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};
