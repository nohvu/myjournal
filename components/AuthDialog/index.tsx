import React from 'react';
import { Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import styles from './AuthDialog.module.scss';
import { MainForm } from './forms/Main';
import { LoginForm } from './forms/Login';
import { RegisterForm } from './forms/Register';
interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ isOpen, onClose }) => {
  const [formType, setFormType] = React.useState<'main' | 'login' | 'register'>('main');
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent>
        <DialogContentText>
          <div className={styles.content}>
            <Typography className={styles.title}>
              {formType === 'main' ? (
                'Вход на TJ'
              ) : (
                <p className={styles.backTitle}>
                  <ArrowBackOutlinedIcon onClick={() => setFormType('main')} />К авторизации
                </p>
              )}
            </Typography>
            {formType === 'main' && <MainForm onOpenLogin={() => setFormType('login')} />}
            {formType === 'login' && <LoginForm onOpenRegister={() => setFormType('register')} />}
            {formType === 'register' && <RegisterForm onOpenLogin={() => setFormType('login')} />}
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};
