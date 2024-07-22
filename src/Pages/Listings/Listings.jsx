import './Listings.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ListingData } from '@/components/AllData';
import TabTitle from '@/components/Tabs/TabTitle';
import TabContents from '@/components/Tabs/TabContents';

const Listings = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <main className=' container my-5 flex flex-col justify-between'>
      <h1 className='mb-8'>My Listings</h1>

      <section className='flex flex-wrap items-center gap-y-6 justify-between'>
        <ul className='flex flex-wrap items-center card  w-fit overflow-hidden'>
          {ListingData.TabTitle.map((tab) => (
            <div key={tab.id} className='tabTitle '>
              <TabTitle
                title={tab.title}
                id={tab.id}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                activeClass='leadsActive'
                notActiveClass='leadsNotActive'
              />
            </div>
          ))}
        </ul>

        <div className='w-full md:w-fit'>
          <Link to='/addproperty' className='main-btn'>
            {' '}
            + Add Property
          </Link>
        </div>
      </section>

      <article className='tabContents  w-full '>
        {ListingData.TabContents.map(({ id, comp }) => (
          <TabContents key={id} id={id} activeTab={activeTab} comps={comp} />
        ))}
      </article>
    </main>
  );
};

export default Listings;
