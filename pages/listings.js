import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import Button from '@/components/shared/Button';
import InputField from '@/components/shared/InputField';
import RangeInput from '@/components/shared/RangeInput';
import HotelCard from '@/components/hotelCard/HotelCard';
import hotelsServices from '@/services/hotelsServices';
import {
  filterByName,
  filterByPrice,
  getTotalNights,
  getSortedHotels,
  filterHotelsByDate,
} from '@/utils/helperFunctions';

function HotelsList({ hotels }) {
  const router = useRouter();
  const [sortBy, setSortBy] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchPrice, setSearchPrice] = useState(0);

  const { from, to } = router.query;
  const numberOfNights = useMemo(() => getTotalNights(from, to), [from, to]);

  const filteredByName = useMemo(
    () => filterByName(hotels, searchName),
    [searchName]
  );

  const filteredByPrice = useMemo(
    () =>
      searchPrice > 0
        ? filterByPrice(filteredByName, searchPrice / numberOfNights)
        : filteredByName,
    [searchPrice, filteredByName]
  );

  const sortHotels = useMemo(
    () => getSortedHotels(sortBy, filteredByPrice),
    [sortBy, filteredByPrice, filteredByName]
  );

  return (
    <div>
      <div className='d-flex flex-justify-between col-p'>
        <div className='pa-3 mr-5'>
          <div className='mb-3'>
            <InputField
              value={searchName}
              name="nameFilter"
              placeholder="Search by Name"
              classes="pa-1"
              onChange={({ target }) => setSearchName(target.value)}
            />
          </div>
          <div>
            <div>Price Filter: {searchPrice}</div>
            <RangeInput
              value={searchPrice}
              name="priceFilter"
              min={numberOfNights}
              max={330 * numberOfNights}
              step={10}
              onChange={({ target }) => setSearchPrice(target.value)}
            />
          </div>
        </div>
        <div className='w-100'>
          <div className='d-flex flex-justify-between col-p'>
            <span className='mb-2'>
              <span>Total Nights: </span>
              <span>{numberOfNights}</span>
            </span>
            <div>
              <Button
                text="Sort by Name"
                classes={`${sortBy === 'name' ? 'bg-primary color-secondary' : ''} pa-1 mr-1`}
                onClick={() => setSortBy('name')}
              />
              <Button
                text="Sort by Price"
                classes={`${sortBy === 'price' ? 'bg-primary color-secondary' : ''} pa-1`}
                onClick={() => setSortBy('price')}
              />
            </div>
          </div>
          <div className='d-flex flex-justify-between wrap'>
            {sortHotels.length ? (
              sortHotels.map((item, index) => {
                return (
                  <HotelCard
                    key={index}
                    totalNights={numberOfNights}
                    hotel={item}
                  />
                );
              })
            ) : (
              <div>No Result Found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Prepare initial Date values
  let today = new Date();
  let nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);

  // Change date format to e.g 2022-3-16
  today = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  nextweek = nextweek.getFullYear()+'-'+(nextweek.getMonth()+1)+'-'+nextweek.getDate();

  const { from = today, to = nextweek, limit = 10 } = context.query;
  const apiResponse = (await hotelsServices.getHotels( from, to, limit)).data;
  const hotels = filterHotelsByDate(apiResponse, from, to);
  return {
    props: {
      hotels: hotels,
    },
  };
}

export default HotelsList;
