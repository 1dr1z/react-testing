import { render, screen } from '@testing-library/react';
import Async from './Async.js';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 1, title: 'first post' }],
    });
    render(<Async />);

    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});

//jestjs.io
//https://testing-library.com/docs/react-testing-library/intro/
