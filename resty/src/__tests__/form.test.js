import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../app.js';
// import Results from '../components/results';


test('Assert that upon submitting the form will result in data being rendered in the output area', async () => {
  render(<App />)

  // const results = await waitFor(() => screen.getByTestId('results'))
  // console.log('😎 ', results);

  const fire = screen.getByTestId('button');
  await fireEvent.click(fire, { target: { url: '', method: '' } });

  const name = await waitFor(() => screen.getByTestId('name'))

  // console.log('🥱', name.value);
  // console.log('hello', JSON.parse(name.value).results)

  expect(JSON.parse(name.value).results[0].name).toBe('fake thing 1');
  expect(JSON.parse(name.value).results[1].name).toBe('fake thing 2');
  // expect(name).toBeTruthy(true);
})
