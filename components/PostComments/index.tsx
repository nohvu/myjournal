import React from 'react';
import { Paper, Typography, Tabs, Tab, Divider } from '@mui/material';
import { Comment } from '../Comment';
import { AddCommentForm } from '../AddCommentForm';
import { useAppSelector } from '../../redux/hooks';
import { selectUserData } from '../../redux/slices/user';
import { CommentItem } from '../../utils/api/types';
import { useComments } from '../../hooks/useComments';

interface PostCommentsProps {
  postId: number;
}

export const PostComments: React.FC<PostCommentsProps> = ({ postId }) => {
  const userData = useAppSelector(selectUserData);
  const [activeTab, setActiveTab] = React.useState(0);
  const { comments, setComments } = useComments(postId);

  const onAddComment = (obj: CommentItem) => {
    setComments((prev) => [...prev, obj]);
  };

  const onRemoveComment = (id: number) => {
    setComments((prev) => prev.filter((obj) => obj.id !== id));
  };

  return (
    <Paper elevation={0} className="mt-40 p-30">
      <div className="container">
        <Typography variant="h6" className="mb-20">
          {comments.length} комментариев:
        </Typography>
        <Tabs
          onChange={(_, newValue) => setActiveTab(newValue)}
          className="mt-20"
          value={activeTab}
          indicatorColor="primary"
          textColor="primary">
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider className="mb-20" />
        {userData ? (
          <AddCommentForm onAdd={onAddComment} postId={postId} />
        ) : (
          <p>Для оставления комментария необходимо авторизоваться.</p>
        )}
        <div className="mb-30" />
        {comments.map((obj) => (
          <Comment
            id={obj.id}
            key={obj.id}
            currentUserId={userData?.id}
            user={obj.user}
            text={obj.text}
            createdAt={obj.createdAt}
            onRemove={onRemoveComment}
          />
        ))}
      </div>
    </Paper>
  );
};
