import React from 'react';
import ArrowRightIcon from '@mui/icons-material/NavigateNextOutlined';
import clsx from 'clsx';
import styles from './SideComments.module.scss';
import data from '../../data';
import { CommentItem } from './CommentItem';

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
