import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza o título', () => {
  render(<App />);

  const titulo = screen.getByText(/Projeto CI\/CD/i);

  expect(titulo).toBeInTheDocument();
});
