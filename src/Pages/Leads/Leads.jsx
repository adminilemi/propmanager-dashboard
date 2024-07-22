import { useState } from 'react';
import './Leads.scss';
import TabTitle from '@/components/Tabs/TabTitle';
import TabContents from '@/components/Tabs/TabContents';
import { LeadsData } from '@/components/AllData';

const Leads = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <main className=' container my-5 flex flex-col justify-between'>
      <ul className='flex flex-wrap items-center card  w-fit overflow-hidden'>
        {LeadsData.TabTitle.map((tab) => (
          <div key={tab.id} className='tabTitle'>
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

      <article className='tabContents  w-full '>
        {LeadsData.TabContents.map(({ id, comp }) => (
          <TabContents key={id} id={id} activeTab={activeTab} comps={comp} />
        ))}
      </article>
    </main>
  );
};

export default Leads;
