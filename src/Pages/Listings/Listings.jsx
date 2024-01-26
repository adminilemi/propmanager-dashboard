import './Listings.scss';
import { BsFilter } from 'react-icons/bs';
import Search from '@/components/Search';
import ListingDeetsCard from '@/components/DashboardComps/ListingComps/ListingDeetsCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { useGetAllPropertiesQuery } from '@/api/apiSlice';
import { selectUserData } from '@/Redux/Features/userAuthSlice';
import { useSelector } from 'react-redux';
import EmptyState from '@/components/EmptyState/EmptyState';
import noShift from '@/assets/noSift.png';
import gif from '@/assets/ilemiAdBanner.gif';
import { selectSearch } from '@/Redux/Features/globalSlice';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import AddGifBanner from '@/components/AddGifBanner';

function Listings() {
  const { authUser } = useSelector(selectUserData);
  const searchTerms = useSelector(selectSearch);
  const { handleSearch } = useGlobalHooks();
  const [filteredData, setFilteredData] = useState([]);
  const { data, isLoading } = useGetAllPropertiesQuery(authUser.userId);
  const [toggle, setToggle] = useState({ [0]: true });

  const toggleAccordion = (id) => {
    setToggle((prev) => ({ [id]: !prev[id] }));
  };

  console.log(data);

  useEffect(() => {
    handleSearch(data, searchTerms, setFilteredData, 'Property_Name');
  }, [searchTerms, data]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className='listings d-flex flex-column '>
      {filteredData.length === 0 && searchTerms === '' ? (
        <section
          style={{ height: '95vh' }}
          className='emptyStateContainer col-11  m-auto d-flex flex-column align-items-center '
        >
          <EmptyState
            icons={noShift}
            title='No New Property yet'
            subTitle='Your content will show here when you have them'
          />
          <div className='my-3'>
            <Link to='/addproperty' className='main-btn'>
              {' '}
              + Add Property
            </Link>
          </div>
        </section>
      ) : (
        <section className='d-flex flex-column flex-lg-row justify-content-between'>
          <article className='col-12 col-lg-4 listSide'>
            <div className='col-11 pb-5 mx-auto d-flex flex-column flex-lg-row justify-content-between align-items-center'>
              <h1 className='my-3'> Listings</h1>
              <div>
                <Link to='/addproperty' className='main-btn'>
                  {' '}
                  + Add Property
                </Link>
              </div>
            </div>
            <hgroup className='col-11  mx-auto d-flex justify-content-between'>
              <h1 className='my-3'>
                {' '}
                Properties <span className='count'> {data.length} </span>
              </h1>
              <h1 className='my-3'>
                {' '}
                <BsFilter />
              </h1>
            </hgroup>

            <div className='col-11  my-3 mx-auto'>
              <Search placeholder='Search...' />
            </div>

            {filteredData.length === 0 && searchTerms !== '' ? (
              <div>
                <p> There&apos;s no match to your search</p>{' '}
              </div>
            ) : (
              <ul className='listCard'>
                {filteredData.map(
                  (
                    {
                      ExteriorImages,
                      InteriorImages,
                      StreetAddress,
                      status,
                      SquareFoot,
                      Property_Name,
                    },
                    idx,
                  ) => (
                    <li
                      key={idx}
                      className={
                        toggle[idx]
                          ? 'cardActive d-flex justify-content-between'
                          : 'd-flex justify-content-between'
                      }
                      onClick={() => toggleAccordion(idx)}
                    >
                      <figure className='col-3'>
                        <img
                          src={ExteriorImages[0]?.url || InteriorImages[0]?.url}
                          alt=''
                        />
                      </figure>
                      <div className='col-8 d-flex justify-content-between'>
                        <div className='listTitle d-flex flex-column justify-content-between py-2'>
                          <h4>{Property_Name} </h4>
                          <p>{StreetAddress.substring(0, 18)}... </p>
                        </div>

                        <div>
                          <div className='d-flex gap-1 '>
                            <div>
                              <button
                                className={
                                  status === 'ACTIVE' || status === 'Occupied'
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
                          <small>{SquareFoot} </small>
                        </div>
                      </div>
                    </li>
                  ),
                )}
              </ul>
            )}
          </article>

          <article className='col-12 col-lg-8'>
            <section className=''>
              <AddGifBanner images={gif} />
            </section>

            {filteredData.map((item, idx) => (
              <ListingDeetsCard
                id={idx}
                key={item._id}
                propData={item}
                toggle={toggle}
              />
            ))}
          </article>
        </section>
      )}
    </main>
  );
}

export default Listings;
