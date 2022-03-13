import { Paper, Button, Avatar, Typography, Tabs, Tab } from '@mui/material';
import { SettingsOutlined, TextsmsOutlined } from '@mui/icons-material';
import Link from 'next/link';
import { Post } from '../../components/Post';
import { MainLayout } from '../../layouts/MainLayout';
import styles from './Profile.module.scss';

export default function Profile() {
  return (
    <MainLayout contentFullWidth hideComments>
      <Paper className="pl-20 pr-20 pt-20 mb-30" elevation={0}>
        <div className="d-flex justify-between">
          <div>
            <Avatar
              style={{ width: 120, height: 120, borderRadius: 6 }}
              alt="UserAvatar"
              src="https://static.apostrophe.ua/uploads/image/d73832dd01e4279b0e9149566b652cc1.jpg"
            />
            <Typography style={{ fontWeight: 'bold' }} variant="h4">
              Tho Berzloev
            </Typography>
          </div>
          <div>
            <Link href="/profile/settings">
              <a>
                <Button className={styles.settings} variant="contained">
                  <SettingsOutlined />
                </Button>
              </a>
            </Link>
            <Button className={styles.message} variant="contained" color="primary">
              <TextsmsOutlined className="mr-10" />
              Написать
            </Button>
          </div>
        </div>
        <div className="d-flex mb-10 mt-10">
          <Typography style={{ fontWeight: 'bold', color: '#35AB66' }} className="mr-15">
            +1000
          </Typography>
          <Typography>0 подписчиков</Typography>
        </div>
        <Typography>На проекте с 22 января 2022</Typography>

        <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
          <Tab label="Статьи" />
          <Tab label="Комментарии" />
          <Tab label="Закладки" />
        </Tabs>
      </Paper>
      <div className="d-flex align-start">
        <div className="mr-20 flex">
          <Post />
        </div>
        <div>
          <Paper style={{ width: 300 }} className="p-20 mb-20" elevation={0}>
            <b>Подписчики</b>
            <div className="d-flex mt-15">
              <Avatar
                className="mr-10"
                src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
              />
              <Avatar
                className="mr-10"
                src="https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/"
              />
            </div>
          </Paper>
          <Paper style={{ width: 300 }} className="p-20 mb-20" elevation={0}>
            <b>Подписки</b> 20
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li className="d-flex align-center">
                <Avatar
                  style={{ height: 24, width: 24, borderRadius: '50%' }}
                  src="https://leonardo.osnova.io/c2e8302e-13bc-df5f-cf58-f77d3b7973ae/-/scale_crop/108x108/-/format/webp/"
                />
                <Button variant="primary">Новости</Button>
              </li>
              <li className="d-flex align-center">
                <Avatar
                  style={{ height: 24, width: 24, borderRadius: '50%' }}
                  src="https://leonardo.osnova.io/c2e8302e-13bc-df5f-cf58-f77d3b7973ae/-/scale_crop/108x108/-/format/webp/"
                />
                <Button variant="primary">Технологии</Button>
              </li>
              <li className="d-flex align-center">
                <Avatar
                  style={{ height: 24, width: 24, borderRadius: '50%' }}
                  src="https://leonardo.osnova.io/c2e8302e-13bc-df5f-cf58-f77d3b7973ae/-/scale_crop/108x108/-/format/webp/"
                />
                <Button variant="primary">Истории</Button>
              </li>
            </ul>
          </Paper>
        </div>
      </div>
    </MainLayout>
  );
}
