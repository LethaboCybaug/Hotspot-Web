import { render, screen } from '@testing-library/react';
import Alerts from './Alerts';

// Mock Layout to isolate Alerts component in test
jest.mock('./Layout', () => ({ children }) => <div>{children}</div>);

describe('Alerts Component', () => {
  test('renders heading and alert titles', () => {
    render(<Alerts />);

    // Check for heading
    expect(screen.getByText('Active Alerts')).toBeInTheDocument();

    // Check for alert titles
    expect(screen.getByText('Robbery')).toBeInTheDocument();
    expect(screen.getByText('Assault')).toBeInTheDocument();
  });

  test('renders alert details correctly', () => {
    render(<Alerts />);

    // Check for Robbery alert details
    expect(screen.getByText('Location: Elm Street')).toBeInTheDocument();
    expect(screen.getByText('Time: 2025-05-02 17:45')).toBeInTheDocument();

    // Check for Assault alert details
    expect(screen.getByText('Location: Market Avenue')).toBeInTheDocument();
    expect(screen.getByText('Time: 2025-05-03 09:10')).toBeInTheDocument();
  });

  test('renders "View Details" buttons for each alert', () => {
    render(<Alerts />);
    const buttons = screen.getAllByText('View Details');

    // Expect 2 buttons, one for each alert
    expect(buttons.length).toBe(2);
  });
});
