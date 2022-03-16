import { useState } from 'react';
import Router from 'next/router';
import Button from '@/components/shared/Button';
import InputField from '@/components/shared/InputField';

function Home() {
  const [toDate, setToDate] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [errors, setErrors] = useState({});

  const validateDate = () => {
    let temperrors = {};
    if (fromDate === '') {
      temperrors['fromDate'] = 'plz add a date';
    }
    if (toDate === '') {
      temperrors['toDate'] = 'plz add a date';
    }
    if (toDate < fromDate) {
      temperrors['toDate'] = 'Invalid Input';
    }
    return {
      isValid: !Object.keys(temperrors).length,
      errors: temperrors,
    };
  };

  const submitSearchByDate = () => {
    const { isValid, errors } = validateDate();

    if (isValid) {
      const query = {
        from: fromDate,
        to: toDate,
        limit: 10 // Max get 10 hotels
      };
      Router.push({
        pathname: '/listings',
        query,
      });
    } else {
      setErrors(() => errors);
    }
  };

  return (
    <div>
      <div className='d-flex col flex-align-center mb-5'>
        <h1>Hotels App</h1>
        <p>Please Choose Date</p>
      </div>
      <div className="d-flex flex-justify-evenly flex-align-center col-p">
        <div className='mb-3'>
          <div className='mb-2'>From:</div>
          <InputField
            data-testid="from-input"
            ariaLabel="From"
            type="date"
            name="fromDate"
            errorText={errors['fromDate']}
            onChange={({ target }) => setFromDate(target.value)}
          />
        </div>
        <div className='mb-3'>
          <div className='mb-2'>TO: </div>
          <InputField 
            type="date"
            ariaLabel="to"
            name="toDate"
            errorText={errors['toDate']}
            onChange={({ target }) => setToDate(target.value)} 
          />
        </div>
        <Button text="Submit" classes='pa-3 bg-primary color-secondary' onClick={submitSearchByDate} />
      </div>
    </div>
  );
}

export default Home;
