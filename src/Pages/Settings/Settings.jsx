import React, { useState } from 'react';
import { TabsData } from '@/components/AllData';
import TabContents from '@/components/Tabs/TabContents';
import TabTitle from '@/components/Tabs/TabTitle';
import './Settings.scss';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <main className=' settings flex flex-col lg:flex-row justify-between'>
      <article className='flex flex-col w-full lg:w-2/12 my-5 lg:my-0'>
        {TabsData.TabTitle.map((tab) => (
          <section key={tab.id} className='tabTitle '>
            <TabTitle
              title={tab.title}
              id={tab.id}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </section>
        ))}
      </article>

      <article className='tabContents  w-full lg:w-9/12'>
        {TabsData.TabContents.map(({ id, comp }) => (
          <TabContents key={id} id={id} activeTab={activeTab} comps={comp} />
        ))}
      </article>
    </main>
  );
};

export default Settings;
