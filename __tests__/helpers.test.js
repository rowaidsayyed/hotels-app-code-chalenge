import { getTotalNights } from '@/utils/helperFunctions.js';

describe('Helpers Functions', () => {
  it('getTotalNights', () => {
    const totalNights = getTotalNights('2020-08-12','2020-08-17')
    expect(totalNights).toEqual(5)
  });
});
