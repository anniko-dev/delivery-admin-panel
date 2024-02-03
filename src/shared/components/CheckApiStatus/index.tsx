import { FC } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

type CheckApiStatusType = {
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
};
export const CheckApiStatus: FC<CheckApiStatusType> = (props) => {
  const { isError, isLoading, isFetching } = props;

  if (isLoading || isFetching)
    return (
      <Box display={'flex'} justifyContent={'center'}>
        <CircularProgress />
      </Box>
    );

  if (isError)
    return (
      <Box>
        <Typography>При запросе произошла ошибка :(</Typography>
      </Box>
    );
};
