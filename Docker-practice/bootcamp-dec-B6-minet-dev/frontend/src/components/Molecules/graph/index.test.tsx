import '@testing-library/jest-dom'
import { render} from '@testing-library/react'
import { Graph } from '.'
import { GraphData } from '../../../utils/constants';

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}))

test('renders the Apex Chart component without errors', () => {
    const { container } = render(<Graph opacity={0.1} colors={['#FFA74F','#0052FF']} series={GraphData.series} width='100px' height='300px' />);
    expect(container).toBeInTheDocument();
  });