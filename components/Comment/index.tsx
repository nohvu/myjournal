import React from 'react';
import { Typography, IconButton, MenuItem, Menu, Avatar } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreHorizOutlined';

import styles from './Comment.module.scss';
import { Api } from '../../utils/api';

interface CommentPostProps {
  user: { id: number; fullName: string; avatarUrl?: string };
  text: string;
  createdAt: string;
  currentUserId: number;
  id: number;
  onRemove: (id: number) => void;
}

export const Comment: React.FC<CommentPostProps> = ({
  user,
  text,
  createdAt,
  currentUserId,
  id,
  onRemove,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickRemove = async () => {
    if (window.confirm('Удалить выбранный комментарий?')) {
      try {
        await Api().comment.remove(id);
        onRemove(id);
      } catch (error) {
        console.warn('Ошибка удаления комментария', error);
        alert('Не удалось удалить комментарий');
      } finally {
        handleClose();
      }
    }
  };

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <Avatar style={{ marginRight: 10 }}>{user.fullName[0]}</Avatar>
        <b>{user.fullName}</b>
        <span>{createdAt}</span>
      </div>
      <Typography className={styles.text}>{text}</Typography>

      {user.id === currentUserId && (
        <>
          <span className={styles.replyBtn}>Ответить</span>
          <IconButton onClick={handleClick}>
            <MoreIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            elevation={2}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            keepMounted>
            <MenuItem onClick={() => handleClickRemove(id)}>Удалить</MenuItem>
            <MenuItem onClick={handleClose}>Редактировать</MenuItem>
          </Menu>
        </>
      )}
    </div>
  );
};
