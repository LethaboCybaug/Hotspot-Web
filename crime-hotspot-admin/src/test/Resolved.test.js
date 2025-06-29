import { render, screen } from '@testing-library/react';
import Resolved from './Resolved';
import Layout from './Layout';

// Optional: Mock Layout if needed
jest.mock('./Layout', () => ({ children }) => <div>{children}</div>);

describe('Resolved Component', () => {
  test('renders heading and table headers', () => {
    render(<Resolved />);

    // Check for heading
    expect(screen.getByText('Resolved Incidents')).toBeInTheDocument();

    // Check for table headers
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
    expect(screen.getByText('Resolved Time')).toBeInTheDocument();
  });

  test('renders incident data row correctly', () => {
    render(<Resolved />);

    // Check table row data
    expect(screen.getByText('101')).toBeInTheDocument();
    expect(screen.getByText('Burglary')).toBeInTheDocument();
    expect(screen.getByText('Maple Ave')).toBeInTheDocument();
    expect(screen.getByText('2025-04-28 11:00')).toBeInTheDocument();
  });
});
