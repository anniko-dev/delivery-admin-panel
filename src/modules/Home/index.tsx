import { PageWrapper } from '@/shared/components';
import { BarChart } from '@mui/x-charts';

const seriesA = {
  data: [2, 3, 1, 4, 5],
  label: 'Series A',
};
const seriesB = {
  data: [10, 1, 4, 2, 1],
  label: 'Series B',
};
const seriesC = {
  data: [3, 2, 4, 5, 1],
  label: 'Series C',
};
export const Home = () => {
  return (
    <PageWrapper title={'Главная'}>
      <div>
        <BarChart
          height={300}
          series={[
            { ...seriesA, stack: 'total' },
            { ...seriesB, stack: 'total' },
            { ...seriesC, stack: 'total' },
          ]}
        />
      </div>
    </PageWrapper>
  );
};
