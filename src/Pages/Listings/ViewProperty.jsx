import React from 'react';
import { useParams } from 'react-router-dom';
import './ViewProperty.scss';
import { BsShare } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineHelpOutline } from 'react-icons/md';
import { PropDeetsAside } from '@/components/PropDeetsAside/PropDeetsAside';
import { useGetPropertyByIdQuery } from '@/api/apiSlice';
import { useSelector } from 'react-redux';
import { selectUser } from '@/Redux/Features/userDatasSlice';
import Skeleton from 'react-loading-skeleton';
import { formatNumInThousands, readableDateTime } from '@/utils';
import listedOn from '@/assets/listedOn.png';
import { BiSearch } from 'react-icons/bi';
import { ImageSlider } from '@/components/ImageSlider';
import GoBackBtn from '@/components/GoBackBtn';

const ViewProperty = () => {
  const { id } = useParams();
  const { user } = useSelector(selectUser);

  const { data, isLoading } = useGetPropertyByIdQuery(id);
  console.log(data);

  if (isLoading) {
    return (
      <section>
        <Skeleton active block height={200} />

        <section className='flex justify-between gap-4'>
          <article className='w-8/12'>
            <Skeleton active block height={100} count={5} />
          </article>
          <aside className='flex-1'>
            <Skeleton active block height={100} count={5} />
          </aside>
        </section>
      </section>
    );
  }

  const {
    Amenities,
    Baths,
    BedRooms,
    YearBuilt,
    CreationDate,
    Description,
    InteriorImages,
    City,
    State,
    PaymentType,
    MonthlyRent,
    // PriceHistory,
    PropertyType,
    Property_Name,
    // SecurityDeposit,
    SquareFoot,
    StreetAddress,
    // TotalApplicants,
    // UnitNumber,
    // Vacancy,
    // Videos,
    // Zipcode,
    status,
  } = data;

  // // IF the availability date is < currentDate, render 'Available Now' : render the date it wil be available
  // const getDate = () => {
  //   return new Date(DateAvalaibality) < new Date()
  //     ? 'Available now'
  //     : formatDate(DateAvalaibality);
  // };

  const { CompanyName, profilePic, lastName, firstName } = user;

  const rentalFeatures = [
    {
      id: 1,
      title: 'Listed On',
      icon: listedOn,
      val: readableDateTime(CreationDate),
    },
    { id: 2, title: 'City', val: City },
    { id: 3, title: 'State', val: State },
    //   { id: 4, title: 'Date available', val: getDate() },
    { id: 5, title: 'Type', val: PropertyType },
    { id: 6, title: 'Size', val: `${formatNumInThousands(SquareFoot)} sqft` },
    // {
    //   id: 7,
    //   title: 'Deposite Fees',
    //   val: formatNumInThousands(SecurityDeposit),
    // },
  ];
  return (
    <main className='propDeets container py-5 overflow-hidden'>
      <GoBackBtn className='outline-btn' />

      <article className='flex flex-col lg:flex-row justify-between items-start lg:items-end mt-8'>
        <div>
          <h2 className='!text-xl lg:!text-5xl'> {Property_Name}</h2>
          <p className='my-2'> {StreetAddress}</p>
        </div>
        <div className='propDeetsBtns flex flex-wrap gap-2 my-4 lg:my-0'>
          <div>
            <button>
              {' '}
              <BsShare color='var(--mainColor)' /> Share
            </button>
          </div>
          <div>
            <button>
              {' '}
              <FaRegHeart color='var(--mainColor)' /> Favourite
            </button>
          </div>

          <div>
            <button>
              <BiSearch color='var(--mainColor)' />
              Browse nearby listings
            </button>
          </div>
        </div>
      </article>

      <ImageSlider imageData={InteriorImages} />

      <section className='flex flex-col md:flex-row justify-between'>
        <article className='w-full md:w-8/12'>
          <ul className='propBanner mt-4 py-2 px-3 flex flex-wrap gap-2 justify-between w-full'>
            <li>
              <h5> Property Type</h5>
              <div>
                <h6 className='flex gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 20 20'
                    fill='none'
                  >
                    <g clipPath='url(#clip0_185_1686)'>
                      <path
                        d='M17.2607 6.56848L11.7055 2.25163C11.218 1.87272 10.618 1.66699 10.0003 1.66699C9.38266 1.66699 8.78263 1.87272 8.29512 2.25163L2.73887 6.56848C2.40495 6.82791 2.1348 7.16015 1.94903 7.53982C1.76326 7.91949 1.66679 8.33656 1.66699 8.75916V16.2522C1.66699 16.8043 1.88649 17.3337 2.27719 17.724C2.66789 18.1144 3.19779 18.3337 3.75033 18.3337H16.2503C16.8029 18.3337 17.3328 18.1144 17.7235 17.724C18.1142 17.3337 18.3337 16.8043 18.3337 16.2522V8.75916C18.3337 7.90266 17.9378 7.09403 17.2607 6.56848Z'
                        stroke='var(--Grey6)'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_185_1686'>
                        <rect width='20' height='20' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>{PropertyType} </span>
                </h6>
              </div>
            </li>
            <li>
              <h5> BedRooms</h5>
              <div>
                <h6 className='flex gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <g opacity='0.5'>
                      <path
                        d='M18 11.25H4.5V6.375C4.50148 5.87818 4.6995 5.40212 5.05081 5.05081C5.40212 4.6995 5.87818 4.50148 6.375 4.5H17.625C18.1218 4.50148 18.5979 4.6995 18.9492 5.05081C19.3005 5.40212 19.4985 5.87818 19.5 6.375V11.25H18Z'
                        stroke='#000929'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M2.25 19.5V14.25C2.25235 13.4551 2.56917 12.6934 3.13128 12.1313C3.69338 11.5692 4.45507 11.2523 5.25 11.25H18.75C19.5449 11.2523 20.3066 11.5692 20.8687 12.1313C21.4308 12.6934 21.7477 13.4551 21.75 14.25V19.5'
                        stroke='#000929'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M2.25 19.5V19.125C2.25087 18.8269 2.36967 18.5413 2.58046 18.3305C2.79125 18.1197 3.0769 18.0009 3.375 18H20.625C20.9231 18.0009 21.2087 18.1197 21.4195 18.3305C21.6303 18.5413 21.7491 18.8269 21.75 19.125V19.5'
                        stroke='#000929'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </g>
                  </svg>
                  <span>{BedRooms}</span>
                </h6>
              </div>
            </li>
            <li>
              <h5> BathRooms</h5>
              <div>
                <h6 className='flex gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <g opacity='0.5'>
                      <path
                        d='M18 11.25H4.5V6.375C4.50148 5.87818 4.6995 5.40212 5.05081 5.05081C5.40212 4.6995 5.87818 4.50148 6.375 4.5H17.625C18.1218 4.50148 18.5979 4.6995 18.9492 5.05081C19.3005 5.40212 19.4985 5.87818 19.5 6.375V11.25H18Z'
                        stroke='#000929'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M2.25 19.5V14.25C2.25235 13.4551 2.56917 12.6934 3.13128 12.1313C3.69338 11.5692 4.45507 11.2523 5.25 11.25H18.75C19.5449 11.2523 20.3066 11.5692 20.8687 12.1313C21.4308 12.6934 21.7477 13.4551 21.75 14.25V19.5'
                        stroke='#000929'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M2.25 19.5V19.125C2.25087 18.8269 2.36967 18.5413 2.58046 18.3305C2.79125 18.1197 3.0769 18.0009 3.375 18H20.625C20.9231 18.0009 21.2087 18.1197 21.4195 18.3305C21.6303 18.5413 21.7491 18.8269 21.75 19.125V19.5'
                        stroke='#000929'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </g>
                  </svg>
                  <span>{Baths}</span>
                </h6>
              </div>
            </li>
            <li>
              <h5> Square Area</h5>
              <div>
                <h6 className='flex gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <g opacity='0.5' clipPath='url(#clip0_283_15520)'>
                      <path
                        d='M10.5974 18.6523L4.14718 12.2021C3.41709 11.472 3.41709 10.1278 4.14718 9.39768L10.5974 2.94747C11.3275 2.21738 12.6717 2.21738 13.4018 2.94747L19.852 9.39768C20.5821 10.1278 20.5821 11.472 19.852 12.2021L13.4018 18.6523C12.6717 19.3824 11.3275 19.3824 10.5974 18.6523V18.6523Z'
                        stroke='#000929'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M2.40039 15.8059L7.63685 21.0424'
                        stroke='#000929'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M16.3633 21.0424L21.5997 15.8059'
                        stroke='#000929'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_283_15520'>
                        <rect width='24' height='24' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>{SquareFoot ? SquareFoot : 'Nill'}</span>
                </h6>
              </div>
            </li>
            <li>
              <h5> Year Built</h5>
              <div>
                <h6 className='flex gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='22'
                    viewBox='0 0 20 22'
                    fill='none'
                    opacity='0.5'
                  >
                    <path
                      d='M1.09277 8.40421H18.9167'
                      stroke='#000929'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M14.442 12.3097H14.4512'
                      stroke='#000929'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M10.0045 12.3097H10.0137'
                      stroke='#000929'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M5.55818 12.3097H5.56744'
                      stroke='#000929'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M14.442 16.1962H14.4512'
                      stroke='#000929'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M10.0045 16.1962H10.0137'
                      stroke='#000929'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M5.55818 16.1962H5.56744'
                      stroke='#000929'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M14.0433 1V4.29078'
                      stroke='#000929'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M5.96515 1V4.29078'
                      stroke='#000929'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M14.2383 2.57922H5.77096C2.83427 2.57922 1 4.21516 1 7.22225V16.2719C1 19.3263 2.83427 21 5.77096 21H14.229C17.175 21 19 19.3546 19 16.3475V7.22225C19.0092 4.21516 17.1842 2.57922 14.2383 2.57922Z'
                      stroke='#000929'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>

                  <span>{YearBuilt ? YearBuilt : 'Nill'}</span>
                </h6>
              </div>
            </li>
            <li>
              <h5> Status</h5>
              <div>
                <h6 className='flex gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      opacity='0.5'
                      d='M12.0001 22C17.5001 22 22.0001 17.5 22.0001 12C22.0001 6.5 17.5001 2 12.0001 2C6.50012 2 2.00012 6.5 2.00012 12C2.00012 17.5 6.50012 22 12.0001 22Z'
                      stroke='#000929'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      opacity='0.5'
                      d='M7.74988 12.0002L10.5799 14.8302L16.2499 9.17017'
                      stroke='#000929'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <span>{status}</span>
                </h6>
              </div>
            </li>
          </ul>

          <section className='Desc my-4'>
            <h4>About this home</h4>
            <p className='my-2'>{Description}</p>
          </section>

          <hr />
          <section className='agentDeets my-4'>
            <small>Listed by property owner</small>

            <ul className='flex flex-col gap-3 lg:flex-row justify-between my-3'>
              <li className='flex gap-3'>
                <div className='w-3/12 flex'>
                  <figure className=' w-[48px] !h-[48px] overflow-hidden !rounded-full'>
                    <img
                      src={profilePic}
                      alt='Ilemi Agent Images'
                      className='object-cover '
                    />
                  </figure>
                </div>

                <div>
                  <h5>
                    {firstName} {lastName}{' '}
                  </h5>
                  <small>{CompanyName} </small>
                </div>
              </li>

              <li className='propDeetsBtns flex gap-2'>
                <div>
                  <button> Ask a question</button>{' '}
                </div>
                <div>
                  <button>
                    {' '}
                    <MdOutlineHelpOutline /> Get more info
                  </button>
                </div>
              </li>
            </ul>
          </section>
          <hr />

          <section className={rentalFeatures}>
            <h4>Rental features</h4>

            <article className='flex flex-col justify-between mt-3 divide-y '>
              <div className='flex flex-wrap justify-between'>
                {rentalFeatures.map(({ id, title, icon, val }) => (
                  <div key={id} className={` w-11/12 md:w-5/12`}>
                    <div className='flex justify-between my-2 border-bottom pb-1'>
                      <small className='flex gap-3 w-7/12 md:w-8/12 items-center'>
                        <span>{title}</span>
                        {icon && (
                          <figure className='!w-10 !h-10'>
                            <img className='object-contain' src={icon} alt='' />{' '}
                          </figure>
                        )}{' '}
                      </small>{' '}
                      <h6 className='flex-fill text-end'> {val} </h6>
                    </div>
                  </div>
                ))}{' '}
              </div>

              <div className='flex flex-col border-bottom border-top py-2'>
                <h6> Amenities</h6>
                <ul className='flex flex-wrap gap-2 justify-between mt-2'>
                  {Amenities?.map(({ _id, title }) => (
                    <li key={_id} className='propDeetsBtns'>
                      <button className=''>{title}</button>{' '}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </section>

          <hr />

          {/* <section className='my-3'>
            <small>
              You agree to Property4u Terms of Use & Privacy Policy. By choosing
              to contact a property, you also agree that Property4u Group,
              landlords, and property managers may call or text you about any
              inquiries you submit through our services, which may involve use
              of automated means and pre-recorded/artificial voices. You
              don&apos;t need to consent as a condition of renting any property,
              or buying any other goods or services. Message/data rates may
              apply.
            </small>
          </section> */}
        </article>
        <aside className='w-11/12 md:w-3/12 mt-5 mt-md-0'>
          <PropDeetsAside
            PropertyType={PropertyType}
            MonthlyRent={MonthlyRent}
            status={status}
            paymentType={PaymentType}
          />
        </aside>
      </section>
    </main>
  );
};

export default ViewProperty;
