import { FC } from 'react';
import { Stack, Typography } from '@mui/material';

type TextFieldWrapperType = {
  title: string;
  value: string;
};

export const TextFieldWrapper: FC<TextFieldWrapperType> = (props) => {
  const { title, value } = props;
  return (
    <Stack>
      <Typography>{title}:</Typography>
      <Typography fontWeight={'bold'}>{value}</Typography>
    </Stack>
  );
};
