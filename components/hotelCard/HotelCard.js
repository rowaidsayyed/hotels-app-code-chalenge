import React, { useMemo } from 'react';
import styles from '@/styles/HotelCard.module.css';

function HotelCard({ hotel, totalNights, currency = 'AED' }) {
  const price = useMemo(()=> hotel.price * totalNights,[hotel.price,totalNights]);
  return (
    <div className={styles.card}>
      <div><b>Name:</b> <span>{hotel.name}</span></div>
      <div><b>Price:</b> <span data-testid="hotel-price">{price} {currency}</span></div>
      <div><b>City:</b> <span className='capitalize'>{hotel.city}</span></div>
    </div>
  );
}

export default React.memo(HotelCard);
