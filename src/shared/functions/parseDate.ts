export const parseDate = (date: string, withTime?: boolean): string => {
  const dateTime = new Date(date);

  const day = dateTime.getDate().toString().padStart(2, '0');
  const month = (dateTime.getMonth() + 1).toString().padStart(2, '0'); // добавляем 1, так как месяцы в JS начинаются с 0
  const year = dateTime.getFullYear();
  let time = '';
  if (withTime) {
    const hours = dateTime.getHours().toString().padStart(2, '0');
    const minutes = dateTime.getMinutes().toString().padStart(2, '0');
    time = ` в ${hours}:${minutes}`;
  }

  return `${day}.${month}.${year}${time}`;
};
