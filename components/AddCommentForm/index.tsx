import React from 'react';
import { Input, Button } from '@mui/material';
import styles from './AddCommentForm.module.scss';
import { Api } from '../../utils/api';
import { CommentItem } from '../../utils/api/types';

interface AddCommentFormProps {
  postId: number;
  onAdd: (obj: CommentItem) => void;
}

export const AddCommentForm: React.FC<AddCommentFormProps> = ({ postId, onAdd }) => {
  const [clicked, setClicked] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [text, setText] = React.useState('');

  const onAddComment = async () => {
    try {
      setIsSubmitting(true);
      const comment = await Api().comment.create({
        postId,
        text,
      });
      onAdd(comment);
      setText('');
    } catch (error) {
      console.warn('Add comment', error);
      alert('Ошибка отправки комментария');
    } finally {
      setIsSubmitting(false);
      setClicked(false);
    }
  };

  return (
    <div className={styles.form}>
      <Input
        onChange={(e) => setText(e.target.value)}
        disabled={isSubmitting}
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
          disabled={isSubmitting}
          className={styles.addButton}
          variant="contained"
          color="primary">
          Опубликовать
        </Button>
      )}
    </div>
  );
};
