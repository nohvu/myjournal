import { Paper, Button, Avatar, Typography } from '@mui/material';
import { SettingsOutlined, TextsmsOutlined } from '@mui/icons-material';
import Link from 'next/link';
import { Post } from '../../components/Post';
import { MainLayout } from '../../layouts/MainLayout';

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
                <Button
                  style={{ height: 42, minWidth: 45, width: 45, marginRight: 10 }}
                  variant="contained">
                  <SettingsOutlined />
                </Button>
              </a>
            </Link>
            <Button style={{ height: 42 }} variant="contained" color="primary">
              <TextsmsOutlined className="mr-10" />
              Написать
            </Button>
          </div>
        </div>
      </Paper>
    </MainLayout>
  );
}
