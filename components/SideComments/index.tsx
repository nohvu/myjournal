import React from 'react';
import ArrowRightIcon from '@mui/icons-material/NavigateNextOutlined';
import clsx from 'clsx';
import styles from './SideComments.module.scss';
import { Comment } from './Comment';
import { useComments } from '../../hooks/useComments';

export const SideComments = () => {
  const [visible, setVisible] = React.useState(true);
  const { comments } = useComments();

  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <div className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toggleVisible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {visible && comments.map((obj) => <Comment key={obj.id} {...obj} />)}
    </div>
  );
};
