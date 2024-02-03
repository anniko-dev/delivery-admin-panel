import { Outlet, useNavigate } from 'react-router-dom';
import { PageWrapper } from '@/shared/components';
import { Autocomplete, Stack, TextField } from '@mui/material';
import { RoutesPath } from '@/core/base/routes.tsx';
import { useCallback, useState } from 'react';
import { useGetShipmentsSerialsQuery } from '@/core/api/root.api.ts';
import { useDebounce } from '@/shared/hooks/useDebounce.ts';

export const ShipmentsLayout = () => {
  // Управление навигацией
  const navigate = useNavigate();
  const handleSelectShipment = useCallback((event: any) => {
    if (!event) return navigate(RoutesPath.Shipments);
    return navigate(`${RoutesPath.Shipments}/${event.label}`);
  }, []);

  // Автокомплит
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 1000);

  const serial_options = useGetShipmentsSerialsQuery(debouncedSearchValue);

  return (
    <PageWrapper title={'Поиск отправлений'}>
      <Stack direction={'column'} spacing={4}>
        <Autocomplete
          onChange={(_, newValue: { id: number } | null) => {
            handleSelectShipment(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              label={'Введите серийный номер отправления'}
            />
          )}
          options={serial_options.data}
          getOptionLabel={(option: { label: string; id: number }) => option.label}
        />
        <Outlet />
      </Stack>
    </PageWrapper>
  );
};
