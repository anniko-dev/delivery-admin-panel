import { Box, Divider, Drawer, Fade, IconButton, Modal, Stack, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import { useBreakpoints } from '@/shared/hooks/useBreakpoints.ts';
import CloseIcon from '@mui/icons-material/Close';

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  outline: 'none',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
  p: 3,
  pt: 2,
};

type ModalType = {
  maxWidth?: number;
  title: string;
  children: ReactNode;
  open: boolean;
  onClose: () => void;
};

export const Viewer: FC<ModalType> = (props) => {
  const isMobile = useBreakpoints('md');
  const { maxWidth, children, title, open, onClose } = props;

  if (isMobile) return <MobileViewer {...props}> {children} </MobileViewer>;

  return (
    <Modal open={open} onClose={onClose}>
      <Fade in={open}>
        <Box sx={modalStyle} maxWidth={maxWidth || 800}>
          <Stack spacing={2}>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography variant={'h2'} fontWeight={'bold'}>
                {title}
              </Typography>

              <IconButton onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Stack>
            <Divider orientation={'horizontal'} />

            <Box pt={1}>{children}</Box>
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
};

const MobileViewer: FC<ModalType> = (props) => {
  const { children, title, open, onClose } = props;

  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor={'bottom'}
      sx={{ '& .MuiPaper-root': { borderRadius: '16px 16px 0 0' } }}
    >
      <Stack direction={'column'} spacing={1}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography variant={'h2'} fontWeight={'bold'}>
            {title}
          </Typography>

          <IconButton>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Divider orientation={'horizontal'} />
        <Box pt={1} pb={2}>
          {children}
        </Box>
      </Stack>
    </Drawer>
  );
};
