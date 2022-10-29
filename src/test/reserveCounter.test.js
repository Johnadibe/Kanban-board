/** @jest-environment jsdom */

import reserveCount from '../modules/reserveCounter.js';

describe('tests counter', () => {
  test('counter test', () => {
    const data = [{
      username: 'Hasina',
      date_start: '2022-10-28',
      date_end: '2022-10-22',
    },
    {
      username: 'Hasina',
      date_start: '2022-10-29',
      date_end: '2022-10-22',
    },
    ];
    const heading = document.createElement('h3');
    reserveCount(heading, data);
    expect(heading.innerHTML).not.toBe('');
  });
});