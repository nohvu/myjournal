import React from 'react';
import { Typography, IconButton, MenuItem, Menu, Avatar } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreHorizOutlined';

import styles from './Comment.module.scss';

interface CommentPostProps {
  user: { fullName: string; avatarUrl: string };
  text: string;
  createdAt: string;
}

export const Comment: React.FC<CommentPostProps> = ({ user, text, createdAt }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <Avatar style={{ marginRight: 10 }}>{user.avatarUrl}</Avatar>
        <b>{user.fullName}</b>
        <span>{createdAt}</span>
      </div>
      <Typography className={styles.text}>{text}</Typography>

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
        <MenuItem>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </div>
  );
};
