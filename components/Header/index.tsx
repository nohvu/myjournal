import React from 'react';
import { Paper, Button, IconButton } from '@mui/material';
import styles from './Header.module.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Avatar from '@mui/material/Avatar';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Image from 'next/image';
import Link from 'next/link';
import { AuthDialog } from '../AuthDialog';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/slices/user';

export const Header: React.FC = () => {
  const userData = useAppSelector(selectUserData);
  const [authVisible, setAuthVisible] = React.useState(false);

  const openAuthDialog = () => {
    setAuthVisible(true);
  };

  const closeAuthDialog = () => {
    setAuthVisible(false);
  };

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuOutlinedIcon />
        </IconButton>
        <Link href="/">
          <a>
            <Image
              className={styles.logo}
              height="55"
              width="50"
              src="https://iconape.com/wp-content/files/kn/281457/svg/281457.svg"
              alt="Tjournal Logo"
            />
          </a>
        </Link>
        <div className={styles.searchBlock}>
          <SearchOutlinedIcon />
          <input placeholder="Поиск" />
        </div>
        <Link href="/write">
          <a>
            <Button variant="primary" className={styles.penButton}>
              Новая запись
            </Button>
          </a>
        </Link>
      </div>

      <div className="d-flex align-center">
        <IconButton>
          <SmsOutlinedIcon />
        </IconButton>
        <IconButton>
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        {userData ? (
          <Link href="/profile/1">
            <a className="d-flex align-center">
              <Avatar
                className={styles.avatar}
                alt="UserAvatar"
                src="https://static.apostrophe.ua/uploads/image/d73832dd01e4279b0e9149566b652cc1.jpg"
              />
              <ExpandMoreOutlinedIcon />
            </a>
          </Link>
        ) : (
          <div className={styles.loginButton} onClick={openAuthDialog}>
            <AccountCircleOutlinedIcon />
            Войти
          </div>
        )}
      </div>

      <AuthDialog isOpen={authVisible} onClose={closeAuthDialog} />
    </Paper>
  );
};
