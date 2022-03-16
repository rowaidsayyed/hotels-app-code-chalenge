import { getTotalNights, getSortedList } from '@/utils/helperFunctions.js';

describe('Helpers Functions', () => {
  it('getTotalNights', () => {
    const totalNights = getTotalNights('2020-08-12','2020-08-17')
    expect(totalNights).toEqual(5)
  });
  describe('Helpers Functions: getSortedList', () => {
    it('Sort By Name: ascending', () => {
      const randomHotels = [
        {
          "name": "Kempinski Hotel Mall of the Emirates",
          "price": "200"
        },
        {
          "name":"Address Dubai Mall",
          "price":"250",
        },
      ];

      const sortedHotelsByName = [
        {
          "name":"Address Dubai Mall",
          "price":"250",
        },
        {
          "name": "Kempinski Hotel Mall of the Emirates",
          "price": "200"
        },
      ]
      const sortedHotels = getSortedList(randomHotels, 'name');
      expect(sortedHotels).toEqual(sortedHotelsByName);
      expect(sortedHotels.length).toEqual(2);
    });
    it('Sort By Name: descending', () => {
      const randomHotels = [
        {
          "name": "Kempinski Hotel Mall of the Emirates",
          "price": "200"
        },
        {
          "name":"Address Dubai Mall",
          "price":"250",
        },
      ];

      const sortedHotelsByName = [
        {
          "name": "Kempinski Hotel Mall of the Emirates",
          "price": "200"
        },
        {
          "name":"Address Dubai Mall",
          "price":"250",
        },
      ]
      const sortedHotels = getSortedList(randomHotels, 'name', false);
      expect(sortedHotels).toEqual(sortedHotelsByName);
      expect(sortedHotels.length).toEqual(2);
    });

    it('Sort By Price: ascending', () => {
      const randomHotels = [
        {
          "name": "Kempinski Hotel Mall of the Emirates",
          "price": "200"
        },
        {
          "name":"Address Dubai Mall",
          "price":"250",
        },
      ];

      const sortedHotelsByPrice = [
        {
          "name": "Kempinski Hotel Mall of the Emirates",
          "price": "200"
        },
        {
          "name":"Address Dubai Mall",
          "price":"250",
        },
      ]
      const sortedHotels = getSortedList(randomHotels, 'price');
      expect(sortedHotels).toEqual(sortedHotelsByPrice);
      expect(sortedHotels.length).toEqual(2);
    });
    it('Sort By Price: descending', () => {
      const randomHotels = [
        {
          "name": "Kempinski Hotel Mall of the Emirates",
          "price": "200"
        },
        {
          "name":"Address Dubai Mall",
          "price":"250",
        },
      ];

      const sortedHotelsByPrice = [
        {
          "name":"Address Dubai Mall",
          "price":"250",
        },
        {
          "name": "Kempinski Hotel Mall of the Emirates",
          "price": "200"
        },
      ]
      const sortedHotels = getSortedList(randomHotels, 'price', false);
      expect(sortedHotels).toEqual(sortedHotelsByPrice);
      expect(sortedHotels.length).toEqual(2);
    });
  });
});
