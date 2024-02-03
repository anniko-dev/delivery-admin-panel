import { Chip, Paper, Stack, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useParams } from 'react-router-dom';
import { ShipmentStatusStepper } from './components/ShipmentStatusStepper';
import { ShipmentInfo } from './components/ShipmentInfo';
import { ParamsQuery } from '@/core/base/constants.ts';
import { useGetShipmentQuery } from '@/core/api/root.api.ts';
import { CheckApiStatus, DeliveryMap } from '@/shared/components';

export const ShipmentElement = () => {
  // Получаем серийник отправления
  const params = useParams();

  // Данные об отправлении
  const shipmentQuery = useGetShipmentQuery(params[ParamsQuery.ShipmentId] || '');

  if (shipmentQuery.isFetching || !shipmentQuery.data) return <CheckApiStatus {...shipmentQuery} />;

  const { data } = shipmentQuery;

  return (
    <>
      <Paper>
        <Grid2 container spacing={1}>
          <Grid2 xs={12}>
            <Stack direction={{ md: 'row', xs: 'column' }} alignItems={{ md: 'center' }} spacing={2}>
              <Typography variant={'h2'} fontWeight={'bold'}>
                Данные отправления
              </Typography>
              <Chip variant={'outlined'} label={<Typography variant={'subtitle2'}>{data.serial_number}</Typography>} />
            </Stack>
          </Grid2>
          <Grid2 xs={12} container columnSpacing={4}>
            <Grid2 xs={12} md={2}>
              {/*Компонента со статусами перевозки*/}
              <ShipmentStatusStepper status={data.status} carrier={data.carrier} />
            </Grid2>
            <Grid2 xs={12} md={10}>
              {/*Компонента с информацией о перевозке*/}
              <ShipmentInfo shipmentData={data} />
            </Grid2>
          </Grid2>
        </Grid2>
      </Paper>
      <DeliveryMap send_address={data.send_address} receiver_address={data.receiver_address} />
    </>
  );
};
