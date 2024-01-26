import React from 'react';
import './ListingDeetsCard.scss';
import { BsCalendarDate } from 'react-icons/bs';
// import { ProgressBar } from 'react-bootstrap';
// import { MdOutlineEmail } from 'react-icons/md';
// import { PiCaretRightBold } from 'react-icons/pi';

function ListingDeetsCard({
  toggle,
  id,
  propData: {
    Property_Name,
    PropertyType,
    BedRooms,
    StreetAddress,
    SquareFoot,
    Description,
    Amenities,
    YearBuilt,
    Property_Category,
    Baths,
  },
}) {
  return (
    <>
      {toggle[id] && (
        <main key={id} className='ListingDeetsCard col-11 mx-auto py-5'>
          <section>
            <div className='d-flex justify-content-between'>
              <div className='col-8'>
                <h3>{Property_Name}</h3>
                <p>{StreetAddress}</p>
              </div>
              <div className='col-3 d-flex flex-column'>
                <div className='card d-flex flex-row py-1 px-2 gap-1 showProp align-items-center'>
                  <BsCalendarDate color='var(--Grey6)' />
                  <span className=''> Show Property Calendar</span>
                </div>
              </div>
            </div>

            <ul className='propBanner mt-4 py-2 px-3 d-flex flex-wrap gap-2 justify-content-between'>
              <li>
                <h5> Property Type</h5>
                <div>
                  <h6 className='d-flex gap-2'>
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
                    <span>{PropertyType.slice(0, 14)}. </span>
                  </h6>
                </div>
              </li>
              <li>
                <h5> Rooms</h5>
                <div>
                  <h6 className='d-flex gap-2'>
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
                  <h6 className='d-flex gap-2'>
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
                <h5> Square Feet </h5>
                <div>
                  <h6 className='d-flex gap-2'>
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
                  <h6 className='d-flex gap-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='22'
                      viewBox='0 0 20 22'
                      fill='none'
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
                <h5> Property Cat.</h5>
                <div>
                  <h6 className='d-flex gap-2'>
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
                    <span>{Property_Category}</span>
                  </h6>
                </div>
              </li>
              <li>
                <h5> Request</h5>
                <div>
                  <h6 className='d-flex gap-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <g opacity='0.5'>
                        <path
                          d='M9 11V17L11 15'
                          stroke='#000929'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M9 17L7 15'
                          stroke='#000929'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14'
                          stroke='#000929'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M22 10H18C15 10 14 9 14 6V2L22 10Z'
                          stroke='#000929'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </g>
                    </svg>
                    <span>0</span>
                  </h6>
                </div>
              </li>
            </ul>

            <section className='selectedProp d-flex flex-column flex-md-row justify-content-between mt-5'>
              <article className='col-12 col-md-6'>
                {/* <div>
                  <h4>Available rooms</h4>
                  <p>Total rooms available</p>
                  <ProgressBar now={68} className='my-2' />
                  <div className='d-flex justify-content-between'>
                    <h6>2 rooms available of 4 rooms</h6>
                    <h6>50%</h6>
                  </div>
                </div> */}
                <div className='my-3'>
                  <h4>Description</h4>
                  <p>{Description}</p>
                </div>

                <div>
                  <h4>Equipments</h4>
                  <ul className='d-flex flex-wrap gap-1'>
                    {Amenities.map((item, idx) => (
                      <small key={idx} className='view'>
                        {item.title}{' '}
                      </small>
                    ))}
                  </ul>
                </div>
              </article>
              {/* <aside className='col-12 col-md-5  d-flex flex-column justify-content-between'>
                <div className='tenantCard'>
                  <div className='titleGroup d-flex gap-3 py-3'>
                    <figure className='messageAvatar'>
                      <img
                        src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png'
                        alt=''
                      />
                    </figure>
                    <div>
                      <h5> Manuel Villa</h5>
                      <small> Tenants</small>
                    </div>
                  </div>

                  <div className='mt-3'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <small> Move-in Date</small>
                      <h5>Dec 1, 2021</h5>
                    </div>
                    <div className='d-flex justify-content-between align-items-center my-3'>
                      <small> Contact</small>
                      <h5>(+1) 324-5329</h5>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <small> Price Per Month</small>
                      <h5>(+1) 324-5329</h5>
                    </div>
                    <div className='my-3 col-12'>
                      <button
                        className='main-btn col-12 d-flex align-items-center justify-content-center gap-2'
                        type='button'
                      >
                        <MdOutlineEmail />
                        <span>Send Message</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className='propOccupied my-3'>
                  <p className='mb-3'>Property occupied this month:</p>
                  <div className='d-flex align-items-end justify-content-between'>
                    <div className='d-flex align-items-end gap-2'>
                      <h3>83%</h3>{' '}
                      <small className='viewMore'>60 tenants</small>
                    </div>
                    <PiCaretRightBold />
                  </div>
                </div>
              </aside> */}
            </section>
          </section>
        </main>
      )}
    </>
  );
}

export default ListingDeetsCard;
