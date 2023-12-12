import React from 'react';
import { FaHome } from 'react-icons/fa';
import './ListingDeetsCard.scss';
import { BsCalendarDate } from 'react-icons/bs';
import { ProgressBar } from 'react-bootstrap';
import { MdOutlineEmail } from 'react-icons/md';
import { PiCaretRightBold } from 'react-icons/pi';

function ListingDeetsCard() {
  return (
    <main className='ListingDeetsCard col-11 mx-auto'>
      <section>
        <div className='d-flex justify-content-between'>
          <div className='col-8'>
            <h3>Rental Overview</h3>
            <p>Show overview from Nov 2021 - Dec 2021. </p>
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
            <h5> Properties</h5>
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
                <span>46</span>
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
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M2.25 19.5V14.25C2.25235 13.4551 2.56917 12.6934 3.13128 12.1313C3.69338 11.5692 4.45507 11.2523 5.25 11.25H18.75C19.5449 11.2523 20.3066 11.5692 20.8687 12.1313C21.4308 12.6934 21.7477 13.4551 21.75 14.25V19.5'
                      stroke='#000929'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M2.25 19.5V19.125C2.25087 18.8269 2.36967 18.5413 2.58046 18.3305C2.79125 18.1197 3.0769 18.0009 3.375 18H20.625C20.9231 18.0009 21.2087 18.1197 21.4195 18.3305C21.6303 18.5413 21.7491 18.8269 21.75 19.125V19.5'
                      stroke='#000929'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </g>
                </svg>
                <span>46</span>
              </h6>
            </div>
          </li>
          <li>
            <h5> Living Space</h5>
            <div>
              <h6 className='d-flex gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <g opacity='0.5' clip-path='url(#clip0_283_15520)'>
                    <path
                      d='M10.5974 18.6523L4.14718 12.2021C3.41709 11.472 3.41709 10.1278 4.14718 9.39768L10.5974 2.94747C11.3275 2.21738 12.6717 2.21738 13.4018 2.94747L19.852 9.39768C20.5821 10.1278 20.5821 11.472 19.852 12.2021L13.4018 18.6523C12.6717 19.3824 11.3275 19.3824 10.5974 18.6523V18.6523Z'
                      stroke='#000929'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M2.40039 15.8059L7.63685 21.0424'
                      stroke='#000929'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M16.3633 21.0424L21.5997 15.8059'
                      stroke='#000929'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_283_15520'>
                      <rect width='24' height='24' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <span>46</span>
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
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M14.442 12.3097H14.4512'
                    stroke='#000929'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M10.0045 12.3097H10.0137'
                    stroke='#000929'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M5.55818 12.3097H5.56744'
                    stroke='#000929'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M14.442 16.1962H14.4512'
                    stroke='#000929'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M10.0045 16.1962H10.0137'
                    stroke='#000929'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M5.55818 16.1962H5.56744'
                    stroke='#000929'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M14.0433 1V4.29078'
                    stroke='#000929'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M5.96515 1V4.29078'
                    stroke='#000929'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M14.2383 2.57922H5.77096C2.83427 2.57922 1 4.21516 1 7.22225V16.2719C1 19.3263 2.83427 21 5.77096 21H14.229C17.175 21 19 19.3546 19 16.3475V7.22225C19.0092 4.21516 17.1842 2.57922 14.2383 2.57922Z'
                    stroke='#000929'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <span>46</span>
              </h6>
            </div>
          </li>
          <li>
            <h5> Tenants</h5>
            <div>
              <h6 className='d-flex gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z'
                    stroke='#000929'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M16.9704 14.44C18.3404 14.67 19.8504 14.43 20.9104 13.72C22.3204 12.78 22.3204 11.24 20.9104 10.3C19.8404 9.59004 18.3104 9.35003 16.9404 9.59003'
                    stroke='#000929'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M5.97047 7.16C6.03047 7.15 6.10047 7.15 6.16047 7.16C7.54047 7.11 8.64047 5.98 8.64047 4.58C8.64047 3.15 7.49047 2 6.06047 2C4.63047 2 3.48047 3.16 3.48047 4.58C3.49047 5.98 4.59047 7.11 5.97047 7.16Z'
                    stroke='#000929'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M7.00043 14.44C5.63043 14.67 4.12043 14.43 3.06043 13.72C1.65043 12.78 1.65043 11.24 3.06043 10.3C4.13043 9.59004 5.66043 9.35003 7.03043 9.59003'
                    stroke='#000929'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M12.0001 14.63C11.9401 14.62 11.8701 14.62 11.8101 14.63C10.4301 14.58 9.33008 13.45 9.33008 12.05C9.33008 10.62 10.4801 9.46997 11.9101 9.46997C13.3401 9.46997 14.4901 10.63 14.4901 12.05C14.4801 13.45 13.3801 14.59 12.0001 14.63Z'
                    stroke='#000929'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M9.08973 17.78C7.67973 18.72 7.67973 20.26 9.08973 21.2C10.6897 22.27 13.3097 22.27 14.9097 21.2C16.3197 20.26 16.3197 18.72 14.9097 17.78C13.3197 16.72 10.6897 16.72 9.08973 17.78Z'
                    stroke='#000929'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <span>46</span>
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
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M9 17L7 15'
                      stroke='#000929'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14'
                      stroke='#000929'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M22 10H18C15 10 14 9 14 6V2L22 10Z'
                      stroke='#000929'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </g>
                </svg>
                <span>46</span>
              </h6>
            </div>
          </li>
        </ul>

        <section className='d-flex flex-column flex-md-row justify-content-between mt-5'>
          <article className='col-12 col-md-6'>
            <div>
              <h4>Available rooms</h4>
              <p>Total rooms available</p>
              <ProgressBar now={68} className='my-3' />
              <div className='d-flex justify-content-between'>
                <p>2 rooms available of 4 rooms</p>
                <p>50%</p>
              </div>
            </div>
            <div>
              <h4>Description</h4>
              <p>
                Check out that Custom Backyard Entertaining space! 3237sqft, 4
                Bedrooms, 2 Bathrooms house on a Lake Villa street in the Palm
                Harbor neighborhood of Texas.
              </p>
            </div>

            <div>
              <h4>Equipments</h4>
              <p className='view'>Kitchen </p>
            </div>
          </article>
          <aside className='col-12 col-md-5 selectedProp'>
            <div className='tenantCard'>
              <div className='border-bottom d-flex gap-3'>
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
              <div>
                <div>
                  <small> Move-in Date</small>
                  <h5>Dec 1, 2021</h5>
                </div>
                <div>
                  <small> Contact</small>
                  <h5>(+1) 324-5329</h5>
                </div>
                <div>
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

            <div>
              <p>Property occupied this month:</p>
              <h3>83%</h3> <small>60 tenants</small>
              <PiCaretRightBold />
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
}

export default ListingDeetsCard;
