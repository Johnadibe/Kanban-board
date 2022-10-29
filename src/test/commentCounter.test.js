/** @jest-environment jsdom */

import count from '../modules/commentCounter.js';

describe('tests counter', () => {
  test('counter test', () => {
    const data = [
      {
        comment: 'Thanks for your patronage!',
        creation_date: '2022-10-28',
        username: 'Manar',
      },
      {
        comment: 'Good job everyone',
        creation_date: '2022-10-29',
        username: 'Jude',
      },
    ];
    const heading = document.createElement('h3');
    count(heading, data);
    expect(heading.innerHTML).not.toBe('');
  });
});