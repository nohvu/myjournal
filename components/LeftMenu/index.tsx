import React from 'react';
import { Button, Link } from '@mui/material';
import styles from './LeftMenu.module.scss';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

export const LeftMenu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Link href="/">
            <Button>
              <WhatshotOutlinedIcon />
              Лента
            </Button>
          </Link>
          <Button>
            <SmsOutlinedIcon />
            Сообщения
          </Button>
          <Link href="/rating">
            <Button>
              <TrendingUpOutlinedIcon />
              Рейтинг TJ
            </Button>
          </Link>
          <Button>
            <FormatListBulletedOutlinedIcon />
            Подписки
          </Button>
        </li>
      </ul>
    </div>
  );
};
