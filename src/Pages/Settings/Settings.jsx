import React, { useState } from 'react';
import { TabsData } from '@/components/AllData';
import TabContents from '@/components/Tabs/TabContents';
import TabTitle from '@/components/Tabs/TabTitle';
import './Settings.scss';

function Settings() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <main className=' settings d-flex flex-row justify-content-between'>
      <article className='d-flex flex-column col-2'>
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

      <article className='tabContents col-9'>
        {TabsData.TabContents.map(({ id, comp }) => (
          <TabContents key={id} id={id} activeTab={activeTab} comps={comp} />
        ))}
      </article>
    </main>
  );
}

export default Settings;
