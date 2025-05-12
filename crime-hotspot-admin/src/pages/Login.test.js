import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login.jsx'; // Importing the Login component with .jsx extension

describe('Login Component', () => {
  test('renders login form with email and password input fields and login button', () => {
    render(<Login />);

    // Check if the email input, password input, and login button are rendered
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  test('submits form with email and password input values', () => {
    const mockSubmit = jest.fn();

    render(<Login />);

    // Get the email and password input fields
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('Login');

    // Mock user inputs
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Submit the form
    fireEvent.click(loginButton);

    // Check if the mockSubmit function is called (you can replace this with actual submit logic)
    expect(mockSubmit).toHaveBeenCalled();
  });

  test('displays validation error if email or password is missing', () => {
    render(<Login />);

    const loginButton = screen.getByText('Login');

    // Attempt to submit with empty inputs
    fireEvent.click(loginButton);

    // Assuming your component has validation logic, here we would test for error messages.
    // For now, you would check that the error messages or validation behavior is displayed.
    expect(screen.queryByText('Email is required')).toBeInTheDocument();
    expect(screen.queryByText('Password is required')).toBeInTheDocument();
  });
});
