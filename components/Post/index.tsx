import React from 'react';
import styles from './Post.module.scss';
import { Paper, Button, IconButton, Typography } from '@mui/material';
import Image from 'next/image';

export const Post: React.FC = () => {
  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        В КНДР две недели отключается интернет — из-за атак хакера из США. Он мстит за попытку
        взлома его компьютера
      </Typography>
      <Typography className="mt-10 mb-15">
        Год назад северокорейцы пытались получить удалённый доступ к технике хакера — он год ждал
        реакцию властей США, а теперь решил взять дело «в свои руки».
      </Typography>
      <Image
        alt="news"
        src="https://leonardo.osnova.io/53b95f05-e59f-5d91-9be8-8cb60f163403/-/preview/1300/-/format/webp/"
        height={500}
        width={640}
      />
    </Paper>
  );
};
