import { Box, Paper, Stack, Typography, useTheme } from '@mui/material';
import { Map, YMaps } from '@pbe/react-yandex-maps';
import { FC, useRef } from 'react';
import { Shipment } from '@/core/models/shipment.model.ts';

interface DeliveryMapType extends Pick<Shipment, 'send_address' | 'receiver_address'> {}

export const DeliveryMap: FC<DeliveryMapType> = (props) => {
  const { send_address, receiver_address } = props;
  const theme = useTheme();

  const map = useRef<any | undefined>(undefined); // Initialize with undefined
  const mapState = {
    center: [55.739625, 37.5412],
    zoom: 18,
  };

  const addRoute = (ymaps: any) => {
    const pointA = [Number(send_address.latitude), Number(send_address.longitude)];
    const pointB = [Number(receiver_address.latitude), Number(receiver_address.longitude)];

    const multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [pointA, pointB],
        params: {
          routingMode: 'pedestrian',
        },
      },
      {
        boundsAutoApply: true,
      },
    );

    if (map.current) {
      map.current.geoObjects.add(multiRoute);
    }
  };

  return (
    <Paper>
      <Stack direction={'column'} spacing={2}>
        <Typography variant={'h2'} fontWeight={'bold'}>
          Маршрут отправления
        </Typography>
        <Box position={'relative'}>
          <YMaps query={{ apikey: 'ab602ff1-3fcc-4194-b85f-05077c4844dd' }}>
            <Box
              position={'absolute'}
              zIndex={2}
              sx={{ width: '100%', height: '100%', background: theme.palette.primary.main, opacity: '0.1' }}
            >
              123
            </Box>
            <Map
              width={'100%'}
              modules={['multiRouter.MultiRoute']}
              state={mapState}
              instanceRef={map}
              onLoad={addRoute}
            />
          </YMaps>
        </Box>
      </Stack>
    </Paper>
  );
};
