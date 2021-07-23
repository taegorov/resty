import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../app.js';



test.skip('Assert that upon submitting, the form will result in data being rendered in the output area', async () => {
  render(<App />)

  // const results = await waitFor(() => screen.getByTestId('results'))
  // console.log('😎 ', results);

  const fire = screen.getByTestId('button');
  const input = screen.getByTestId('input');

  await fireEvent.change(input, { target: { value: 'https://pokeapi.co/api/v2/pokemon' } })
  await fireEvent.click(fire, { target: { url: '', method: '' } });

  console.log('🤗', input.value);

  const name = await waitFor(() => screen.getByTestId('name'))

  // console.log('🥱', name.value);
  // console.log('hello', JSON.parse(name.value).results)

  console.log('🐌', name.textContent)

  expect(JSON.parse(name.textContent).results[0].name).toBe('bulbasaur');
  expect(JSON.parse(name.textContent).results[1].name).toBe('ivysaur');
  // expect(name).toBeTruthy(true);
})
