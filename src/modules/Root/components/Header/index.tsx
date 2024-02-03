import { Avatar, Box, Drawer, IconButton, Stack, Tab, Tabs, Typography } from '@mui/material';
import styles from './styles.module.scss';
import { routes } from '@/core/base/routes.tsx';
import { Link } from 'react-router-dom';
import { useBreakpoints } from '@/shared/hooks/useBreakpoints.ts';
import MenuIcon from '@mui/icons-material/Menu';
import { useBooleanState } from '@/shared/hooks/useBooleanState.ts';

export const Header = () => {
  const isMobile = useBreakpoints('sm');

  if (isMobile) return <HeaderMobileView />;

  return (
    <Stack
      className={styles.header}
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      spacing={'sm'}
    >
      <Tabs>
        {routes.map((route) => (
          <Link to={route.path}>
            <Tab label={<Typography variant={'subtitle1'}>{route.label}</Typography>} />
          </Link>
        ))}
      </Tabs>

      <Box padding={1}>
        <Avatar sx={{ width: 32, height: 32 }} />
      </Box>
    </Stack>
  );
};

const HeaderMobileView = () => {
  const [isDrawerOpen, handleOpenDrawer, handleCloseDrawer] = useBooleanState(false);

  return (
    <>
      <Stack direction={'row'} justifyContent={'flex-end'} className={styles.header}>
        <IconButton onClick={handleOpenDrawer}>
          <MenuIcon />
        </IconButton>
      </Stack>

      <Drawer anchor={'left'} open={isDrawerOpen} onClose={handleCloseDrawer}>
        <Box padding={1} gap={1} display={'grid'} minWidth={120}>
          {routes.map((route) => (
            <Link to={route.path} onClick={handleCloseDrawer}>
              <Typography variant={'subtitle1'}>{route.label}</Typography>
            </Link>
          ))}
        </Box>
      </Drawer>
    </>
  );
};
