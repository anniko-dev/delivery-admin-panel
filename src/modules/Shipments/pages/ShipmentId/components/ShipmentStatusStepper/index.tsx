import { Badge, Button, Chip, Stack, Step, StepLabel, Stepper, Tooltip, Typography } from '@mui/material';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { Shipment } from '@/core/models/shipment.model.ts';
import { FC } from 'react';
import { parseDate } from '@/shared/functions/parseDate.ts';
import { useBooleanState } from '@/shared/hooks/useBooleanState.ts';
import { ShipmentSenderModal } from '@/modules/Shipments/pages/ShipmentId/components';

interface ShipmentStatusStepperType extends Pick<Shipment, 'status' | 'carrier'> {}

export const ShipmentStatusStepper: FC<ShipmentStatusStepperType> = (props) => {
  const { status, carrier } = props;

  const isCarrierSelected = carrier !== null;

  const activeStep =
    status.reduce((acc, step) => {
      return step.created_at ? acc + 1 : acc;
    }, 0) - (isCarrierSelected ? 0 : 1);

  const [isSenderInfoModal, handleSenderInfoModalOpen, handleSenderInfoModalClose] = useBooleanState(false);

  return (
    <>
      <Stack direction={'column'} gap={2} height={'100%'}>
        <Chip label={'Статус заказа'} icon={<DeliveryDiningIcon />} />
        <Stepper activeStep={activeStep} orientation={'vertical'}>
          {status.map((item) => {
            const { created_at, name, description } = item;

            return (
              <Tooltip title={description} arrow>
                <Step sx={{ cursor: 'pointer' }}>
                  <StepLabel
                    optional={
                      created_at && <Typography variant={'subtitle2'}>{parseDate(created_at, true)}</Typography>
                    }
                  >
                    {name}
                  </StepLabel>
                </Step>
              </Tooltip>
            );
          })}
        </Stepper>

        <Stack direction={'column'} justifyContent={'space-between'} flex={'1'} spacing={2} pb={{ xs: 4, md: 0 }}>
          <Badge badgeContent={'!'} color={'error'} invisible={isCarrierSelected}>
            <Button disabled={activeStep > 2} variant={'contained'} fullWidth>
              {isCarrierSelected ? 'Сменить перевозчика' : 'Назначить перевозчика'}
            </Button>
          </Badge>

          <Button variant={'contained'} onClick={handleSenderInfoModalOpen}>
            Данные отправителя
          </Button>
        </Stack>
      </Stack>

      {/* Модалки */}
      <ShipmentSenderModal open={isSenderInfoModal} onClose={handleSenderInfoModalClose} />
    </>
  );
};
