import { useGlobalHooks } from '@/Hooks/globalHooks';
import { useCreateSubscriptionsMutation } from '@/api/apiSlice';
import { pricingPlan } from '@/components/AllData';
import PopUp from '@/components/popUps/PopUp';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { BsXLg } from 'react-icons/bs';
import { FaCircle } from 'react-icons/fa';

function PlanSummary({ planData, id, close }) {
  const [total, setTotal] = useState({ isYear: false, price: 0 });
  const [subSummary, setSubSummary] = useState('');
  const { handleShow } = useGlobalHooks();
  const [subscribe, { isLoading }] = useCreateSubscriptionsMutation();

  useEffect(() => {
    if (id.includes('Monthly')) {
      setSubSummary(pricingPlan.Monthly.find((item) => item.id === id));
    } else {
      setSubSummary(pricingPlan.Yearly.find((item) => item.id === id));
      setTotal({
        isYear: true,
        price: pricingPlan.Yearly.find((item) => item.id === id).price * 12,
      });
    }
  }, []);

  const handleSuubscribe = async () => {
    try {
      const result = await subscribe(planData);
      if (result.data) {
        handleShow(id);
        window.location.href = result.data.paymentURL;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PopUp id={id}>
      <main className='planSummary '>
        <section className='col-11 mx-auto py-3 d-flex justify-content-between'>
          <h4>Upgrade Plan</h4>{' '}
          <h4 onClick={close} className='Icons'>
            {' '}
            <BsXLg />{' '}
          </h4>
        </section>
        <hr />

        <section className='col-11 mx-auto'>
          <article className='planCardBody mb-3'>
            <div className='my-3'>
              <h5>Plan</h5>
              <h3 className='subSumTitle my-3 p-3 d-flex justify-content-between'>
                {subSummary.title} ₦{subSummary.price} per month
                <span>x {total.isYear ? 'Twelve' : 'One'}</span>
              </h3>
            </div>
            {subSummary?.benefits?.map(({ id, li }) => (
              <ul className='' key={id}>
                <li className='d-flex gap-2 py-2'>
                  <div>
                    <FaCircle color='#CBD5E0' size={10} />
                  </div>
                  <span>{li}</span>
                </li>
              </ul>
            ))}
          </article>
          <hr />
          <article className='d-flex gap-2 mt-2 align-items-center'>
            <h4>Total</h4>
            <h3 className='subSumTitle my-3 p-3'>
              ₦{total.isYear ? total.price : subSummary?.price}
            </h3>
          </article>
        </section>

        <section className='col-11 mx-auto d-flex flex-column my-4'>
          <button
            className='main-btn col-12 text-center my-3'
            type='button'
            onClick={handleSuubscribe}
          >
            {isLoading ? <Spinner /> : 'Make Payment'}
          </button>
          <button className='outline-btn col-12' onClick={close} type='button'>
            {' '}
            Cancel
          </button>
        </section>
      </main>
    </PopUp>
  );
}

export default PlanSummary;
