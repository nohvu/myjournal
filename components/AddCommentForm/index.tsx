import React from 'react';
import { Input, Button } from '@mui/material';
import styles from './AddCommentForm.module.scss';

export const AddCommentForm: React.FC = () => {
  const [clicked, setClicked] = React.useState(false);
  const [text, setText] = React.useState('');
  const onAddComment = () => {
    setClicked(false);
    setText('');
  };

  return (
    <div className={styles.form}>
      <Input
        onChange={(e) => setText(e.target.value)}
        value={text}
        onFocus={() => setClicked(true)}
        classes={{ root: styles.fieldRoot }}
        minRows={clicked ? 5 : 1}
        placeholder="Написать комментарий..."
        fullWidth
        multiline
      />
      {clicked && (
        <Button
          onClick={onAddComment}
          className={styles.addButton}
          variant="contained"
          color="primary">
          Опубликовать
        </Button>
      )}
    </div>
  );
};
