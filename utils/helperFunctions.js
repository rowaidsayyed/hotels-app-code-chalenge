export const getTotalNights = (from, to) => {
  const fromDate = new Date(from);
  const toDate = new Date(to);
  const diffTime = Math.abs(toDate - fromDate);
  const totalNights = Math.ceil(diffTime / (1000 * 3600 * 24));
  return totalNights;
};

export const filterHotelsByDate = (list, from, to) => {
  const fromDate = new Date(from).getTime();
  const toDate = new Date(to).getTime();
  const hotels = list.filter((hotel) => {
    const availableOn = new Date(hotel.available_on).getTime();
    return availableOn >= fromDate && availableOn <= toDate;
  });
  return hotels;
};

export const getSortedList = (list, sortBy = 'name', asc = true) => {
  const ascValue = asc ? 1 : -1;
  const compare = (firstItem, secondItem) => {
    if (firstItem[sortBy] > secondItem[sortBy]) {
      return ascValue;
    }
    if (secondItem[sortBy] > firstItem[sortBy]) {
      return ascValue * -1;
    }
    return 0;
  };

  return list.sort(compare);
};

export const filterByName = (list, name) => {
  const filter = name.toUpperCase();
  const filteredItems = list.filter((item) => {
    const itemName = item.name.toUpperCase();
    return itemName.indexOf(filter) > -1;
  });
  return filteredItems;
};

export const filterByPrice = (list, price) => list.filter((item) => item.price <= price);
