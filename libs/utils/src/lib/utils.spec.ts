import { currentYear } from './utils';

describe('current year', () => {
  it('should get current year', () => {
    expect(currentYear()).toEqual(2022);
  });
});
