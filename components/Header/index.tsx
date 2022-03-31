import React from 'react';
import { Paper, Button, IconButton, List, ListItem, ListItemButton } from '@mui/material';
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
import { PostItem } from '../../utils/api/types';
import { Api } from '../../utils/api';

export const Header: React.FC = () => {
  const userData = useAppSelector(selectUserData);
  const [authVisible, setAuthVisible] = React.useState(false);

  const [searchValue, setSearchValue] = React.useState('');
  const [posts, setPosts] = React.useState<PostItem[]>([]);
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

  const handleChangeInput = async (event) => {
    setSearchValue(event.target.value);
    try {
      const { items } = await Api().post.search({ title: searchValue });
      setPosts(items);
    } catch (error) {
      console.warn('Ошибка поиска', error);
    }
  };

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton onClick={() => setMenuVisible((prev) => !prev)}>
          <MenuOutlinedIcon />
        </IconButton>
        <Link href="/">
          <a>
            <Image
              onClick={() => setSearchValue('')}
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
          <input onChange={handleChangeInput} value={searchValue} placeholder="Поиск" />
          {posts.length > 0 && (
            <Paper className={styles.searchPopup}>
              <List>
                {posts.map((obj) => (
                  <Link href={`/news/${obj.id}`} key={obj.id}>
                    <a>
                      <ListItem>
                        <ListItemButton onClick={() => setPosts([])}>{obj.title}</ListItemButton>
                      </ListItem>
                    </a>
                  </Link>
                ))}
              </List>
            </Paper>
          )}
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
