import React from 'react';
import { Button } from '@mui/material';
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
          <Button>
            <WhatshotOutlinedIcon />
            Лента
          </Button>
          <Button>
            <SmsOutlinedIcon />
            Сообщения
          </Button>
          <Button>
            <TrendingUpOutlinedIcon />
            Рейтинг TJ
          </Button>
          <Button>
            <FormatListBulletedOutlinedIcon />
            Подписки
          </Button>
        </li>
      </ul>
    </div>
  );
};
