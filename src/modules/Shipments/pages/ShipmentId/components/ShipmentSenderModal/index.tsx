import { Viewer } from '@/shared/components';
import { Box } from '@mui/material';
import { FC } from 'react';

type ShipmentSenderModalType = {
  open: boolean;
  onClose: () => void;
};

export const ShipmentSenderModal: FC<ShipmentSenderModalType> = (props) => {
  const { open, onClose } = props;
  return (
    <Viewer onClose={onClose} open={open} title={'Данные отправителя'}>
      <Box>modal</Box>
    </Viewer>
  );
};
