import React from 'react';
import { Paper, Button, IconButton, Link } from '@mui/material';
import styles from './Header.module.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Avatar from '@mui/material/Avatar';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import Image from 'next/image';

export const Header: React.FC = () => {
  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuOutlinedIcon />
        </IconButton>
        <Link href="/">
          <Image
            className={styles.logo}
            height="55"
            width="50"
            src="https://iconape.com/wp-content/files/kn/281457/svg/281457.svg"
            alt="Tjournal Logo"
          />
        </Link>
        <div className={styles.searchBlock}>
          <SearchOutlinedIcon />
          <input placeholder="Поиск" />
        </div>
        <Link href="/write">
          <Button variant="contained" className={styles.penButton}>
            Новая запись
          </Button>
        </Link>
      </div>

      <div className="d-flex align-center">
        <IconButton>
          <SmsOutlinedIcon />
        </IconButton>
        <IconButton>
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <Link className="d-flex align-center" href="/profile/1">
          <Avatar
            className={styles.avatar}
            alt="UserAvatar"
            src="https://static.apostrophe.ua/uploads/image/d73832dd01e4279b0e9149566b652cc1.jpg"
          />
          <ExpandMoreOutlinedIcon />
        </Link>
      </div>
    </Paper>
  );
};
