import React, { useState } from 'react';
import { TabsData } from '@/components/AllData';
import TabContents from '@/components/Tabs/TabContents';
import TabTitle from '@/components/Tabs/TabTitle';
import './Settings.scss';

function Settings() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <main className=' settings d-flex flex-column flex-lg-row justify-content-between'>
      <article className='d-flex flex-column col-12 col-lg-2 my-5 my-lg-0'>
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

      <article className='tabContents  col-12 col-lg-9'>
        {TabsData.TabContents.map(({ id, comp }) => (
          <TabContents key={id} id={id} activeTab={activeTab} comps={comp} />
        ))}
      </article>
    </main>
  );
}

export default Settings;
