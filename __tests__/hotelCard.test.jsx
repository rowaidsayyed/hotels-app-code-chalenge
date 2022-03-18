import { render } from '@testing-library/react';
import HotelCard from '@/components/hotelCard/HotelCard.js';

describe('Hotel Card Component', () => {
  it('renders a hotel data', () => {
    const hotel = {
      "name":"Address Dubai Mall",
      "price":"250",
      "city": "dubai",
    };
    const totalNights = 3;
    const { getByText,getByTestId } = render(<HotelCard hotel={hotel} totalNights={totalNights} />)
    const hotelName = getByText(hotel.name);
    const hotelPrice = getByTestId('hotel-price');
    expect(hotelName).toHaveTextContent(hotel.name);
    expect(hotelPrice).toHaveTextContent(hotel.price * totalNights);
  });
});
