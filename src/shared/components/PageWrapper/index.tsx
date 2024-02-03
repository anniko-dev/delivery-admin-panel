import { FC, ReactNode } from 'react';
import { Stack, Typography } from '@mui/material';

type PageWrapperTypes = {
  children: ReactNode;
  title?: string;
  titleGap?: number;
};

export const PageWrapper: FC<PageWrapperTypes> = (props) => {
  const { children, title, titleGap } = props;
  return (
    <Stack direction={'column'} gap={titleGap || 2}>
      {title && <Typography variant={'h1'}>{title}</Typography>}
      {children}
    </Stack>
  );
};
