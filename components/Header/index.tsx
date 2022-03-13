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

  React.useEffect(() => {
    if (authVisible && userData) {
      setAuthVisible(false);
    }
  }, [authVisible, userData]);

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
              height="40"
              width="40"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqm8GYwEuo_S6sr2t3iI2_vs2fKZ7Dpb5hEa5JZJ7zTRe1UJ9WQpo6ZRy8N07V8pzaqTQ&usqp=CAU"
              alt="Myjournal Logo"
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
