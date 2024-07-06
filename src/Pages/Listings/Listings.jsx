import './Listings.scss';
import { BsFilter } from 'react-icons/bs';
import Search from '@/components/Search';
import ListingDeetsCard from '@/components/DashboardComps/ListingComps/ListingDeetsCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetAllPropertiesQuery } from '@/api/apiSlice';
import { selectUserData } from '@/Redux/Features/userAuthSlice';
import { useSelector } from 'react-redux';
import EmptyState from '@/components/EmptyState/EmptyState';
import noShift from '@/assets/noSift.png';
import gif from '@/assets/newBanner.gif';
import { selectSearch } from '@/Redux/Features/globalSlice';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import AddGifBanner from '@/components/AddGifBanner';
import { selectSubValidity } from '@/Redux/Features/userDatasSlice';
import { useSweetAlert } from '@/Hooks/useSweetAlert';
import { FaCopy } from 'react-icons/fa';
import Spinner from '@/spinner/Spinner';

function Listings() {
  const { authUser } = useSelector(selectUserData);
  const searchTerms = useSelector(selectSearch);
  const { handleSearch } = useGlobalHooks();
  const { showAlert } = useSweetAlert();
  const [filteredData, setFilteredData] = useState([]);
  const checkPlanValidity = useSelector(selectSubValidity);
  const { data, isLoading } = useGetAllPropertiesQuery(authUser.userId);
  const [toggle, setToggle] = useState({ [0]: true });

  const toggleAccordion = (id) => {
    setToggle((prev) => ({ [id]: !prev[id] }));
  };

  useEffect(() => {
    handleSearch(data, searchTerms, setFilteredData, 'Property_Name');
  }, [searchTerms, data]);

  const handleCopyAgentLink = async () => {
    try {
      await navigator.clipboard.writeText(
        `https://property4u.ng/agents/${authUser.userId}`,
      );
      console.log('Link copied to clipboard successfully!');
      showAlert('Link copied to clipboard successfully!');
    } catch (error) {
      console.error('Failed to copy link to clipboard:', error);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className='listings flex flex-col py-8'>
      {!checkPlanValidity ? (
        <section className='emptyStateContainer w-11/12 h-[85vh] m-auto flex flex-col items-center '>
          <EmptyState
            icons={noShift}
            title="You're not subscribed yet"
            subTitle='Click the button to below to explore our plans and subsscribe.'
          />
          <div className='my-3'>
            <Link to='/subscription' className='main-btn'>
              {' '}
              Subscribe
            </Link>
          </div>
        </section>
      ) : filteredData.length === 0 && searchTerms === '' ? (
        <section className='emptyStateContainer w-11/12 h-[85vh] m-auto flex flex-col items-center '>
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
        <section className='flex flex-col lg:flex-row justify-between'>
          <article className='w-full lg:w-4/12 listSide'>
            <div className='w-11/12 pb-5 flex flex-col mx-auto '>
              <div className='flex flex-col lg:flex-row justify-between items-center'>
                <h1 className='my-3'> Listings</h1>
                <div>
                  <Link to='/addproperty' className='main-btn'>
                    {' '}
                    + Add Property
                  </Link>
                </div>
              </div>
              <button
                onClick={handleCopyAgentLink}
                className='main-btn my-4 flex items-center gap-3'
              >
                {' '}
                <FaCopy /> Copy your unique link
              </button>
            </div>
            <hgroup className='w-11/12  mx-auto flex justify-between'>
              <h1 className='my-3'>
                {' '}
                Properties <span className='count'> {data.length} </span>
              </h1>
              <h1 className='my-3'>
                {' '}
                <BsFilter />
              </h1>
            </hgroup>

            <div className='w-11/12  my-3 mx-auto'>
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
                          ? 'cardActive flex justify-between'
                          : 'flex justify-between'
                      }
                      onClick={() => toggleAccordion(idx)}
                    >
                      <figure className='w-3/12'>
                        <img
                          src={ExteriorImages[0]?.url || InteriorImages[0]?.url}
                          alt=''
                        />
                      </figure>
                      <div className='w-8/12 flex justify-between'>
                        <div className='listTitle flex flex-col justify-between py-2'>
                          <h4>{Property_Name} </h4>
                          <p>{StreetAddress.substring(0, 18)}... </p>
                        </div>

                        <div>
                          <div className='flex gap-1 '>
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

          <article className='w-full lg:8'>
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
