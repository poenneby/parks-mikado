import { getNextYear } from './graphql-client';

describe('get next year', () => {
  it('should get next year', () => {
    expect(getNextYear()).toEqual(2023);
  });
});
