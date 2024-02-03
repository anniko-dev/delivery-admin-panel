import { useCallback, useState } from 'react';

export declare type UseBooleanStateControls = [boolean, () => void, () => void];

export const useBooleanState = (
  initialState: boolean,
  defaultStateControls?: UseBooleanStateControls,
): UseBooleanStateControls => {
  const [open, setOpen] = useState(initialState);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return defaultStateControls || [open, handleOpen, handleClose];
};
