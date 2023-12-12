import { propertiesData } from '@/components/AllData';
import './Listings.scss';
import { BsFilter } from 'react-icons/bs';
import Search from '@/components/Search';
import ListingDeetsCard from '@/components/DashboardComps/ListingComps/ListingDeetsCard';
import { useState } from 'react';

function Listings() {
  const [toggle, setToggle] = useState({ [1]: true });

  const toggleAccordion = (id) => {
    console.log(id);
    setToggle((prev) => ({ [id]: !prev[id] }));
  };

  return (
    <main className='listings d-flex flex-column '>
      <hgroup className='ms-4'>
        <h1 className='my-3'> Listings</h1>
      </hgroup>

      <section className='d-flex flex-column flex-md-row justify-content-between'>
        <article className='col-12 col-md-4'>
          <hgroup className='ms-4 d-flex justify-content-between'>
            <h1 className='my-3'>
              {' '}
              Properties{' '}
              <span className='count'> {propertiesData.length} </span>
            </h1>
            <h1 className='my-3'>
              {' '}
              <BsFilter />
            </h1>
          </hgroup>

          <div className='col-11  my-3 mx-auto'>
            <Search placeholder='Search...' />
          </div>

          <ul className='listCard'>
            {propertiesData.map(
              ({
                id,
                title,
                price,
                imageUrl,
                location,
                status,
                bed,
                bathroom,
                sqrmeter,
              }) => (
                <li key={id} className='d-flex justify-content-between'>
                  <figure className='col-3'>
                    <img src={imageUrl} alt='' />
                  </figure>
                  <div className='col-8 d-flex justify-content-between'>
                    <div className='listTitle d-flex flex-column justify-content-between py-2'>
                      <h4>{title} </h4>
                      <p>{location.substring(0, 18)}... </p>
                    </div>

                    <div>
                      <div className='d-flex gap-1 '>
                        <div>
                          <button
                            className={
                              status === 'Active' || status === 'Occupied'
                                ? 'verify'
                                : status === 'Maintenance'
                                ? 'del'
                                : status === 'Vacant'
                                ? 'view'
                                : 'archive'
                            }
                          >
                            {' '}
                            {status}{' '}
                          </button>
                        </div>
                      </div>
                      <small>{sqrmeter} </small>
                    </div>
                  </div>
                </li>
              ),
            )}
          </ul>
        </article>

        <article className='col-12 col-md-8'>
          <ListingDeetsCard />
        </article>
      </section>
    </main>
  );
}

export default Listings;
