import { Outlet } from 'react-router-dom';
import { Header } from './components';
import { Container } from '@mui/material';

export const Root = () => {
  return (
    <>
      <Header />
      <Container sx={{ paddingTop: 2, paddingBottom: 4 }}>
        <Outlet />
      </Container>
    </>
  );
};
