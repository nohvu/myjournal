import React from 'react';
import { Button } from '@mui/material';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import Link from 'next/link';

import styles from './LeftMenu.module.scss';
import { useRouter } from 'next/router';

const menu = [
  {
    text: 'Лента',
    icon: <WhatshotOutlinedIcon />,
    path: '/',
  },
  {
    text: 'Сообщения',
    icon: <SmsOutlinedIcon />,
    path: '/messages',
  },
  {
    text: 'Рейтинг TJ',
    icon: <TrendingUpOutlinedIcon />,
    path: '/rating',
  },
  {
    text: 'Подписки',
    icon: <FormatListBulletedOutlinedIcon />,
    path: '/follows',
  },
];

export const LeftMenu: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.menu}>
      <ul>
        {menu.map((obj) => (
          <li key={obj.path}>
            <Link href={obj.path}>
              <a>
                <Button variant={router.asPath === obj.path ? 'contained' : 'text'}>
                  {obj.icon}
                  {obj.text}
                </Button>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
