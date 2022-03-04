import React from 'react';
import ArrowRightIcon from '@mui/icons-material/NavigateNextOutlined';
import clsx from 'clsx';
import styles from './SideComments.module.scss';
import data from '../../data';
import { CommentItem } from './CommentItem';

/* const CommentItem = ({ user, text, post }) => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <img src="https://static.apostrophe.ua/uploads/image/d73832dd01e4279b0e9149566b652cc1.jpg" />

        <a href="#">
          <b>{user.fullName}</b>
        </a>
      </div>
      <p className={styles.text}>{text}</p>
      <a href="#">
        <span className={styles.postTitle}>{post.title}</span>
      </a>
    </div>
  );
}; */

export const SideComments = () => {
  const [visible, setVisible] = React.useState(true);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <div className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toggleVisible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {visible && data.comments.popular.map((obj) => <CommentItem key={obj.id} {...obj} />)}
    </div>
  );
};
