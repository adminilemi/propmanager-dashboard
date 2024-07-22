import React from 'react';
import { MdCall } from 'react-icons/md';
import { FiPlayCircle } from 'react-icons/fi';
import { BiHomeAlt2 } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';
import './PropDeetsStyle.scss';
import sidebarAdGif from '@/assets/newSmallBanner.gif';
import AddGifBanner from '../AddGifBanner';
import { formatNumInThousands } from '@/utils';

export const PropDeetsAside = ({
  PropertyType,
  MonthlyRent,
  paymentType,
  status,
}) => {
  return (
    <main>
      <ul className={`applyNow card p-3 mb-4 flex flex-col gap-4`}>
        <li>
          <small> {PropertyType} Price </small>
          <h3 className='viewMore'>
            ₦{formatNumInThousands(MonthlyRent)} <span>/{paymentType}</span>{' '}
          </h3>

          <button
            className={` main-btn ${
              status === 'ACTIVE'
                ? '!bg-positive'
                : status === 'INACTIVE'
                ? '#BFBDF7 !text-mainColor'
                : 'bg-[#FCE3E3] !text-negative'
            } w-full capitalize flex gap-2 justify-center items-center my-3`}
          >
            {status === 'ACTIVE'
              ? 'Active'
              : status === 'INACTIVE'
              ? 'Inactive'
              : 'Close'}
          </button>
          {/* <a
            href={`https://wa.me/${WhatsappNumber}`}
            className='main-btn flex gap-2 justify-center items-center my-3'
          >
            {' '}
            <LuClipboardList size={20} />
            <span>Apply Now</span>
          </a> */}
        </li>
      </ul>
      <section className='safetyTips mb-5'>
        <h4 className='text-center my-2'> Rental Tips</h4>
        <ol className='flex flex-col gap-4 list-decimal pl-4'>
          <li>
            Do not make any payment for inspection till you meet with the
            Property Agent.
          </li>
          <li>
            Only pay Rental fee, Sales fee or any upfront payment after you
            verify the Landlord.
          </li>
          <li>
            Only make Payments , deposits or other Sales or Rental fees after
            you have met with the property owners or their representatives and
            have agreed terms. .
          </li>
          <li>
            Ensure you met the Property Agent at an open location and preferably
            in company of someone else.
          </li>
          <li>
            Property4u is not liable for any agreement or financial transactions
            reached by parties involved.
          </li>
          <li>Always insist on a receipt for all payments made.</li>
        </ol>
      </section>
      <section>
        <AddGifBanner images={sidebarAdGif} />
        <AddGifBanner images={sidebarAdGif} />
      </section>
    </main>
  );
};
