import { Chip, Divider, Stack, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { FC } from 'react';
import { TextFieldWrapper } from '@/shared/components';
import { Shipment } from '@/core/models/shipment.model.ts';

type ShipmentInfoType = {
  shipmentData: Shipment;
};
export const ShipmentInfo: FC<ShipmentInfoType> = (props) => {
  const { weight, volume, description, name, send_address, receiver_address, receiver_name, receiver_contact } =
    props.shipmentData;

  return (
    <Stack direction={'column'} gap={3}>
      <Chip label={'Информация о грузе'} icon={<InfoIcon />} />
      <Stack direction={'column'} gap={2}>
        <TextFieldWrapper title={'Наименование'} value={name} />
        <TextFieldWrapper title={'Описание'} value={description} />
        <Stack gap={1}>
          <Typography>Габариты:</Typography>
          <Stack direction={'row'} gap={1}>
            <Chip
              label={
                <Typography fontWeight={'bold'}>
                  {volume} м<sup>2</sup>
                </Typography>
              }
            />
            <Chip label={<Typography fontWeight={'bold'}>{weight} кг</Typography>} />
          </Stack>
        </Stack>
        <TextFieldWrapper title={'Адрес отправителя'} value={send_address.name} />
        <Divider />
        <TextFieldWrapper title={'Адрес получателя'} value={receiver_address.name} />
        <TextFieldWrapper title={'ФИО получателя'} value={receiver_name} />
        <TextFieldWrapper title={'Адрес получателя'} value={receiver_contact} />
        <Divider />
        <TextFieldWrapper title={'Комментарий к заказу'} value={'Комментарий'} />
        <Divider />
        <TextFieldWrapper title={'Прикрепленные документы'} value={'тут буду фото'} />
      </Stack>
    </Stack>
  );
};
